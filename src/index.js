import "./style.css";

import {initWebsite, bindingEvents} from "./website";

initWebsite();

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const checkItOutBtn = document.querySelector('.check-it-out');

bindingEvents(homeBtn, menuBtn, aboutBtn, checkItOutBtn);