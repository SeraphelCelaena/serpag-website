// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// MUI Icon Imports
import MenuIcon from '@mui/icons-material/Menu';

// React Imports
import { useState } from 'react';

export default function Navbar() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleOpenClick = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<>
			<AppBar>
				<Toolbar disableGutters>
					<IconButton
						size="large"
						onClick={handleOpenClick}
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
				</Toolbar>
			</AppBar>
			<Drawer
				open={drawerOpen}
				onClose={handleOpenClick}
				PaperProps={{
					style: {
						width: "80%"
					}
				}}
				sx={{
					mb: "4rem"
				}}
				variant="persistent"
				elevation={0}
			>
				<Box
					onClick={handleOpenClick}
					onKeyDown={handleOpenClick}
					sx={{
						width: "80%"
					}}
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
				</Box>
			</Drawer>
		</>
	)
}
