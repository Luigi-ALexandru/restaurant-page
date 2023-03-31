    function createImage(middleContainer) {
        const image = document.createElement("img");
        image.classList.add("image-fish");
        image.src = "../images/fish.jpg";
        image.alt = "a WoW dish (fish)";
        middleContainer.appendChild(image);

        return image;
    }

    export {
        createImage
    }