'use client';
import createCache from '@emotion/cache'
import {CacheProvider} from '@emotion/react'
import {Box, createTheme, CssBaseline, Direction, PaletteOptions, responsiveFontSizes, ThemeOptions, ThemeProvider} from '@mui/material'
import {faIR} from '@mui/material/locale'
import {PropsWithChildren} from 'react'
import rtlPlugin from 'stylis-plugin-rtl'


interface OwnProps {
  direction?: Direction
}

createTheme({
  typography: {},
})

const getFontFamily = (dir: Direction) =>
  dir === 'rtl'
    ? ''
    : ''

export type ThemeProps = PropsWithChildren<OwnProps>

export function Theme({direction = 'rtl', children}: ThemeProps) {
  const palette: PaletteOptions = {
    primary: {
      dark: '#0A0A0A',
      main: '#0A0A0A',
      light: '#9C9EA2',
    },
   
  }

  const fontFamily = getFontFamily(direction)

  const typography: ThemeOptions['typography'] = {
    
    button: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '25px',
      fontFamily,
      '.MuiButton-iconSizeSmall': {
        '& > *:nth-of-type(1)': {
          fontSize: 10,
          width: 10,
          height: 10,
        },
      },
      '.MuiButton-iconSizeMedium': {
        '& > *:nth-of-type(1)': {
          fontSize: 16,
          width: 16,
          height: 16,
        },
      },
      '.MuiButton-iconSizeLarge': {
        '& > *:nth-of-type(1)': {
          fontSize: 24,
          width: 24,
          height: 24,
        },
      },
    },
  
  }

  const theme = createTheme(
    
    {
      direction,
      palette,
      typography,
      spacing: 8,
      components: {
        MuiInputBase: {
          styleOverrides: {
            input: {
              ...typography.caption,
              color: 'black',

              '::placeholder': {
                ...typography.caption,
                color: 'black',
              },
            },
          },
        },
        MuiOutlinedInput :{
          styleOverrides: {
          root: {
           borderRadius:'12px',
            
          },
        },
      },
        
      },
    },
    faIR
  )

  const cache = createCache({
    key: 'mui-rtl',
    stylisPlugins: [rtlPlugin],
  })

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <Box dir={direction} sx={{height: '100%'}}>
          {children}
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}
