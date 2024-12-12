import React, { useState, useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import logo from './media/logo.svg';
import terraplanagem from './media/terraplanagem.png';
import locacao from './media/locacao.png';
import pavment from './media/pavment.png';
import transport from './media/transport.png';
import whatsappIcon from './media/whatsapp-icon.svg';
import video_desktop from './media/video_desktop.mp4';
import differentials_1 from './media/differentials_1.svg';
import differentials_2 from './media/differentials_2.svg';
import differentials_3 from './media/differentials_3.svg';
import logos_1 from './media/Logos_1.png';
import logos_2 from './media/Logos_2.svg';
import logo_zion from './media/logo_zion.svg';
import whatsapp from './media/whatsapp.svg';
import email from './media/email.svg';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
  const [currentIndex, setCurrentIndex] = useState(0);
  const homeRef = useRef(null);
  const servicosRef = useRef(null);
  const sobreNosRef = useRef(null);
  const differentialsRef = useRef(null);
  const projetosRef = useRef(null);
  const institucionalRef = useRef(null);
  const clientsRef = useRef(null);
  const contatoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const aceitarCookies = () => {
    setShowPopup(false);
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      const targetPosition = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);
        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const servicos = [
    { id: 1, title: 'Terraplenagem', image: terraplanagem },
    { id: 2, title: 'Locação de Equipamentos', image: locacao },
    { id: 3, title: 'Pavimentação', image: pavment },
    { id: 4, title: 'Transporte', image: transport },
  ];

  const projetos = [
    { company: "Sobloco Construtora S.A:", description: "Aterro e terraplenagem – Reurbanização da Vila Militar, Bertioga, SP" },
    { company: "Contracta Engenharia Ltda:", description: "Obra CDH – Terraplenagem, Guarujá, SP" },
    { company: "Fleury S.A:", description: "Terraplenagem – Fleury Jardim Sul, Morumbi, SP" },
    { company: "DP Barros Pavimentação e Construção Ltda:", description: "Locação de caminhão basculante – Poder Itaim Paulista" },
    { company: "Consórcio Canal Tietê:", description: "Transporte de material – Desassoreamento da Calha do Tietê" },
    { company: "Engebras Engenharia S.A:", description: "Terraplenagem e pavimentação – Santa Branca, SP" },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="App">
      <section className="home" ref={homeRef}>
        <video autoPlay loop muted className="background-video">
          <source src={video_desktop} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <header className={isScrolled ? 'scrolled' : ''}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <button
            className={`burger-button ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>

          <nav className={`menu ${menuOpen ? 'open' : ''}`}>
            <button className="form-button" onClick={() => scrollToSection(homeRef)}>HOME</button>
            <button className="form-button" onClick={() => scrollToSection(servicosRef)}>SERVIÇOS</button>
            <button className="form-button" onClick={() => scrollToSection(sobreNosRef)}>SOBRE NÓS</button>
            <button className="form-button" onClick={() => scrollToSection(differentialsRef)}>DIFERENCIAIS</button>
            <button className="form-button" onClick={() => scrollToSection(projetosRef)}>PROJETOS</button>
            <button className="form-button" onClick={() => scrollToSection(institucionalRef)}>INSTITUCIONAL</button>
            <button className="form-button" onClick={() => scrollToSection(clientsRef)}>CLIENTES</button>
            <button className="form-button" onClick={() => scrollToSection(contatoRef)}>CONTATO</button>
          </nav>
        </header>

        <p>
          Preparando <strong>o terreno</strong> para obras <br />
          de grande porte com quase <br />
          <strong>200 projetos entregues</strong>
        </p>
      </section>

      <section className="servicos" ref={servicosRef}>
        <h2>SERVIÇOS</h2>
        {isMobile ? (
          <div className="carousel">
            <button className="prev-btn" onClick={handlePrev}>
              ❮
            </button>
            <div className="carousel-slide">
              <img src={servicos[currentIndex].image} alt={servicos[currentIndex].title} />
              <p>{servicos[currentIndex].title}</p>
            </div>
            <button className="next-btn" onClick={handleNext}>
              ❯
            </button>
          </div>
        ) : (
          <div className="servicos-container">
            {servicos.map((servico) => (
              <div key={servico.id} className="servico-item">
                <img src={servico.image} alt={servico.title} />
                <p>{servico.title}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="sobre" ref={sobreNosRef}>
        <div className="sobre-coluna">
          <p>
            <strong>Fundada em 2015,</strong> nossa empresa é especializada em <strong>serviços de terraplenagem</strong> para obras de grande porte.
          </p>
        </div>
        <div className="sobre-coluna">
          <p>
            Atuamos com escavação, nivelamento e compactação de solo, sempre utilizando equipamentos modernos e tecnologia de ponta. Nosso diferencial é o alto nível de qualidade no trabalho e a responsabilidade da equipe, que se dedica a garantir eficiência e precisão em cada projeto.
          </p>
          <p>
            Com um compromisso rigoroso com o cumprimento de prazos, atendemos grandes construtoras, assegurando resultados excepcionais em todas as etapas.
          </p>
        </div>
      </section>

      <section className='differentials' ref={differentialsRef}>
        <h2>NOSSOS DIFERENCIAIS</h2>
        <div className="differentials-container">
          <div className='differential-item_1'>
            <img src={differentials_1} alt="differentials_1" />
            <h3>Respeito ao meio ambiente</h3>
            <p>
              Comprometemo-nos com práticas <br />
              sustentáveis e com a preservação ambiental
              <br /> em todos os nossos projetos.
            </p>
          </div>
          <div className='differential-item_2'>
            <img src={differentials_2} alt="differentials_2" />
            <h3>Equipe qualificada</h3>
            <p>
              Em 10 anos de atuação, nossa empresa <br />
              nunca precisou refazer trabalho devido a <br />
              erros internos, evidenciando nossa precisão e <br />
              compromisso com a qualidade.
            </p>
          </div>
          <div className='differential-item_3'>
            <img src={differentials_3} alt="differentials_3" />
            <h3>Atendimento personalizado</h3>
            <p>
              Nossa empresa tem um histórico sólido de <br />
              entrega no prazo em todos os projetos.
            </p>
          </div>
        </div>
      </section>

      <section className="projetos" ref={projetosRef}>
        <h2>PROJETOS</h2>
        <p>Ao longo de nossa trajetória, desenvolvemos e concluímos com sucesso inúmeros projetos de terraplanagem, <br />
          sempre atendendo às necessidades específicas de cada cliente e assegurando a qualidade em cada etapa.</p>
        <div className="marquee-wrapper">
          <div className="marquee marquee-normal">
            {projetos.map((projeto, index) => (
              <div className="projeto-item" key={index}>
                <h4>{projeto.company}</h4>
                <p>{projeto.description}</p>
              </div>
            ))}
          </div>
          <div className="marquee marquee-reverse">
            {projetos.map((projeto, index) => (
              <div className="projeto-item" key={index}>
                <h4>{projeto.company}</h4>
                <p>{projeto.description}</p>
              </div>
            ))}
          </div>
          <div className="marquee marquee-normal">
            {projetos.map((projeto, index) => (
              <div className="projeto-item" key={index}>
                <h4>{projeto.company}</h4>
                <p>{projeto.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='phrase'>
        <p>
          Sempre dentro do prazo e<br />
          garantindo a <strong>mais alta qualidade,<br />
            eficiência e precisão.
          </strong>
        </p>
      </section>

      <section className='clients'>
        <div className='client-logo-container'>
          <img src={logos_1} alt='client-logo' />
          <img src={logos_2} alt='client-logo' />
        </div>
      </section>

      <section className='contato'>
        <div className="contato-content">
          <div className="contato-left">
            <img src={logo} alt="Logo Melo Silva" className="contato-logo" />
          </div>
          <nav className="contato-nav1">
            <button className="home-button" onClick={() => scrollToSection(homeRef)}>Home</button>
            <button className="service-button" onClick={() => scrollToSection(servicosRef)}>Serviços</button>
          </nav>
          <nav className="contato-nav2">
            <button className="project-button" onClick={() => scrollToSection(projetosRef)}>Projetos</button>
            <button className="clients-button" onClick={() => scrollToSection(clientsRef)}>Clientes</button>
          </nav>
          <nav className="contato-nav3">
            <button className="differentials-button" onClick={() => scrollToSection(differentialsRef)}>Diferenciais</button>
            <button className="institutional-button" onClick={() => scrollToSection(institucionalRef)}>Institucional</button>
          </nav>

          <nav className="contato-nav4">
            <button className="whatsapp" onClick={() => window.open('https://wa.me/5511971571388', '_blank')}><img src={whatsapp} alt='whatsapp-img' />  +55 (11) 9 7157-1388</button>
            <button className='email' onClick={() => window.open('contato@melosilva.com.br', '_blank')}><img src={email} alt='email-img' /> contato@melosilva.com.br</button>
          </nav>
        </div>
      </section>

      <section className='footer'>
        <div className="footer-line">
          <p>
            Desenvolvido por  <img src={logo_zion} alt='logo-zion' />
          </p>
          <p>&copy; 2024 Melo Silva</p>
        </div>
      </section>


      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>

      {showPopup && (
        <div className="popup-cookies">
          <div className="popup-content">
            Utilizamos cookies para otimizar o site, personalizar conteúdo com base na sua interação, e ao usá-lo você
            aceita o uso de cookies e concorda com a política de privacidade ao enviar informações pessoais.
            <button className="box-button" onClick={aceitarCookies}>
              Ok, Entendi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;