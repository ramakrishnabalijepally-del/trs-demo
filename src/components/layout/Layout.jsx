import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import RegisterNav from "@/components/layout/RegisterNav";
import Colophon from "@/components/layout/Colophon";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <RegisterNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Colophon />
    </div>
  );
}
