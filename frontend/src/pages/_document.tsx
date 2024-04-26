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
				<meta name="author" content="Serpag" />
				<meta name="keywords" content="Serpag, Webpage" />
				<meta charSet="UTF-8" />
				<link rel="icon" href="/CookieLove.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
				<Analytics />
			</body>
		</Html>
	)
}
