const container = document.querySelector(".container");

//header
const header = document.createElement("div");
header.classList.add("header");
header.textContent = "The Dragon's Feast";
container.appendChild(header);
//container sidebar and main content
const middleContainer = document.createElement("div");
middleContainer.classList.add("middle-container");
container.appendChild(middleContainer);
//sidebar container
const sideNav = document.createElement("div");
sideNav.classList.add("sidebar");
middleContainer.appendChild(sideNav);
//sidebar item 1
const about = document.createElement("a");
about.classList.add("about");
about.setAttribute("href", "#");
about.textContent = "About";
sideNav.appendChild(about);
//sidebar item 2
const menu = document.createElement("a");
menu.classList.add("menu");
menu.setAttribute("href", "'#");
menu.textContent = "Menu";
sideNav.appendChild(menu);
//sidebar item 3
const contact = document.createElement("a");
contact.classList.add("contact");
contact.setAttribute("href", "#");
contact.textContent = "Contact";
sideNav.appendChild(contact);
//main content
const mainContent = document.createElement("div");
mainContent.classList.add("main-content");
mainContent.textContent = "Welcome to The Dragon's Feast";
mainContent.textContent += "A one of a ...";
middleContainer.appendChild(mainContent);
//footer
const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "HELLO! I'm the footer";
container.appendChild(footer);


