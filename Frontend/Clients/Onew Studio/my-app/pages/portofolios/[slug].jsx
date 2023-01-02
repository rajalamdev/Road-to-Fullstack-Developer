import { useEffect } from "react";
import { UseAppContext } from "../../context/AppContext"
import portofolio from "../../data/portofolios.json"

export async function getServerSideProps({params}){

    const detail = portofolio.filter((port) => {
        return port.slug == params.slug
    })

    return {
        props: {
            params,
            detail: detail[0]
        }
    }
}

export default function Detail({detail}) {

  return (
    <div className="py-36 max-w-[700px] mx-auto">
        <div className="mx-auto">
            <div className="border-2 p-2 w-full h-[200px] sm:h-[400px] border-header-primary rounded-md">
                <iframe className="rounded-md -z-10" width="100%" height="100%" src="https://www.youtube.com/embed/A7ry4cx6HfY" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen ></iframe>
            </div>
        </div>
        <div className="mt-8 flex flex-col gap-6">
            <div className="space-y-3">
                <h1 onClick={() => navLink()} className="text-header-secondary text-md font-semibold border-b w-max border-b-header-primary">{detail.title}</h1>
                <p className="sm:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, pariatur. Cumque natus nostrum laboriosam consectetur, magnam quam libero similique officiis quos! Esse non minus corporis, odio facere qui velit, amet illum commodi voluptas eligendi sit incidunt delectus dicta earum eos officia voluptatum omnis sed? Obcaecati sapiente commodi beatae accusantium quidem.</p>
            </div>
            <div className="space-y-4">
                <h2 className="text-header-secondary text-md font-semibold border-b w-max border-b-header-primary">Tools</h2>
                <div className="flex gap-2">
                     {detail.category.map(cat => {
                         return <span key={cat} className='block w-max px-2 py-1 bg-header-primary rounded-lg text-[#eee] font-medium text-shadow'>{cat}</span>
                     })}
                </div>
            </div>
        </div>
    </div>
  )
}
