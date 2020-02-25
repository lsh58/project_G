var burgerMenuOn = document.querySelector(".burger_menu"),
    bergerMenuOff = document.querySelector(".exit"),
    mobileHeader = document.querySelector(".header_1depth_m");

burgerMenuOn.addEventListener("click", function() {
    mobileHeader.classList.add("on");
});

bergerMenuOff.addEventListener("click", function() {
    mobileHeader.classList.remove("on");
});
