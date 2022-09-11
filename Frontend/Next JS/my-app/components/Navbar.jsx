import Link from 'next/link'
import Clock from './Clock'

export default function Navbar(){
    return (
        <>
            <header>
                <div className="logo">
                    <Link href="/"><img src="/logo.png" alt="logo" /></Link>
                </div>
            
            </header>
        </>
    )
}