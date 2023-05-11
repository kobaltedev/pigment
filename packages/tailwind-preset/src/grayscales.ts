/*!
 * Portions of this file are based on code from radix-colors.
 * MIT Licensed, Copyright (c) 2022 WorkOS.
 *
 * Credits to the Radix Colors team:
 * https://www.radix-ui.com/docs/colors/palette-composition/the-scales#grays
 */

export const GRAYSCALE_NAMES = ["gray", "mauve", "slate", "sage", "olive", "sand"] as const;
export const GRAYSCALE_DARK_NAMES = [
  "grayDark",
  "mauveDark",
  "slateDark",
  "sageDark",
  "oliveDark",
  "sandDark",
] as const;

export type Grayscale = (typeof GRAYSCALE_NAMES)[number];
export type GrayscaleDark = (typeof GRAYSCALE_DARK_NAMES)[number];

export type GrayscaleStep =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export const grayscales: Record<Grayscale | GrayscaleDark, Record<GrayscaleStep, string>> = {
  // @radix/colors - gray
  gray: {
    1: "#fcfcfc",
    2: "#f8f8f8",
    3: "#f3f3f3",
    4: "#ededed",
    5: "#e8e8e8",
    6: "#e2e2e2",
    7: "#dbdbdb",
    8: "#c7c7c7",
    9: "#8f8f8f",
    10: "#858585",
    11: "#6f6f6f",
    12: "#171717",
  },

  // @radix/colors - mauve
  mauve: {
    1: "#fdfcfd",
    2: "#f9f8f9",
    3: "#f4f2f4",
    4: "#eeedef",
    5: "#e9e8ea",
    6: "#e4e2e4",
    7: "#dcdbdd",
    8: "#c8c7cb",
    9: "#908e96",
    10: "#86848d",
    11: "#6f6e77",
    12: "#1a1523",
  },

  // @radix/colors - slate
  slate: {
    1: "#fbfcfd",
    2: "#f8f9fa",
    3: "#f1f3f5",
    4: "#eceef0",
    5: "#e6e8eb",
    6: "#dfe3e6",
    7: "#d7dbdf",
    8: "#c1c8cd",
    9: "#889096",
    10: "#7e868c",
    11: "#687076",
    12: "#11181c",
  },

  // @radix/colors - sage
  sage: {
    1: "#fbfdfc",
    2: "#f8faf9",
    3: "#f1f4f3",
    4: "#ecefed",
    5: "#e6e9e8",
    6: "#dfe4e2",
    7: "#d7dcda",
    8: "#c2c9c6",
    9: "#8a918e",
    10: "#808784",
    11: "#6a716e",
    12: "#111c18",
  },

  // @radix/colors - olive
  olive: {
    1: "#fcfdfc",
    2: "#f8faf8",
    3: "#f2f4f2",
    4: "#ecefec",
    5: "#e6e9e6",
    6: "#e0e4e0",
    7: "#d8dcd8",
    8: "#c3c8c2",
    9: "#8b918a",
    10: "#818780",
    11: "#6b716a",
    12: "#141e12",
  },

  // @radix/colors - sand
  sand: {
    1: "#fdfdfc",
    2: "#f9f9f8",
    3: "#f3f3f2",
    4: "#eeeeec",
    5: "#e9e9e6",
    6: "#e3e3e0",
    7: "#dbdbd7",
    8: "#c8c7c1",
    9: "#90908c",
    10: "#868682",
    11: "#706f6c",
    12: "#1b1b18",
  },

  // @radix/colors - grayDark
  grayDark: {
    1: "#161616",
    2: "#1c1c1c",
    3: "#232323",
    4: "#282828",
    5: "#2e2e2e",
    6: "#343434",
    7: "#3e3e3e",
    8: "#505050",
    9: "#707070",
    10: "#7e7e7e",
    11: "#a0a0a0",
    12: "#ededed",
  },

  // @radix/colors - mauveDark
  mauveDark: {
    1: "#161618",
    2: "#1c1c1f",
    3: "#232326",
    4: "#28282c",
    5: "#2e2e32",
    6: "#34343a",
    7: "#3e3e44",
    8: "#504f57",
    9: "#706f78",
    10: "#7e7d86",
    11: "#a09fa6",
    12: "#ededef",
  },

  // @radix/colors - slateDark
  slateDark: {
    1: "#151718",
    2: "#1a1d1e",
    3: "#202425",
    4: "#26292b",
    5: "#2b2f31",
    6: "#313538",
    7: "#3a3f42",
    8: "#4c5155",
    9: "#697177",
    10: "#787f85",
    11: "#9ba1a6",
    12: "#ecedee",
  },

  // @radix/colors - sageDark
  sageDark: {
    1: "#141716",
    2: "#191d1b",
    3: "#1f2421",
    4: "#252a27",
    5: "#2a2f2c",
    6: "#303633",
    7: "#393f3c",
    8: "#4a524e",
    9: "#66736d",
    10: "#75817b",
    11: "#99a29e",
    12: "#eceeed",
  },

  // @radix/colors - oliveDark
  oliveDark: {
    1: "#151715",
    2: "#1a1d19",
    3: "#20241f",
    4: "#262925",
    5: "#2b2f2a",
    6: "#313530",
    7: "#3b3f3a",
    8: "#4c514b",
    9: "#687366",
    10: "#778175",
    11: "#9aa299",
    12: "#eceeec",
  },

  // @radix/colors - sandDark
  sandDark: {
    1: "#161615",
    2: "#1c1c1a",
    3: "#232320",
    4: "#282826",
    5: "#2e2e2b",
    6: "#353431",
    7: "#3e3e3a",
    8: "#51504b",
    9: "#717069",
    10: "#7f7e77",
    11: "#a1a09a",
    12: "#ededec",
  },
};
