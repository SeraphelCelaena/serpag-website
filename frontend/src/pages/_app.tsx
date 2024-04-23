// MUI Imports
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Next Imports
import type { AppProps } from 'next/app'

// Project Imports
import Navbar from '@/components/Navbar';

export default function App({Component, pageProps}: AppProps) {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = createTheme({
		palette: {
			mode: prefersDarkMode ? 'dark' : 'light'
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
