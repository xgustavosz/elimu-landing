"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  const openDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsDropdownOpen(true)
  }

  const closeDropdownWithDelay = (delay = 150) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false)
      closeTimeoutRef.current = null
    }, delay)
  }

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  return (
    <header className="font-lato fixed top-0 left-0 w-full z-50 h-[100px] bg-white/85 backdrop-blur-[8px]">
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
          <ul className="flex gap-8 relative">
            <li>
              <Link href="/#sobre" className="text-primary hover:underline">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/#oque-fazemos" className="text-primary hover:underline">
                O que fazemos
              </Link>
            </li>
            <li>
              <Link href="/#publicacoes" className="text-primary hover:underline">
                Publicações
              </Link>
            </li>
            <li>
              <Link href="/#contato" className="text-primary hover:underline">
                Contato
              </Link>
            </li>

            {/* Dropdown */}
            <li
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={() => closeDropdownWithDelay(180)}
            >
              <span
                className={`cursor-pointer font-extrabold text-primary transition-shadow ${isDropdownOpen ? "drop-shadow-[0_4px_4px_rgba(252,194,3,0.35)]" : ""
                  }`}
              >
                <Link href="/robopel" className="text-primary">
                  ROBOPEL
                </Link>
              </span>

              {isDropdownOpen && (
                <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-36 bg-white shadow-md rounded-md overflow-hidden text-center">
                  <li>
                    <Link href="/robopel/#evento" className="block px-4 py-2 hover:bg-gray-100">
                      O evento
                    </Link>
                  </li>
                  <li>
                    <Link href="/robopel/#linha-do-tempo" className="block px-4 py-2 hover:bg-gray-100">
                      Linha do tempo
                    </Link>
                  </li>
                  <li>
                    <Link href="/robopel/#materias" className="block px-4 py-2 hover:bg-gray-100">
                      Matérias
                    </Link>
                  </li>
                  <li>
                    <Link href="/robopel/#seja-parceiro" className="block px-4 py-2 hover:bg-gray-100">
                      Seja Parceiro
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Botão hamburguer */}
        <div className="relative md:hidden">
          <button
            className={`relative z-10 ${isOpen ? "mr-10 text-secondary text-4xl" : "mr-0 text-primary text-3xl"
              } md:hidden`}
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {isOpen && (
            <div
              ref={menuRef} // <-- ref adicionada aqui
              className="absolute bg-white/85 backdrop-blur-[20px] flex justify-end items-end h-[250px] rounded-[5px] border border-[#F0F0F0] top-[-10px] right-[-10px] text-end w-[130px]"
            >
              <ul className="flex flex-col gap-6 p-4 text-primary">
                <li>
                  <Link href="/#sobre" onClick={() => setIsOpen(false)}>
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/#oque-fazemos" onClick={() => setIsOpen(false)}>
                    O que fazemos
                  </Link>
                </li>
                <li>
                  <Link href="/#publicacoes" onClick={() => setIsOpen(false)}>
                    Publicações
                  </Link>
                </li>
                <li>
                  <Link href="/#contato" onClick={() => setIsOpen(false)}>
                    Contato
                  </Link>
                </li>
                <li className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`font-extrabold cursor-pointer transition-shadow ${isDropdownOpen ? "drop-shadow-[0_4px_4px_rgba(252,194,3,0.35)]" : ""
                      }`}
                  >
                    ... ROBOPEL
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute text-center border border-[#F0F0F0] rounded-[5px] py-2 w-[130px] bg-white top-[-2px] left-[-120px] flex flex-col gap-2">
                      <li>
                        <Link href="/robopel#evento" onClick={() => setIsOpen(false)}>
                          O evento
                        </Link>
                      </li>
                      <li>
                        <Link href="/robopel#linha-do-tempo" onClick={() => setIsOpen(false)}>
                          Linha do tempo
                        </Link>
                      </li>
                      <li>
                        <Link href="/robopel#materias" onClick={() => setIsOpen(false)}>
                          Matérias
                        </Link>
                      </li>
                      <li>
                        <Link href="/robopel#seja-parceiro" onClick={() => setIsOpen(false)}>
                          Seja Parceiro
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
