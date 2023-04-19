import sushiImage from './img/main-sushi.png';

function createDescription() {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');
    headingDiv.innerHTML = 
    `
        <span>Home For Healthy,</span>
        <br>
        <span>Delicious Sushis</span>
    `;

    const subHeadingDiv = document.createElement('div');
    subHeadingDiv.classList.add('sub-heading');
    subHeadingDiv.innerHTML = 
    `
        <span>No guilty pleasure,</span>
        <br>
        <span>just enjoy!</span>
    `;

    const checkItOutBtn = document.createElement('button');
    checkItOutBtn.textContent = "Check It Out"
    checkItOutBtn.classList.add('check-it-out');

    descriptionDiv.appendChild(headingDiv)
    descriptionDiv.appendChild(subHeadingDiv)
    descriptionDiv.appendChild(checkItOutBtn);
    
    return descriptionDiv;
}

function createImageContainer() {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('main-food');


    const sushiIMG = document.createElement('img');
    sushiIMG.src = sushiImage;

    imageContainer.appendChild(sushiIMG);

    return imageContainer
}

function createContent() {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const description = createDescription();
    const imageSection = createImageContainer();

    contentDiv.appendChild(description);
    contentDiv.appendChild(imageSection);

    return contentDiv;
}

export default createContent;