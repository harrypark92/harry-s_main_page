const images = [
    'pexels-monstera-6373289.jpg',
];

const chosenImage = images[0];
const bgImage = document.createElement('img');
bgImage.classList.add('bgImg');
bgImage.src=`img/${chosenImage}`;
document.body.appendChild(bgImage);