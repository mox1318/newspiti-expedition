"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const elements = gsap.utils.toArray(".reveal-text");
        elements.forEach((el: any) => {
            gsap.fromTo(el,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} id="expedition" className="relative py-32 px-6 md:px-12 bg-deep-space">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="sticky top-32">
                    <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-8 reveal-text">
                        Unlock<br /><span className="text-neon-lime">The Unknown</span>
                    </h2>
                    <p className="font-mono text-white/60 text-sm uppercase tracking-widest border-l border-neon-lime pl-4 reveal-text">
                        Elevation: 12,500ft
                    </p>
                </div>

                <div className="space-y-12">
                    <div className="neo-card p-8 reveal-text group">
                        <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-neon-lime transition-colors">01. The Journey</h3>
                        <p className="text-white/70 leading-relaxed">
                            Traverse through the treacherous roads of Kunzum Pass, witness the ancient monasteries of key gompa, and stargaze under the clearest skies on planet earth. This isn't a vacation; it's a pilgrimage for the soul.
                        </p>
                    </div>

                    <div className="neo-card p-8 reveal-text group">
                        <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-neon-lime transition-colors">02. The Vehicle</h3>
                        <p className="text-white/70 leading-relaxed">
                            4x4 rugged terrain vehicles equipped for the harsh Himalayan landscape. Oxygen cylinders, medical kits, and expert guides included.
                        </p>
                    </div>

                    <div className="neo-card p-8 reveal-text group">
                        <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-neon-lime transition-colors">03. The Stay</h3>
                        <p className="text-white/70 leading-relaxed">
                            From luxury glamping in Kaza to homestays in the highest village in the world, Komik. Experience authentic Spitian hospitality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
