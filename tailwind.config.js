module.exports = {
  theme: {
    darkSelector: '.dark',
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive'],
    extend: {
      cursor: ['disabled','hover']
    }
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}