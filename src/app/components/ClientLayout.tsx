// app/components/ClientLayout.tsx
"use client";

import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force light mode
    document.documentElement.classList.remove("dark");
    document.documentElement.style.scrollBehavior = "smooth";
    // Initialize AOS for scroll animations
    import('aos').then((AOS) => {
      AOS.init({ duration: 800, once: true });
    });
    // Initialize VanillaTilt for 3D tilt on elements with class 'tilt'
    import('vanilla-tilt').then((VanillaTilt) => {
      const elements = document.querySelectorAll('.tilt');
      elements.forEach((el) => {
        VanillaTilt.default.init(el, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
        });
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
