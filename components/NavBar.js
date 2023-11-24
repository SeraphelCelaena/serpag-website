import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Link from "next/link";

export default function NavBar() {
	return <Appbar position="static">
		<Toolbar>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				<Link href="/">Home</Link>
			</Typography>
			<Button color="inherit">
				<Link href="/about">About</Link>
			</Button>
			<Button color="inherit">
				<Link href="/contact">Contact</Link>
			</Button>
		</Toolbar>
	</Appbar>
}
