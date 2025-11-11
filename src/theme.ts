'use client';
import { Bebas_Neue, Lato } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#03a678',
    },
    secondary: {
      main: '#1c6bba',
    },
    error: {
      main: '#bf2012',
    },
    warning: {
      main: '#ffa200',
    },
    success: {
      main: '#1a6b31',
    },
    info: {
      main: '#0b66d5',
    },
    background: {
      default: '#121212',
      paper: '#171717',
    },
    text: {
      primary: '#fafafa',
      secondary: '#898989',
      disabled: '#686666',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    fontFamily: lato.style.fontFamily,
    h1: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    h2: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    h3: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    h4: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    h5: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    h6: {
      fontFamily: bebasNeue.style.fontFamily,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
