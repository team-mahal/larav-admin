module.exports = {
  theme: {
    extend: {
    	colors: {
	        green: {
	          '100': '#F0FFF4',
	          '200': '#68D391',
	          '300': '#2F855A',
	          '400': '#C6F6D5',
	          '500': '#48BB78',
	          '600': '#276749',
	          '700': '#9AE6B4',
	          '800': '#38A169',
	          '900': '#22543D',
	        },
	        gray: {
	          '100': '#F7FAFC',
	          '200': '#F7FAFC',
	          '300': '#4A5568',
	          '400': '#EDF2F7',
	          '500': '#A0AEC0',
	          '600': '#2D3748',
	          '700': '#E2E8F0',
	          '800': '#718096',
	          '900': '#1A202C',
	        }
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