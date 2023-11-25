import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material/styles';

import theme from "@/utils/theme/config.js";

export default function App({ Component, pageProps }) {
	return <ThemeProvider theme={theme}>
		<Component {...pageProps} />
	</ThemeProvider>;
}
