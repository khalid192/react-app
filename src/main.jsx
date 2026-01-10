import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
  import { createTheme,ThemeProvider } from '@mui/material/styles';

   const theme = createTheme({
  palette: {
    primary: {
      main: '#5f6163ff',
    }
  }});


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
