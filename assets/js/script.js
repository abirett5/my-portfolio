/**
 * @copyright A.H. Abir 2023
 * @author Ashfaque Hossain Abir <ashfaquehossainXT@param.me>
 */

"use strict";

/**
 * Light & Dark Mode
 */

const $themeBtn = document.querySelector("[data-theme-btn]"); // {NodeElement}
const $HTML = document.documentElement; // {NodeElement}
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // {Boolean | String}

if(sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
};

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.getItem("theme", $HTML.dataset.theme);
};

$themeBtn.addEventListener("click", changeTheme);