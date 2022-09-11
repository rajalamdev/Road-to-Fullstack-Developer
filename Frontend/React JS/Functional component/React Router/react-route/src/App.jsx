import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ContactDetails from './ContactDetails';
import AboutTeam from './AboutTeam';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Login from './Login'
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/login' style={{color: "#333", padding: "10px 25px", backgroundColor: "whitesmoke"}}>Login</Link>
        <nav style={{display: "flex", gap:"20px"}}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/blog'>Blog</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='contact/:slug' element={<ContactDetails />}>
          </Route>
          <Route path='about/team' element={<AboutTeam />} />
          <Route path='blog' element={<Blog />}>
            <Route path='details' element={<BlogDetails />}></Route>
          </Route>
          <Route path='login' element={<Login/>} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
