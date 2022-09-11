import Link from 'next/link'
import Clock from './Clock'

export default function Footer(){
    return (
        <footer>
            <div className="say-hello">
                <h2>Frontend Developer</h2>
                <p>From South Tangerang - Indonesia.</p>
            </div>
            <Clock />
            <div className="social-media">
                <Link href="/"><img src="/twitter.png" /></Link>
                <Link href="/"><img src="/github.png" /></Link>
                <Link href="/"><img src="/instagram.png" /></Link>
                <Link href="/"><img src="/discord.png" /></Link>
            </div>
        </footer>
    )
}