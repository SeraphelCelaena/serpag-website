// MUI Imports
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// MUI Icon Imports
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

// React Imports
import { useState, MouseEvent } from 'react';

export default function Navbar() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

	const handleDrawerOpen = () => {
		setDrawerOpen(true);
	}

	const handleDrawerClose = () => {
		setDrawerOpen(false);
	}

	const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
		setMenuOpen(true);
		setMenuAnchor(event.currentTarget);
	}

	const handleMenuClose = () => {
		setMenuOpen(false);
		setMenuAnchor(null);
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
						onClick={handleDrawerOpen}
						size="large"
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
						onClick={handleMenuOpen}
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
					<Menu
						open={menuOpen}
						onClose={handleMenuClose}
						anchorEl={menuAnchor}
					>
						<MenuItem>
							Dark Mode
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
			<Drawer
				open={drawerOpen}
				onClose={handleDrawerClose}
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
