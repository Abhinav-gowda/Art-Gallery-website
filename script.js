
document.addEventListener("DOMContentLoaded", () => {
    loadGallery();
});

function loadGallery() {
    const artGallery = document.getElementById("artGallery");
    const artworks = [
        { title: "Sunset", img: "art1.jpg" },
        { title: "Abstract", img: "art2.jpg" },
        { title: "Portrait", img: "art3.jpg" }
    ];

    artworks.forEach(art => {
        let artDiv = document.createElement("div");
        artDiv.classList.add("art-item");
        artDiv.innerHTML = `
            <img src="${art.img}" alt="${art.title}">
            <h3>${art.title}</h3>
        `;
        artGallery.appendChild(artDiv);
    });
}


const uploadForm = document.getElementById("uploadForm");
if (uploadForm) {
    uploadForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Artwork Uploaded Successfully!");
    });
}


const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login Successful!");
    });
}