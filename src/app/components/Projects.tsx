'use client'
import { cn } from '../../../libs/utils'
import { Tomorrow } from 'next/font/google'
import CardsAnimation from './cards-projects'

const tomorrow = Tomorrow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const Projects = () => {
  return (
    <section
      id="projects"
      className={cn(`py-[80px] md:py-[120px] bg-[#FAFAFA] text-black`)}
    >
      <div className="max-w-[1440px] mx-auto md:pb-20">
        <h1
          className={cn(
            `text-black text-[30px] lg:text-[45px] w-full text-center uppercase font-medium md:mb-3 mb-[35px] ${tomorrow.className} `,
          )}
        >
          Projetos
        </h1>

        <div className="md:items-start items-center">
          <p className="md:text-[13px] text-[12px] font-light leading-[160%] text-center mx-auto md:max-w-[713px] max-w-[334px] md:mb-[20px] mb-[35px]">
          Ao longo de nossa trajetória, desenvolvemos e concluímos com sucesso inúmeros projetos de terraplanagem, sempre atendendo às necessidades específicas de cada cliente e assegurando a qualidade em cada etapa.
          </p>
        </div>
      </div>
      <CardsAnimation />
    </section>
  )
}

export default Projects