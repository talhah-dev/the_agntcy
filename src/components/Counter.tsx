"use client"

import { Plus } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "motion/react";


const statisticsCounter = [
    {
        title: "Total Projects Completed",
        count: 40
    },
    {
        title: "Years of Experience",
        count: 15
    },
    {
        title: "Design Awards",
        count: 12
    },
]

type statisticsCounter = {
    title: string;
    count: number;
}[];

const AnimatedCounter = ({
    value,
    isInView,
}: {
    value: number;
    isInView: boolean;
}) => {
    const springValue = useSpring(0, {
        bounce: 0,
        duration: 2000,
    });

    const displayValue = useTransform(springValue, (current) =>
        Math.round(current)
    );

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return <motion.span>{displayValue}</motion.span>;
};

const Counter = () => {
    const statsRef = useRef(null);
    const isInView = useInView(statsRef, { once: true, margin: "-100px" });

    return (
        <section className="lg:py-20 sm:py-16 py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
                <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
                    <div
                        ref={statsRef}
                        className="w-full grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-0"
                    >
                        {statisticsCounter?.map((value, index) => {
                            return (
                                <div
                                    key={index}
                                    className="relative px-6 py-5 sm:py-10 gap-3 flex flex-col items-center justify-center"
                                >
                                    {index !== 0 && (
                                        <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-40 bg-border" />
                                    )}
                                    <div className="flex gap-0 sm:gap-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium">
                                        <Plus
                                            strokeWidth={3.5}
                                            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12"
                                        />
                                        <AnimatedCounter
                                            value={value.count}
                                            isInView={isInView}
                                        />
                                    </div>
                                    <p className="text-base font-normal text-muted-foreground text-center">
                                        {value.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;
