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

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
      <Icon
        className="h-5 w-5 text-neutral-500 "
        strokeWidth={1.5}
      />
      <p className="text-sm font-semibold text-neutral-900 ">
        {title}
      </p>
      <p className="text-xs leading-relaxed text-neutral-500 ">
        {desc}
      </p>
    </div>
  );
}

export default function TimelineDemo() {
  const data = [
    {
      id: "01",
      title: "01",
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 md:text-xl text-lg font-semibold text-neutral-900 ">
              We tried automation before. It broke.
            </p>
            <p className=" font-normal text-neutral-700 text-sm ">
              Off-the-shelf tools break when your process changes. AI employees
              are built around your workflow, not the other way around.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <FeatureCard
              icon={Wrench}
              title="Built for You"
              desc="Every AI employee is configured around your specific process, not a generic template."
            />
            <FeatureCard
              icon={RefreshCw}
              title="Adapts Over Time"
              desc="As your workflow evolves, your AI employees evolve with it - no re-platforming needed."
            />
            <FeatureCard
              icon={CheckCircle}
              title="Zero Disruption"
              desc="We handle the transition. Your team keeps working while the AI layer is built underneath."
            />
          </div>
          <div className="h-48 w-full overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1586777521133-240451324108?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
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
            <p className="mb-3 md:text-xl text-lg font-semibold text-neutral-900 ">
              We don&apos;t have time to set it up.
            </p>
            <p className=" font-normal text-neutral-700 text-sm ">
              You don&apos;t. That&apos;s our job. You get a strategy session and a live
              AI employee in 14 days. You approve the brief. We build.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <FeatureCard
              icon={Target}
              title="Day 1 - Strategy"
              desc="A focused session to map your workflow, identify gaps, and set a clear 30-day ROI target."
            />
            <FeatureCard
              icon={ClipboardList}
              title="Day 7 - Brief Approved"
              desc="You review and sign off on the AI employee spec. No technical knowledge required."
            />
            <FeatureCard
              icon={Rocket}
              title="Day 14 - Live"
              desc="Your AI employee is deployed and running. You just show up to results."
            />
          </div>
          <div className="h-48 w-full overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1707528041466-83a325f01a3c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <p className="mb-3 md:text-xl text-lg font-semibold text-neutral-900 ">
              We&apos;re not sure what to automate first.
            </p>
            <p className=" font-normal text-neutral-700 text-sm ">
              That&apos;s exactly what the free AI audit is for. 30 minutes. We map
              the highest-value function and agree on a 30-day ROI target.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <FeatureCard
              icon={Search}
              title="Free AI Audit"
              desc="A no-obligation 30-minute session to uncover where AI can have the biggest immediate impact."
            />
            <FeatureCard
              icon={BarChart2}
              title="Priority Mapping"
              desc="We rank your automation opportunities by effort vs. return so you always start with the highest value."
            />
            <FeatureCard
              icon={DollarSign}
              title="30-Day ROI Target"
              desc="We agree on a measurable outcome before we build anything. No vague promises."
            />
          </div>
          <div className="h-48 w-full overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1636392051191-e21f558fd35e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
