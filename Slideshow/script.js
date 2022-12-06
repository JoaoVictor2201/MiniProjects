'use-strict'

const images = [
    { 'id' : '1', 'url' : './images/slide-1.png' },
    { 'id' : '2', 'url' : './images/slide-2.png' },
    { 'id' : '3', 'url' : './images/slide-3.png' },
    { 'id' : '4', 'url' : './images/slide-4.png' },
    { 'id' : '5', 'url' : './images/slide-5.png' },
];

const container = document.querySelector("#container-items");

const LoadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class="item">
                <img src="${image.url}"
            </div>
        `
    })
}

LoadImages(images, container);