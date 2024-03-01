// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config: Pick<Config, "content" | "presets" | "darkMode" | "plugins"> = {
  content: [
    // "./src/app/**/*.tsx",
    // "../../packages/ui/*.{js,ts,jsx,tsx}",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // "./**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/*.{js,ts,jsx,tsx,mdx}",
		// "./app/**/*.{js,ts,jsx,tsx,mdx}",
		// "./pages/**/*.{js,ts,jsx,tsx,mdx}",
		// "./components/**/*.{js,ts,jsx,tsx,mdx}",
		// "./providers/**/*.{js,ts,jsx,tsx,mdx}",
		"../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"../.././node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
  darkMode: "class",
  plugins: [nextui()]
};

export default config;
