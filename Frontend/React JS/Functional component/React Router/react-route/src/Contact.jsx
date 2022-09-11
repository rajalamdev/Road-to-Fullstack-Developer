import { Link } from 'react-router-dom';

function Contact(){
    return (
        <>
            <h1>Contact</h1>
            <ul>
                <Link to='whatsapp'><li>Whatsapp</li></Link>
                <Link to='instagram'><li>Instagram</li></Link>
                <Link to='twitter'><li>Twitter</li></Link>
            </ul>
        </>
    )
}

export default Contact;