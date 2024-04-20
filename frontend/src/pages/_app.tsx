// MUI Imports
import CssBaseline from '@mui/material/CssBaseline';

// Next Imports
import type { AppProps } from 'next/app'

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<CssBaseline />
			<Component {...pageProps} />
		</>
	)
}
