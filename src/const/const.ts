export const dialogTitlesDevice = {
  NEW_DEVICE: "NEW_DEVICE",
  EXPANDER_3812: "РШ Ю-3812",
  DEVICE_2084: "Ю-2084",
  RADIO_5130: "МК Ю-5130",
};

export const devicesList = {
  radio: ["МК Ю-5130", "ИК Ю-5230", "ИК Ю-5231", "Кл Ю-6270", "АК Ю-5830"],
  rs485: ["РР Ю-3214", "РШ Ю-3811", "РШ-3812"],
};
export const sliderSetting = {
  fullChargeLevel: {
    unit: "",
    min: 0,
    step: 1,
    max: 4,
  },
  minPermissibleCharge: {
    unit: "%",
    min: 0,
    step: 1,
    max: 100,
  },
  volumeLevel: {
    unit: "%",
    min: 0,
    step: 1,
    max: 100,
  },
  freeSpace: {
    unit: "Гб",
    min: 0,
    step: 2,
    max: 500,
  },
  dailyClearing: {
    unit: "",
    min: 0,
    step: 1,
    max: 23,
  },
  videoDuration: {
    unit: "сек",
    min: 5,
    step: 1,
    max: 10,
  },

  pingPeriodDelta: { unit: "мин", min: 1, step: 1, max: 20 },
  userTimeout: { unit: "мин", min: 10, step: 10, max: 60 },
};
