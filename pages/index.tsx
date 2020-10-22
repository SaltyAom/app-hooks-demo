import React, { useRef } from 'react'

import {
    useShare,
    useMedia,
    useCaptureImage,
    useInstall,
    usePwa
} from 'app-hooks'

const App = () => {
    let videoRef = useRef()

    let [isPwa] = usePwa()

    let [share, supportShare] = useShare({
        title: 'App Hooks demo',
        text: 'Demo of using App Hooks to build PWA!',
        url: 'https://app-hooks-demo.netlify.app'
    })

    let [request, stop, isPlaying] = useMedia(videoRef, {
        video: true,
        audio: false
    })

    let [prompt, userChoice, isInstallSupport] = useInstall()

    let [capture, captureSrc] = useCaptureImage(videoRef)

    return (
        <main>
            <video ref={videoRef} autoPlay />
            {isPlaying ? (
                <button onClick={stop}>Stop</button>
            ) : (
                <button onClick={request}>Start</button>
            )}
            <button onClick={capture}>Capture</button>
            {!isPwa && isInstallSupport && userChoice !== null ? (
                <button onClick={prompt}>Install</button>
            ) : null}
            {supportShare ? <button onClick={share}>Share</button> : null}
            isPwa: {isPwa ? 'true' : 'false'}
            isInstallable: {isInstallSupport ? 'true' : 'false'}
            {captureSrc ? <img src={captureSrc} /> : null}
        </main>
    )
}

export default App
