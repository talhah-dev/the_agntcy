import Link from "next/link";
import Logo from "@/assets/logo/logo";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const footerSections = [
  {
    title: "AI Employees",
    links: [
      { title: "AI Sales Rep (After5)", href: "/ai-employees/after5" },
      { title: "AI Business Development Executive", href: "/ai-employees/gtm" },
      { title: "AI CRM Employee", href: "/ai-employees/crm" },
      { title: "AI SEO Specialist", href: "/ai-employees/seo" },
      { title: "AI Ads Specialist", href: "/ai-employees/ads" },
      { title: "AI Operations Employee", href: "/ai-employees/operations" },
      { title: "AI Procurement Employee", href: "/ai-employees/procurement" },
      {
        title: "AI Executive Assistant",
        href: "/ai-employees/executive-assistant",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Automations", href: "/ai-automations" },
      { title: "Workforce Packages", href: "/workforce-packages" },
      { title: "Pricing", href: "/pricing" },
      { title: "About", href: "/about" },
      { title: "Blog", href: "/blog" },
      { title: "Careers", href: "/careers" },
      { title: "Book a Free AI Audit", href: "/speak-with-sales" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-5 xl:px-20">
        <div className="py-12">
          <div className="grid grid-cols-2 lg:grid-cols-10 gap-10">
            <div className="col-span-2 lg:col-span-3">
              <div className="flex flex-col gap-5 items-start">
                <Image src={"/logo.svg"} alt="The Agntcy Logo" width={140} height={40} className="h-5.5 invert w-auto"
                />

                <p className=" text-muted-foreground max-w-sm leading-relaxed">
                  AI employees for serious operational businesses.
                </p>

                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="tel:+971585992301"
                      className="flex items-center gap-2  text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone
                        size={15}
                        className="text-[#00545f] shrink-0"
                      />
                      +971 58 599 2301
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:sales@theagntcy.ae"
                      className="flex items-center gap-2  text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail
                        size={15}
                        className="text-[#00545f] shrink-0"
                      />
                      sales@theagntcy.ae
                    </a>
                  </li>

                  <li className="flex items-center gap-2  text-muted-foreground">
                    <MapPin
                      size={15}
                      className="text-[#00545f] shrink-0"
                    />
                    Ajman Free Zone, UAE
                  </li>
                </ul>

                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-[#00545f] transition-colors"
                  >
                    <BsTwitter size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/louis-grange0405/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#00545f] transition-colors"
                  >
                    <LiaLinkedin size={26} />
                  </a>

                  <a
                    href="#"
                    className="text-muted-foreground hover:text-[#00545f] transition-colors"
                  >
                    <BsInstagram size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-1 hidden lg:block" />

            {footerSections.map(({ title, links }) => (
              <div key={title} className="col-span-2">
                <div className="flex flex-col gap-4">
                  <p className="text-base font-medium text-foreground">
                    {title}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {links.map(({ title, href }) => (
                      <li key={title}>
                        <Link
                          href={href}
                          className=" font-normal text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-span-full lg:col-span-2">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">
                  Free AI Audit
                </p>

                <p className=" font-normal text-muted-foreground leading-relaxed">
                  30 minutes. We map the exact functions in your business an AI
                  employee could own.
                </p>

                <Link
                  href="/contact"
                >
                  <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-[#bdff00] text-neutral-950 hover:bg-[#bdff00]/90">
                    <span className="relative z-10 transition-all duration-500">
                      Book yours free
                    </span>
                    <span className="absolute right-1 w-10 h-10 bg-neutral-950 text-[#bdff00] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator orientation="horizontal" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
          <p className="text-sm font-normal text-muted-foreground">
            © 2026 The AGNTCY Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;