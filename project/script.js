// Footer
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

// Hamburger Menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});

// Featured Services
const services = [
    {
        name: "Gel Tips",
        price: "E350",
        image: "images/nails1.jpeg"
    },
    {
        name: "Overlay",
        price: "E280",
        image: "images/nails2.jpeg"
    },
    {
        name: "Gel Toes",
        price: "E160",
        image: "images/nails3.jpeg"
    }
];

const featured = document.querySelector("#featured-services");

services.forEach(service => {

    const card = document.createElement("article");
    card.classList.add("service-card");

    card.innerHTML = `
        <img src="${service.image}" alt="${service.name}" loading="lazy">
        <h3>${service.name}</h3>
        <p><strong>Price:</strong> ${service.price}</p>
    `;

    featured.appendChild(card);
});

// Remember last visit
const visits = Number(localStorage.getItem("visits")) || 0;

localStorage.setItem("visits", visits + 1);

console.log(`This visitor has visited ${visits + 1} time(s).`);
