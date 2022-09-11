const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

function App(){
    const header = React.useRef(null);

    React.useEffect(function(){
        setTimeout(function(){
            header.current.textContent = "Hello There"
        }, 1000)
    }, [])

    return (
        <>
            {/* <h1 id="header">Hello From react!</h1> */}
            <h1 ref={header}>Hello From react!</h1>
        </>
    )
}

root.render(<App />)