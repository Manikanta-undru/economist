$(document).ready(function () {

	$("#menu li").click(function(){
		$(".close-menu").trigger("click");
	})


//     $(".nav ul li").click(function () {
//         $(".nav ul li").removeClass("active-menu")
//         $(this).addClass("active-menu")
// 		if($(this).hasClass(".active-menu")){
// 			$(this).prevAll().addClass("current")
// 			$(this).next().removeClass("current")
// 		}
//     })
    


    $(".i-btn").mouseenter(function () {
        $(".header-container .css-zh1qa0-AltAdvertisement .css-64g3ha-AltAdvertisement #sponsored-text-container").addClass("active")
    });
    $(".i-btn").mouseleave(function () {
        $(".header-container .css-zh1qa0-AltAdvertisement .css-64g3ha-AltAdvertisement #sponsored-text-container").removeClass("active")
    });

    /*AOS.init({
        once: true,
    });*/






    $(window).scroll(function () {
        let innerheight = $(".css-11i2cy8").height();
        if ($(this).scrollTop() > 50) {
            $(".header-container").addClass("active");
            $(".header-container").attr("style", "top: -" + innerheight + "px");
        } else {
            $(".header-container").removeClass("active")
            $(".header-container").attr("style", "top: 0");
        }
    });




    // $(document).ready(function(){
    //     $("li.start").siblings().css({"color": "red", "border": "2px solid red"});
    //   $("li.start").css({"color": "red", "border": "2px solid red"});
    //   $("li.start").next().css({"color": "green", "border": "2px solid green"});
    //   });


    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('scroll', function () {
        $(".section").each(function () {
            if ($(this).isInViewport()) {
                $(this).addClass("current")
            } else {
                $(this).removeClass("current")
            }
        })
    });
    $(".back-top").click(function(){
        $("html, body").animate({scrollTop:0})
		$(".nav ul li").removeClass("current")
      });

    $(".menu-btn").click(function (e) {
        $(".nav").toggleClass("active")
        e.stopPropagation();
    });

    $(".close-menu").hide()
    $(".menu-btn").click(function (e) {
        $(".nav").addClass("active")
        $(this).hide()
        $(".close-menu").show()
    });
    $(".close-menu").click(function () {
        $(".nav").removeClass("active")
        $(this).hide()
        $(".menu-btn").show()
    });
	


});



$(window).load(function () {
//     $(".header-left-box").addClass("active");
//     $(".banner-text .heading01, .banner-text p.b-p-color, .banner-text p:last-child").addClass("active");
    $(".nav ul li.intro, .nav ul li.whitepaper, .nav ul li.article, .nav ul li.article1, .nav ul li.article2, .nav ul li.article3").addClass("active");
	setTimeout(function(){
		$(".banner-text").addClass("active")
	}, 700)
});
