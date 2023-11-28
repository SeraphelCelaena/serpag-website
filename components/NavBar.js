import {useState} from "react";

import Appbar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MenuIcon from '@mui/icons-material/Menu';

import theme from "@/utils/theme/config.js";

import Head from "next/head";
import NextLink from "next/link";

const drawerWidth = 250;

const pageList = ["about"];

const homeButton = (
	<Typography variant="h4">
		<NextLink href="/" passHref>
			<Button
			color="secondary"
			sx={{ fontSize: '1.5rem', '&:hover': { backgroundColor: 'transparent' } }}
			disableElevation
			disableFocusRipple
			disableRipple
			>
				Home
			</Button>
		</NextLink>
	</Typography>
)

export default function NavBar({title}) {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return <Box component="nav">
		<Head>
			<title>{title}</title>
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
				{homeButton}
			</Toolbar>
		</Appbar>
		<Drawer
			anchor="left"
			open={drawerOpen}
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {width: drawerWidth, boxSizing: 'border-box', background: theme.palette.primary.main}
			}}
			onClose={() => setDrawerOpen(false)}
		>
			{homeButton}
			<Divider style={{ backgroundColor: 'white' }} />
			<List>
				{pageList.map((page) => {
					return <ListItem key={page} disablePadding>
					<div style={{width: '100%'}}>
						<NextLink href={`/${page}`} passHref>
							<ListItemButton>
								<ListItemText primary={page} />
							</ListItemButton>
						</NextLink>
					</div>
				</ListItem>
				})}
			</List>
		</Drawer>
	</Box>;
}
