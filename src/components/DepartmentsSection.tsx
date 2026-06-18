"use client";

import { Instrument_Serif } from "next/font/google";
import { motion } from "motion/react";
import {
    TrendingUp,
    Megaphone,
    Headphones,
    Settings2,
    Package,
    FileText,
    UserCheck,
    Calculator,
    Scale,
    ArrowUpRight,
} from "lucide-react";
import { Button } from "./ui/button";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic"],
});

type Department = {
    title: string;
    icon: React.ElementType;
    href?: string;
    comingSoon?: boolean;
};

const row1: Department[] = [
    { title: "Sales", icon: TrendingUp, href: "/ai-employees/after5" },
    { title: "Marketing", icon: Megaphone, href: "/ai-employees/seo" },
    { title: "Customer Service", icon: Headphones, href: "/ai-employees/crm" },
    { title: "Operations", icon: Settings2, href: "/ai-employees/operations" },
    { title: "Sales", icon: TrendingUp, href: "/ai-employees/after5" },
    { title: "Marketing", icon: Megaphone, href: "/ai-employees/seo" },
    { title: "Customer Service", icon: Headphones, href: "/ai-employees/crm" },
    { title: "Operations", icon: Settings2, href: "/ai-employees/operations" },
];

const row2: Department[] = [
    { title: "Procurement & Supply Chain", icon: Package, href: "/ai-employees/procurement" },
    { title: "Commercial & Tenders", icon: FileText, href: "/ai-employees/gtm" },
    { title: "Executive Support", icon: UserCheck, href: "/ai-employees/executive-assistant" },
    { title: "Finance & Accounts", icon: Calculator, comingSoon: true },
    { title: "Legal & Compliance", icon: Scale, comingSoon: true },
    { title: "Procurement & Supply Chain", icon: Package, href: "/ai-employees/procurement" },
    { title: "Commercial & Tenders", icon: FileText, href: "/ai-employees/gtm" },
    { title: "Executive Support", icon: UserCheck, href: "/ai-employees/executive-assistant" },
];

function DeptCard({ dept }: { dept: Department }) {
    const Icon = dept.icon;

    if (dept.comingSoon) {
        return (
            <div className="flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/40 px-8 py-6 w-56 h-36 cursor-default select-none">
                <Icon size={24} className="text-neutral-700" />
                <div className="flex flex-col items-center gap-1.5">
                    <span className="text-sm font-semibold text-neutral-600 text-center leading-snug">
                        {dept.title}
                    </span>
                    <span className="text-[10px] font-medium tracking-widest uppercase text-neutral-700 border border-neutral-800 px-2 py-0.5 rounded-full">
                        Coming Soon
                    </span>
                </div>
            </div>
        );
    }

    return (
        <a
            href={dept.href}
            className="group flex-shrink-0 relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-8 py-6 w-56 h-36 hover:border-[#bdff00]/40 hover:bg-neutral-900 transition-all duration-300 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-20 bg-[#bdff00]/10 rounded-full blur-2xl" />
            </div>
            <div className="relative w-10 h-10 rounded-xl bg-neutral-800 group-hover:bg-[#bdff00]/15 border border-neutral-700 group-hover:border-[#bdff00]/30 flex items-center justify-center transition-all duration-300">
                <Icon size={18} className="text-neutral-400 group-hover:text-[#bdff00] transition-colors duration-300" />
            </div>
            <span className="relative text-sm font-semibold text-neutral-300 group-hover:text-white text-center transition-colors duration-300 leading-snug">
                {dept.title}
            </span>
            <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={13} className="text-[#bdff00]" />
            </div>
        </a >
    );
}

function MarqueeRow({ items, direction }: { items: Department[]; direction: "left" | "right" }) {
    const translateFrom = direction === "left" ? "0%" : "-50%";
    const translateTo = direction === "left" ? "-50%" : "0%";

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
            />
            <div
                className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }}
            />
            <motion.div
                className="flex gap-4 w-max"
                initial={{ x: translateFrom }}
                animate={{ x: translateTo }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
            >
                {[...items, ...items].map((dept, i) => (
                    <DeptCard key={`${dept.title}-${i}`} dept={dept} />
                ))}
            </motion.div>
        </div>
    );
}

function DepartmentsSection() {
    return (
        <section className="w-full bg-neutral-950 py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-16 gap-5"
                >
                    <span className="text-xs  tracking-[0.2em] uppercase text-[#ffffff]/60">
                        Departments
                    </span>
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight max-w-3xl">
                        Find the part of your business{" "}
                        <span className={`${instrumentSerif.className} font-normal text-[#bdff00]`}>
                            AI should own
                        </span>{" "}
                        first.
                    </h2>
                    <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
                        Every department has repetitive work that drains the team. Pick yours
                        and see what an AI employee would own.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-4"
            >
                <MarqueeRow items={row1} direction="left" />
                <MarqueeRow items={row2} direction="right" />
            </motion.div>

            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    className="mt-14 flex justify-center"
                >
                    <a
                        href="/speak-with-sales"
                    >
                        <Button className="relative text-sm font-medium rounded-full h-14 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-[#bdff00] text-neutral-950 hover:bg-[#bdff00]/90">
                            <span className="relative z-10 transition-all duration-500">
                                Take the 60 Second Quiz
                            </span>
                            <span className="absolute right-1 w-10 h-10 bg-neutral-950 text-[#bdff00] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                                <ArrowUpRight size={16} />
                            </span>
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default DepartmentsSection;