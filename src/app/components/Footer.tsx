'use client'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

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

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const top = element.offsetTop;
    customSmoothScroll(top, 800);
  }
};

export default function Footer() {

return (
    <section
      id="footer"
      className="w-full bg-[#736F5C] py-[165px] md:pt-[69px] pt-[52px] pb-[22px] text-white"
    >
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/6 md:px-0 px-[32px]">
            <Image
              src="/logo.svg"
              width={238}
              height={25}
              alt="Logo branca do site"
              className="md:w-[60%] w-[60%] mb-[40px] md:mb-0"
            />
          </div>
          <div className="w-[78%] lg:w-3/6 grid lg:grid-cols-3 grid-cols-2 gap-[25px] md:px-0 px-[32px]">
            <button
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer md:text-[13px] text-[12px] text-white font-normal order-1 text-left"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="cursor-pointer md:text-[13px] text-[12px] text-white order-2 font-normal text-left"
            >
              Projetos
            </button>

            <button
              onClick={() => scrollToSection('differentials')}
              className="cursor-pointer md:text-[13px] text-[12px] text-white md:order-3 order-5 font-normal text-left"
            >
              Diferenciais
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="cursor-pointer md:text-[13px] text-[12px] text-white md:order-4 order-3 font-normal text-left"
            >
              Serviços
            </button>

            <button
              onClick={() => scrollToSection('phrase')}
              className="cursor-pointer md:text-[13px] text-[12px] text-white md:order-5 order-6 font-normal text-left"
            >
              Clientes
            </button>

            <button
              onClick={() => scrollToSection('phrase')}
              className="cursor-pointer md:text-[13px] text-[12px] text-white md:order-6 order-4 font-normal text-left"
            >
              Institucional
            </button>
          </div>
          <ul className="w-full lg:w-1/6 flex flex-col gap-[25px] md:my-0 my-[40px] md:px-0 px-[32px]">
            <li className="flex items-center">
              <a
                className="flex flex-row items-center gap-2"
                href="https://api.whatsapp.com/send?phone=5511971571388"
              >
                <FaWhatsapp />
                <span className="mb-[2px] text-[12px] text-white">
                  +55 (11) 9 7157-1388
                </span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="flex flex-row items-center gap-2"
                href="mailto:contato@melosilva.com.br"
              >
                <Image
                  src="/email.svg"
                  alt="envelope"
                  width={17}
                  height={13}
                  className=""
                />
                <span className="mb-[4px] text-[12px] text-white">
                  contato@melosilva.com.br
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="border-b-[1px] border-white/20 md:mb-[20px] mb-[26px] md:mt-[70px]"></div>
        <div className="flex flex-row justify-between md:px-0 px-[32px]">
          <div className="flex gap-[6px] justify-center md:items-end items-start">
            <p className="text-white font-normal lg:text-[14px] md:text-[12px] text-[10px] leading-none">
              Desenvolvido por
            </p>
            <a href="https://zionsoftwarehouse.com.br/" target="_blank">
              <Image
                src="/logo_zion.svg"
                alt="Zion"
                width={44}
                height={13}
                className="ml-auto md:w-[44px] md:h-[16px] w-[33px] h-[10px]"
              />
            </a>
          </div>
          <span className="font-inter md:text-[13px] text-[9px] font-normal leading-[24px] text-left">
            © 2024 MELO SILVA
          </span>
        </div>
      </div>
    </section>
  );
}