//Menu section

//content
function createMenuContent(middleContainer) {

    //remove existing main-content div if it exists
    const existingMainContent = middleContainer.querySelector('.main-content');
    const existingImage = middleContainer.querySelector(".image-fish");
    if (existingMainContent) {
        middleContainer.removeChild(existingMainContent);
    }
    if(existingImage) {
        middleContainer.removeChild(existingImage);
    }
    //create div container for content
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    middleContainer.appendChild(mainContent);
    //create title1
    const title1 = document.createElement("h3");
    title1.textContent = "Appetizers";
    mainContent.appendChild(title1);
    //create content for title1
    const contentTitle1 = document.createElement("ol");
    contentTitle1.classList.add("menu-content-ol");
    mainContent.appendChild(contentTitle1);
    const contentTitle1_1 = document.createElement("li");
    contentTitle1_1.textContent = `Westfall Stew - A hearty stew with tender chunks of boar meat, potatoes, and carrots.`;
    contentTitle1.appendChild(contentTitle1_1);
    const contentTitle1_2 = document.createElement("li");
    contentTitle1_2.textContent = `Murloc Ceviche - Fresh fish and citrus-marinated Murloc morsels, served with crispy plantain chips.`;
    contentTitle1.appendChild(contentTitle1_2);
    const contentTitle1_3 = document.createElement("li");
    contentTitle1_3.textContent = `Razorfen Kraul Wings - Spicy, crispy bat wings tossed in a fiery sauce, served with a cool ranch dipping sauce.`;
    contentTitle1.appendChild(contentTitle1_3);
    const contentTitle1_4 = document.createElement("li");
    contentTitle1_4.textContent = `Deviate Delight Dip - Creamy spinach and artichoke dip with a touch of mild Deviate fish flavor, served with toasted bread.`;
    contentTitle1.appendChild(contentTitle1_4);
    //create title2
    const title2 = document.createElement("h3");
    title2.textContent = "Mains";
    mainContent.appendChild(title2);
     //create content for title2
     const contentTitle2 = document.createElement("ol");
     contentTitle2.classList.add("menu-content-ol");
     mainContent.appendChild(contentTitle2);
     const contentTitle2_1 = document.createElement("li");
     contentTitle2_1.textContent = `Goldshire Steak & Ale Pie - Tender steak and mushrooms in a rich ale gravy, topped with flaky pastry.`;
     contentTitle2.appendChild(contentTitle2_1);    
     const contentTitle2_2 = document.createElement("li");
     contentTitle2_2.textContent = `Night Elf Noodles - Long, delicate noodles tossed with seasonal vegetables and a savory mushroom sauce.`;
     contentTitle2.appendChild(contentTitle2_2);
     const contentTitle2_3 = document.createElement("li");
     contentTitle2_3.textContent = `Stranglethorn Vale Paella - A hearty mix of saffron-infused rice, meats, and seafood inspired by the flavors of the Stranglethorn Vale.`;
     contentTitle2.appendChild(contentTitle2_3);
     const contentTitle2_4 = document.createElement("li");
     contentTitle2_4.textContent = `Gnomeregan Gumbo - A comforting stew of slow-cooked meats, vegetables, and beans, flavored with a blend of Dwarven spices.`;
     contentTitle2.appendChild(contentTitle2_4);
      //create title3
    const title3 = document.createElement("h3");
    title3.textContent = "Desserts";
    mainContent.appendChild(title3);
     //create content for title2
     const contentTitle3 = document.createElement("ol");
     contentTitle3.classList.add("menu-content-ol");
     mainContent.appendChild(contentTitle3);
     const contentTitle3_1 = document.createElement("li");
     contentTitle3_1.textContent = `Darkmoon Faire Funnel Cake - A sweet, crispy funnel cake dusted with powdered sugar and served with warm chocolate sauce.`;
     contentTitle3.appendChild(contentTitle3_1);    
     const contentTitle3_2 = document.createElement("li");
     contentTitle3_2.textContent = `Moonbrook Mousse - A light and fluffy chocolate mousse, garnished with whipped cream and fresh berries.`;
     contentTitle3.appendChild(contentTitle3_2);
     const contentTitle3_3 = document.createElement("li");
     contentTitle3_3.textContent = `Teldrassil Tiramisu - A delicate, creamy dessert with layers of coffee-soaked ladyfingers and mascarpone cheese, topped with cocoa powder.`;
     contentTitle3.appendChild(contentTitle3_3);
     const contentTitle3_4 = document.createElement("li");
     contentTitle3_4.textContent = `Ironforge Ice Cream Sundae - A decadent sundae made with rich, creamy vanilla ice cream, hot fudge, caramel, and crushed nuts.`;
     contentTitle3.appendChild(contentTitle3_4);


    mainContent.setAttribute("style", "padding-left: 10rem;");
    title1.setAttribute("style", "padding-top: 1rem;")
    title2.setAttribute("style", "padding-top: 1rem;")
    title3.setAttribute("style", "padding-top: 1rem;")
    
}

export {
    createMenuContent
}