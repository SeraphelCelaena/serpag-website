// MUI Imports
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Project Imports
import Navbar from '@/components/Navbar';

export default function Home() {
	return (
		<main>
			<Container>
				<Typography variant="h1">Home</Typography>
				<div>
					<Typography variant="h2">About me</Typography>
				</div>
			</Container>
		</main>
	)
}
