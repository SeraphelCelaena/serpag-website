// MUI Imports
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// React/Next Imports
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Home | Serpag</title>
				<meta name="description" content="Home page by Serpag" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<main>
				<Container>
					<Typography variant="h1">Home</Typography>
					<div>
						<Typography variant="h2">About me</Typography>
					</div>
				</Container>
			</main>
		</>
	)
}
