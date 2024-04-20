// MUI Imports
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
	return (
		<AppBar>
			<Typography
				variant="h3"
				sx={{
					padding: '1rem'
				}}
			>
				Home
			</Typography>
		</AppBar>
	)
}
