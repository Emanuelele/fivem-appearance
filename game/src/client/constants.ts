export const PED_COMPONENTS_IDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const PED_PROPS_IDS = [0, 1, 2, 6, 7];

export const FACE_FEATURES: Array<keyof PedFaceFeatures> = [
  'noseWidth',
  'nosePeakHigh',
  'nosePeakSize',
  'noseBoneHigh',
  'nosePeakLowering',
  'noseBoneTwist',
  'eyeBrownHigh',
  'eyeBrownForward',
  'cheeksBoneHigh',
  'cheeksBoneWidth',
  'cheeksWidth',
  'eyesOpening',
  'lipsThickness',
  'jawBoneWidth',
  'jawBoneBackSize',
  'chinBoneLowering',
  'chinBoneLenght',
  'chinBoneSize',
  'chinHole',
  'neckThickness',
];

export const HEAD_OVERLAYS = [
  'blemishes',
  'beard',
  'eyebrows',
  'ageing',
  'makeUp',
  'blush',
  'complexion',
  'sunDamage',
  'lipstick',
  'moleAndFreckles',
  'chestHair',
  'bodyBlemishes',
];

export const EYE_COLORS: string[] = [
  'Green',
  'Emerald',
  'Light Blue',
  'Ocean Blue',
  'Light Brown',
  'Dark Brown',
  'Hazel',
  'Dark Gray',
  'Light Gray',
  'Pink',
  'Yellow',
  'Purple',
  'Blackout',
  'Shades of Gray',
  'Tequila Sunrise',
  'Atomic',
  'Warp',
  'ECola',
  'Space Ranger',
  'Ying Yang',
  'Bullseye',
  'Lizard',
  'Dragon',
  'Extra Terrestrial',
  'Goat',
  'Smiley',
  'Possessed',
  'Demon',
  'Infected',
  'Alien',
  'Undead',
  'Zombie',
];

export const HAIR_DECORATIONS: HairDecorations = {
  male: [
    { id: 0, collection: 'mpbeach_overlays', overlay: 'FM_Hair_Fuzz' },
    { id: 1, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_001' },
    { id: 2, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    { id: 3, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_003' },
    { id: 4, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_004' },
    { id: 5, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_005' },
    { id: 6, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_006' },
    { id: 7, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_007' },
    { id: 8, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_008' },
    { id: 9, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_009' },
    { id: 10, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_013' },
    { id: 11, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_002' },
    { id: 12, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_011' },
    { id: 13, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_012' },
    { id: 14, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    { id: 15, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    { id: 16, collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_000' },
    { id: 17, collection: 'multiplayer_overlays', overlay: 'NGBea_M_Hair_001' },
    { id: 18, collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_000' },
    { id: 19, collection: 'multiplayer_overlays', overlay: 'NGBus_M_Hair_001' },
    { id: 20, collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_000' },
    { id: 21, collection: 'multiplayer_overlays', overlay: 'NGHip_M_Hair_001' },
    { id: 22, collection: 'multiplayer_overlays', overlay: 'NGInd_M_Hair_000' },
    { id: 24, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_000' },
    { id: 25, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_001' },
    { id: 26, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_002' },
    { id: 27, collection: 'mplowrider_overlays', overlay: 'LR_M_Hair_003' },
    { id: 28, collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_004' },
    { id: 29, collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_005' },
    { id: 30, collection: 'mplowrider2_overlays', overlay: 'LR_M_Hair_006' },
    { id: 31, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_M' },
    { id: 32, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_M' },
    { id: 33, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_M' },
    { id: 34, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_M' },
    { id: 35, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_M' },
    { id: 36, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_005_M' },
    { id: 72, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_M_000_M' },
    { id: 73, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_M_001_M' },
    { id: 74, collection: 'mpVinewood_overlays', overlay: 'MP_Vinewood_Hair_M_000_M' },
  ],
  female: [
    { id: 0, collection: 'mpbeach_overlays', overlay: 'FM_Hair_Fuzz' },
    { id: 1, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_001' },
    { id: 2, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_002' },
    { id: 3, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    { id: 4, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_004' },
    { id: 5, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_005' },
    { id: 6, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_006' },
    { id: 7, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    { id: 8, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_008' },
    { id: 9, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_009' },
    { id: 10, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_010' },
    { id: 11, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_011' },
    { id: 12, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_012' },
    { id: 13, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_013' },
    { id: 14, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_014' },
    { id: 15, collection: 'multiplayer_overlays', overlay: 'NG_M_Hair_015' },
    { id: 16, collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_000' },
    { id: 17, collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    { id: 18, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_007' },
    { id: 19, collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_000' },
    { id: 20, collection: 'multiplayer_overlays', overlay: 'NGBus_F_Hair_001' },
    { id: 21, collection: 'multiplayer_overlays', overlay: 'NGBea_F_Hair_001' },
    { id: 22, collection: 'multiplayer_overlays', overlay: 'NGHip_F_Hair_000' },
    { id: 23, collection: 'multiplayer_overlays', overlay: 'NGInd_F_Hair_000' },
    { id: 25, collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_000' },
    { id: 26, collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_001' },
    { id: 27, collection: 'mplowrider_overlays', overlay: 'LR_F_Hair_002' },
    { id: 28, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    { id: 29, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_003' },
    { id: 30, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_004' },
    { id: 31, collection: 'mplowrider2_overlays', overlay: 'LR_F_Hair_006' },
    { id: 32, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_000_F' },
    { id: 33, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_001_F' },
    { id: 34, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_F' },
    { id: 35, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_003_F' },
    { id: 36, collection: 'multiplayer_overlays', overlay: 'NG_F_Hair_003' },
    { id: 37, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_006_F' },
    { id: 38, collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_004_F' },
    { id: 76, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_F_000_F' },
    { id: 77, collection: 'mpgunrunning_overlays', overlay: 'MP_Gunrunning_Hair_F_001_F' },
    { id: 78, collection: 'mpVinewood_overlays', overlay: 'MP_Vinewood_Hair_F_000_F' },
  ],
};

export const DEFAULT_CUSTOMIZATION_CONFIG: CustomizationConfig = {
  ped: true,
  headBlend: true,
  faceFeatures: true,
  headOverlays: true,
  components: true,
  props: true,
  tattoos: true,
  allowExit: true,
  automaticFade: true,
};

export const DATA_CLOTHES: DataClothes = {
  head: {
    animations: {
      on: {
        dict: 'mp_masks@standard_car@ds@',
        anim: 'put_on_mask',
        move: 51,
        duration: 600,
      },
      off: {
        dict: 'missheist_agency2ahelmet',
        anim: 'take_off_helmet_stand',
        move: 51,
        duration: 1200,
      },
    },
    props: {
      male: [[1, 0]],
      female: [[1, 0]],
    },
  },
  body: {
    animations: {
      on: {
        dict: 'clothingtie',
        anim: 'try_tie_negative_a',
        move: 51,
        duration: 1200,
      },
      off: {
        dict: 'clothingtie',
        anim: 'try_tie_negative_a',
        move: 51,
        duration: 1200,
      },
    },
    props: {
      male: [
        [11, 252],
        [3, 15],
        [8, 15],
        [10, 0],
        [5, 0],
      ],
      female: [
        [11, 15],
        [8, 14],
        [3, 15],
        [10, 0],
        [5, 0],
      ],
    },
  },
  bottom: {
    animations: {
      on: {
        dict: 're@construction',
        anim: 'out_of_breath',
        move: 51,
        duration: 1300,
      },
      off: {
        dict: 're@construction',
        anim: 'out_of_breath',
        move: 51,
        duration: 1300,
      },
    },
    props: {
      male: [
        [4, 61],
        [6, 34],
      ],
      female: [
        [4, 15],
        [6, 35],
      ],
    },
  },
};

export interface BlacklistConfig {
  enabled: boolean;
  components: {
    [componentId: number]: number[];
  };
  props: {
    [propId: number]: number[];
  };
  hair: number[];
  headOverlays: {
    [overlayKey: string]: number[];
  };
  eyeColor: number[];
  tattoos: {
    [zone: string]: string[];
  };
  peds: string[];
}

export const BLACKLIST_CONFIG: BlacklistConfig = {
  // ========================================
  // ABILITA/DISABILITA BLACKLIST
  // false = modalità normale (tutto disponibile)
  // true = modalità restricted (applica i ban)
  // ========================================
  enabled: false,

  // ========================================
  // COMPONENTI (VESTITI)
  // ========================================
  components: {
    1: [],   // Maschere (Masks)
    3: [],   // Torso/Braccia (Torso)
    4: [],   // Pantaloni (Legs)
    5: [],   // Zaini/Borse (Bags)
    6: [],   // Scarpe (Shoes)
    7: [],   // Accessori Collo (Accessories - scarfs/chains)
    8: [],   // Magliette Interne (Undershirt)
    9: [],   // Giubbotti Antiproiettile (Body Armor)
    10: [],  // Decalcomanie/Badge (Decals)
    11: [],  // Giacche/Top (Jackets/Tops)
  },

  // ========================================
  // PROPS (ACCESSORI)
  // ========================================
  props: {
    0: [],   // Cappelli/Caschi (Hats/Helmets)
    1: [],   // Occhiali (Glasses)
    2: [],   // Orecchini (Ear accessories)
    6: [],   // Orologi (Watches)
    7: [],   // Braccialetti (Bracelets)
  },

  // ========================================
  // CAPELLI
  // ID degli stili di capelli da bannare
  // ========================================
  hair: [],

  // ========================================
  // HEAD OVERLAYS (SOVRAPPOSIZIONI VISO)
  // ========================================
  headOverlays: {
    blemishes: [],          // Imperfezioni Pelle (Skin Blemishes)
    beard: [],              // Barba (Beard)
    eyebrows: [],           // Sopracciglia (Eyebrows)
    ageing: [],             // Rughe/Invecchiamento (Ageing/Wrinkles)
    makeUp: [],             // Trucco (Makeup)
    blush: [],              // Fard (Blush)
    complexion: [],         // Carnagione (Complexion)
    sunDamage: [],          // Danni del Sole (Sun Damage)
    lipstick: [],           // Rossetto (Lipstick)
    moleAndFreckles: [],    // Nei e Lentiggini (Moles & Freckles)
    chestHair: [],          // Peli del Petto (Chest Hair)
    bodyBlemishes: [],      // Imperfezioni Corpo (Body Blemishes)
  },

  // ========================================
  // COLORE OCCHI
  // ID dei colori degli occhi da bannare (0-31)
  // 0-8: Colori realistici
  // 9-31: Colori fantastici/irrealistici
  // ========================================
  eyeColor: [],

  // ========================================
  // TATTOO
  // Usa il NOME del tattoo, non un ID numerico
  // Trova i nomi in tattoos.json
  // Zone disponibili: ZONE_HEAD, ZONE_TORSO, ZONE_LEFT_ARM,
  //                   ZONE_RIGHT_ARM, ZONE_LEFT_LEG, ZONE_RIGHT_LEG
  // ========================================
  tattoos: {},

  // ========================================
  // MODELLI PERSONAGGIO (PED)
  // Usa il NOME del modello, non un ID numerico
  // Esempi comuni:
  // - 'mp_m_freemode_01' (maschio multiplayer)
  // - 'mp_f_freemode_01' (femmina multiplayer)
  // ========================================
  peds: [],
};

export class BlacklistMapper {
  private config: BlacklistConfig;

  constructor(config: BlacklistConfig) {
    this.config = config;
  }

  isEnabled(): boolean {
    return this.config.enabled;
  }

  virtualToReal(value: number, blacklist: number[]): number {
    if (!this.config.enabled || !blacklist || blacklist.length === 0) {
      return value;
    }

    let realValue = value;
    const sortedBlacklist = [...blacklist].sort((a, b) => a - b);

    for (const banned of sortedBlacklist) {
      if (banned <= realValue) {
        realValue++;
      } else {
        break;
      }
    }

    return realValue;
  }

  setEnabled(enabled: boolean): void {
    this.config.enabled = enabled;
  }

  realToVirtual(value: number, blacklist: number[]): number {
    if (!this.config.enabled || !blacklist || blacklist.length === 0) {
      return value;
    }

    const sortedBlacklist = [...blacklist].sort((a, b) => a - b);
    let virtualValue = value;

    for (const banned of sortedBlacklist) {
      if (banned < value) {
        virtualValue--;
      } else {
        break;
      }
    }

    return virtualValue;
  }

  getFilteredMax(originalMax: number, blacklist: number[]): number {
    if (!this.config.enabled || !blacklist || blacklist.length === 0) {
      return originalMax;
    }

    const bannedInRange = blacklist.filter(b => b >= 0 && b <= originalMax).length;
    return originalMax - bannedInRange;
  }

  getComponentBlacklist(componentId: number): number[] {
    return this.config.components[componentId] || [];
  }

  getPropBlacklist(propId: number): number[] {
    return this.config.props[propId] || [];
  }

  getHairBlacklist(): number[] {
    return this.config.hair || [];
  }

  getHeadOverlayBlacklist(overlayKey: string): number[] {
    return this.config.headOverlays[overlayKey] || [];
  }

  getEyeColorBlacklist(): number[] {
    return this.config.eyeColor || [];
  }

  getTattooBlacklist(zone: string): string[] {
    return this.config.tattoos[zone] || [];
  }

  getPedBlacklist(): string[] {
    return this.config.peds || [];
  }

  filterPeds(peds: string[]): string[] {
    if (!this.config.enabled) {
      return peds;
    }

    const blacklist = this.getPedBlacklist();
    return peds.filter(ped => !blacklist.includes(ped));
  }

  filterTattoos(tattoos: any[], zone: string): any[] {
    if (!this.config.enabled) {
      return tattoos;
    }

    const blacklist = this.getTattooBlacklist(zone);
    return tattoos.filter(tattoo => !blacklist.includes(tattoo.name));
  }
}

export const blacklistMapper = new BlacklistMapper(BLACKLIST_CONFIG);