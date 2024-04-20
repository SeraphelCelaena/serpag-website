// MUI Imports
import Box from '@mui/material/Box';
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
			<Box sx={{ marginTop: '4rem' }} />
			<Component {...pageProps} />
		</>
	)
}
