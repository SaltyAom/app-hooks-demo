import { useEffect } from 'react'

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js', {
                    scope: '/'
                })
                .then((registration) => {
                    console.log(registration)
                })
        }
    }, [])

    return <Component {...pageProps} />
}

export default App
