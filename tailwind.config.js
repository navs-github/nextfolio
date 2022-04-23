module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        // 'grain': "url('../pattern.png')",
        'grain': "url('../img/grain.webp')",
      }),
      colors: {
        yellow: {
          base: '#E3B23C',
          accent: '#EFAA06',
        },
        warm: '#EDEBD7',
        dark: '#0B0E13',
      },

      keyframes: {
        slideup: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slidedown: {
          '0%': { transform: 'translateY(-3rem)' },
          '100%': { transform: 'translateY(0px)' },
        },
        slideright: {
          '0%': { transform: 'translateX(-60px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        sliderightalt: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(30px)' },
        },
      },
      animation: {
        'slideup': 'slideup 1.2s ease forwards',
        'slideup50': 'slideup 1.2s ease 0.05s forwards',
        'slideup100': 'slideup 1.2s ease 0.1s forwards',
        'slideup150': 'slideup 1.2s ease 0.15s forwards',
        'slideup200': 'slideup 1.2s ease 0.2s forwards',
        'slideupalt': 'slideup 1.2s ease forwards',
        'fadein': 'fadein 0.8s ease 0.75s forwards',
        'fadeinfaster': 'fadein 0.8s ease 0.325s forwards',
        'slideright': 'slideright 1s ease-out',
        'slideright200': 'slideright 1s ease-out 0.2s',
        'sliderightalt': 'sliderightalt 2s ease-out 2 alternate forwards',
        'slidedown': 'slidedown 1s ease-in-out'
      },
      fontFamily: {
        inter: ['Inter'],
        work: ['Work Sans'],
        lora: ['Lora']
      },
    },
  },
};

