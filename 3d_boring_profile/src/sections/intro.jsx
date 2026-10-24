import { lazy, Suspense } from 'react'

const IntroCanvas = lazy(() => import('../components/Hero/introCanvas'))

const IntroFallback = () => (
    <div className="absolute inset-0 flex items-center justify-center">
        <span className="canvas-loader" />
    </div>
)

const IntroSection = () => {
    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden">
            {/* Scene sits below the headline, like a product shot under its title */}
            <div className="absolute inset-x-[5vw] bottom-0 top-[36vh]">
                <Suspense fallback={<IntroFallback />}>
                    <IntroCanvas />
                </Suspense>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent" />
            </div>

            {/* Headline — only the buttons take pointer events so the camera rig still follows the mouse */}
            <div className="pointer-events-none absolute inset-x-0 top-[max(11vh,72px)] z-10 flex flex-col items-center px-4 text-center">
                <h1 className="headline-xl text-white">Nitish Gopinath</h1>
                <p className="body-lg mt-4 max-w-xl">
                    Data scientist building ML systems and AI agents.
                </p>
                <div className="pointer-events-auto mt-8 flex items-center gap-6">
                    <a href="#projects" className="btn-primary">See my work</a>
                    <a href="#about" className="link-more">About me</a>
                </div>
            </div>

            {/* Fade the scene into the next section */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-b from-transparent to-black" />
        </section>
    )
}

export default IntroSection
