const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

function App(){
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(function(){
        async function getData(){
            const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
            const response = await request.json();
            setNews(response);
            setLoading(false);
        }
        getData();
    }, [])

    return (
        <React.Fragment>
            <h1>Data Fetching</h1>
            {loading ? <p>Loading data...</p> : (
                <ul>
                    {news.map(item => <li>{item.title}</li>)}
                </ul>
            )}
        </React.Fragment>
    )
}

root.render(<App />)