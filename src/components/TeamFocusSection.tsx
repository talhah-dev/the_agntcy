import Image from "next/image";
import { ArrowUpRight, Sparkles, Users, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Less admin work",
  "Faster follow-up",
  "More human time",
];

export default function TeamFocusSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-16">
        <div className="grid gap-6 overflow-hidden lg:grid-cols-2 lg:gap-20">

          <div className="relative flex flex-col justify-center gap-6 ">
            <div className=" text-xs font-medium uppercase tracking-[0.2em] text-[#00545f]">
              Focus on what matters
            </div>

            <div className="max-w-xl space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl leading-tight lg:text-5xl">
                We don&apos;t replace your team. We delete the work that is wasting them.
              </h2>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                Your best people are spending their time on repetitive processes that keep the
                lights on but do not move the business forward. AI employees take that work so
                your team can focus on what actually requires a human.
              </p>
            </div>


            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button className="group relative h-14 w-fit cursor-pointer overflow-hidden rounded-full bg-[#bdff00] p-1 ps-6 pe-14 text-sm font-medium text-neutral-950 transition-all duration-500 hover:bg-[#bdff00]/90 hover:ps-14 hover:pe-6">
                <span className="relative z-10 transition-all duration-500">
                  Book a free AI audit
                </span>
                <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-[#bdff00] transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Button>
            </div>
          </div>

          <div className="">
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMHN0YXRlfGVufDB8fDB8fHww" alt="" className="rounded-2xl lg:min-h-[35rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
