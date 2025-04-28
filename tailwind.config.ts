import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      xsm: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lgWide: "1150px",
      xl: "1280px",
      lgPlus: "1441px",
      xxl: "1536px",
    },
    extend: {
      fontSize: {
        largeText: ["4rem", "5rem"], // 64px, 80px,
        largeText2: ["3.4375rem", "4.0625rem"], //55px, 65px
        h1: ["3rem", "3.5rem"], // 56px, 64px
        h2: ["38px", "2.875rem"], // 48px, 56px --- used
        h3: ["2rem", "2.5rem"], // 32px, 40px
        h4: ["1.3rem", "1.75rem"], // 20.5px, 32px
        h5: ["1.75rem", "2.25rem"], // 28px, 36px
        h6: ["1.625rem", "2.375rem"], //26px, 38px --- used
        p1: ["1.375rem", "2.1875rem"], // 22px, 35px --- used
        p2: ["1rem", "1.5rem"], // 16px, 24px ---
        p4: ["1.125rem", "1.5625rem"], //18px, 25px
        p5: [".875rem", "1.25rem"], //14px, 20px
        bannerText: ["1.5rem", "2rem"], // 20px, 32px
      },
      colors: {
        white: "#FFFFFF",
        // offWhite: "#FFFFFA",
        // lightGray: "#EFEFEF",
        // gray: "#D9D9D9",
        // mediumGray: "#CCC9C9",
        // darkGray: "#7D7D7D",
        // charcoal: "#39363C",
        darkCharcoal: "#282828",
        black: "#000000",
        // lightBeige: "#F4DBC0",
        // beige: "#E3C3A5",
        // sand: "#D3B496",
        // tan: "#D4A983",
        // lightYellow: "#F0D69C",
        // mustard: "#F6C151",
        // lightBlue: "#E3F2F9",
        // skyBlue: "#97D3F3",
        // softBlue: "#93C5C3",
        // mediumBlue: "#9AB4C7",
        // slateBlue: "#4B3FAA",
        // royalBlue: "#5447B6",
        // navy: "#244461",
        // deepNavy: "#2E5671",
        // darkBlue: "#19283D",
        // lightTeal: "#88C3CC",
        // teal: "#36ABAD",
        // forestGreen: "#32936F",
        // emeraldGreen: "#06D127",
        // lightPink: "#EDAFA8",
        // softPink: "#F57E77",
        // magenta: "#D000D1",
        // lightPurple: "#F8F4FD",
        // purple: "#C725F7",
        // orange: "#FFBB33",
        // darkOrange: "#D74117",
        // gold: "#A67E53",
        // lightViolet: "#8184B9",
        // violet: "#5447B6",
        // red: "#F70202",
        // lightGreenishYellow: "#D3DA47",
        // backgroundGray: "#FAFBFC",
        // lightestBackgroundGray: "#F1F1FE",
        semiBlack: "#00000080",
        charcoalBlack: "#09090A",
        darkGrey: "#1F1F22",
        lightGrey: "#F5F5F5",
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
