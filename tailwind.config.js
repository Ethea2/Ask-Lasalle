/** @type {import('tailwindcss').Config} */ 
module.exports = { 
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}", 
  ], 
  theme: { 
    extend: { 
      colors:{ 
        'd-lasalle' : '#617A55', 
        'l-lasalle' : '#A4D0A4', 
        'lasalle-white' : '#D9D9D9', 
        'green-upvote' : '#A4D0A4',
        'red-downvote' : '#D0A4A4',
        // 'd-lasalle' : '#617A55', 
        // 'l-lasalle' : '#A4D0A4', 
        // 'lasalle-white' : '#D9D9D9' 

        'main-background' : '#F4F9F4', // color for the background/body of the pages of the web
        'primary-component' : '#5C8D89', // for the navbar,  and/or heading area of sidebar and other components
        'accent' : '#A7D7C5', // accent color for the components
        'primary-text' : '#74B49B' // used for texts we might want to highlight
      }, 
    }, 
  }, 
  plugins: [], 
}

