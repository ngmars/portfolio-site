import { useEffect, useState } from 'react';

// Returns the id of the section currently under a line `probe` of the way
// down the viewport (0.4 = 40%), or null above the first one. Sections are
// looked up on every check because they lazy-load after the nav mounts, and
// measured live so pinned sections (which grow while pinned) stay accurate.
const useActiveSection = (ids, probe = 0.4) => {
    const [active, setActive] = useState(null);
    const key = ids.join(',');

    useEffect(() => {
        const sectionIds = key.split(',');
        let frame = 0;

        const check = () => {
            frame = 0;
            const line = window.innerHeight * probe;
            let current = null;
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= line) current = id;
            }
            setActive(current);
        };

        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(check);
        };

        check();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
        };
    }, [key, probe]);

    return active;
};

export default useActiveSection;
