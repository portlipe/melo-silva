'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const customSmoothScroll = (target: number, duration: number) => {
    const start = window.scrollY;
    const distance = target - start;
    let startTime: number | null = null;

    const easeInOutQuad = (time: number, start: number, change: number, duration: number) => {
        time /= duration / 2;
        if (time < 1) return (change / 2) * time * time + start;
        time--;
        return (-change / 2) * (time * (time - 2) - 1) + start;
    };

    const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const nextPosition = easeInOutQuad(elapsed, start, distance, duration);
        window.scrollTo(0, nextPosition);
        if (elapsed < duration) {
            requestAnimationFrame(step);
        } else {
            window.scrollTo(0, target);
        }
    };

    requestAnimationFrame(step);
};

const scrollToSection = (id: string, offset: number = 0) => {
    const element = document.getElementById(id);
    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY + offset;
        customSmoothScroll(top, 800);
    }
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div
                className={`hidden lg:flex w-full md:py-10 md:px-24 justify-between items-center fixed top-0 z-40 transition-colors duration-300 ${
                    isScrolled ? 'bg-black/90' : 'bg-transparent'
                }`}
            >
                <Image 
                    src="/logo.svg" 
                    alt="logo" 
                    width={336} 
                    height={48} 
                />
                
                <div className="flex gap-7">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="md:text-xs text-white uppercase font-medium cursor-pointer"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection('services', -120)}
                        className="md:text-xs text-white uppercase font-medium cursor-pointer"
                    >
                        Serviços
                    </button>
                    <button
                        onClick={() => scrollToSection('about', -240)}
                        className="md:text-xs text-white uppercase font-medium cursor-pointer"
                    >
                        Sobre nós
                    </button>
                    <button
                        onClick={() => scrollToSection('differentials', -120)}
                        className="md:text-xs text-white uppercase font-medium cursor-pointer"
                    >
                        Diferenciais
                    </button>
                    <button
                        onClick={() => scrollToSection('projects', -120)}
                        className="md:text-xs text-white uppercase font-medium cursor-pointer"
                    >
                        Projetos
                    </button>
                    <button
                        onClick={() => scrollToSection('phrase', -120)}
                        className="md:text-xs text-white uppercase font-medium cursor-pointer"
                    >
                        Institucional
                    </button>
                    <button
                        onClick={() => scrollToSection('customers', -120)}
                        className="md:text-xs text-white uppercase font-medium cursor-pointer"
                    >
                        Clientes
                    </button>
                    <button
                        onClick={() => scrollToSection('footer')}
                        className="md:text-xs text-white uppercase font-medium cursor-pointer"
                    >
                        Contato
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
