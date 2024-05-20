// MUI Imports
import CssBaseline from '@mui/material/CssBaseline';

// Next Imports
import type { AppProps } from 'next/app'

// Project Imports
import Navbar from '@/components/Navbar';
import PageProvider from '@/components/PageProvider';

export default function App({Component, pageProps}: AppProps) {
	return (
		<PageProvider>
			<CssBaseline />
			<Navbar />
			<Component {...pageProps} />
		</PageProvider>
	)
}
