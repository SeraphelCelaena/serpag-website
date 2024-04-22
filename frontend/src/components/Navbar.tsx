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
	const [open, setOpen] = useState(false);

	const handleOpenClick = () => {
		setOpen(!open);
	};

	return (
		<Box component="nav">
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
				open={open}
				onClose={handleOpenClick}
			>
				<div
					onClick={handleOpenClick}
					onKeyDown={handleOpenClick}
				>
					<Typography
						variant="h6"
					>
						About me
					</Typography>
				</div>
			</Drawer>
		</Box>
	)
}
