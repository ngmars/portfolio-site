import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { lazy, Suspense } from 'react'

const IntroCanvas = lazy(() => import('../components/Hero/introCanvas'))

const IntroFallback = () => (
    <div className="absolute left-[5vw] top-0 flex h-[90vh] w-[90vw] flex-col items-center justify-center">
        <span className="canvas-loader" />
        <p className="mt-6 text-sm font-extrabold tracking-[0.2em] text-[#35c19f]">Loading...</p>
    </div>
)

const IntroSection = () => {
    return (
        <div id="home" className="relative min-h-screen w-full">
            <Suspense fallback={<IntroFallback />}>
                <IntroCanvas />
            </Suspense>
            {/* Swipe hint — the camera follows the pointer left/right (mouse only, hidden on touch) */}
            <div className="pointer-events-none absolute bottom-20 right-8 z-[100] hidden flex-col items-center gap-2 md:flex">
                <div className="flex items-center gap-2 text-[#35c19f]/70">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
                    <div className="flex h-9 w-28 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                        <span className="animate-swipe-x h-4 w-4 rounded-full bg-[#35c19f] shadow-[0_0_14px_rgba(53,193,159,0.8)]" />
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                    Move mouse to look around
                </p>
            </div>

            {/* Bouncing scroll-down arrow */}
            <a href="#about" className="scroll-down-arrow group animate-bounce">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#35c19f]/40 bg-[#35c19f]/15 text-[#35c19f] shadow-[0_0_20px_rgba(53,193,159,0.3)] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#35c19f]/30 group-hover:shadow-[0_0_30px_rgba(53,193,159,0.5)]">
                    <FontAwesomeIcon icon={faChevronDown} className="text-lg" />
                </span>
            </a>
        </div>
    )
}

export default IntroSection
