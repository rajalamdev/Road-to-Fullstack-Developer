import NavLink from "./NavLink";
import '../App.css';
import NavbarUser from "./NavbarUser";

export default function Navbar(){
    return (
        <nav>
            <NavLink>Dashboard</NavLink> | <NavLink>Products</NavLink>
            <NavLink>
                <NavbarUser />
            </NavLink>
        </nav>
    )
}