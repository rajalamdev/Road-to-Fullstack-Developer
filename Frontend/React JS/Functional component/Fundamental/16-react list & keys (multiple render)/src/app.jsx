const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

function App(){
    const names = ["Marsha", "Lenathea", "Lavia"];

    return (
        <ul>
            {names.map(name => {
                return <li key={name}>{name}</li>
            })}
        </ul>
    )
}

root.render(<App />)