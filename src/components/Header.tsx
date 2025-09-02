"use client"

import Link from "next/link"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi" // ícones do hamburguer

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[100px] bg-transparent backdrop-blur-[8px]">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo-primary.svg"
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8">
            <li>
              <Link href="#sobre" className="text-primary hover:underline">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#oque-fazemos" className="text-primary hover:underline">
                O que fazemos
              </Link>
            </li>
            <li>
              <Link
                href="#robopel"
                className="text-primary font-extrabold hover:underline"
              >
                ROBOPEL
              </Link>
            </li>
            <li>
              <Link href="#publicacoes" className="text-primary hover:underline">
                Publicações
              </Link>
            </li>
            <li>
              <Link href="#contato" className="text-primary hover:underline">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão hamburguer */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-[100px] left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col gap-6 p-6 text-primary">
            <li>
              <Link href="#sobre" onClick={() => setIsOpen(false)}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#oque-fazemos" onClick={() => setIsOpen(false)}>
                O que fazemos
              </Link>
            </li>
            <li>
              <Link href="#robopel" className="font-extrabold" onClick={() => setIsOpen(false)}>
                ROBOPEL
              </Link>
            </li>
            <li>
              <Link href="#publicacoes" onClick={() => setIsOpen(false)}>
                Publicações
              </Link>
            </li>
            <li>
              <Link href="#contato" onClick={() => setIsOpen(false)}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
