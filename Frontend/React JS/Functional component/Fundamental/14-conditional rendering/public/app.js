const root = ReactDOM.createRoot(document.querySelector(".root"));

function App() {
  const [login, setLogin] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h1", null, login ? "Selamat datang!" : "Kamu belum melakukan login"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      login ? setLogin(false) : setLogin(true);
    }
  }, login ? "Logout" : "Login"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      if (!darkMode) {
        setDarkMode(true);
        document.body.classList.add("dark");
      } else {
        setDarkMode(false);
        document.body.classList.remove("dark");
      }
    }
  }, darkMode ? "Light Mode" : "Dark Mode"));
}

root.render( /*#__PURE__*/React.createElement(App, null));