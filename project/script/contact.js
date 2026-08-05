// Footer
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

// Hamburger Menu
const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {

    nav.classList.toggle("open");

    menu.textContent =
        nav.classList.contains("open") ? "✕" : "☰";
});

// Save preferred service
const service = document.querySelector("#service");

const savedService = localStorage.getItem("preferredService");

if (savedService) {

    service.value = savedService;

}

service.addEventListener("change", () => {

    localStorage.setItem("preferredService", service.value);

});

// Booking Form
const form = document.querySelector("#bookingForm");

const confirmation = document.querySelector("#confirmation");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const customer = document.querySelector("#name").value;

    confirmation.innerHTML =
    `Thank you, <strong>${customer}</strong>! Your booking request has been received. We'll contact you soon to confirm your appointment.`;

    form.reset();

});
