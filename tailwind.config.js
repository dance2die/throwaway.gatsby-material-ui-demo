module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
<<<<<<< HEAD
  // https://github.com/tailwindcss/custom-forms
  plugins: [],
};
=======
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html',
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    },
  },
}
>>>>>>> aa51512adc3f048d8faabd888cc94c2e50ae6eba
