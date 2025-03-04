export const sliderSetting  = {
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
  numberOfFrames: {
    unit: "",
    min: 1,
    step: 1,
    max: 5,
  },
  screenSaver: {
    unit: "мин",
    min: 5,
    step: 5,
    max: 60,
  },
  pingPeriod: {
    unit: "мин",
    min: 1,
    step: 1,
    max: 10,
  },
  pingPeriodDelta: { unit: "мин", min: 1, step: 1, max: 20 },
  userTimeout: { unit: "мин", min: 10, step: 10, max: 60 },
};
