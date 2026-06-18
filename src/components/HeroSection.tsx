"use client";

import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import BrandSlider from "./brand-slider";

const avatarList: AvatarList[] = [
    {
        image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg",
    },
    {
        image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
    },
    {
        image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg",
    },
    {
        image: "https://images.shadcnspace.com/assets/profiles/user-5.jpg",
    },
];

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic"],
});

export type AvatarList = {
    image: string;
};

function HeroSection() {
    return (
        <section>
            <div className="w-full h-full relative">
                <div className="relative w-full pt-10 px-4 md:pt-20 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-[#bdff00]/20 before:via-white before:to-[#00545f]/10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
                    <div className="container mx-auto  relative z-10">
                        <div className="flex flex-col max-w-5xl mx-auto gap-8">
                            <div className="relative flex  flex-col text-center items-center sm:gap-6 gap-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 32 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    className="lg:text-8xl md:text-7xl text-5xl font-semibold leading-14 md:leading-20 lg:leading-24 text-neutral-950"
                                >
                                    We build AI employees {" "}
                                    <span className={`${instrumentSerif.className} tracking-tight text-[#00545f]`}>
                                        for businesses
                                    </span>
                                </motion.h1>
                                <motion.h2
                                    initial={{ opacity: 0, y: 32 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                                    className="text-xl font-semibold max-w-2xl text-muted-foreground"
                                >
                                    Ready to rethink how they operate.
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 32 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                                    className="text-base font-normal max-w-2xl text-muted-foreground"
                                >
                                    6 AI employees active. Deployed across sales, marketing, operations,
                                    finance, growth and back-office. Based in Dubai. Deploying globally.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 32 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                                className="flex items-center flex-col md:flex-row justify-center gap-8"
                            >
                                <Button className="relative text-sm font-medium rounded-full h-14 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-[#bdff00] text-neutral-950 hover:bg-[#bdff00]/90">
                                    <span className="relative z-10 transition-all duration-500">
                                        Take the 60 Second Quiz
                                    </span>
                                    <span className="absolute right-1 w-10 h-10 bg-neutral-950 text-[#bdff00] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                                        <ArrowUpRight size={16} />
                                    </span>
                                </Button>
                                <div className="flex items-center sm:gap-7 gap-3">
                                    <ul className="avatar flex flex-row items-center">
                                        {avatarList.map((avatar, index) => (
                                            <li key={index} className="-mr-2 z-1 avatar-hover:ml-2">
                                                <img
                                                    src={avatar.image}
                                                    alt="Avatar"
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full border-2 border-white"
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="gap-1 flex flex-col items-start">
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <img
                                                    key={index}
                                                    src="https://images.shadcnspace.com/assets/svgs/icon-star.svg"
                                                    alt="star"
                                                    className="h-4 w-4"
                                                />
                                            ))}
                                        </div>
                                        <p className="sm:text-sm text-xs font-normal text-muted-foreground">
                                            Trusted by 1000+ clients
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <BrandSlider />

        </section>
    );
}

export default HeroSection;