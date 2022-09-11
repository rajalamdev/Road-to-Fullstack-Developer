const root = ReactDOM.createRoot(document.querySelector(".root"));

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(function () {
    async function getData() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
      const response = await request.json();
      setNews(response);
      setLoading(false);
    }

    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetching"), loading ? /*#__PURE__*/React.createElement("p", null, "Loading data...") : /*#__PURE__*/React.createElement("ul", null, news.map(item => /*#__PURE__*/React.createElement("li", null, item.title))));
}

root.render( /*#__PURE__*/React.createElement(App, null));