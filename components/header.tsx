'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/services" },
    { name: "Proyectos", href: "/projects" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-300/80 backdrop-blur-md border-b border-neutral-700 shadow-sm">
      <div className="container mx-auto grid grid-cols-3 items-center py-3 px-6">
        {/* Logo - Izquierda */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center gap-2  overflow-hidden">
            <Image
              src="/grupo-rf-logo.png"
              alt="Grupo RF Logo"
              width={120}
              height={60}
              className="transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centro */}
        <nav className="hidden flex items-center sm:items-center justify-right sm:justify-center gap-8 text-md font-medium overflow-hidden">
          {mounted && navItems.map((item) => {
            const isActive = item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 relative ${
                  isActive ? 'text-blue-950 underline underline-offset-4 decoration-blue-950' : 'text-gray-800 hover:text-blue-950'
                }`}
              >
                {item.name}
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-950 rounded-full"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Contact - Derecha */}
        <div className="hidden md:flex items-center justify-center gap-4">
         
          <Button asChild className="bg-blue-950 hover:bg-blue-900 rounded-full px-6 shadow-md transition-all">
            <Link href="/contact" className="text-white hover:text-white">Presupuesto</Link>
          </Button>
        </div>

        {/* Mobile Menu Button - Solo visible en móvil */}
        <div className="md:hidden flex justify-center items-center">
          <Button
            variant="ghost"
            size="lg"
            className="p-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-100 border-t border-gray-200 dark:border-neutral-700 overflow-hidden"
          >
            <div className="container px-4 py-4 space-y-4">
              {mounted && navItems.map((item) => {
                const isActive = item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block text-sm font-medium transition-colors ${
                      isActive ? 'text-blue-950 underline underline-offset-4 decoration-blue-950' : 'text-gray-800 hover:text-blue-950'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              <div className="flex items-center gap-2 text-sm font-medium">
                <a
                  href="https://wa.me/56972304874"
                  className="text-gray-800 hover:text-blue-950 hover:underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>+56 9 7230 4874</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}