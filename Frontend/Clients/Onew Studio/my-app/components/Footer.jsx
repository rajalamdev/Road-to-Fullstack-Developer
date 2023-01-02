import { faHouse, faUser, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  return (
    <div className="flex flex-col text-header-secondary justify-center border-t border-t-white/10 px-8 py-4 fixed bottom-0 left-0 right-0 bg-navbar-primary z-10">
        {/* <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex gap-4 sm:gap-20 items-center text-xs md:text-sm">
                <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faHouse} />
                    Home
                </div>
                <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faUser} />
                    About us
                </div>
                <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faPhone} />
                    Contact
                </div>
            </div>
            <div className="flex gap-4 items-center text-xs md:text-sm">
                <div className="flex gap-2 items-center bg-[#393E46] p-2 rounded-full text-pink-600">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="flex gap-2 items-center bg-[#393E46] p-2 rounded-full text-green-600">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <div className="flex gap-2 items-center bg-[#393E46] p-2 rounded-full text-red-600">
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
            </div>
        </div> */}
        <div className="text-xs md:text-sm flex sm:justify-between flex-col sm:flex-row items-center gap-1">
            <div>&#169; 2022 Onew Studio All rights reversed.</div>
            <div>Made by <span className="text-header-primary underline">Raj Alam</span></div>
        </div>
    </div>
  )
}
