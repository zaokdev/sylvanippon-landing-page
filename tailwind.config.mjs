/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-image': "url(/bg.jpg)"
			},
			fontFamily: {
				mono: ['Bungee', ...defaultTheme.fontFamily.mono]
			},
			keyframes: {
				heroimage: {
					'0%': {transform: "translateX(200%)", opacity: "0"},
					'50%': {opacity: "0.20"},
					'100%': {transform: "translateX(0)"}
				},
				herotext: {
					'0%': {transform: "translateX(-100%)"},
					'100%': {transform: "translateX(0)"}
				},
				bgfadein: {
					'0%': {opacity: "0"},
					'100%': {opacity: "1"}
				}
			}
		},
	},
	plugins: [],
}
