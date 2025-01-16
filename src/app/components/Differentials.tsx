'use client'
import { cn } from '../../../libs/utils'
import { Tomorrow } from 'next/font/google'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Card, CardContent } from '../ui components/cards'
import Image from 'next/image'
import { Pagination, Navigation } from 'swiper/modules'
import { CustomPrevIcon, CustomNextIcon } from './Arrows'

const tomorrow = Tomorrow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const Differentials = () => {
  return (
    <section
      id="differentials"
      className={cn(
        `py-[80px] md:py-[120px] px-4 lg:px-[188px] md:px-[90px] relative bg-white`,
      )}
    >
      <div className="max-w-[1440px] mx-auto">
        <h1
          className={cn(
            `text-black mb-10 text-[30px] lg:text-[45px] w-full text-center uppercase font-medium md:mb-20 ${tomorrow.className} `,
          )}
        >
          nossos diferenciais
        </h1>

        <div className="hidden md:grid grid-cols-3 gap-[60px]">
          <Card className="border-[#736F5C]/20 rounded-none shadow-none relative mb-10">
            <CardContent className="p-6 flex flex-col gap-[30px] items-center md:items-start ">
              <Image
                src="/differentials_1.svg"
                height={36}
                width={36}
                alt="Respeito ao meio ambiente"
              />
              <strong className="font-semibold text-lg text-black">
                Respeito ao meio ambiente
              </strong>
              <p className="text-[13px] font-light leading-[160%] text-center md:text-start text-black">
                Comprometemo-nos com práticas sustentáveis e com a preservação
                ambiental em todos os nossos projetos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#736F5C]/20 rounded-none shadow-none relative mb-10">
            <CardContent className="p-6 flex flex-col gap-[30px] items-center md:items-start">
              <Image
                src="/differentials_2.svg"
                height={36}
                width={36}
                alt="Excelência comprovada"
              />
              <strong className="font-semibold text-lg text-black">
                Excelência comprovada
              </strong>
              <p className="text-[13px] font-light leading-[160%] text-center md:text-start text-black">
                Em 10 anos de atuação, nossa empresa nunca precisou refazer
                trabalho devido a erros internos, evidenciando nossa precisão e
                compromisso com a qualidade.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#736F5C]/20 rounded-none shadow-none relative mb-10  ">
            <CardContent className="p-6 flex flex-col gap-[30px] items-center md:items-start">
              <Image
                src="/differentials_3.svg"
                height={36}
                width={36}
                alt="Pontualidade"
              />
              <strong className="font-semibold text-lg text-black">Pontualidade</strong>
              <p className="text-[13px] font-light leading-[160%] text-center md:text-start text-black">
                Nossa empresa tem um histórico sólido de entrega no prazo em
                todos os projetos.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 items-center md:hidden relative">
          <CustomPrevIcon />
          <Swiper
            spaceBetween={17}
            loop
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            modules={[Pagination, Navigation]}
            slidesPerView={1}
          >
            <SwiperSlide>
              <Card className="border-[#736F5C]/20 rounded-none shadow-none relative mb-10 min-h-[280px]">
                <CardContent className="p-6 flex flex-col gap-[30px] items-center md:items-start">
                  <Image
                    src="/differentials_1.svg"
                    height={36}
                    width={36}
                    alt="Respeito ao meio ambiente"
                  />
                  <strong className="font-semibold text-lg text-black">
                    Respeito ao meio ambiente
                  </strong>
                  <p className="text-[13px] font-light leading-[160%] text-center md:text-start text-black">
                    Comprometemo-nos com práticas sustentáveis e com a
                    preservação ambiental em todos os nossos projetos.
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="border-[#736F5C]/20 rounded-none shadow-none relative mb-10 min-h-[280px]">
                <CardContent className="p-6 flex flex-col gap-[30px] items-center md:items-start">
                  <Image
                    src="/differentials_2.svg"
                    height={36}
                    width={36}
                    alt="Excelência comprovada"
                  />
                  <strong className="font-semibold text-lg text-black">
                    Excelência comprovada
                  </strong>
                  <p className="text-[13px] font-light leading-[160%] text-center md:text-start text-black">
                    Em 10 anos de atuação, nossa empresa nunca precisou refazer
                    trabalho devido a erros internos, evidenciando nossa
                    precisão e compromisso com a qualidade.
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="border-[#736F5C]/20 rounded-none shadow-none relative mb-10 min-h-[280px]">
                <CardContent className="p-6 flex flex-col gap-[30px] items-center md:items-start   ">
                  <Image
                    src="/differentials_3.svg"
                    height={36}
                    width={36}
                    alt="Pontualidade"
                  />
                  <strong className="font-semibold text-lg text-black">
                    Pontualidade
                  </strong>
                  <p className="text-[13px] font-light leading-[160%] text-center md:text-start text-black">
                    Nossa empresa tem um histórico sólido de entrega no prazo em
                    todos os projetos.
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          </Swiper>
          <CustomNextIcon />

          {/* Custom pagination dots */}
          <div className="swiper-pagination !bottom-[-40px]"></div>
        </div>
      </div>
    </section>
  )
}

export default Differentials