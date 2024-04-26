// MUI Imports
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// MUI Icon Imports
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

// React/Next Imports
import { useState, MouseEvent } from 'react';
import Link from 'next/link';

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

	const routes = {
		Home: '/',
		About: '/about',
		Projects: '/projects',
		Contact: '/contact'
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
							[WIP] Dark Mode
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
				<List
					dense={true}
				>
					{Object.entries(routes).map(([key, value]) => {
						return <ListItem key={key} sx={{padding: 0}}>
							<Link
								href={value}
								style={{
									width: '100%',
									textDecoration: 'none',
									color: 'inherit'
								}}
							>
								<ListItemButton>
									<ListItemText>
										<Typography variant="h5">{'[WIP] ' + key}</Typography>
									</ListItemText>
								</ListItemButton>
							</Link>
						</ListItem>
					})}
				</List>
			</Drawer>
		</>
	)
}
