"use client";
import { useState } from "react";

import {
  ArrowRightIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#modalities", label: "Modalidades" },
  { href: "#instructors", label: "Instrutoras" },
  { href: "#plans", label: "Planos" },
  { href: "#local", label: "Nosso Endereço" },
];
const linkClass =
  "relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#D9A588] after:transition-all after:duration-300 hover:after:w-full text-[#2D5A46]";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  // navbar
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#F7F6F2] text-black">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" onClick={close}>
            <h2 className="text-xl font-bold text-[#2D5A46] md:text-3xl font-serif">
              Espaço Vital Pilates
            </h2>
          </a>
          <ul className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#trial_form"
                className="flex items-center justify-center gap-2 rounded-md bg-[#DCAA8F] px-5 py-2 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-[#C88A68]"
              >
                Agende sua Aula Experimental
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative flex h-10 w-10 items-center justify-center text-[#2D5A46] lg:hidden"
          >
            <ListIcon
              size={28}
              className={`absolute transition-all duration-300 ease-in-out ${
                open
                  ? "rotate-90 scale-50 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <XIcon
              size={28}
              className={`absolute transition-all duration-300 ease-in-out ${
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-50 opacity-0"
              }`}
            />
          </button>
        </nav>
        {/* menu do mobile */}
        <div
          id="mobile-menu"
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-5 px-6 pb-6 pt-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className={`${linkClass} inline-block`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  onClick={close}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#D9A588] px-5 py-3 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-[#C88A68]"
                >
                  Agende sua Aula Experimental
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
