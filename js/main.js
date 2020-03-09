let menu = document.getElementById("menuClick");
menu.addEventListener("click", function () {
    if (menu.parentElement.classList.contains("active")) {
        menu.parentElement.classList.remove("active");
    } else {
        menu.parentElement.classList.add("active");
    }
})

let list = document.querySelector(".list")
list.addEventListener("click", function () {
    if (menu.parentElement.classList.contains("active")) {
        menu.parentElement.classList.remove("active");
    }
})

$(document).ready(function () {
    $(".list a").bind("click", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        if (menu.parentElement.classList.contains("active")) {
            menu.parentElement.classList.remove("active");
        }
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $(target).offset().top
                },
                700,
                function () {
                    location.hash = target;
                }
            );
        return false;
    });
    $("#logo").bind("click", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: 0
                },
                700,
                function () {
                    location.hash = target;
                }
            );
        return false;
    });
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $(".page-section").each(function (i) {
        if ($(this).position().top - 100 <= scrollDistance) {
            $(".list a.active").removeClass("active");
            $(".list a").eq(i).addClass("active");
        }
        if (scrollDistance < $(window).height()) {
            $(".list a.active").removeClass("active");
        }
    });
}).scroll();