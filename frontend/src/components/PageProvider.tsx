// MUI Imports
import { ThemeProvider } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';

// React Imports
import { ReactNode } from "react";

interface PageProviderProps {
	children: ReactNode;
}

export default function PageProvider({children}: PageProviderProps) {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = createTheme({
		palette: {
			mode: prefersDarkMode ? 'dark' : 'light'
		}
	});

	return <ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>
}
