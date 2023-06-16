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
      }, 
    }, 
  }, 
  plugins: [], 
}

