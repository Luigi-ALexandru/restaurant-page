const container = document.querySelector(".container");
import './styles.css';

import { createAboutContent } from './about.js';
import { createMenuContent } from './menu.js';
import { createContactSection } from './contact.js';
import { createImage } from './image.js';

//header
const header = document.createElement("div");
header.classList.add("header");
header.textContent = "The Dragon's Feast";
container.appendChild(header);
//container sidebar and main content called = middle-container
const middleContainer = document.createElement("div");
middleContainer.classList.add("middle-container");
container.appendChild(middleContainer);
//sidebar container
const sideNav = document.createElement("div");
sideNav.classList.add("sidebar");
middleContainer.appendChild(sideNav);
//sidebar item 1 - About
const about = document.createElement("a");
about.classList.add("about");
about.setAttribute("href", "#");
about.textContent = "About";
sideNav.appendChild(about);
//about button
const aboutButton = document.querySelector(".about");
aboutButton.addEventListener("click", function() {
    createAboutContent(middleContainer);
})
//sidebar item 2 - Menu
const menu = document.createElement("a");
menu.classList.add("menu");
menu.setAttribute("href", "#");
menu.textContent = "Menu";
sideNav.appendChild(menu);
//menu button
const menuButton = document.querySelector(".menu");
menuButton.addEventListener("click", function() {
    createMenuContent(middleContainer);
})
//sidebar item 3 - Contact Us
const contact = document.createElement("a");
contact.classList.add("contact");
contact.setAttribute("href", "#");
contact.textContent = "Contact";
sideNav.appendChild(contact);
//contact button
const contactButton = document.querySelector(".contact");
contactButton.addEventListener("click", function() {
    createContactSection(middleContainer);
})
//footer
const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "May your adventures be hearty, your laughter contagious, and your feasts legendary! - Greatmother Geyah, offering a blessing to the members of the Horde.";
container.appendChild(footer);

createImage(middleContainer);