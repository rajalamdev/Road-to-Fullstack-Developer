let header = document.createElement("header")
let main = document.createElement("main")
let footer = document.createElement("footer")

document.body.append(header, main, footer)

let headerElement = document.createElement("h1")
headerElement.innerHTML = 'WEBSITE Profile "Ivan Abraham Sayouw"'
header.append(headerElement)

let imageElement = document.createElement("img")
imageElement.src = "vector.webp"
imageElement.classList.add("img")
main.append(imageElement)

let olElement = document.createElement("ol")
let liElement = document.createElement("li")
let liElement2 = document.createElement("li")
let liElement3 = document.createElement("li")
liElement2.innerHTML = "NIM : 221011700600"
liElement.innerHTML = "Nama: Ivan Abraham Sayouw"
liElement3.innerHTML = "Kelas : 01SIFP009"
olElement.append(liElement2, liElement, liElement3)
main.append(olElement)

let ulElement = document.createElement("ul")
let liElements = document.createElement("li")
let liElements2 = document.createElement("li")
let liElements3 = document.createElement("li")
liElements.innerHTML = "Program Studi : Sistem Informasi"
liElements2.innerHTML = "Alamat : Komplek Panorama Serpong"
liElements3.innerHTML = "Asal Sekolah : SMK LETRIS INDONESIA 2"
ulElement.append(liElements, liElements2, liElements3)
main.append(ulElement)

let ulElements = document.createElement("ul")
let liElemet = document.createElement("li")
let liElemets = document.createElement("li")
let liElemets2 = document.createElement("li")
ulElements.classList.add("romawi")
liElemet.innerHTML = "Jurusan : Teknik Komputer dan Jaringan"
liElemets.innerHTML = "Email : ivanabraham.i@gmail.com"
liElemets2.innerHTML = "Telepon : 0817-6976-698"
ulElements.append(liElemet, liElemets, liElemets2)
main.append(ulElements)

let footerElement = document.createElement("a")
footerElement.href = "https://ivolio.netlify.app"
footerElement.innerHTML = 'Designed by Ivan Abraham Sayouw'
footer.append(footerElement)