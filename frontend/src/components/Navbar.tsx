// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
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
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SettingsIcon from '@mui/icons-material/Settings';

// React/Next Imports
import { useState, MouseEvent } from 'react';
import NextLink from 'next/link';

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

	const routes = [
		{
			About: "/about",
			Projects: "/projects"
		},
		{
			Wellborne: "/wellborne"
		}
	]

	return (
		<>
			<AppBar
				sx={{
					marginBottom: "4rem"
				}}
			>
				<Toolbar
					disableGutters
					sx={{
						padding: '0.25rem 1rem'
					}}
				>
					<IconButton
						onClick={handleDrawerOpen}
						size="medium"
						color="inherit"
						sx={{
							marginRight: '1rem'
						}}
					>
						<MenuIcon
							sx={{
								fontSize: '3rem'
							}}
						/>
					</IconButton>
					<Link
						component={NextLink}
						href="/"
						underline="hover"
						color="inherit"
					>
						<Typography
							variant="h3"
						>
							Home
						</Typography>
					</Link>
					<Box
						sx={{
							marginLeft: 'auto',
							marginRight: '1rem'
						}}
					>
						<IconButton
							onClick={handleMenuOpen}
							size="large"
							color="inherit"
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
							<MenuItem onClick={handleMenuClose}>
								[WIP] Dark Mode
							</MenuItem>
						</Menu>
					</Box>
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
				<Box
					sx={{
						padding: '0.25rem 1rem'
					}}
				>
					<IconButton
						onClick={handleDrawerClose}
						size="medium"
						color="inherit"
					>
						<MenuOpenIcon
							sx={{
								fontSize: '3rem'
							}}
						/>
					</IconButton>
				</Box>
				<Divider />
				{routes.map((route, index) => {
					return <>
						<List
							dense={true}
							key={index}
						>
							{Object.entries(route).map(([key, value]) => {
								return <ListItem key={key} sx={{padding: 0}}>
									<Link
										component={NextLink}
										href={value}
										underline="hover"
										sx={{
											width: '100%',
											textDecoration: 'none',
											color: 'inherit'
										}}
									>
										<ListItemButton
											onClick={handleDrawerClose}
										>
											<ListItemText>
												<Typography variant="h5">{'[WIP] ' + key}</Typography>
											</ListItemText>
										</ListItemButton>
									</Link>
								</ListItem>
							})}
						</List>
						{index !== routes.length - 1 && <Divider />}
					</>
				})}
			</Drawer>
		</>
	)
}
