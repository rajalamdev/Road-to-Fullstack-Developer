const root = ReactDOM.createRoot(document.querySelector(".root"));

function App() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: setCount.bind(this, count - 1)
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: setCount.bind(this, count + 1)
  }, "+"));
}

root.render( /*#__PURE__*/React.createElement(App, null));