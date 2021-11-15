import React from 'react'
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#06f',
    light: '#dddddd',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
  }
};

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme;