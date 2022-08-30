/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: '#1fb6ff',
				purple: '#7e5bef',
				pink: '#ff49db',
				orange: '#ff7849',
				green: '#13ce66',
				yellow: '#ffc82c',
				'gray-dark': '#273444',
				gray: '#8492a6',
				'gray-light': '#d3dce6',
			},
		},
	},
	plugins: [],
};
