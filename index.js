$(document).ready(function () {
    $("#section-1").hide();
    $("#section-2").hide();
    $("#section-3").hide();
    $("#git").hide();
    $("#a").hide();
    $("#b").hide();
    $("#c").hide();
    $("#d").hide();
    $("#gomez").click(function () {
        $("#section-1").toggle("fast").animate({
            left: "+=150"
        });
        $("#section-2").hide();
        $("#section-3").hide();
        $("#git").toggle(4000);
    });
    $("#gomez").hover(function () {
        $("#a").show();
        $("#d").hide();
        $("#b").hide();
        $("#c").hide();
        $("#e").hide();
    });
    $("#skills").click(function () {
        $("#section-2").toggle("fast");
        $("#section-1").hide();
        $("#section-3").hide();
    });
    $("#skills").hover(function () {
        $("#b").show();
        $("#a").hide();
        $("#d").hide();
        $("#c").hide();
        $("#e").hide();
    })
    $("#goals").click(function () {
        $("#section-3").toggle("fast");
        $("#section-1").hide();
        $("#section-2").hide();
    });
    $("#goals").hover(function () {
        $("#c").show();
        $("#a").hide();
        $("#b").hide();
        $("#d").hide();
        $("#e").hide();
    })
    $("#tree").hover(function () {
        $("#c").hide();
        $("#a").hide();
        $("#b").hide();
        $("#d").show();
        $("#e").hide();
    })
    $("#email").hover(function () {
        $("#c").hide();
        $("#a").hide();
        $("#b").hide();
        $("#d").hide();
        $("#e").show();
    })
    $("#tree").click(function () {
        $("body").css("background", "rgb(20, 35, 20)");
        $("#section-4").toggle("fast");
        $("#section-1").css("background", "rgb(14, 60, 0)");
        $("#section-2").css("background", "rgb(14, 45, 0)");
        $("#section-3").css("background", "rgb(20, 35, 20)");
        $("img").css("filter", "grayscale(1)");
        $("a").css("color", "red");
        $("a").css("font-size", "24px");
    })

})