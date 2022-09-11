const form = document.querySelector("form");
const output = document.querySelector(".output");

async function sendToServer(data){
    const image = data.image;
    const formData = new FormData();
    formData.append("image", image)

    const request = await fetch("https://pie.dev/post", {
        method: "POST",
        body: formData
    });

    const result = await request.json();
    console.log(result.files);

    output.innerHTML = `<img width="280" src=${result.files.image} />`
}

form.addEventListener("submit", e => {
    e.preventDefault();

    output.innerHTML = `<p>Uploading...<p>`

    const image = document.getElementById('file').files[0];
    sendToServer({ image })
})