import { Link } from 'react-router-dom';

function About(){
    return (
        <>
            <h1>About</h1>
            <p>Untuk detail tentang tim kami, bisa klik link dibawah ini:</p>
            <ul>
                <li><Link to='/about/team'>Team</Link></li>
            </ul>
        </>
    )
}
export default About;