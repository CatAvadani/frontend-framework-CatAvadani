export interface Survey {
  year: number;
  retention: number;
  interest: number;
  usage: number;
  awareness: number;
}

export interface Framework {
  name: string;
  color: string;
  surveys: Survey[];
}

export const frameworks: Framework[] = [
  {
    name: "React",
    color: "#4861ec",
    surveys: [
      {
        year: 2016,
        retention: 93,
        interest: 75,
        usage: 53,
        awareness: 100,
      },
      {
        year: 2017,
        retention: 93,
        interest: 71,
        usage: 62,
        awareness: 100,
      },
      {
        year: 2018,
        retention: 91,
        interest: 68,
        usage: 72,
        awareness: 100,
      },
      {
        year: 2019,
        retention: 89,
        interest: 61,
        usage: 80,
        awareness: 100,
      },
      {
        year: 2020,
        retention: 88,
        interest: 58,
        usage: 80,
        awareness: 100,
      },
      {
        year: 2021,
        retention: 84,
        interest: 48,
        usage: 80,
        awareness: 100,
      },
      {
        year: 2022,
        retention: 83,
        interest: 47,
        usage: 82,
        awareness: 100,
      },
    ],
  },
  {
    name: "Vue",
    color: "#47cfed",
    surveys: [
      {
        year: 2016,
        retention: 87,
        interest: 51,
        usage: 10,
        awareness: 73,
      },
      {
        year: 2017,
        retention: 91,
        interest: 70,
        usage: 22,
        awareness: 95,
      },
      {
        year: 2018,
        retention: 91,
        interest: 70,
        usage: 32,
        awareness: 99,
      },
      {
        year: 2019,
        retention: 87,
        interest: 64,
        usage: 47,
        awareness: 100,
      },
      {
        year: 2020,
        retention: 85,
        interest: 63,
        usage: 49,
        awareness: 99,
      },
      {
        year: 2021,
        retention: 80,
        interest: 50,
        usage: 51,
        awareness: 100,
      },
      {
        year: 2022,
        retention: 77,
        interest: 51,
        usage: 46,
        awareness: 100,
      },
    ],
  },
  {
    name: "Angular",
    color: "#ef4e88",
    surveys: [
      {
        year: 2016,
        retention: 68,
        interest: 50,
        usage: 20,
        awareness: 99,
      },
      {
        year: 2017,
        retention: 66,
        interest: 36,
        usage: 29,
        awareness: 99,
      },
      {
        year: 2018,
        retention: 41,
        interest: 25,
        usage: 58,
        awareness: 100,
      },
      {
        year: 2019,
        retention: 38,
        interest: 23,
        usage: 58,
        awareness: 100,
      },
      {
        year: 2020,
        retention: 42,
        interest: 21,
        usage: 56,
        awareness: 100,
      },
      {
        year: 2021,
        retention: 45,
        interest: 16,
        usage: 54,
        awareness: 100,
      },
      {
        year: 2022,
        retention: 43,
        interest: 20,
        usage: 49,
        awareness: 100,
      },
    ],
  },
  {
    name: "Ember",
    color: "#4bc77e",
    surveys: [
      {
        year: 2016,
        retention: 47,
        interest: 27,
        usage: 14,
        awareness: 96,
      },
      {
        year: 2017,
        retention: 41,
        interest: 24,
        usage: 11,
        awareness: 94,
      },
      {
        year: 2018,
        retention: 45,
        interest: 17,
        usage: 11,
        awareness: 93,
      },
      {
        year: 2019,
        retention: 31,
        interest: 18,
        usage: 12,
        awareness: 91,
      },
      {
        year: 2020,
        retention: 27,
        interest: 16,
        usage: 11,
        awareness: 88,
      },
      {
        year: 2021,
        retention: 21,
        interest: 12,
        usage: 9,
        awareness: 87,
      },
      {
        year: 2022,
        retention: 17,
        interest: 13,
        usage: 8,
        awareness: 77,
      },
    ],
  },
  {
    name: "Preact",
    color: "#fe6a6a",
    surveys: [
      {
        year: 2018,
        retention: 84,
        interest: 43,
        usage: 8,
        awareness: 72,
      },
      {
        year: 2019,
        retention: 78,
        interest: 41,
        usage: 12,
        awareness: 76,
      },
      {
        year: 2020,
        retention: 78,
        interest: 40,
        usage: 14,
        awareness: 77,
      },
      {
        year: 2021,
        retention: 74,
        interest: 32,
        usage: 14,
        awareness: 80,
      },
      {
        year: 2022,
        retention: 74,
        interest: 36,
        usage: 13,
        awareness: 76,
      },
    ],
  },
  {
    name: "Svelte",
    color: "#ffe589",
    surveys: [
      {
        year: 2019,
        retention: 88,
        interest: 67,
        usage: 8,
        awareness: 75,
      },
      {
        year: 2020,
        retention: 89,
        interest: 66,
        usage: 15,
        awareness: 87,
      },
      {
        year: 2021,
        retention: 90,
        interest: 68,
        usage: 20,
        awareness: 94,
      },
      {
        year: 2022,
        retention: 90,
        interest: 70,
        usage: 21,
        awareness: 94,
      },
    ],
  },
  {
    name: "Alpine",
    color: "#3abbb3",
    surveys: [
      {
        year: 2020,
        retention: 82,
        interest: 38,
        usage: 3,
        awareness: 34,
      },
      {
        year: 2021,
        retention: 79,
        interest: 33,
        usage: 6,
        awareness: 48,
      },
      {
        year: 2022,
        retention: 76,
        interest: 33,
        usage: 6,
        awareness: 52,
      },
    ],
  },
  {
    name: "Lit",
    color: "#ec9c23",
    surveys: [
      {
        year: 2020,
        retention: 78,
        interest: 40,
        usage: 5,
        awareness: 27,
      },
      {
        year: 2021,
        retention: 77,
        interest: 40,
        usage: 7,
        awareness: 38,
      },
      {
        year: 2022,
        retention: 77,
        interest: 40,
        usage: 7,
        awareness: 38,
      },
    ],
  },
  {
    name: "Solid",
    color: "#5a9e38",
    surveys: [
      {
        year: 2021,
        retention: 90,
        interest: 56,
        usage: 3,
        awareness: 38,
      },
      {
        year: 2022,
        retention: 91,
        interest: 66,
        usage: 6,
        awareness: 66,
      },
    ],
  },
  {
    name: "Qwik",
    color: "#1fa0f2",
    surveys: [
      {
        year: 2022,
        retention: 85,
        interest: 67,
        usage: 2,
        awareness: 49,
      },
    ],
  },
  {
    name: "Stencil",
    color: "#8d4ca8",
    surveys: [
      {
        year: 2022,
        retention: 63,
        interest: 33,
        usage: 4,
        awareness: 35,
      },
    ],
  },
];
