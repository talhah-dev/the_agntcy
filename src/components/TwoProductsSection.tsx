"use client";

import { Instrument_Serif } from "next/font/google";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Zap, Brain, ArrowUpRight, Check, LucideIcon, Settings, Workflow, BellOff, AlertTriangle, Building2, MessageSquare, RefreshCcw, TrendingUp } from "lucide-react";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic"],
});

type CarouselItem = {
    id: string;
    title: string;
    icon: LucideIcon;
};

const automationItems: CarouselItem[] = [
    { id: "a1", title: "Preset logic, preset steps", icon: Settings },
    { id: "a2", title: "Runs one process reliably", icon: Workflow },
    { id: "a3", title: "No communication back to you", icon: BellOff },
    { id: "a4", title: "Breaks when context changes", icon: AlertTriangle },
];

const employeeItems: CarouselItem[] = [
    { id: "e1", title: "Owns a full function, not a single step", icon: Building2 },
    { id: "e2", title: "Communicates progress and flags issues", icon: MessageSquare },
    { id: "e3", title: "Adapts when context changes", icon: RefreshCcw },
    { id: "e4", title: "Measured by results, not tasks run", icon: TrendingUp },
];

function FeatureCarousel({ items, accent }: { items: CarouselItem[]; accent: "neutral" | "brand" }) {
    const [visible, setVisible] = useState<CarouselItem[]>(items.slice(0, 3));
    const [pointer, setPointer] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((prev) => {
                const nextIndex = (pointer + 1) % items.length;
                setPointer(nextIndex);
                return [...prev.slice(1), items[nextIndex]];
            });
        }, 2000);
        return () => clearInterval(interval);
    }, [pointer, items]);

    const isBrand = accent === "brand";

    return (
        <div className="relative flex flex-col items-center rounded-2xl h-52 w-full overflow-hidden">
            <AnimatePresence initial={false}>
                {visible.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ y: 215, opacity: 0, scale: 0.9 }}
                        animate={{
                            y: i * 70,
                            scale: i === 1 ? 1 : 0.9,
                            opacity: i === 1 ? 1 : 0.4,
                        }}
                        exit={{ y: -100, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className={`absolute flex items-center justify-between w-full px-5 py-4 rounded-xl border ${isBrand
                            ? "bg-white border-[#00545f]/20 text-neutral-800"
                            : "bg-white border-neutral-200 text-neutral-700"
                            }`}
                    >
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isBrand ? "bg-[#bdff00]" : "bg-neutral-100"
                                    }`}>
                                    <item.icon size={15} className={isBrand ? "text-neutral-950" : "text-neutral-500"} />
                                </div>
                                <span className="text-sm font-medium">{item.title}</span>
                            </div>
                            <Check size={16} className={isBrand ? "text-[#00545f]" : "text-neutral-400"} />
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

function TwoProductsSection() {
    return (
        <section className="w-full bg-white md:pt-20 pt-16 pb-24 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center text-center md:mb-16 gap-4 mb-8"
                >
                    <span className="text-sm font-semibold tracking-[0.05em] uppercase text-[#00545f]">
                        Two products. Two purposes.
                    </span>
                    <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.03em] text-neutral-950">
                        Automations execute. {" "}
                        <span className={` block text-[#00545f] ${instrumentSerif.className}`}>
                            Employees think.
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-4 md:p-10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center shrink-0">
                                <Zap size={22} className="text-neutral-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                                AI Automations
                            </h3>
                        </div>
                        <p className="text-base text-neutral-500 leading-relaxed">
                            Rigid task execution. Fast and fixed-fee. One workflow, one outcome.
                        </p>
                        <FeatureCarousel items={automationItems} accent="neutral" />
                        {/* <div className="pt-2 border-t border-neutral-200">
                            <p className="text-sm text-neutral-400 italic">
                                Best for single workflows that do not change.
                            </p>
                        </div> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col gap-6 rounded-3xl border border-[#00545f]/25 bg-[#00545f]/4 p-4 md:p-10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#bdff00] flex items-center justify-center shrink-0">
                                <Brain size={22} className="text-neutral-950" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                                AI Employees
                            </h3>
                        </div>
                        <p className="text-base text-neutral-500 leading-relaxed">
                            Versatile. Communicate with your team. Own an outcome. Adapt continuously.
                        </p>
                        <FeatureCarousel items={employeeItems} accent="brand" />
                        {/* <div className="pt-2 border-t border-[#00545f]/15">
                            <p className={`text-sm text-[#00545f] font-medium ${instrumentSerif.className} italic`}>
                                Best for outcomes that require judgement and communication.
                            </p>
                        </div> */}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="md:mt-14 mt-8  flex flex-col sm:flex-row items-center justify-between gap-6 px-2"
                >
                    <p className={`text-lg md:text-xl text-neutral-400 ${instrumentSerif.className} md:text-start text-center tracking-wide italic`}>
                        Most systems are rigid. That is why they break. Ours are alive.
                    </p>
                    <a
                        href="/ai-automations"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 hover:text-[#00545f] transition-colors duration-200 whitespace-nowrap"
                    >
                        Explore both products
                        <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </motion.div>
            </div>
        </section >
    );
}

export default TwoProductsSection;