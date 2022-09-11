const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

function App(){
    const [login, setLogin] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <div className="box">
            <h1>{login ? "Selamat datang!" : "Kamu belum melakukan login"}</h1>
            <button onClick={function(){
                login ? setLogin(false) : setLogin(true)
            }}>{login ? "Logout" : "Login"}</button>
            <button onClick={function(){
                if(!darkMode){
                    setDarkMode(true)
                    document.body.classList.add("dark")
                } else {
                    setDarkMode(false)
                    document.body.classList.remove("dark")
                }
            }}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
    )
}

root.render(<App />)