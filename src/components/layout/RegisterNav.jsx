import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { sections, foliosInSection } from "@/data/register";
import logo from "@/assets/scraped/logo_new.png";
import { cn } from "@/lib/utils";

export default function RegisterNav() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onPointerDown(event) {
      if (navRef.current && !navRef.current.contains(event.target)) setOpenMenu(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const activeSection = sections.find((section) =>
    foliosInSection(section.key).some((entry) => entry.to === pathname),
  );

  return (
    <div ref={navRef} className="sticky top-0 z-50">
      <header className="border-b border-slate-100 bg-white/85 backdrop-blur-md">
        <div className="container-page">
          <div className="flex h-[88px] items-center justify-between gap-6">
            <Link to="/" className="flex shrink-0 items-center" aria-label="TRS Forms — home">
              <img src={logo} alt="TRS Forms — The Team that Innovates" className="h-14 w-auto object-contain" />
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
              {sections.map((section) => {
                const isOpen = openMenu === section.key;
                const isActive = activeSection?.key === section.key;
                return (
                  <div key={section.key} className="relative">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(isOpen ? null : section.key)}
                      onMouseEnter={() => setOpenMenu(section.key)}
                      className={cn(
                        "flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-[0.94rem] font-semibold transition-colors duration-150",
                        isOpen || isActive
                          ? "bg-brand-50 text-brand-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                      )}
                    >
                      {section.title}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
                      />
                    </button>

                    {isOpen && (
                      <div
                        onMouseLeave={() => setOpenMenu(null)}
                        className="absolute left-0 top-[calc(100%+8px)] w-[19rem] rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.25)]"
                      >
                        {foliosInSection(section.key).map((entry) => (
                          <Link
                            key={entry.to}
                            to={entry.to}
                            className="block rounded-xl px-3.5 py-2.5 text-[0.93rem] font-medium text-slate-600 transition-colors duration-150 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {entry.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button to="/product-demo-enquiry" className="hidden sm:inline-flex">
                Request a demo
              </Button>
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-slate-50 lg:hidden"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-88px)] overflow-y-auto border-b border-slate-200 bg-white lg:hidden">
          <div className="container-page py-6">
            <Button to="/product-demo-enquiry" size="lg" className="mb-7 w-full">
              Request a demo
            </Button>
            {sections.map((section) => (
              <div key={section.key} className="mb-6">
                <p className="mb-2 text-[0.78rem] font-bold uppercase tracking-[0.09em] text-slate-400">
                  {section.title}
                </p>
                <ul className="space-y-0.5">
                  {foliosInSection(section.key).map((entry) => (
                    <li key={entry.to}>
                      <Link
                        to={entry.to}
                        className="block rounded-lg px-2 py-2 text-[0.95rem] font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                      >
                        {entry.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
