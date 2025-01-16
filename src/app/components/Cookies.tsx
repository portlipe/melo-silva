'use client'
import { useState } from 'react'
import Cookies from 'js-cookie'

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(true)

    const handleAccept = () => {
        Cookies.set('cookieConsent', 'true', { expires: 365 })
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed flex justify-center w-full bottom-0 z-[99]">
            <div>
                <div className="bg-white max-w-[494px] px-[32px] py-[16px] md:py-[28px] text-center w-full md:items-start items-center flex flex-col justify-between md:gap-0">
                    <p className="md:text-[11px] text-[10px] text-black max-w-[400px] text-center pb-[20px]">
                        Utilizamos cookies para otimizar o site, personalizar conteúdo com
                        base na sua interação, e ao usá-lo você aceita o uso de cookies e
                        concorda com a política de privacidade ao enviar informações
                        pessoais.
                    </p>

                    <div className="w-full justify-center flex md:gap-[10px] gap-[8px]">
                        <button
                            onClick={handleAccept}
                            className="lg:text-[10px] text-[8px] whitespace-nowrap text-white font-bold text-white-500 cursor-pointer lg:px-[36px] px-[30px] md:py-[12px] py-[8px] bg-[#F25C05] leading-none hover:bg-[#F25C05]/60"
                        >
                            <p className="">Ok, entendi.</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookieConsent
