$(document).ready(function() {
    $("#cssmenu").prepend('<div id="menu-button">Menu</div>'), $("#cssmenu #menu-button").on("click", function() {
        var n = $(this).next("ul");
        n.hasClass("open") ? n.removeClass("open") : n.addClass("open")
    })
});