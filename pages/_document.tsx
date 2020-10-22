import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
	                <link rel="manifest" href="/manifest.json" />
					<meta name="mobile-web-app-capable" content="yes" />

					<meta name="application-name" content="app hooks" />
					<meta name="mssmarttagspreventparsing" content="true" />
					<meta
						name="msapplication-window"
						content="width=1366;height=768"
					/>

					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-title" content="Opener" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="apple-touch-fullscreen" content="yes" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
