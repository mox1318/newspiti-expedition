"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(containerRef.current,
            { scale: 1.1, filter: "brightness(0.5)" },
            { scale: 1, filter: "brightness(1)", duration: 2, ease: "power2.out" }
        )
            .fromTo(textRef.current,
                { y: 100, opacity: 0, rotateX: 20 },
                { y: 0, opacity: 1, rotateX: 0, duration: 1.5, ease: "power4.out" },
                "-=1.5"
            )
            .fromTo(subTextRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                "-=1"
            );

        gsap.to(textRef.current, {
            y: -150,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-space z-10 opacity-90"></div>

            {/* Abstract Background Element */}
            <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 z-0"></div>

            <div className="z-20 text-center px-4">
                <h1 ref={textRef} className="font-display text-[15vw] leading-[0.8] font-bold uppercase tracking-tighter mix-blend-screen text-stroke text-white/50 hover:text-white transition-colors duration-500 cursor-default">
                    Spiti<br /><span className="text-white">Valley</span>
                </h1>

                <div ref={subTextRef} className="mt-12 flex flex-col items-center gap-4">
                    <p className="text-neon-lime text-sm md:text-base font-mono uppercase tracking-[0.2em]">
            // The Middle Land
                    </p>
                    <p className="max-w-md text-white/70 text-sm md:text-lg leading-relaxed font-light">
                        A rugged expedition into the heart of the Himalayas.
                        Where the air is thin, and the silence is loud.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-10 left-10 z-20 hidden md:block">
                <div className="w-px h-24 bg-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-neon-lime animate-bounce"></div>
                </div>
            </div>
        </section>
    );
}
