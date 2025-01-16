'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleOpen = () => {
    setIsOpen((state) => !state)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
      toggleOpen()
    }
  }

  return (
    <div className="fixed top-0 z-20 w-full">
      <div
        className={`lg:hidden flex justify-between items-center py-8 px-[40px] max-w-[100vw] ${
          isOpen
            ? 'bg-[#8C2703]'
            : isScrolled
            ? 'bg-black/90'
            : 'bg-transparent'
        }`}
      >
        {!isOpen ? (
          <>
            <Image
              src="/logo.svg"
              alt="logo"
              width={198}
              height={46}
              className="cursor-pointer"
            />

            <Image
              src="/burguer.svg"
              alt="menu"
              height={25}
              width={25}
              className="cursor-pointer"
              onClick={toggleOpen}
            />
          </>
        ) : (
          <div className="flex items-center justify-between w-full">
            <Image
              src="/logo.svg"
              alt="logo"
              width={198}
              height={46}
              className="cursor-pointer"
            />
            <Image
              src="/close.svg"
              alt="menu"
              height={18}
              width={18}
              className="cursor-pointer"
              onClick={toggleOpen}
            />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="bg-[#8C2703] w-full pt-[80px] h-screen">
          <div className="w-full flex flex-col gap-6 pl-[40px]"> {/* Ajuste de alinhamento */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm md:text-xs text-white font-normal cursor-pointer text-left" // Alinhamento do texto
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm md:text-xs text-white font-normal cursor-pointer text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm md:text-xs text-white font-normal cursor-pointer text-left"
            >
              Sobre nós
            </button>
            <button
              onClick={() => scrollToSection('differentials')}
              className="text-sm md:text-xs text-white font-normal cursor-pointer text-left"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm md:text-xs text-white font-normal cursor-pointer text-left"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('phrase')}
              className="text-sm md:text-xs text-white font-normal cursor-pointer text-left"
            >
              Institucional
            </button>
            <button
              onClick={() => scrollToSection('customers')}
              className="text-sm md:text-xs text-white font-normal cursor-pointer text-left"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="text-sm md:text-xs text-white font-normal cursor-pointer text-left"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
