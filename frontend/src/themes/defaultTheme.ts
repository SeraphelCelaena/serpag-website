import { PaletteOptions, createTheme, css } from "@mui/material/styles";

export type AllowedThemes = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedThemes = "dark";

export const lightTheme = createTheme({
	palette: {
		mode: "light"
	}
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark"
	}
});

export const globalStyles = css`
	:root {
		body {
			background-color: "white";
			color: "black";
		}
	}

	[data-theme="dark"] {
		body {
			background-color: "black";
			color: "white";
		}
	}
`
