import createHomeContent from "./home";
import createMenuContent from "./menu";

// Default content
let content = createHomeContent();

function createHeader() {
    const headerContainer = document.createElement('header');

    // Bad practice, don't use this in real life projects
    headerContainer.innerHTML = 
    `
    <div>
      Zhenkai's Sushi Place
    </div>

    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
    </label>

    <ul class="menu">
      <li id='home-btn'><a href=''>Home</a></li>
      <li id='menu-btn'><a href=''>Menu</a></li>
      <li id='about-btn'><a href=''>About</a></li>
    </ul>
    `;


    return headerContainer;
}

function createFooter() {
    const footerContainer = document.createElement('footer');
    footerContainer.textContent = 'Copyright © 2023 hzk2021@GitHub';

    return footerContainer;
}

export function bindingEvents(home_btn, menu_btn, about_btn) {
    home_btn.addEventListener('click', () => {
        content = createHomeContent();
        initWebsite();
    });

    menu_btn.addEventListener('click', () => {
        content = createMenuContent();
        initWebsite();
    });

    about_btn.addEventListener('click', e => {
        // content = createHomeContent();
    });
}

export function initWebsite() {
    document.createComment("Dynamically generated content with JavaScript");

    const htmlBody = document.querySelector('body');

    const header = createHeader();
    const footer = createFooter();

    htmlBody.appendChild(header);
    htmlBody.appendChild(content);
    htmlBody.appendChild(footer);

};
