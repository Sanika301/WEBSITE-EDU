$(document).ready(function() {
    $(".sb").click(function(s) {
        var e = $(this).index(".sb");
        $("body").append('<div class="smoothbox sb-load"><div class="smoothbox-table"><div class="smoothbox-centering"><div class="smoothbox-sizing"><div class="sb-nav"><a href="#" class="sb-prev sb-prev-on" alt="Previous"><i class="fa fa-chevron-circle-left"></i></a><a href="#" class="sb-cancel" alt="Close"><i class="fa fa-times-circle"></i></a><a href="#" class="sb-next sb-next-on" alt="Next"><i class="fas fa-chevron-circle-right"></i></a></div><ul class="sb-items"></ul></div></div></div></div>'), $.fn.reverse = [].reverse, $(".sb").reverse().each(function() {
            var s = $(this).attr("href");
            if ($(this).attr("title")) {
                var e = $(this).attr("title");
                $(".sb-items").append('<div class="sb-item"><div class="sb-caption">' + e + '</div><img src="' + s + '"/></div>')
            } else $(".sb-items").append('<div class="sb-item"><img src="' + s + '"/></div>')
        }), $(".sb-item").slice(0, -e).appendTo(".sb-items"), $(".sb-item").not(":last").hide(), $(".sb-item img:last").load(function() {
            $(".smoothbox-sizing").fadeIn("slow", function() {
                $(".sb-nav").fadeIn(), $(".sb-load").removeClass("sb-load")
            })
        }), s.preventDefault()
    }), $(document).on("click", ".sb-cancel", function(s) {
        $(".smoothbox").fadeOut("slow", function() {
            $(".smoothbox").remove()
        }), s.preventDefault()
    }), $(document).on("click", ".sb-next-on", function(s) {
        $(this).removeClass("sb-next-on"), $(".sb-item:last").addClass("sb-item-ani"), $(".sb-item:last").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            $(".sb-item").eq(-2).addClass("no-trans").fadeIn("fast"), $(this).removeClass("sb-item-ani").prependTo(".sb-items").hide(), $(".sb-item:last").removeClass("no-trans"), $(".sb-next").addClass("sb-next-on"), $(".sb-item").unbind()
        }), s.preventDefault()
    }), $(document).on("click", ".sb-prev-on", function(s) {
        $(this).removeClass("sb-prev-on"), $(".sb-item:last").hide(), $(".sb-item:first").addClass("sb-item-ani2 no-trans").appendTo(".sb-items"), $(".sb-item:last").show().removeClass("no-trans").delay(1).queue(function(s) {
            $(".sb-item:last").removeClass("sb-item-ani2"), s()
        }), $(this).addClass("sb-prev-on"), s.preventDefault()
    })
});