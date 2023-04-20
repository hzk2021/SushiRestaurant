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
    </ul>
    `;


    return headerContainer;
}

function createFooter() {
    const footerContainer = document.createElement('footer');
    footerContainer.textContent = 'Copyright © 2023 hzk2021@GitHub';

    return footerContainer;
}

function loadContent() {

    const htmlBody = document.querySelector('body');
    const footerDiv = document.querySelector('footer');
    const contentDiv = document.querySelector('.content');
    
    contentDiv.remove();
    
    htmlBody.insertBefore(content, footerDiv);
}

export function bindingEvents(home_btn, menu_btn, about_btn, check_it_out_btn) {
    home_btn.addEventListener('click', () => {
        e.preventDefault();

        content = createHomeContent();
        loadContent();
    });

    menu_btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        content = createMenuContent();
        loadContent();
    });

    check_it_out_btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        content = createMenuContent();
        loadContent();
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
