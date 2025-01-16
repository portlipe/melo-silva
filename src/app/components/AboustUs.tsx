const AboutUs: React.FC = () => {
  return (
    <div
      id="about"
      className="px-24 pt-[40px] pb-[80px] w-full md:grid md:grid-cols-2 items-center md:gap-[50px] lg:gap-[120px] bg-[#FAFAFA] text-black relative"
    >
      <h1 className="text-2xl md:text-[30px] lg:text-[40px] leading-[130%] max-w-[580px] z-10">
        <span className="font-bold">Fundada em 2015</span>, nossa empresa é
        especializada em{' '}
        <span className="font-bold">serviços de terraplenagem</span> para
        obras de grande porte.
      </h1>

      <div className="pt-[40px] md:pt-0 max-w-[535px] z-10">
        <p className="text-[13px] font-light leading-[160%]">
          Atuamos com escavação, nivelamento e compactação de solo, sempre
          utilizando equipamentos modernos e tecnologia de ponta. Nosso
          diferencial é o alto nível de qualidade no trabalho e a
          responsabilidade da equipe, que se dedicam a garantir eficiência e
          precisão em cada projeto.
        </p>

        <p className="mt-5 text-[13px] font-light leading-[160%]">
          Com um compromisso rigoroso com o cumprimento de prazos, atendemos
          grandes construtoras, assegurando resultados excepcionais em todas
          as etapas.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
