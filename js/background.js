let images = ["bts01.jpg", "bts02.jpg", "bts03.jpg", "bts04.jpg", "bts05.jpg", "bts06.jpg", "bts07.jpg"];

window.onload = function() {
    slideImg();
    setInterval("slideImg()", 5000);
}

function slideImg() {
    let chosenImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('img/${chosenImage}')`;
}

//document.body.appendChild(chosenImage);