let menu = document.getElementById("menuClick");
menu.addEventListener("click", function () {
    console.log("aa")
    if (menu.parentElement.classList.contains("active")) {
        menu.parentElement.classList.remove("active");
    } else {
        menu.parentElement.classList.add("active");
    }
})