import { createTheme } from "@mui/material/styles";

const themeOptions = {
	palette: {
		primary: {
			main: "#282c34"
		},
		secondary: {
			main: "#61dafb"
		}
	}
}

export const theme = createTheme(themeOptions);

export default theme;
