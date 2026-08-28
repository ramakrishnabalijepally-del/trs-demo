import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { foliosInSection } from "@/data/register";
import logo from "@/assets/scraped/logo_new.png";
import { FacebookIcon, LinkedInIcon, YouTubeIcon } from "@/components/icons/SocialIcons";

const usefulLinks = [
  { to: "/about-us", label: "About us" },
  { to: "/success-stories", label: "Success stories" },
  { to: "/events-news", label: "Events / news" },
  { to: "/careers", label: "Careers" },
  { to: "/resources", label: "Resources" },
  { to: "/product-demo-enquiry", label: "Contact us" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedInIcon },
  { label: "YouTube", href: "https://www.youtube.com/", Icon: YouTubeIcon },
];

function Column({ heading, items }) {
  return (
    <div>
      <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.09em] text-white">{heading}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="text-[0.92rem] text-slate-400 transition-colors duration-150 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Colophon() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container-page py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="inline-flex rounded-xl bg-white px-3 py-2">
              <img src={logo} alt="TRS Forms — The Team that Innovates" className="h-12 w-auto object-contain" />
            </span>
            <p className="mt-5 max-w-xs text-[0.92rem] leading-[1.7] text-slate-400">
              Automating examination processes for India's universities, boards and recruitment
              bodies since 1993.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors duration-150 hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <Column heading="Products" items={foliosInSection("P")} />
          <Column heading="Services" items={foliosInSection("S")} />

          <div>
            <Column heading="Company" items={usefulLinks} />
            <ul className="mt-7 space-y-3 text-[0.9rem]">
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" strokeWidth={2} />
                <a href="mailto:sales@trsforms.com" className="hover:text-white">
                  sales@trsforms.com
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" strokeWidth={2} />
                <span>044-24724565 / 044-23725253</span>
              </li>
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" strokeWidth={2} />
                <span className="leading-[1.6]">
                  No 23, Chakrapani Street, West Mambalam, Chennai 600 033
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-page py-6">
          <p className="text-center text-[0.85rem] text-slate-500">
            © 2022 TRS Forms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
