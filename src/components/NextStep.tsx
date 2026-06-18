"use client";

import { ArrowUpRight, Blocks, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const cardImageClass =
  "w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]";

const NextStep = () => {
  return (
    <motion.section
      className="mx-auto w-full max-w-7xl px-6 pb-20 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
        <motion.h2
          className="text-3xl font-medium leading-10 tracking-[-0.04em] sm:text-4xl md:text-[40px] md:leading-13"
          variants={itemVariants}
        >
          Your Next Step
          <br />
          <span className="text-muted-foreground/80">
            See what we would build for your business.
          </span>
        </motion.h2>

        <motion.p
          className="mt-4 text-sm text-muted-foreground md:max-w-xs"
          variants={itemVariants}
        >
          We agree a clear success metric before we build. If we do not hit it,
          we keep working until we do.
        </motion.p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3">
        <motion.div
          className="group col-span-1 rounded-xl bg-[#f7f9f2] p-4 md:p-6 md:col-span-2 lg:col-span-1"
          variants={itemVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl bg-background md:hidden">
            <img
              src="https://images.unsplash.com/photo-1604328727766-a151d1045ab4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Strategy discussion"
              className={cardImageClass}
            />
          </div>

          <span className="text-xl font-medium tracking-[-0.01em]">
            In 30 Minutes You Will Get
          </span>

          <ul className="mt-6 space-y-5">
            <li>
              <div className="flex items-start gap-3">
                <Settings2 className="shrink-0" />
                <p className="-mt-0.5">
                  A map of the functions AI should own first.
                </p>
              </div>
            </li>

            <li>
              <div className="flex items-start gap-3">
                <Blocks className="shrink-0" />
                <p className="-mt-0.5">
                  A live walkthrough of what we would build.
                </p>
              </div>
            </li>
          </ul>

          <Button className="group relative mt-8 h-12 w-full cursor-pointer overflow-hidden rounded-full bg-[#bdff00] p-1 ps-6 pe-14 text-sm font-medium text-neutral-950 transition-all duration-500 hover:bg-[#bdff00]/90 hover:ps-14 hover:pe-6">
            <span className="relative z-10 transition-all duration-500">
              Take the 60 Second Quiz
            </span>
            <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-[#bdff00] transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </Button>
        </motion.div>

        <motion.div
          className="col-span-1 hidden overflow-hidden rounded-xl bg-[#f7f9f2] md:col-span-3 md:block lg:col-span-2"
          variants={itemVariants}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1604328727766-a151d1045ab4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Strategy discussion"
            className="h-full w-full rounded-xl object-cover md:h-[18.3rem]"
          />
        </motion.div>

        <motion.div
          className="col-span-1 hidden overflow-hidden rounded-xl bg-[#f7f9f2] md:col-span-3 md:block lg:col-span-2"
          variants={itemVariants}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Planning session"
            className="h-full w-full rounded-xl object-cover md:h-[18.3rem]"
          />
        </motion.div>

        <motion.div
          className="group col-span-1 rounded-xl bg-[#f7f9f2] p-4 md:p-6 md:col-span-2 lg:col-span-1"
          variants={itemVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="mb-6 aspect-video w-full overflow-hidden rounded-xl bg-background md:hidden">
            <img
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHwxaGVsbG8fHx8fHx8fA%3D%3D"
              alt="Planning session"
              className={cardImageClass}
            />
          </div>

          <span className="text-xl font-medium tracking-[-0.01em]">
            Clear Plan Before You Commit
          </span>

          <ul className="mt-6 space-y-4">
            <li>
              <div className="flex items-start gap-3">
                <Settings2 className="shrink-0" />
                <p className="-mt-0.5">
                  A clear estimate of cost and timeline before you commit.
                </p>
              </div>
            </li>

            <li>
              <div className="flex items-start gap-3">
                <Blocks className="shrink-0" />
                <p className="-mt-0.5">A 30-day ROI target agreed up front.</p>
              </div>
            </li>
          </ul>

          <Button className="group relative mt-8 h-12 w-full cursor-pointer overflow-hidden rounded-full bg-[#bdff00] p-1 ps-6 pe-14 text-sm font-medium text-neutral-950 transition-all duration-500 hover:bg-[#bdff00]/90 hover:ps-14 hover:pe-6">
            <span className="relative z-10 transition-all duration-500">
              Book a Free AI Audit
            </span>
            <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-[#bdff00] transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NextStep;
