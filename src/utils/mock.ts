import device5130 from "../img/device/5130.png";
import device5830 from "../img/device/5830.png";
import device5230 from "../img/device/5230.png";
import device6270 from "../img/device/6270.png";

export const radioDevice = [
  {
    id: 0,
    name: "МК-5130",
    number: 1,
    zone: [3, null],
    section: [1, 2],
    statusZone: ["green", null],
    stutusDevice: "white",
    image: device5130,
  },
  {
    id: 1,
    name: "АК Ю-5830",
    number: 2,
    zone: [4, 5],
    section: [2, 2],
    statusZone: ["grey", "grey"],
    stutusDevice: "white",
    image: device5830,
  },
  {
    id: 2,
    name: "ИК Ю-5230",
    number: 3,
    zone: [6],
    section: [2],
    statusZone: ["white", null],
    stutusDevice: "orange",
    image: device5230,
  },
  {
    id: 3,
    name: "АК Ю-5830",
    number: 4,
    zone: [7, 8],
    section: [2, 2],
    statusZone: ["grey", "grey"],
    stutusDevice: "white",
    image: device5830,
  },
  {
    id: 4,
    name: "Кл Ю-6270",
    number: 5,
    zone: [],
    section: [3],
    statusZone: ["white"],
    stutusDevice: "red",
    image: device6270,
  },
];
