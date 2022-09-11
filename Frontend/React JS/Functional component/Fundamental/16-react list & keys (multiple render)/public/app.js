const root = ReactDOM.createRoot(document.querySelector(".root"));

function App() {
  const names = ["Marsha", "Lenathea", "Lavia"];
  return /*#__PURE__*/React.createElement("ul", null, names.map(name => {
    return /*#__PURE__*/React.createElement("li", {
      key: name
    }, name);
  }));
}

root.render( /*#__PURE__*/React.createElement(App, null));