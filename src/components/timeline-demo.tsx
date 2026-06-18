import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Wrench,
  RefreshCw,
  CheckCircle,
  Target,
  ClipboardList,
  Rocket,
  Search,
  BarChart2,
  DollarSign,
} from "lucide-react";

export default function TimelineDemo() {
  const data = [
    {
      id: "01",
      title: "01",
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-100">
              &ldquo;We tried automation before. It broke.&rdquo;
            </p>
            <p className="text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400">
              Off-the-shelf tools break when your process changes. AI employees
              are built around your workflow, not the other way around.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                id: "01-card-1",
                title: "Built for You",
                desc: "Every AI employee is configured around your specific process, not a generic template.",
                icon: Wrench,
              },
              {
                id: "01-card-2",
                title: "Adapts Over Time",
                desc: "As your workflow evolves, your AI employees evolve with it - no re-platforming needed.",
                icon: RefreshCw,
              },
              {
                id: "01-card-3",
                title: "Zero Disruption",
                desc: "We handle the transition. Your team keeps working while the AI layer is built underneath.",
                icon: CheckCircle,
              },
            ].map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
              >
                <card.icon
                  className="h-5 w-5 text-neutral-500 dark:text-neutral-400"
                  strokeWidth={1.5}
                />
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {card.title}
                </p>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="h-48 w-full overflow-hidden rounded-xl">
            <img
              src="https://placehold.co/800x400/f5f5f5/999999?text=Workflow+Automation"
              alt="Workflow Automation"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      id: "02",
      title: "02",
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-100">
              &ldquo;We don&apos;t have time to set it up.&rdquo;
            </p>
            <p className="text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400">
              You don&apos;t. That&apos;s our job. You get a strategy session and a live
              AI employee in 14 days. You approve the brief. We build.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                id: "02-card-1",
                title: "Day 1 - Strategy",
                desc: "A focused session to map your workflow, identify gaps, and set a clear 30-day ROI target.",
                icon: Target,
              },
              {
                id: "02-card-2",
                title: "Day 7 - Brief Approved",
                desc: "You review and sign off on the AI employee spec. No technical knowledge required.",
                icon: ClipboardList,
              },
              {
                id: "02-card-3",
                title: "Day 14 - Live",
                desc: "Your AI employee is deployed and running. You just show up to results.",
                icon: Rocket,
              },
            ].map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
              >
                <card.icon
                  className="h-5 w-5 text-neutral-500 dark:text-neutral-400"
                  strokeWidth={1.5}
                />
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {card.title}
                </p>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="h-48 w-full overflow-hidden rounded-xl">
            <img
              src="https://placehold.co/800x400/f5f5f5/999999?text=14+Day+Deployment"
              alt="14 Day Deployment"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      id: "03",
      title: "03",
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-100">
              &ldquo;We&apos;re not sure what to automate first.&rdquo;
            </p>
            <p className="text-xs font-normal text-neutral-600 md:text-sm dark:text-neutral-400">
              That&apos;s exactly what the free AI audit is for. 30 minutes. We map
              the highest-value function and agree on a 30-day ROI target.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                id: "03-card-1",
                title: "Free AI Audit",
                desc: "A no-obligation 30-minute session to uncover where AI can have the biggest immediate impact.",
                icon: Search,
              },
              {
                id: "03-card-2",
                title: "Priority Mapping",
                desc: "We rank your automation opportunities by effort vs. return so you always start with the highest value.",
                icon: BarChart2,
              },
              {
                id: "03-card-3",
                title: "30-Day ROI Target",
                desc: "We agree on a measurable outcome before we build anything. No vague promises.",
                icon: DollarSign,
              },
            ].map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
              >
                <card.icon
                  className="h-5 w-5 text-neutral-500 dark:text-neutral-400"
                  strokeWidth={1.5}
                />
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {card.title}
                </p>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="h-48 w-full overflow-hidden rounded-xl">
            <img
              src="https://placehold.co/800x400/f5f5f5/999999?text=AI+Audit+Session"
              alt="AI Audit Session"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
