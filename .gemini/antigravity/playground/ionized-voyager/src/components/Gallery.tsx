"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Gallery() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const track = trackRef.current;
            if (!track) return;

            const totalWidth = track.scrollWidth;
            const viewWidth = window.innerWidth;

            gsap.to(track, {
                x: () => -(totalWidth - viewWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    start: "center center",
                    end: () => "+=" + (totalWidth),
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const images = [
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd",
        "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee",
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    ];

    return (
        <section ref={sectionRef} id="gallery" className="relative h-screen bg-black overflow-hidden flex flex-col justify-center">
            <div className="absolute top-10 left-10 z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">
                    Visual <span className="text-stroke text-transparent">Diaries</span>
                </h2>
            </div>

            <div ref={trackRef} className="flex gap-10 px-10 w-fit">
                {images.map((src, i) => (
                    <div key={i} className="relative w-[80vw] md:w-[600px] h-[60vh] md:h-[70vh] shrink-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                        <img
                            src={src}
                            alt={`Spiti Gallery ${i + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/80 p-2 text-neon-lime font-mono text-sm border border-neon-lime">
                            IMG_0{i + 1}.RAW
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
