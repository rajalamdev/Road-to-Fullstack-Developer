const root = ReactDOM.createRoot(
    document.querySelector(".root")
)

let names = prompt("Masukan nama anda?");

function sayHello(){
    alert(`Selamat datang ${names}`)
}

const element = (
    <button onClick={sayHello.bind(this, "Marsha")}>Click Me!</button>
)

root.render(element)