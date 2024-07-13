import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				// https://www.hover.dev/css-color-palette-generator
				"primary": "#15803d",
				"primary-content": "#a4f0c0",
				"primary-dark": "#0e5428",
				"primaryLight": "#1cac52",

				"secondary": "#152280",
				"secondary-content": "#a4adf0",
				"secondary-dark": "#0e1654",
				"secondary-light": "#1c2eac",

				"background": "#eff1ef",
				"foreground": "#fbfbfb",
				"border": "#dde2df",
				"copy": "#232926",
				"copy-light": "#5e6e64",
				"copy-lighter": "#84958a",
				"success": "#158015",
				"warning": "#808015",
				"error": "#801515",
				"success-content": "#a4f0a4",
				"warning-content": "#f0f0a4",
				"error-content": "#f0a4a4",


				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				// primary: {
				// 	DEFAULT: "hsl(var(--primary) / <alpha-value>)",
				// 	foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				// },
				// secondary: {
				// 	DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
				// 	foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				// },
				// destructive: {
				// 	DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
				// 	foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				// },
				// muted: {
				// 	DEFAULT: "hsl(var(--muted) / <alpha-value>)",
				// 	foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				// },
				// accent: {
				// 	DEFAULT: "hsl(var(--accent) / <alpha-value>)",
				// 	foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				// },
				// popover: {
				// 	DEFAULT: "hsl(var(--popover) / <alpha-value>)",
				// 	foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				// },
				// card: {
				// 	DEFAULT: "hsl(var(--card) / <alpha-value>)",
				// 	foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				// }
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
};

export default config;
