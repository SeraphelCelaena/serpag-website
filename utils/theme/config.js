import { createTheme } from "@mui/material/styles";

const themeOptions = {
	palette: {
		primary: {
			light: "#DDE6ED",
			main: "#27374D",
			dark: "#1A2533",
			contrastText: "#ffffff"
		},
		secondary: {
			main: "#ffffff"
		},
		background: {
			default: "#DDE6ED"
		}
	}
}

export const theme = createTheme(themeOptions);

export default theme;
