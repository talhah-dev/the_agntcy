import { ArrowRight, ArrowUpRight, Blocks, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const NextStep = () => {
    return (
        <div className="mx-auto w-full max-w-7xl px-6 md:py-20 pb-20">
            <div className="flex md:flex-row flex-col items-center justify-between w-full">

                <h2 className="font-medium text-3xl leading-10 tracking-[-0.04em] sm:text-4xl md:text-[40px] md:leading-13">
                    Your Next Step
                    <br />
                    <span className="text-muted-foreground/80">
                        See what we would build for your business.
                    </span>
                </h2>

                <p className="mt-4 text-sm md:max-w-xs  text-muted-foreground">
                    We agree a clear success metric before we build. If we do not hit it,
                    we keep working until we do.
                </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3">
                <div className="col-span-1 rounded-xl bg-[#f7f9f2] p-4 md:col-span-2 lg:col-span-1">
                    <div className="mb-6 aspect-video w-full rounded-xl bg-background md:hidden">
                        <img src="https://images.unsplash.com/photo-1604328727766-a151d1045ab4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full md:h-[18.3rem] rounded-xl object-cover " />
                    </div>

                    <span className="font-medium text-xl tracking-[-0.01em]">
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

                    <Button className="relative mt-8 w-full text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6  overflow-hidden cursor-pointer bg-[#bdff00] text-neutral-950 hover:bg-[#bdff00]/90">
                        <span className="relative z-10 transition-all duration-500">
                            Take the 60 Second Quiz
                        </span>
                        <span className="absolute right-1 w-10 h-10 bg-neutral-950 text-[#bdff00] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                            <ArrowUpRight size={16} />
                        </span>
                    </Button>
                </div>

                <div className="col-span-1 hidden rounded-xl overflow-hidden bg-[#f7f9f2] md:col-span-3 md:block lg:col-span-2" >
                    <img src="https://images.unsplash.com/photo-1604328727766-a151d1045ab4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full md:h-[18.3rem] rounded-xl object-cover " />
                </div>

                <div className="col-span-1 hidden rounded-xl bg-[#f7f9f2] md:col-span-3 md:block lg:col-span-2" >
                    <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full md:h-[18.3rem] rounded-xl object-cover " />
                </div>

                <div className="col-span-1 rounded-xl bg-[#f7f9f2] p-4 md:col-span-2 lg:col-span-1">
                    <div className="mb-6 aspect-video w-full rounded-xl bg-background md:hidden" >
                        <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full md:h-[18.3rem] rounded-xl object-cover " />
                    </div>

                    <span className="font-medium text-xl tracking-[-0.01em]">
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
                                <p className="-mt-0.5">
                                    A 30-day ROI target agreed up front.
                                </p>
                            </div>
                        </li>
                    </ul>

                    <Button className="relative mt-8 w-full text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6  overflow-hidden cursor-pointer bg-[#bdff00] text-neutral-950 hover:bg-[#bdff00]/90">
                        <span className="relative z-10 transition-all duration-500">
                            Book a Free AI Audit
                        </span>
                        <span className="absolute right-1 w-10 h-10 bg-neutral-950 text-[#bdff00] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                            <ArrowUpRight size={16} />
                        </span>
                    </Button>
                </div>
            </div>


        </div>
    );
};

export default NextStep;