/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui:{ 
			themes: [
			  {
				mytheme: {
				
	   "primary": "#0e7490",
				
	   "secondary": "#00fc7c",
				
	   "accent": "#ff0000",
				
	   "neutral": "#1a1d22",
				
	   "base-100": "#302b36",
				
	   "info": "#37d9ff",
				
	   "success": "#00f3c8",
				
	   "warning": "#facc15",
				
	   "error": "#d3003b",
				},
			  },
			"coffee",],
	},
	theme: {
		extend: {},
		
	},
	plugins: [require("daisyui")],
}
