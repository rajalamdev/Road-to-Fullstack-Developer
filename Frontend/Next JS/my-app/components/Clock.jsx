import { useEffect, useState } from "react"

export default function Clock(){

    const [clock, setClock] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString())
        }, 1000)
    })

    return(
        <div className="clock">
            {clock}
        </div>
    )
}