import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btnbg: '#CC399E',
        bggrey:"#EDF2F7",
        bg1:"rgba(255, 237, 249, 0.1)",
        bg2:"rgba(255, 237, 249, 0.2)",
        bg3:"rgba(255, 237, 249, 0.3)",
        black:"#101725",
        bgd:"#E2E8F0",
        textblack:"#4D2259",
        iconcolor:"#A0AEC0",
        lightwhite:"#FAFAFA",
        lightblack:"#27303F",
        lighterblack:"#27303F",
        lightgreen:"#A0AEC0",
        lightergreen:"#718096",
        bgred:"#BF3594",
        textBlack:"#3F4254",
        lightierBlack:"#1A202C"
      },
      fontSize: {
        'f32': '32px',
        'f43': '43px',
      },
      fontFamily:{
        "fpublic":"Public Sans",
        "circular": ['CircularStd'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
