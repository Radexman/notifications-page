/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['dist/*html'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1020px',
			xl: '1440px',
		},
		extend: {
			colors: {
				primary: {
					red: 'hsl(1, 90%, 64%)',
					blue: 'hsl(219, 85%, 26%)',
				},
				neutral: {
					white: 'hsl(0, 0%, 100%)',
					veryLigntGrayishBlue: 'hsl(210, 60%, 98%)',
					lightGrayishBlueOne: 'hsl(211, 68%, 94%)',
					lightGrayishBlueTwo: 'hsl(205, 33%, 90%)',
					grayishBlue: 'hsl(219, 14%, 63%)',
					darkGrayishBlue: 'hsl(219, 12%, 42%)',
					veryDarkBlue: 'hsl(224, 21%, 14%)',
				},
			},
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
