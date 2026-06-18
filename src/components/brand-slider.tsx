"use client";
import { motion } from "motion/react";
import { Marquee } from "./animations/Marquee";

const services = [
  { label: "AI Sales Employee" },
  { label: "AI Marketing Employee" },
  { label: "AI Operations Employee" },
  { label: "AI Finance Employee" },
  { label: "AI Growth Employee" },
  { label: "AI Back-Office Employee" },
  { label: "Lead Generation" },
  { label: "Customer Support" },
  { label: "Workflow Automation" },
  { label: "CRM Automation" },
  { label: "Content Creation" },
  { label: "Data & Reporting" },
];

function BrandSlider() {
  return (
    <section>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-center text-center py-3 md:py-4 relative">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden md:block h-0.5 w-40 bg-linear-to-l from-muted-foreground to-white opacity-20" />
                <p className="text-sm font-normal sm:px-2 px-10 text-muted-foreground text-center">
                  One studio. Every business function covered.
                </p>
                <div className="hidden md:block h-0.5 w-40 bg-linear-to-r from-muted-foreground to-white opacity-20" />
              </div>
            </div>
            <div className="py-4">
              <Marquee pauseOnHover className="[--duration:30s] p-0">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 mr-4 lg:mr-6 px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm font-medium text-neutral-700 whitespace-nowrap"
                  >
                    {service.label}
                  </div>
                ))}
              </Marquee>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;