// Footer
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

// Hamburger
const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {

    nav.classList.toggle("open");

    menu.textContent =
    nav.classList.contains("open") ? "✕" : "☰";

});

// Service Array
const services = [

{
name:"Gel Tips",
price:"E350",
category:"Hands",
image:"images/nails1.jpeg"
},

{
name:"Overlay",
price:"E280",
category:"Hands",
image:"images/nails2.jpeg"
},

{
name:"Refill",
price:"E250",
category:"Hands",
image:"images/nails3.jpeg"
},

{
name:"Gel Toes",
price:"E160",
category:"Feet",
image:"images/nails1.jpeg"
},

{
name:"Soak Off",
price:"E60",
category:"Hands",
image:"images/nails2.jpeg"
},

{
name:"Nail Fix",
price:"E30",
category:"Hands",
image:"images/nails3.jpeg"
}

];

const container = document.querySelector("#services-container");

function displayServices(serviceList){

container.innerHTML="";

serviceList.forEach(service=>{

const card=document.createElement("article");

card.classList.add("service-card");

card.innerHTML=`

<img src="${service.image}"
alt="${service.name}"
loading="lazy">

<h3>${service.name}</h3>

<p><strong>Price:</strong> ${service.price}</p>

<p>${service.category}</p>

`;

container.appendChild(card);

});

}

displayServices(services);

// Filter Buttons

document.querySelector("#all").addEventListener("click",()=>{

displayServices(services);

});

document.querySelector("#hands").addEventListener("click",()=>{

displayServices(

services.filter(service=>service.category==="Hands")

);

});

document.querySelector("#feet").addEventListener("click",()=>{

displayServices(

services.filter(service=>service.category==="Feet")

);

});
