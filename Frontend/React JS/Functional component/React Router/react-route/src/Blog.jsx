import { Link, Outlet } from 'react-router-dom'

export default function Blog(){
    return (
        <>
            <h1>Blog</h1>
            <Link to='/blog/details'><p>Klik untuk details</p></Link>
            <Outlet />
        </>
    );
}