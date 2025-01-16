'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'


const Clients: React.FC = () => {
    const logos = [
        '/customers/customer1.svg',
        '/customers/customer2.svg',
        '/customers/customer3.svg',
        '/customers/customer4.svg',
        '/customers/customer5.svg',
        '/customers/customer6.svg',
    ]

    return (
        <div className="overflow-hidden py-6 md:py-9 bg-white"
        id='clients'
        >
            <Marquee gradient={false} speed={40}>
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Logo ${index}`}
                        className="mr-16 md:mr-[100px] h-7 lg:h-auto"
                    />
                ))}
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Logo ${index}`}
                        className="mr-16 md:mr-[100px] h-7 lg:h-auto"
                    />
                ))}
            </Marquee>
        </div>
    )
}

export default Clients
