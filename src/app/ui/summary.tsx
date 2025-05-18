'use client';

import Image from "next/image";

export function Summary() {
    const handleDownload = () => {
        // const link = document.createElement("a");
        // link.href = "/memoji.png";
        // link.download = "memoji.png";
        // link.click();
    };

    return (
        <div className="flex flex-col items-center w-full space-y-3">
            <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                    src="/memoji.png"
                    alt="Profile picture"
                    width={160}
                    height={160}
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col">
                <div className={`text-2xl md:text-4xl font-extrabold text-white text-center`}>
                    Ilham Fazri
                </div>
                <div className={`text-2xl md:text-2xl font-extrabold bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent text-center`}>
                    Full-Stack Engineer
                </div>
            </div>

            <div
                className={`text-sm md:text-xl px-2 py-3 rounded-full text-center text-gray-200`}
            >
                I’m a full-stack engineer with 4+ years of turning ideas into real, reliable apps — from pixel-perfect frontends to solid backend systems. I love clean code, learning new tech, and building things that actually make life easier.
            </div>

            <div className="flex items-center justify-center w-full space-x-4">
                <button
                    onClick={() => {
                        const section = document.getElementById('contact-me');
                        section?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={` bg-white text-black px-5 py-3 rounded-full font-semibold hover:text-blue-500 active:text-blue-500 cursor-pointer`}
                >
                    Get In Touch
                </button>

                <button
                    onClick={handleDownload}
                    className={`text-white px-5 py-3 rounded-full font-semibold border-2 border-white hover:text-blue-500 hover:border-blue-500 active:text-blue-500 active:border-blue-500 cursor-pointer`}
                >
                    Download CV
                </button>
            </div>
        </div>
    );
}