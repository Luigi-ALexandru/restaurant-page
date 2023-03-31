//About section

//content
function createAboutContent(middleContainer) {

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
    //create content title
    const contentTitle = document.createElement("h3");
    contentTitle.textContent = "Who are we?";
    mainContent.appendChild(contentTitle);
    //create content for title
    const contentForTitle = document.createElement("p");
    contentForTitle.classList.add("about-content");
    contentForTitle.textContent = "Welcome to The Dragon's Feast, a one-of-a-kind dining experience nestled in the heart of Azeroth. In our enchanted tavern, we merge the mystical atmosphere of World of Warcraft with the culinary delights of local cuisine to offer our guests an unforgettable gastronomic adventure.";
    mainContent.appendChild(contentForTitle);
    //create content title 2
    const contentTitle2 = document.createElement("h3");
    contentTitle2.textContent = "History";
    mainContent.appendChild(contentTitle2);
    //create content for title 2
    const contentForTitle2 = document.createElement("p");
    contentForTitle2.classList.add("about-content");
    contentForTitle2.textContent = "The Dragon's Feast was established in the year 2023 by a passionate adventurer who loved World of Warcraft and its delectable dishes. He envisioned a place where fellow gamers and food lovers could gather, indulge in exquisite meals, and immerse themselves in the captivating lore and ambiance of Azeroth.";
    mainContent.appendChild(contentForTitle2);
    //create content title 3
    const contentTitle3 = document.createElement("h3");
    contentTitle3.textContent = "The Culinary Experience";
    mainContent.appendChild(contentTitle3);
    //create content for title 3
    const contentForTitle3 = document.createElement("p");
    contentForTitle3.classList.add("about-content");
    contentForTitle3.textContent = "At The Dragon's Feast, we pride ourselves on offering a diverse and mouthwatering menu inspired by the local cuisine and the flavors of Azeroth. Our skilled chefs, trained in both traditional and magical culinary arts, craft each dish with the utmost care, using only the finest ingredients sourced from our vast network of local farmers, artisans, and mystical suppliers.";
    mainContent.appendChild(contentForTitle3);
     //create content title 3
     const contentTitle4 = document.createElement("h3");
     contentTitle4.textContent = "Our food";
     mainContent.appendChild(contentTitle4);
    //create content for title 3
    const contentForTitle4 = document.createElement("p");
    contentForTitle4.classList.add("about-content");
    contentForTitle4.textContent = "From the depths of Stranglethorn Vale to the peaks of Ironforge, our menu brings the diverse flavors of Azeroth to life, satisfying both WoW enthusiasts and food lovers alike. At our restaurant, we take pride in our attentive and knowledgeable staff, who are always eager to ensure you have an unforgettable dining experience. Our chefs are masters in their craft, expertly combining authentic in-game recipes with modern culinary techniques to deliver mouth-watering dishes that tantalize your taste buds. Indulge in our hearty mains, share scrumptious appetizers, and end your meal with one of our delectable desserts – all while reminiscing about your favorite WoW memories. Join us to create new memories and taste the magic of Azeroth brought to life on your plate!";
    mainContent.appendChild(contentForTitle4);

    //style elements
    contentTitle.setAttribute("style", "padding-top: 1rem; padding-bottom: 1rem;");
    contentForTitle.setAttribute("style", "padding-bottom: 1rem;");
    contentTitle2.setAttribute("style", "padding-top: 1rem; padding-bottom: 1rem;");
    contentForTitle2.setAttribute("style", "padding-bottom: 1rem;");
    contentTitle3.setAttribute("style", "padding-top: 1rem; padding-bottom: 1rem;");
    contentForTitle3.setAttribute("style", "padding-bottom: 1rem;");
    contentTitle4.setAttribute("style", "padding-top: 1rem; padding-bottom: 1rem;");
    contentForTitle4.setAttribute("style", "padding-bottom: 1rem;");
    mainContent.setAttribute("style", "padding-left: 10rem;");

}

export {
    createAboutContent
}