/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
		  backgroundImage: {
        'custom-gradient': "linear-gradient(270deg, rgba(0, 0, 0, 0.05) 0%, #151825 103.32%)",
      },
			fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'], 
      },
			
			backgroundColor:{
				"custom-black":"#010713",
				"card-black":"#151825"
			}
		},
	},
	plugins: [],
};
