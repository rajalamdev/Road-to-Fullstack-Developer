const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

function App(){
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <button onClick={setCount.bind(this, count - 1)}>-</button>
                <span>{count}</span>
            <button onClick={setCount.bind(this, count + 1)}>+</button>
        </div>
    )
}

root.render(<App />)