import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#E53E3E',
      500: '#E53E3E',
      900: '#742A2A',
    },

    navbarBg: '#310800',
    
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Helvetica Neue, sans-serif',
  },
  // Voeg hier andere thema-aanpassingen toe
});

export default theme;
