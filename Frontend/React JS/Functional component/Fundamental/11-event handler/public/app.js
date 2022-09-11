const root = ReactDOM.createRoot(document.querySelector(".root"));
let names = prompt("Masukan nama anda?");

function sayHello() {
  alert(`Selamat datang ${names}`);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: sayHello.bind(this, "Marsha")
}, "Click Me!");
root.render(element);