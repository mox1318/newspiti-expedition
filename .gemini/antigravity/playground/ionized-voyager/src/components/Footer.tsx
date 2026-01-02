export default function Footer() {
    return (
        <footer className="bg-neon-lime text-black py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="font-display text-8xl md:text-9xl font-bold tracking-tighter leading-[0.8]">
                        SPITI.
                    </h2>
                    <p className="font-mono uppercase tracking-widest text-sm">
                        © 2025 Ionized Voyager. All rights reserved.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-12 font-bold uppercase tracking-wider text-sm">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">Twitter</a>
                        <a href="#" className="hover:underline">YouTube</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="#" className="hover:underline">Terms</a>
                        <a href="#" className="hover:underline">Privacy</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-10 border-t border-black/20 w-full overflow-hidden">
                <div className="animate-[ticker_10s_linear_infinite] whitespace-nowrap font-display text-[10vw] font-bold opacity-10">
                    EXPLORE THE UNSEEN — EXPLORE THE UNSEEN — EXPLORE THE UNSEEN — EXPLORE THE UNSEEN —
                </div>
            </div>
        </footer>
    );
}
