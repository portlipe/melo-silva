'use client'
import { cn } from '../../../libs/utils';
import { Tomorrow } from 'next/font/google';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CustomNextIcon, CustomPrevIcon } from './Arrows';

const tomorrow = Tomorrow({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
  })
  
  interface Servicesprops {
    name: string
    img: string
    color: string
  }

  const services: Servicesprops[] = [
    { name: 'Terraplenagem', img: '/terraplanagem.png', color: 'bg-[#8C2703]' },
    {name: 'Locação de Equipamentos', img: '/locacao.png', color: 'bg-[#F24405]'},
    { name: 'Pavimentação', img: '/pavment.png', color: 'bg-[#8C2703]' },
    { name: 'Transporte', img: '/transport.png', color: 'bg-[#F24405]' },
  ]
  
  const Services = () => {
    return (
      <section
        id="services"
        className={cn(`py-[80px] md:py-[120px] px-4 md:px-24 bg-[#FAFAFA]`)}
      >
        <div className="max-w-[1440px] mx-auto">
          <h1
            className={cn(
              `text-black text-[30px] lg:text-[45px] w-full text-center uppercase font-medium mb-10 md:mb-20 ${tomorrow.className} `,
            )}
          >
            Serviços
          </h1>
  
          <div className="hidden md:grid grid-cols-4 gap-[17.52px]">
            {services.map((service) => (
              <div className="w-full h-full" key={service.img}>
                <div className="">
                  <Image
                    className="w-full h-full" 
                    src={service.img}
                    alt={service.name}
                    width={400}
                    height={400}
                  />
                </div>
                <div
                  className={cn(
                    'px-2 py-2 lg:px-4 lg:py-3 xl:px-6 xl:py-5',
                    service.color,
                  )}
                >
                  <p className="text-white text-sm lg:text-lg">{service.name}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="flex gap-5 items-center md:hidden relative">
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
              className=""
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="mb-12">
                    <Image
                      className="w-full h-full"
                      src={service.img}
                      alt={service.name}
                      width={400}
                      height={400}
                    />
                    <div className={`${service.color} p-6`}>
                      <h2 className="text-base font-normal text-white">
                        {service.name}
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <CustomNextIcon />
          </div>
        </div>
      </section>
    )
  }
  
  export default Services