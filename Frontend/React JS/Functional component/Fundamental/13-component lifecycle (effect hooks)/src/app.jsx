const root = ReactDOM.createRoot(
    document.querySelector(".root")
)


function App(){
    const [click, setClick] = React.useState(false);
    let [count, setCount] = React.useState(0);

    React.useEffect(function(){
        console.log('success')
    }, [click])

    return (
        <div>
            <button onClick={function(){
                setClick(true)
            }}>Klik aku dong
            </button>
            <button onClick={function(){
                setCount(count + 1)
            }}> Klik untuk tambah
            </button>
            <span>Nilai saat ini: {count}</span>
        </div>
    )
}

root.render(<App />)