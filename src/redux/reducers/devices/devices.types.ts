export interface IDevices {
  radio: IRadioDevices[];
  rs485: Irs485Devices[];
}

export interface IRadioDevices {
  id: number;
  name: string;
  number: number;
  zone: (number | null)[];
  section: [1, 2];
  statusZone: (string | null)[];
  stutusDevice: string;
  image: string;
}
export interface Irs485Devices {
  id: number;
  name: string;
  number: number;
  zone: (number | null)[];
  section: number[];
  statusZone: (string | null)[];
  stutusDevice: string;
  image: string;
}