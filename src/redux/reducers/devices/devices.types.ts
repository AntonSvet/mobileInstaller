export interface IDevices {
  radio: IRadioDevices[];
  rs485: Irs485Devices[];
}

export interface IRadioDevices {
  id: number;
  name: string;
  fullName: string;
  number: number;
  zone: (number | null)[];
  section: (number | null)[];
  statusZone: (string | null)[];
  stutusDevice: string;
  image: string;
  type?: string;
}
export interface Irs485Devices {
  id: number;
  name: string;
  fullName: string;
  number: number;
  zone: (number | null)[];
  section: number[];
  statusZone: (string | null)[];
  stutusDevice: string;
  image: string;
  type?: string;
}