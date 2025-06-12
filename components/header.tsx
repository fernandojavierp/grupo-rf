'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";




export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/services" },
    { name: "Proyectos", href: "/projects" },
    { name: "Antes y Después", href: "/before-after" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full  bg-neutral-300/80 backdrop-blur-md border-b border-neutral-700 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-28 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 py-2">
          <Image
            src="/grupo-rf-logo.png"
            alt="Grupo RF Logo"
            width={120}
            height={60}
            className="transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-md font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-950 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact, CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          
          <div className="flex items-center gap-2 text-sm">
            <a
                href="https://wa.me/56972304874"
                className="text-primary hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
            <span>+56 9 7230 4874</span>
            </a>
          </div>
          <Button asChild className="bg-blue-950 hover:bg-blue-900 rounded-full px-6 shadow-md transition-all">
            <Link href="/contact" className="text-white hover:text-white">Presupuesto</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium transition-colors hover:text-blue-950"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
             
              
              <div className="flex items-center gap-2 text-sm">
            <a
                href="https://wa.me/56972304874"
                className="text-primary hover:underline transition-colors"
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