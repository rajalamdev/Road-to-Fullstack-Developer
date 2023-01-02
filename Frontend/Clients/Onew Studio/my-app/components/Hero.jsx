import Image from "next/image";
import hero from "../public/hero.png"
import arrowToCta from "../public/arrow.png"
import Link from "next/link";
import { UseAppContext } from "../context/AppContext";

export default function Hero() {
  const context = UseAppContext();  

  return (
    <div className="h-screen flex justify-center items-center my-16">
        <div className="flex gap-16 w-full justify-center md:items-start flex-col md:flex-row items-center">
            <div className="md:w-2/5 flex flex-col items-center md:items-start">
                <div className="font-extrabold lg:text-[46px] text-3xl">
                    <div className="text-header-secondary relative -z-10 lg:mb-4">
                        CREATIVE UI
                        <Image src={arrowToCta} className="absolute md:-left-[70px] tmd:op-8 md:w-[60px] w-[35px] -left-[45px] top-4" />
                    </div>
                    <div className="text-header-primary">DESIGNER.</div>
                </div>
                <div className="mt-4 hidden md:block">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae, earum dolore recusandae quam est.</p>
                </div>
                <div className="flex gap-4 mt-6 text-sm">
                    <Link className={`transition-all ${context.offCanvas ? "-z-10" : "z-0"} rounded w-max px-4 py-[6px] overflow-hidden group bg-header-primary relative hover:bg-gradient-to-r hover:from-bg-[#393E46] hover:to-bg-[#434850] text-[#eee] hover:ring-2 hover:ring-offset-2 hover:ring-header-primary ease-out duration-300 flex gap-4 text-sm`} 
                        target="_blank" 
                        href="https://wa.me/6289516106359?text=Hi%20saya%20tertarik%20dengan%20karya%20Anda"
                        rel="noopener noreferrer">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative text-shadow">Hire Me</span>
                    </Link>                            
                    <Link href="/portofolios" className={`${context.offCanvas ? "-z-10" : "z-0"} rounded w-max px-4 py-[6px] overflow-hidden group bg-[#393E46] relative hover:bg-gradient-to-r hover:from-bg-[#393E46] hover:to-bg-[#434850] text-[#eee] hover:ring-2 hover:ring-offset-2 hover:ring-header-primary transition-all ease-out duration-300`}>
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative text-shadow">Portofolios</span>
                    </Link>
                </div>
            </div>
            <div>
                <Image src={hero} width={312} height={100} alt="Hero Image" blurDataURL="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" placeholder="blur" />
            </div>
        </div>
    </div>
    
  )
}
