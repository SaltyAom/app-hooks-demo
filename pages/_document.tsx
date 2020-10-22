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
                    <meta name="theme-color" content="#ffffff" />

                    <link
                        rel="apple-touch-icon"
                        href="https://avatars1.githubusercontent.com/u/35027979?s=400&u=14ef5e79429dd79370dcf72b6fb457a9c1d93551&v=4"
                    />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-title"
                        content="app hooks"
                    />
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
