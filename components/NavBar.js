import {useState} from "react";

import Appbar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MenuIcon from '@mui/icons-material/Menu';

import Link from "next/link";
import Head from "next/head";

const drawerWidth = 250;

export default function NavBar({title}) {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return <Box component="nav">
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Appbar position="static">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{mr: 2}}
					onClick={() => setDrawerOpen(true)}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h4">
					<Link href="/">
						Home
					</Link>
				</Typography>
			</Toolbar>
		</Appbar>
		<Drawer
			anchor="left"
			open={drawerOpen}
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {width: drawerWidth, boxSizing: 'border-box'}
			}}
			onClose={() => setDrawerOpen(false)}
			color="primary"
		>
			<Box
				component="nav"
			>

			</Box>
		</Drawer>
	</Box>;
}
