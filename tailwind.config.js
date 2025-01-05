/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./componant/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {},
  		colors: {
  			NavbarBackground: '#0E1C50',
  			bgButtonNavbar: '#D3B472',
  			bgButtonHeader: '#BDA97F',
  			bgHeader: '#E1E6F880',
  			oneTextHeader: '#2E344A',
  			twoTextHeader: '#656262',
  			bgKnowUs: '#F6F0E3',
  			bgOfferWork: '#CFD2DC',
  			bgContactUs: '#EDEDED',
  			bgPop: '#E1E6F8',
  			textInput: '#656262',
  			forgetPasswordText: '#BDA97F',
  			bgIconQuestion: '#ED5A46',
  			bgIconSuccess: '#61CE70',
  			textFilter: '#706E6E',
  			insideTextFilter: '#4A4848',
  			bgwhite: '#0000004D',
  			bgButtonPagination: '#EDC165EB',
  			bgButtonPaginationActive: '#BDA97F',
  			textHeadOfferWork: '#0E1C50',
  			green: '#61CE70',
  			red: '#ED5A46',
  			oddTable: '#F8F3F3',
  			evenTable: '#EEEEEE',
  			bgTable: '#F7F7F7',
  			bgHover: '#192C72',
  			bgTableDashboard: '#F6F2F2',
  			textLabelSelect: '#4A4848',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			smm: {
  				min: '100px',
  				max: '600px'
  			},
  			smml: {
  				min: '10px',
  				max: '1024px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},    keyframes: {
			"accordion-down": {
			  from: { height: "0" },
			  to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			  from: { height: "var(--radix-accordion-content-height)" },
			  to: { height: "0" },
			},
			"slide": {
			  from: {
				"transform": "translateX(100%)",
			  },
			  to: {
				"transform": "translateX(0%)",
			  }
			},
			"appear": {
			  from: {
				opacity: "0",
				transform: "translateY(4rem)",
			  },
			  to: {
				opacity: "1",
				transform: "translateY(0%)",
			  }
			}
		  },
		  animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			"slide": "slide 750ms ease-in-out",
			"appear": "appear 750ms ease-in-out",
		  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
