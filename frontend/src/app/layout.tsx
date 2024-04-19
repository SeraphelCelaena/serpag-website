export const metadata = {
	title: 'Serpag Website',
	description: 'Created by Serpag',
}

export default function RootLayout({
	children,}:
	{children: React.ReactNode}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
