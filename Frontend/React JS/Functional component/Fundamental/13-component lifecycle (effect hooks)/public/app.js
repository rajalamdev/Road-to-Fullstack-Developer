const root = ReactDOM.createRoot(document.querySelector(".root"));

function App() {
  const [click, setClick] = React.useState(false);
  let [count, setCount] = React.useState(0);
  React.useEffect(function () {
    console.log('success');
  }, [click]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setClick(true);
    }
  }, "Klik aku dong"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, " Klik untuk tambah"), /*#__PURE__*/React.createElement("span", null, "Nilai saat ini: ", count));
}

root.render( /*#__PURE__*/React.createElement(App, null));