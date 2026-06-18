"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "motion/react";
import { TrendingUp, Megaphone, HeadphonesIcon, Settings2, ArrowUpRight } from "lucide-react"

const featureData = [
    {
        icon: TrendingUp,
        title: "Revenue Workforce",
        content: "AI Sales Rep + Business Development Executive + CRM Employee. Owns the journey from lead to closed deal.",
        href: "https://www.theagntcy.ae/workforce-packages/revenue"
    },
    {
        icon: HeadphonesIcon,
        title: "Customer Experience Workforce",
        content: "AI lead response + website chatbot + customer support agent. Owns every customer touchpoint.",
        href: "https://www.theagntcy.ae/workforce-packages/customer-experience"
    },
    {
        icon: Settings2,
        title: "Back-Office Workforce",
        content: "AI Operations + ERP Assistant + bespoke build. Owns the repetitive office.",
        href: "https://www.theagntcy.ae/workforce-packages/back-office"
    },
    {
        icon: Megaphone,
        title: "Marketing Workforce",
        content: "AI SEO + AI Ads. Owns content, campaigns, and visibility.",
        href: "https://www.theagntcy.ae/workforce-packages/marketing"
    },
];

const WorkforcePackages = () => {
    return (
        <section>
            <div className="lg:pb-20 sm:pb-16 pb-8 md:pt-30 pt-20 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-8">
                    <div className="flex flex-col gap-8 md:gap-12">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                            className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4"
                        >
                            <div className="flex flex-col gap-4 max-w-full items-center md:items-start text-center md:text-left md:max-w-xl">
                                <Badge
                                    variant={"outline"}
                                    className="px-3 py-1 h-auto text-sm font-normal"
                                >
                                    Workforce Packages
                                </Badge>
                                <h2 className="text-3xl md:text-4xl font-semibold">
                                    Don't hire an employee. Deploy a workforce.
                                </h2>
                                <p className="text-lg font-normal text-muted-foreground">
                                    Multiple AI employees working together to own an entire outcome. Not a single task. A whole function of your business.
                                </p>
                            </div>
                            <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-[#bdff00] text-neutral-950 hover:bg-[#bdff00]/90">
                                <span className="relative z-10 transition-all duration-500">
                                    Explore workforce packages
                                </span>
                                <span className="absolute right-1 w-10 h-10 bg-neutral-950 text-[#bdff00] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                                    <ArrowUpRight size={16} />
                                </span>
                            </Button>
                        </motion.div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.21, 0.47, 0.32, 0.98],
                                }}
                                className="p-6 sm:p-16 rounded-2xl bg-[url('https://images.shadcnspace.com/assets/feature/feature-01-img.webp')] object-cover bg-center h-full w-full bg-cover bg-no-repeat"
                            >
                                <Card className="flex items-start gap-12 has-data-[slot=card-footer]:pb-6! sm:has-data-[slot=card-footer]:pb-10! pt-6 sm:py-10 border-none shadow-none ring-0 rounded-lg">
                                    <CardContent className="flex flex-col gap-6 px-6 sm:px-8">
                                        <Avatar className="size-12">
                                            <AvatarFallback>
                                                <img
                                                    src="https://images.shadcnspace.com/assets/profiles/user-1.jpg"
                                                    className="rounded-full"
                                                />
                                            </AvatarFallback>
                                        </Avatar>
                                        <h3 className="text-xl sm:text-2xl font-medium">
                                            "We replaced three full-time hires with The Agntcy's Revenue Workforce. Our pipeline didn't just grow it became self-sustaining."
                                        </h3>
                                    </CardContent>
                                    <CardFooter className="bg-card border-none w-full px-6 sm:px-8 py-0 flex flex-col items-start gap-0.5">
                                        <p className="text-sm font-medium text-primary">
                                            SARAH AL MANSOORI
                                        </p>
                                        <span className="text-xs font-normal text-muted-foreground uppercase">
                                            CEO @THEAGNTCY
                                        </span>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                                {featureData?.map((value, index) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ x: 100, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                ease: [0.21, 0.47, 0.32, 0.98],
                                            }}
                                        >
                                            <a href={value.href} className="block h-full">
                                                <Card className="py-8 bg-muted ring-0 border-0 h-full hover:bg-muted/70 transition-colors cursor-pointer">
                                                    <CardContent className="w-full h-full px-8 flex flex-col items-start gap-12 justify-between">
                                                        <value.icon
                                                            className="w-6 h-6 text-muted-foreground"
                                                            strokeWidth={1.5}
                                                        />
                                                        <div className="flex flex-col gap-2">
                                                            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                                                                {value.title}
                                                            </p>
                                                            <p className="text-base text-primary font-normal">
                                                                {value?.content}
                                                            </p>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </a>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkforcePackages;