module.exports = {
  theme: {
    extend: {
    	colors: {
	        green: {
	          '100': '#F0FFF4', // used
	          '200': '#C6F6D5',
	          '300': '#9AE6B4',
	          '400': '#68D391',
	          '500': '#48BB78', // used
	          '600': '#38A169',
	          '700': '#2F855A',
	          '800': '#276749',
	          '900': '#22543D', // used
	        },
	        gray: {
	          '100': '#F7FAFC', // used
	          '200': '#EDF2F7',
	          '300': '#E2E8F0',
	          '400': '#CBD5E0', 
	          '500': '#A0AEC0', // used
	          '600': '#718096',
	          '700': '#4A5568',
	          '800': '#2D3748',
	          '900': '#1A202C', // used
	        },
	        red: {
	          '100': '#FFF5F5', 
	          '200': '#FED7D7',
	          '300': '#FEB2B2',
	          '400': '#FC8181', 
	          '500': '#F56565', // used
	          '600': '#E53E3E', 
	          '700': '#C53030',
	          '800': '#9B2C2C',
	          '900': '#742A2A', 
	        },
	        // Black
	        // White
	    }
    },
  },
  variants: {
  	backgroundColor: ['responsive', 'hover', 'focus'],
  	width: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}

// Green