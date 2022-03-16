
var container = document.querySelector(".slider"),
    btnLeft = document.getElementById("btn-left"),
    btnRight = document.getElementById("btn-right");

btnRight.addEventListener("click", function () {
    container.scrollLeft += container.offsetWidth;
});

btnLeft.addEventListener("click", function () {
    container.scrollLeft -= container.offsetWidth;
});

window.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop,
        fullSize = document.documentElement.offsetHeight,
        sizeVP = document.documentElement.clientHeight;


    if (scroll > 100) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }


    if (fullSize == (scroll + sizeVP)) {
        btnTop.classList.add("scrollFinal");
    } else {
        btnTop.classList.remove("scrollFinal");
    }
});

var btnTop = document.getElementById("btn-top");
var logo = document.getElementById("logo");

btnTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

logo.addEventListener("click", function () {
    window.scrollTo(0, 0);
});