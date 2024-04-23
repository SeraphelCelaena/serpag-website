// MUI Imports
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// MUI Icon Imports
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

// React Imports
import { useState } from 'react';

export default function Navbar() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleClose = () => {
		setDrawerOpen(false);
	}

	const handleOpen = () => {
		setDrawerOpen(true);
	}

	return (
		<>
			<AppBar
				sx={{
					marginBottom: "4rem"
				}}
			>
				<Toolbar disableGutters>
					<IconButton
						size="large"
						onClick={handleOpen}
						color="inherit"
					>
						<MenuIcon
							sx={{
								fontSize: '3rem'
							}}
						/>
					</IconButton>
					<Typography
						variant="h3"
					>
						Home
					</Typography>
					<IconButton
						size="large"
						color="inherit"
						sx={{
							marginLeft: 'auto',
							marginRight: '1rem'
						}}
					>
						<SettingsIcon
							sx={{
								fontSize: '2rem'
							}}
						/>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				open={drawerOpen}
				onClose={handleClose}
				PaperProps={{
					sx: {
						width: {
							xs: '80%',
							md: '15%'
						}
					}
				}}
				variant="persistent"
			>
				<Typography
					variant="h4"
				>
					Home
				</Typography>
				<Typography
					variant="h4"
				>
					About
				</Typography>
				<Typography
					variant="h4"
				>
					Contact
				</Typography>
			</Drawer>
		</>
	)
}
