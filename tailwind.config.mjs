/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  background: "var(--background)",
		  foreground: "var(--foreground)",
		},
		screens: {
		  'xs': '375px',
		  'sm': '640px',
		  'md': '768px',
		  'lg': '1024px',
		  'xl': '1280px',
		  '2xl': '1536px',
		  '3xl': '1920px',
		},
		spacing: {
		  '18': '4.5rem',
		  '88': '22rem',
		  '112': '28rem',
		  '128': '32rem',
		},
		animation: {
		  'fade-in': 'fadeIn 0.5s ease-in-out',
		  'slide-up': 'slideUp 0.5s ease-out',
		  'slide-down': 'slideDown 0.5s ease-out',
		  'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  slideUp: {
			'0%': { transform: 'translateY(100%)', opacity: '0' },
			'100%': { transform: 'translateY(0)', opacity: '1' },
		  },
		  slideDown: {
			'0%': { transform: 'translateY(-100%)', opacity: '0' },
			'100%': { transform: 'translateY(0)', opacity: '1' },
		  },
		  'border-beam': {
			'100%': {
			  'offset-distance': '100%',
			},
		  },
		},
	  },
	},
	plugins: [],
  };