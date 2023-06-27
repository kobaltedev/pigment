export type IconCollectionNames =
  | "material-symbols"
  | "ic"
  | "mdi"
  | "ph"
  | "solar"
  | "tabler"
  | "ri"
  | "bi"
  | "carbon"
  | "iconamoon"
  | "ion"
  | "uil"
  | "teenyicons"
  | "mingcute"
  | "clarity"
  | "iconoir"
  | "majesticons"
  | "zondicons"
  | "ant-design"
  | "bx"
  | "bxs"
  | "gg"
  | "octicon"
  | "cil"
  | "lucide"
  | "basil"
  | "pixelarticons"
  | "system-uicons"
  | "ci"
  | "akar-icons"
  | "memory"
  | "typcn"
  | "radix-icons"
  | "ep"
  | "circum"
  | "mdi-light"
  | "fe"
  | "eos-icons"
  | "charm"
  | "prime"
  | "humbleicons"
  | "uiw"
  | "uim"
  | "uit"
  | "uis"
  | "maki"
  | "gridicons"
  | "mi"
  | "quill"
  | "gala"
  | "fluent"
  | "icon-park-outline"
  | "icon-park-solid"
  | "icon-park-twotone"
  | "icon-park"
  | "vscode-icons"
  | "jam"
  | "heroicons"
  | "codicon"
  | "pajamas"
  | "pepicons-pop"
  | "pepicons-print"
  | "pepicons-pencil"
  | "bytesize"
  | "ei"
  | "streamline"
  | "guidance"
  | "fa6-solid"
  | "fa6-regular"
  | "ooui"
  | "nimbus"
  | "formkit"
  | "line-md"
  | "svg-spinners"
  | "openmoji"
  | "twemoji"
  | "noto"
  | "fluent-emoji"
  | "fluent-emoji-flat"
  | "fluent-emoji-high-contrast"
  | "noto-v1"
  | "emojione"
  | "emojione-monotone"
  | "emojione-v1"
  | "fxemoji"
  | "streamline-emojis"
  | "bxl"
  | "logos"
  | "simple-icons"
  | "cib"
  | "fa6-brands"
  | "nonicons"
  | "arcticons"
  | "file-icons"
  | "devicon"
  | "devicon-plain"
  | "skill-icons"
  | "brandico"
  | "entypo-social"
  | "cryptocurrency"
  | "cryptocurrency-color"
  | "flag"
  | "circle-flags"
  | "flagpack"
  | "cif"
  | "gis"
  | "map"
  | "geo"
  | "game-icons"
  | "fad"
  | "academicons"
  | "wi"
  | "healthicons"
  | "medical-icon"
  | "covid"
  | "la"
  | "eva"
  | "dashicons"
  | "flat-color-icons"
  | "entypo"
  | "foundation"
  | "raphael"
  | "icons8"
  | "iwwa"
  | "heroicons-outline"
  | "heroicons-solid"
  | "fa-solid"
  | "fa-regular"
  | "fa-brands"
  | "fa"
  | "fluent-mdl2"
  | "fontisto"
  | "icomoon-free"
  | "ps"
  | "subway"
  | "oi"
  | "wpf"
  | "simple-line-icons"
  | "et"
  | "el"
  | "vaadin"
  | "grommet-icons"
  | "whh"
  | "si-glyph"
  | "zmdi"
  | "ls"
  | "bpmn"
  | "flat-ui"
  | "vs"
  | "topcoat"
  | "il"
  | "websymbol"
  | "fontelico"
  | "feather"
  | "mono-icons"
  | "pepicons";

export type FlattenObjectKeys<T extends Record<string, unknown>, Key = keyof T> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export const themeTokensShapeValue = {
  colors: {
    content: {
      DEFAULT: "",
      subtle: "",
      subtler: "",
      subtlest: "",
      disabled: "",
      link: {
        DEFAULT: "",
        hover: "",
        active: "",
      },

      primary: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
      discovery: "",

      onPrimary: "",
      onSuccess: "",
      onInfo: "",
      onWarning: "",
      onDanger: "",
      onDiscovery: "",

      onPrimarySubtle: "",
      onSuccessSubtle: "",
      onInfoSubtle: "",
      onWarningSubtle: "",
      onDangerSubtle: "",
      onDiscoverySubtle: "",
    },

    icon: {
      DEFAULT: "",
      subtle: "",
      subtler: "",
      subtlest: "",
      disabled: "",

      primary: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
      discovery: "",

      onPrimary: "",
      onSuccess: "",
      onInfo: "",
      onWarning: "",
      onDanger: "",
      onDiscovery: "",

      onPrimarySubtle: "",
      onSuccessSubtle: "",
      onInfoSubtle: "",
      onWarningSubtle: "",
      onDangerSubtle: "",
      onDiscoverySubtle: "",
    },

    surface: {
      DEFAULT: "",
      body: "",
      raised: "",
      overlay: "",
      sunken: "",
      disabled: "",
      tooltip: "",

      neutral: {
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },

      primary: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
      success: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
      info: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
      warning: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
      danger: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
      discovery: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
    },

    line: {
      DEFAULT: "",
      subtle: "",
      disabled: "",
      primary: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
      discovery: "",
    },

    ring: "",
  },
};

export type ColorSchemeTokens = Pick<typeof themeTokensShapeValue, "colors">;

export interface ThemeTokens {
  /** Light mode specific tokens. */
  light: ColorSchemeTokens;

  /** Dark mode specific tokens. */
  dark: DeepPartial<ColorSchemeTokens>;
}

export type TokenKey = FlattenObjectKeys<ColorSchemeTokens>;

/** A function to get the css variable of a token. */
export type VarsFn = (token: TokenKey) => string;

export interface Theme {
  /** The name of the theme. */
  name: string;

  /** The design tokens of the theme. */
  tokens: ThemeTokens;
}

export interface PigmentOptions {
  /** The prefix to use in the generated css variables. */
  cssVarPrefix?: string;

  /** An array of icon collection names to use from [Iconify](https://iconify.design/). */
  iconCollections?: "all" | IconCollectionNames[];

  /** The themes available in the application. */
  themes?: Array<Theme>;
}
