"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 }
        );
    }, []);

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
            <div className="text-2xl font-bold tracking-tighter uppercase font-display">
                Spiti<span className="text-neon-lime">.</span>Exp
            </div>

            <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
                {["Expedition", "Itinerary", "Gallery", "FAQ"].map((item) => (
                    <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-neon-lime transition-colors duration-300">
                        {item}
                    </Link>
                ))}
            </nav>

            <button className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neon-lime hover:text-black hover:border-neon-lime transition-all duration-300">
                Book Now
            </button>
        </header>
    );
}
