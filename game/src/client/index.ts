import { Delay, isPedFreemodeModel, getPedStats, setPedStats } from './utils';

import {
  FACE_FEATURES,
  HEAD_OVERLAYS,
  HAIR_DECORATIONS,
  PED_COMPONENTS_IDS,
  PED_PROPS_IDS,
  EYE_COLORS,
  blacklistMapper,
} from './constants';

import Customization, { getPedTattoos, setPedTattoos } from './modules/customization';

const exp = (global as any).exports;

const GET_PED_HEAD_BLEND_DATA = '0x2746bd9d88c5c5d0';
const AUTOMATIC_FADE = Boolean(Number(GetConvar('fivem-appearance:automaticFade', '1')));

export const totalTattoos: TattooList = JSON.parse(
  LoadResourceFile(GetCurrentResourceName(), 'tattoos.json'),
);

export const pedModels: string[] = JSON.parse(
  LoadResourceFile(GetCurrentResourceName(), 'peds.json'),
);

const pedModelsByHash = pedModels.reduce((object, model) => {
  return { ...object, [GetHashKey(model)]: model };
}, {});

function getPedModel(ped: number): string {
  return pedModelsByHash[GetEntityModel(ped)];
}

function getPedComponents(ped: number): PedComponent[] {
  const components = [];

  PED_COMPONENTS_IDS.forEach(componentId => {
    const realDrawable = GetPedDrawableVariation(ped, componentId);
    const blacklist = blacklistMapper.getComponentBlacklist(componentId);
    const virtualDrawable = blacklistMapper.realToVirtual(realDrawable, blacklist);

    components.push({
      component_id: componentId,
      drawable: virtualDrawable,
      texture: GetPedTextureVariation(ped, componentId),
    });
  });

  return components;
}

function getPedProps(ped: number): PedProp[] {
  const props = [];

  PED_PROPS_IDS.forEach(propId => {
    const realDrawable = GetPedPropIndex(ped, propId);
    const blacklist = blacklistMapper.getPropBlacklist(propId);
    const virtualDrawable = realDrawable === -1 ? -1 : blacklistMapper.realToVirtual(realDrawable, blacklist);

    props.push({
      prop_id: propId,
      drawable: virtualDrawable,
      texture: GetPedPropTextureIndex(ped, propId),
    });
  });

  return props;
}

function getPedHeadBlend(ped: number): PedHeadBlend {
  const buffer = new ArrayBuffer(80);

  global.Citizen.invokeNative(GET_PED_HEAD_BLEND_DATA, ped, new Uint32Array(buffer));

  const { 0: shapeFirst, 2: shapeSecond, 6: skinFirst, 8: skinSecond } = new Uint32Array(buffer);

  const { 0: shapeMix, 2: skinMix } = new Float32Array(buffer, 48);

  const normalizedShapeMix = parseFloat(shapeMix.toFixed(1));
  const normalizedSkinMix = parseFloat(skinMix.toFixed(1));

  return {
    shapeFirst,
    shapeSecond,
    skinFirst,
    skinSecond,
    shapeMix: normalizedShapeMix,
    skinMix: normalizedSkinMix,
  };
}

function getPedFaceFeatures(ped: number): PedFaceFeatures {
  const faceFeatures = FACE_FEATURES.reduce((object, feature, index) => {
    const normalizedValue = parseFloat(GetPedFaceFeature(ped, index).toFixed(1));

    return { ...object, [feature]: normalizedValue };
  }, {} as PedFaceFeatures);

  return faceFeatures;
}

function getPedHeadOverlays(ped: number): PedHeadOverlays {
  const headOverlays = HEAD_OVERLAYS.reduce((object, overlay, index) => {
    const [, value, , firstColor, , opacity] = GetPedHeadOverlayData(ped, index);

    const hasOverlay = value !== 255;

    const realValue = hasOverlay ? value : 0;
    const blacklist = blacklistMapper.getHeadOverlayBlacklist(overlay);
    const virtualValue = blacklistMapper.realToVirtual(realValue, blacklist);
    const normalizedOpacity = hasOverlay ? parseFloat(opacity.toFixed(1)) : 0;

    return {
      ...object,
      [overlay]: { style: virtualValue, opacity: normalizedOpacity, color: firstColor },
    };
  }, {} as PedHeadOverlays);

  return headOverlays;
}

function getPedHair(ped: number): PedHair {
  const realStyle = GetPedDrawableVariation(ped, 2);
  const blacklist = blacklistMapper.getHairBlacklist();
  const virtualStyle = blacklistMapper.realToVirtual(realStyle, blacklist);

  return {
    style: virtualStyle,
    color: GetPedHairColor(ped),
    highlight: GetPedHairHighlightColor(ped),
  };
}

function getPedHairDecorationType(ped: number): 'male' | 'female' {
  const pedModel = GetEntityModel(ped);

  let hairDecorationType: 'male' | 'female';

  if (pedModel === GetHashKey('mp_m_freemode_01')) {
    hairDecorationType = 'male';
  } else if (pedModel === GetHashKey('mp_f_freemode_01')) {
    hairDecorationType = 'female';
  }

  return hairDecorationType;
}

function getPedHairDecoration(ped: number, hairStyle: number): HairDecoration {
  const hairDecorationType = getPedHairDecorationType(ped);

  if (!hairDecorationType) return;

  const hairDecoration = HAIR_DECORATIONS[hairDecorationType].find(
    decoration => decoration.id === hairStyle,
  );

  return hairDecoration;
}

export function getPedAppearance(ped: number): PedAppearance {
  const realEyeColor = GetPedEyeColor(ped);
  const blacklist = blacklistMapper.getEyeColorBlacklist();
  const virtualEyeColor = blacklistMapper.realToVirtual(realEyeColor, blacklist);

  return {
    model: getPedModel(ped) || 'mp_m_freemode_01',
    headBlend: getPedHeadBlend(ped),
    faceFeatures: getPedFaceFeatures(ped),
    headOverlays: getPedHeadOverlays(ped),
    components: getPedComponents(ped),
    props: getPedProps(ped),
    hair: getPedHair(ped),
    eyeColor: virtualEyeColor < EYE_COLORS.length ? virtualEyeColor : 0,
    tattoos: getPedTattoos(),
  };
}

export async function setPlayerModel(model: string): Promise<void> {
  if (!model) return;

  if (!IsModelInCdimage(model)) return;

  RequestModel(model);

  while (!HasModelLoaded(model)) {
    await Delay(0);
  }

  const [currentHealth, currentArmour] = getPedStats();

  SetPlayerModel(PlayerId(), model);
  SetModelAsNoLongerNeeded(model);

  const playerPed = PlayerPedId();

  if (isPedFreemodeModel(playerPed)) {
    SetPedDefaultComponentVariation(playerPed);
    SetPedHeadBlendData(playerPed, 0, 0, 0, 0, 0, 0, 0, 0, 0, false);
  }

  setPedStats(currentHealth, currentArmour);
}

export function setPedHeadBlend(ped: number, headBlend: PedHeadBlend): void {
  if (!headBlend) return;

  const { shapeFirst, shapeSecond, shapeMix, skinFirst, skinSecond, skinMix } = headBlend;

  if (isPedFreemodeModel(ped)) {
    SetPedHeadBlendData(
      ped,
      shapeFirst,
      shapeSecond,
      0,
      skinFirst,
      skinSecond,
      0,
      shapeMix,
      skinMix,
      0,
      false,
    );
  }
}

export function setPedFaceFeatures(ped: number, faceFeatures: PedFaceFeatures): void {
  if (!faceFeatures) return;

  FACE_FEATURES.forEach((key, index) => {
    const faceFeature = faceFeatures[key];

    SetPedFaceFeature(ped, index, faceFeature);
  });
}

export function setPedHeadOverlays(ped: number, headOverlays: PedHeadOverlays): void {
  if (!headOverlays) return;

  HEAD_OVERLAYS.forEach((key, index) => {
    const headOverlay: PedHeadOverlayValue = headOverlays[key];
    const blacklist = blacklistMapper.getHeadOverlayBlacklist(key);
    const realStyle = blacklistMapper.virtualToReal(headOverlay.style, blacklist);

    SetPedHeadOverlay(ped, index, realStyle, headOverlay.opacity);

    if (headOverlay.color || headOverlay.color === 0) {
      let colorType = 1;

      const isMakeupColor = {
        blush: true,
        lipstick: true,
        makeUp: true,
      };

      if (isMakeupColor[key]) {
        colorType = 2;
      }
      SetPedHeadOverlayColor(ped, index, colorType, headOverlay.color, headOverlay.secondColor);
    }
  });
}

export function setPedHair(ped: number, hair: PedHair): void {
  if (!hair) return;

  const { style, color, highlight } = hair;
  const blacklist = blacklistMapper.getHairBlacklist();
  const realStyle = blacklistMapper.virtualToReal(style, blacklist);

  SetPedComponentVariation(ped, 2, realStyle, 0, 0);

  SetPedHairColor(ped, color, highlight);

  if (AUTOMATIC_FADE) {
    const hairDecoration = getPedHairDecoration(ped, realStyle);

    ClearPedDecorations(ped);

    if (hairDecoration) {
      const { collection, overlay } = hairDecoration;

      AddPedDecorationFromHashes(ped, GetHashKey(collection), GetHashKey(overlay));
    }
  }
}

export function setPedEyeColor(ped: number, eyeColor: number): void {
  if (!eyeColor && eyeColor !== 0) return;

  const blacklist = blacklistMapper.getEyeColorBlacklist();
  const realEyeColor = blacklistMapper.virtualToReal(eyeColor, blacklist);

  SetPedEyeColor(ped, realEyeColor);
}

export function setPedComponent(ped: number, component: PedComponent): void {
  if (!component) return;

  const { component_id, drawable, texture } = component;

  const excludedFromFreemodeModels = {
    0: true,
    2: true,
  };

  if (excludedFromFreemodeModels[component_id] && isPedFreemodeModel(ped)) {
    return;
  }

  const blacklist = blacklistMapper.getComponentBlacklist(component_id);
  const realDrawable = blacklistMapper.virtualToReal(drawable, blacklist);

  SetPedComponentVariation(ped, component_id, realDrawable, texture, 0);
}

export function setPedComponents(ped: number, components: PedComponent[]): void {
  if (!components) return;

  components.forEach(component => setPedComponent(ped, component));
}

export function setPedProp(ped: number, prop: PedProp): void {
  if (!prop) return;

  const { prop_id, drawable, texture } = prop;

  if (drawable === -1) {
    ClearPedProp(ped, prop_id);
  } else {
    const blacklist = blacklistMapper.getPropBlacklist(prop_id);
    const realDrawable = blacklistMapper.virtualToReal(drawable, blacklist);

    SetPedPropIndex(ped, prop_id, realDrawable, texture, false);
  }
}

export function setPedProps(ped: number, props: PedProp[]): void {
  if (!props) return;

  props.forEach(prop => setPedProp(ped, prop));
}

export async function setPlayerAppearance(appearance: PedAppearance): Promise<void> {
  if (!appearance) return;

  const {
    model,
    components,
    props,
    headBlend,
    faceFeatures,
    headOverlays,
    hair,
    eyeColor,
    tattoos,
  } = appearance;

  await setPlayerModel(model);

  const playerPed = PlayerPedId();

  setPedComponents(playerPed, components);

  setPedProps(playerPed, props);

  if (headBlend) {
    setPedHeadBlend(playerPed, headBlend);
  }

  if (faceFeatures) {
    setPedFaceFeatures(playerPed, faceFeatures);
  }

  if (headOverlays) {
    setPedHeadOverlays(playerPed, headOverlays);
  }

  if (hair) {
    setPedHair(playerPed, hair);
  }

  if (eyeColor || eyeColor === 0) {
    setPedEyeColor(playerPed, eyeColor);
  }

  if (tattoos) {
    setPedTattoos(playerPed, tattoos);
  }
}

function setPedAppearance(ped: number, appearance: Omit<PedAppearance, 'model'>): void {
  if (!appearance) return;

  const { components, props, headBlend, faceFeatures, headOverlays, hair, eyeColor, tattoos } =
    appearance;

  setPedComponents(ped, components);

  setPedProps(ped, props);

  if (headBlend) {
    setPedHeadBlend(ped, headBlend);
  }

  if (faceFeatures) {
    setPedFaceFeatures(ped, faceFeatures);
  }

  if (headOverlays) {
    setPedHeadOverlays(ped, headOverlays);
  }

  if (hair) {
    setPedHair(ped, hair);
  }

  if (eyeColor || eyeColor === 0) {
    setPedEyeColor(ped, eyeColor);
  }

  if (tattoos) {
    setPedTattoos(ped, tattoos);
  }
}

(() => {
  Customization.loadModule();

  exp('getPedModel', getPedModel);
  exp('getPedComponents', getPedComponents);
  exp('getPedProps', getPedProps);
  exp('getPedHeadBlend', getPedHeadBlend);
  exp('getPedFaceFeatures', getPedFaceFeatures);
  exp('getPedHeadOverlays', getPedHeadOverlays);
  exp('getPedHair', getPedHair);
  exp('getPedTattoos', getPedTattoos);
  exp('getPedAppearance', getPedAppearance);

  exp('setPlayerModel', setPlayerModel);
  exp('setPedHeadBlend', setPedHeadBlend);
  exp('setPedFaceFeatures', setPedFaceFeatures);
  exp('setPedHeadOverlays', setPedHeadOverlays);
  exp('setPedHair', setPedHair);
  exp('setPedEyeColor', setPedEyeColor);
  exp('setPedComponent', setPedComponent);
  exp('setPedComponents', setPedComponents);
  exp('setPedProp', setPedProp);
  exp('setPedProps', setPedProps);
  exp('setPedTattoos', setPedTattoos);
  exp('setPlayerAppearance', setPlayerAppearance);
  exp('setPedAppearance', setPedAppearance);
})();