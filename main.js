const mobileMenu = document.getElementById("mobileMenu");
const iconMenu = document.getElementById("iconMenu");
const closeIcon = document.getElementById("closeIcon");


iconMenu.addEventListener("click", ()=> {
    mobileMenu.classList.add('active');
});


closeIcon.addEventListener("click", ()=> {
    mobileMenu.classList.remove('active');
});