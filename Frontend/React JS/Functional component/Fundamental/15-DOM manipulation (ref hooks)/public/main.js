const root = ReactDOM.createRoot(document.querySelector(".root"));

function App() {
  const header = React.useRef(null);
  React.useEffect(function () {
    setTimeout(function () {
      header.current.textContent = "Hello There";
    }, 1000);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: header
  }, "Hello From react!"));
}

root.render( /*#__PURE__*/React.createElement(App, null));