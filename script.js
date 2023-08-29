document.querySelector(".menu-icon").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("active");
});
// JavaScript code to toggle the menu
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
