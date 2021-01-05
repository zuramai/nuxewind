module.exports = {
  theme: {
    darkSelector: '.dark',
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive'],
    boxShadow: ['dark','responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    extend: {
      cursor: ['disabled','hover']
    }
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
