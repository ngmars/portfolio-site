// Shared motion settings so every section moves the same way
export const EASE = 'power2.out';

// Fade + short rise used for scroll reveals
export const REVEAL = { autoAlpha: 0, y: 24, duration: 0.8, ease: EASE };

// gsap.matchMedia conditions — animations only register when motion is welcome
export const DESKTOP_MOTION = '(min-width: 768px) and (prefers-reduced-motion: no-preference)';
export const MOBILE_MOTION = '(max-width: 767px) and (prefers-reduced-motion: no-preference)';
export const ANY_MOTION = '(prefers-reduced-motion: no-preference)';
