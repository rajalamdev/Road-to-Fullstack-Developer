import Link from 'next/link'
import { withRouter } from 'next/router'

function NavLinks(props){
    const navs = [
        {text: "Home", href: "/"},
        {text: "About", href: "/about"},
        {text: "Projects", href: "/projects"},
        {text: "Contact", href: "/contact"}
    ]

    return (
        <nav>
            {navs.map(nav => {
                return <Link href={nav.href} key={nav.text}><a className={`nav-item ${props.router.pathname == nav.href ? 'active' : ''}`}>{nav.text}</a></Link>
            })}
        </nav>
    )
}

export default withRouter(NavLinks)