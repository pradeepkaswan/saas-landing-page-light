import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",
		},
		borderRadius: {
			lg: "10px",
		},
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "20px",
					lg: "80px",
				},
			},
		},
	},
	plugins: [],
}
export default config
