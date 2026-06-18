import Image from "next/image";
import { ArrowUpRight, Sparkles, Users, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const highlights = [
  "Less admin work",
  "Faster follow-up",
  "More human time",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function TeamFocusSection() {
  return (
    <motion.section
      className="py-8 sm:py-12 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 overflow-hidden lg:grid-cols-2 lg:gap-20">

          <motion.div className="relative flex flex-col justify-center gap-6" variants={itemVariants}>
            <motion.div
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#00545f]"
              variants={itemVariants}
            >
              Focus on what matters
            </motion.div>

            <div className="max-w-xl space-y-5">
              <motion.h2
                className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl leading-tight lg:text-5xl"
                variants={itemVariants}
              >
                We don&apos;t replace your team. We delete the work that is wasting them.
              </motion.h2>
              <motion.p className="text-base leading-7 text-muted-foreground sm:text-lg" variants={itemVariants}>
                Your best people are spending their time on repetitive processes that keep the
                lights on but do not move the business forward. AI employees take that work so
                your team can focus on what actually requires a human.
              </motion.p>
            </div>


            <motion.div className="flex flex-col gap-3 sm:flex-row sm:items-center" variants={itemVariants}>
              <Button className="group relative h-14 w-fit cursor-pointer overflow-hidden rounded-full bg-[#bdff00] p-1 ps-6 pe-14 text-sm font-medium text-neutral-950 transition-all duration-500 hover:bg-[#bdff00]/90 hover:ps-14 hover:pe-6">
                <span className="relative z-10 transition-all duration-500">
                  Book a free AI audit
                </span>
                <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-[#bdff00] transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(189,255,0,0.24),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(0,84,95,0.18),transparent_45%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team collaborating around a workspace"
                width={1074}
                height={900}
                className="h-full w-full object-cover lg:min-h-[35rem]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
