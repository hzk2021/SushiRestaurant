// alert('hello');

import "./style.css";

import {initWebsite, bindingEvents} from "./website";

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');

initWebsite();
bindingEvents(homeBtn, menuBtn, aboutBtn);