// MUI Imports
import CssBaseline from '@mui/material/CssBaseline';

// Next Imports
import type { AppProps } from 'next/app'

// Project Imports
import Navbar from '@/components/Navbar';

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Component {...pageProps} />
		</>
	)
}
