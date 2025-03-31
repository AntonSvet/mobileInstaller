import device5130 from "../img/device/5130.png";
import device5830 from "../img/device/5830.png";
import device5230 from "../img/device/5230.png";
import device6270 from "../img/device/6270.png";
import device3812 from "../img/device/3812.png";
import { IRadioDevices } from "../redux/reducers/devices/devices.types";

export const radioDevice: IRadioDevices[] = [
  {
    id: 0,
    name: "МК Ю-5130",
    fullName: "МАГНИТО-КОНТАКТНЫЙ ИЗВЕЩАТЕЛЬ",//тестируем капсом
    number: 1,
    zone: [3, null],
    section: [1, 2],
    delay: [90, 90],
    statusZone: ["green", null],
    stutusDevice: "white",
    image: device5130,
  },
  {
    id: 1,
    name: "АК Ю-5830",
    fullName: "Аккустический извещатель",
    number: 2,
    zone: [4, 5],
    delay: [90, 90],
    section: [2, 2],
    statusZone: ["grey", "grey"],
    stutusDevice: "white",
    image: device5830,
  },
  {
    id: 2,
    name: "ИК Ю-5230",
    fullName: "Объёмный извещатель",
    number: 3,
    zone: [6],
    delay: [90, 90],
    section: [2],
    statusZone: ["white", null],
    stutusDevice: "orange",
    image: device5230,
  },
  {
    id: 3,
    name: "АК Ю-5830",
    fullName: "Аккустический  извещатель",
    number: 4,
    zone: [7, 8],
    delay: [90, 90],
    section: [2, 2],
    statusZone: ["grey", "grey"],
    stutusDevice: "white",
    image: device5830,
  },
  {
    id: 4,
    name: "Кл Ю-6270",
    fullName: "Радио клавиатура",
    number: 5,
    zone: [],
    delay: [90, 90],
    section: [3],
    statusZone: ["white"],
    stutusDevice: "red",
    image: device6270,
  },
  {
    id: 5,
    name: "РШ Ю-3812",
    fullName: "Расширитель шлейфов ",
    number: 1,
    zone: [9, 10, 11, 12, 13, 14, 15, 16],
    delay: [90, 90],
    section: [1, 2, 3, 4, 5, 6, 7, 8],
    statusZone: ["green", "red", "green", "green", "green", "red"],
    stutusDevice: "orange",
    image: device3812,
    type: "rs",
  },
  {
    id: 6,
    name: "РШ Ю-3811",
    fullName: "Расширитель шлейфов",
    number: 2,
    zone: [17, 18, 19, 20, 21, 22, 23, 24],
    delay: [90, 90],
    section: [1, 2, 3, 4, 5, 6, 7, 8],
    statusZone: ["green", "red", "green", "green", "green", "red"],
    stutusDevice: "orange",
    image: device3812,
    type: "rs",
  },
  {
    id: 6,
    name: "РР Ю-3214",
    fullName: "Расширитель шлейфов",
    number: 2,
    zone: [17, 18, 19, 20, 21, 22, 23, 24],
    delay: [90, 90],
    section: [1, 2, 3, 4, 5, 6, 7, 8],
    statusZone: ["green", "red", "green", "green", "green", "red"],
    stutusDevice: "orange",
    image: device3812,
    type: "rs",
  },
];
