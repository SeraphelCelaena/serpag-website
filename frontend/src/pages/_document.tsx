// Next Imports
import {
	Html,
	Head,
	Main,
	NextScript
} from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="description" content="Webpage by Serpag" />
			</Head>
			<body>
				<Main />
				<NextScript />
				<Analytics />
			</body>
		</Html>
	)
}
