let openToogleBtn = document.querySelector(".open__toggle"),
    closeToggleBtn = document.querySelector(".close__toggle"),
    mobileMenuBtn = document.querySelector(".header-mobile-menubtn"),
    navBox = document.querySelector(".nav"),
    navItem = document.querySelectorAll(".nav__item"),
    darkShadow = document.querySelector(".dark_shadow");

// Mobile menu
click = true;
mobileMenuBtn.addEventListener("click", function () {
    if (click == true) {
        openToogleBtn.style.display = "none";
        closeToggleBtn.style.display = "block";
        navBox.classList.add("active__nav");
        darkShadow.style.display = "block";

        for (let i = 0; i < navItem.length; i++) {
            navItem[i].classList.add("nav__item--anmimation");
        }
    } else {
        openToogleBtn.style.display = "block";
        closeToggleBtn.style.display = "none";
        navBox.classList.remove("active__nav");
        darkShadow.style.display = "none";

        for (let i = 0; i < navItem.length; i++) {
            navItem[i].classList.remove("nav__item--anmimation");
        }
    }

    click = !click;
});

darkShadow.addEventListener("click", function () {
    openToogleBtn.style.display = "block";
    closeToggleBtn.style.display = "none";
    navBox.classList.remove("active__nav");
    darkShadow.style.display = "none";
});
