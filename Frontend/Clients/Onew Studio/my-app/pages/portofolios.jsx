import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import portofolio from "../data/portofolios.json"

export default function Portofolios() {

  const [active, setActive] = useState("1")
  const [dataPortofolio, setDataPortofolio] = useState(portofolio)
  
  const activeHandler = (e) => {
    setActive(e.target.id)
    if (e.target.id == 1) return setDataPortofolio(portofolio)

    const filteredCategories = portofolio.filter((data) => {
      return data.category.some(cat => cat == e.target.textContent)      
    })
    
    // console.log(filteredCategories);
    setDataPortofolio(filteredCategories)
  }
  
  useEffect(() => {
    console.log(dataPortofolio);
  }, [dataPortofolio])

  return (
   <div className="flex justify-center sm:justify-start">
    <div className="py-32 gap-8 flex flex-wrap justify-center">
      <div className='w-full flex gap-4 flex-wrap justify-center'>
        <div onClick={activeHandler} id="1" className={`bg-header-primary ${active == "1" ? "bg-header-primary": "bg-[#393E46]"} rounded-full py-2 px-6 text-[#eee] text-shadow cursor-pointer`}>All</div>
        <div onClick={activeHandler} id="2" className={`${active == "2" ? "bg-header-primary": "bg-[#393E46]"} rounded-full py-2 px-6 text-[#eee] text-shadow cursor-pointer`}>Blender</div>
        <div onClick={activeHandler} id="3" className={`${active == "3" ? "bg-header-primary": "bg-[#393E46]"} rounded-full py-2 px-6 text-[#eee] text-shadow cursor-pointer`}>XD</div>
        <div onClick={activeHandler} id="4" className={`${active == "4" ? "bg-header-primary": "bg-[#393E46]"} rounded-full py-2 px-6 text-[#eee] text-shadow cursor-pointer`}>Adobe</div>
        <div onClick={activeHandler} id="5" className={`${active == "5" ? "bg-header-primary": "bg-[#393E46]"} rounded-full py-2 px-6 text-[#eee] text-shadow cursor-pointer`}>Premiere</div>
      </div> 
    {dataPortofolio.map(port => {
        return (
          <div key={port.id} className={`border-2 border-header-primary p-3 rounded-xl w-[300px] sm:w-[400px] sm:h-[330px] h-[280px] text-overflow`}>
            <div className='relative rounded-md overflow-hidden mb-3 -z-10'>
              <Image alt="The guitarist in the concert."
                    src={port.thumbnail}
                    width={100}
                    height={100}
                    layout="responsive" />
            </div>
            <div className='flex justify-between text-sm'>
              <div className='flex gap-1 flex-col w-1/2 break-words'>
                <Link href={`/portofolios/${port.slug}`} className='text-header-secondary font-medium text-base hover:underline'>{port.title}</Link>
              </div>
              <div className='text-right flex flex-col gap-4 w-1/2 flex-wrap text-xs'>
                <div className='flex justify-end gap-2 flex-wrap'>
                  {port.category.map(cat => {
                    return <span key={cat} className='block w-max px-2 py-1 bg-header-primary rounded-lg text-[#eee] font-medium text-shadow'>{cat}</span>
                  })}                            
                </div>
                <div className='text-sm'>
                  <Link href={`/portofolios/${port.slug}`} className='text-header-secondary z-10 relative after:absolute after:content-[""] after:left-0 after:right-1 after:-bottom-1 after:h-[1px] after:bg-header-primary hover:after:h-[2px]'>{"Details >"}</Link>
                </div>
              </div>
            </div>
         </div>
        )
      })}
    </div>
   </div>
  )
}
