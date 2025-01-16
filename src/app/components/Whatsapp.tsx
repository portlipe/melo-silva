import Image from 'next/image'

const Whatsapp = () => {
  return (
    <div>
      <a className=" " href="https://api.whatsapp.com/send?phone=5511971571388">
        <Image
          src="/whatsapp-icon.svg"
          width={64}
          height={54}
          alt="whatsapp button"
          className="w-[45px] h-[40px] md:w-[52.55px] md:h-[52.66px] fixed bottom-10 right-7 md:right-10 z-50 transition-transform duration-300 hover:scale-110 cursor-pointer"
        />
      </a>
    </div>
  )
}

export default Whatsapp