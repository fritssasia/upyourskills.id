// Navbar
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".nav-bar").addClass("nav-bar-active");
    } else {
        $(".nav-bar").removeClass("nav-bar-active");
    }
});