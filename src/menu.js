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