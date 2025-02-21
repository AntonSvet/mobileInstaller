interface ISubvalue {
  value: string;
  index: number;
}

interface IConfigItem {
  key: string;
  subvalues: ISubvalue[];
}

interface IResult {
  config: IConfigItem[];
}

interface IServerConfig {
  result: IResult;
}

export const serverConfig: IServerConfig = {
  result: {
    config: [
      {
        key: "lw187",
        subvalues: [
          {
            value: "0",
            index: 1,
          },
          {
            value: "0",
            index: 2,
          },
          {
            value: "0,0",
            index: 3,
          },
        ],
      },
      {
        key: "zr25",
        subvalues: [
          { value: "0", index: 1 },
          { value: "0", index: 2 },
        ],
      },
      {
        key: "zr26",
        subvalues: [{ value: "0", index: 1 }],
      },
    ],
  },
};
 