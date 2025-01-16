
import React from 'react'
import Marquee from 'react-fast-marquee'
interface CardProps {
  title: string
  description: string
}

export default function CardsAnimation() {
  const banner1: CardProps[] = [
    {
      title: 'Contracta Engenharia Ltda:',
      description: 'Obra CDHU Bertioga – Transportes, aterro e compactação',
    },
    {
      title: 'Consórcio Contracta Telar:',
      description: 'Obra Metrô Borba Gato – Transporte, SP',
    },
    {
      title: 'Sobloco Construtora S.A:',
      description:
        'Aterro e terraplenagem – Reurbanização da Vila Militar, Bertioga, SP',
    },
    {
      title: 'Contracta Engenharia Ltda:',
      description: 'Obra CDH – Terraplanagem, Guarujá, SP',
    },
    {
      title: 'Fleury S.A:',
      description: 'Terraplenagem – Fleury Jardim Sul, Morumbi, SP',
    },
    {
      title: 'Fleury S.A:',
      description: 'Terraplenagem – Fleury Anália Franco, SP',
    },
  ]
  const banner2: CardProps[] = [
    {
      title: 'DP Barros Pavimentação e Construção Ltda:',
      description: 'Locação de caminhão basculante – Poder Itaim Paulista',
    },
    {
      title: 'FBS, DP Barros e TIISA:',
      description:
        'Terraplenagem e transporte de solo – DAEE Alargamento e Rebaixamento do Rio Baquirivu',
    },
    {
      title: 'DP Barros Pavimentação e Construção Ltda:',
      description: 'Transporte – Desassoreamento do Rio Tietê, Lote 04',
    },
    {
      title: 'FBS Construção Civil e Pavimentação S.A:',
      description:
        'Terraplenagem – CCR Implantação de Vias Marginais, Osasco, SP',
    },
    {
      title: 'Consórcio Central:',
      description: 'Transporte de solo – Anhangabaú',
    },
    {
      title: 'Telar Engenharia e Comércio S.A:',
      description:
        'Terraplenagem, transporte de resíduos e pavimentação – CPTM Estação João Dias',
    },
  ]
  const banner3: CardProps[] = [
    {
      title: 'Consórcio Canal Tietê:',
      description: 'Transporte de material – Desassoreamento da Calha do Tietê',
    },
    {
      title: 'Engebras Engenharia S.A:',
      description: 'Terraplenagem e pavimentação – Santa Branca, SP',
    },
    {
      title: 'AF-FIT Construções e Comércio Ltda:',
      description: 'Terraplenagem e pavimentação – Pinacoteca',
    },
    {
      title: 'Era-Técnica Engenharia Construção e Serviço Ltda:',
      description:
        'Locação de equipamentos – Emergencial Juqueí, São Sebastião, SP',
    },
    {
      title: 'Era-Técnica Engenharia Construção e Serviço Ltda:',
      description: 'Obra DER-Cubatão – Cubatão, SP',
    },
    {
      title: 'ITUCITY Empreendimentos Imobiliários SPE Ltda:',
      description: 'Terraplenagem – Bella Florença, Itu, SP',
    },
  ]

  const renderCards = (data: CardProps[]) => (
    <div className="flex pl-[20px] gap-[20px]">
      {data.map((card, index) => (
        <div
          key={index}
          className="bg-colorWhite w-max p-6 lg:p-[30px] font-inter text-[13px] bg-white"
        >
          <strong>{card.title}</strong>
          <br />
          {card.description}
        </div>
      ))}
    </div>
  )

  return (
    <div
      id="customers"
      className="overflow-hidden relative flex flex-col gap-5 p-2 text-black"
    >
      <Marquee gradient={false} speed={30}>
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <React.Fragment key={`banner1-${i}`}>
              {renderCards(banner1)}
            </React.Fragment>
          ))}
      </Marquee>

      <Marquee gradient={false} speed={30} direction="right">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <React.Fragment key={`banner2-${i}`}>
              {renderCards(banner2)}
            </React.Fragment>
          ))}
      </Marquee>

      <Marquee gradient={false} speed={30}>
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <React.Fragment key={`banner3-${i}`}>
              {renderCards(banner3)}
            </React.Fragment>
          ))}
      </Marquee>
    </div>
  );
}