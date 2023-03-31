//Contact section

//content
function createContactSection(middleContainer) {
    //remove existing main-content div if it exists
    const existingMainContent = middleContainer.querySelector('.main-content');
    const existingImage = middleContainer.querySelector(".image-fish");
    if (existingMainContent) {
        middleContainer.removeChild(existingMainContent);
    }
    if(existingImage) {
        middleContainer.removeChild(existingImage);
    }

    ////create div container for content
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    middleContainer.appendChild(mainContent);
    //create title1
    const title1 = document.createElement("h3");
    title1.textContent = "Contact Us";
    mainContent.appendChild(title1);
    //create content for title1
    const contentTitle1 = document.createElement("p");
    contentTitle1.classList.add("para-content");
    contentTitle1.textContent = "Thank you for your interest in our World of Warcraft Vanilla inspired restaurant! We're excited to share our passion for Azeroth's culinary delights with you. If you have any questions, concerns, or would like to make a reservation, please do not hesitate to get in touch with us.";
    mainContent.appendChild(contentTitle1);
    const contentTitle1_1 = document.createElement("h4");
    contentTitle1_1.textContent = `Address`;
    contentTitle1.appendChild(contentTitle1_1);
    const content1 = document.createElement("p");
    content1.classList.add("para-c");
    const content2 = document.createElement("p");
    content2.classList.add("para-c");
    const content3 = document.createElement("p");
    content3.classList.add("para-c");
    content1.textContent = `Azeroth's Feast`;
    content2.textContent = `123 Epic Lane`;
    content3.textContent = `Stormwind City, AZ 12345`;
    mainContent.appendChild(content1);
    mainContent.appendChild(content2);
    mainContent.appendChild(content3);
    const phone = document.createElement("h4");
    phone.textContent = "Phone";
    mainContent.appendChild(phone);
    const phoneNr = document.createElement("p");
    phoneNr.textContent = "To make a reservation or speak to a member of our team, please call: (555) 123-4567";
    mainContent.appendChild(phoneNr);
    const email = document.createElement("h4");
    email.textContent = "Email";
    mainContent.appendChild(email);
    const emailC = document.createElement("p");
    emailC.textContent = "For inquiries, feedback, or special requests, feel free to send an email to: info@azerothsfeast.com";
    mainContent.appendChild(emailC);
    const smedia = document.createElement("h4");
    smedia.textContent = "Social Media";
    mainContent.appendChild(smedia);
    const smediaC = document.createElement("p");
    smediaC.textContent = "Stay connected with us and never miss an update on our latest events, promotions, and menu offerings. Follow us on:";
    mainContent.appendChild(smediaC);
    const ulist = document.createElement("ul");
    ulist.classList.add("ulist-c");
    mainContent.appendChild(ulist);
    const li = document.createElement("li");
    li.textContent = "Facebook: fb.com/azerothsfeast";
    ulist.appendChild(li);
    const li2 = document.createElement("li");
    li2.textContent = "Instagram: @azerothsfeast";
    ulist.appendChild(li2);
    const li3 = document.createElement("li");
    li3.textContent = "Twitter: @azerothsfeast";
    ulist.appendChild(li3);
    const ohours = document.createElement("h4");
    ohours.textContent = "Opening Hours";
    mainContent.appendChild(ohours);
    const oo1 = document.createElement("p");
    oo1.classList.add("oo1-c");
    oo1.textContent = "Monday - Thursday: 11:00 AM - 10:00 PM";
    mainContent.appendChild(oo1);
    const oo2 = document.createElement("p");
    oo2.classList.add("oo1-c");
    oo2.textContent = "Friday - Saturday: 11:00 AM - 11:00 PM";
    mainContent.appendChild(oo2);
    const oo3 = document.createElement("p");
    oo3.classList.add("oo1-c");
    oo3.textContent = "Sunday: 11:00 AM - 9:00 PM";
    mainContent.appendChild(oo3);

    mainContent.setAttribute("style", "padding-left: 10rem;");
    title1.setAttribute("style", "padding: 1rem 0 1rem 0;");
    contentTitle1_1.setAttribute("style", "padding: 1rem 0 1rem 0;");
    phone.setAttribute("style", "padding: 1rem 0 1rem 0;");
    email.setAttribute("style", "padding: 1rem 0 1rem 0;");
    smedia.setAttribute("style", "padding: 1rem 0 1rem 0;");
    ulist.setAttribute("style", "padding: 1rem 0 1rem 3rem;");
    ohours.setAttribute("style", "padding: 0 0 1rem 0;");
    oo3.setAttribute("style", "padding: 0 0 1rem 0;");
}

export {
    createContactSection
}