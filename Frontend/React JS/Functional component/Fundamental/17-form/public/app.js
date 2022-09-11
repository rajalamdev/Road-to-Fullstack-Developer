const root = ReactDOM.createRoot(document.querySelector(".root")); // ada dua cara mengambil value input dari user
// 1: menggunakan state (controlled)
// 2: menggunakan useRef (uncontrolled)

function App() {
  const [username, setUsername] = React.useState('onna');
  const password = React.useRef('');

  function login(e) {
    e.preventDefault();
    console.log(`username: ${username}`, `password: ${password.current.value}`);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: login
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "username"
  }, "Username:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "username",
    value: username,
    onChange: function (e) {
      setUsername(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password:", /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    ref: password
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "login"
  }));
}

root.render( /*#__PURE__*/React.createElement(App, null));