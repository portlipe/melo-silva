
const Hero = () => {
  return (
    <section id="hero" className="w-full h-screen relative z-0">
      <div className="h-full">
        <video
          src="/video_desktop.mp4"
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block w-full h-full object-cover"
        />
        <video
          src="/video_mobile.mp4"
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-30"></div>
      </div>
      <div className="absolute top-0 bottom-[132px] left-8 md:left-24 flex items-center z-50">
        <div className="hidden md:block">
          <h1 className="text-white text-4xl lg:text-[44px] lg:mt-[525px] md:text-[40px] lg:max-w-[903px] lg:h-[55px] lg:whitespace-nowrap lg:mb-1 md:max-w-[500px] font-normal leading-snug bg-[#736F5C]">
            Preparando o terreno para obras de grande
          </h1>
          <h2 className="text-white text-4xl lg:text-[44px] md:text-[40px] lg:max-w-[865px] lg:h-[55px] lg:whitespace-nowrap md:max-w-[500px] font-normal leading-snug bg-[#736F5C]">
            porte com quase <span className="font-semibold"> 200 projetos entregues </span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
