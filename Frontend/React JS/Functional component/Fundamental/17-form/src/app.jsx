const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

// ada dua cara mengambil value input dari user
// 1: menggunakan state (controlled)
// 2: menggunakan useRef (uncontrolled)
function App(){
    const [username, setUsername] = React.useState('onna');
    const password = React.useRef('');

    function login(e){
        e.preventDefault();
        console.log(`username: ${username}`, `password: ${password.current.value}`);
    }

    return (
        <form onSubmit={login}>
            <label htmlFor="username">Username: 
                <input type="text" id="username" value={username} onChange={function(e){
                    setUsername(e.target.value)
                }} />
            </label>
            <br />
            <label htmlFor="password">Password: 
                <input type="password" id="password" ref={password}/>
            </label>
            <br />
            <input type="submit" value="login" />
        </form>
    )
}

root.render(<App />)