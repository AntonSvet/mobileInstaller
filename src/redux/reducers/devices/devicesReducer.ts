import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDevices } from "./devices.types";

export const initialState: IDevices = {
  radio: [
    {
      id: 0,
      name: "МК-5130",
      number: 1,
      zone: [3, null],
      section: [1, 2],
      statusZone: ["green", null],
      stutusDevice: "white",
      image: "",
    },
  ],
  rs485: [
    {
      id: 3,
      name: "АК Ю-5830",
      number: 4,
      zone: [7, 8],
      section: [2, 2],
      statusZone: ["grey", "grey"],
      stutusDevice: "white",
      image: "",
    },
  ],
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    getCamerasStatuses(state, action: PayloadAction<IDevices>) {
      return { ...state, ...action.payload };
    },
    /* addRadioDevice(state, action: PayloadAction<IDevices>) {
      return { ...state,  radio: [...state.radio, action.payload };
    }, */
  },
});

export const { actions: devicesActions } = devicesSlice;
export const { reducer: devicesReducer } = devicesSlice;
