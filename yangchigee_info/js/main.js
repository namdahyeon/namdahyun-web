/* main.js */
$(function(){
    $("body,html").stop().animate({'scrollTop':0},1500,"swing");

    var start = setTimeout(function(){
        $("body>section").addClass("on");
    },500);
    
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        console.log(scroll);

        // header
        if(scroll>0){
            $("body>header").addClass("on");
        }else{
            $("body>header").removeClass("on");
        }
        
        // main
        if(scroll>=0){
            $("body>section").addClass("on");
        }else{
            $("body>section").removeClass("on");
        }

        var content = $("#container>div");

        // content1
        if(scroll>=content.eq(0).offset().top - 500){
            $(".content1>section").addClass("on");
        }else{
            $(".content1>section").removeClass("on");
        }

        // content2
        if(scroll>=content.eq(1).offset().top - 100){
            $(".content2>section").addClass("on");
        }else{
            $(".content2>section").removeClass("on");
        }

        // content3
        if(scroll>=content.eq(2).offset().top - 500){
            $(".content3>section").addClass("on");
        }else{
            $(".content3>section").removeClass("on");
        }

        // content4
        if(scroll>=content.eq(3).offset().top - 500){
            $(".content4>section").addClass("on");
        }else{
            $(".content4>section").removeClass("on");
        }

        // article
        var arti = $(".content4 article");

        // content4 tab1
        if(scroll>=arti.eq(0).offset().top - 500){
            $(".content4 article.tab1").addClass("on");
        }else{
            $(".content4 article.tab1").removeClass("on");
        }

        // content4 tab2
        if(scroll>=arti.eq(1).offset().top - 500){
            $(".content4 article.tab2").addClass("on");
        }else{
            $(".content4 article.tab2").removeClass("on");
        }

        // content4 tab3
        if(scroll>=arti.eq(2).offset().top - 500){
            $(".content4 article.tab3").addClass("on");
        }else{
            $(".content4 article.tab3").removeClass("on");
        }

        // content4 tab4
        if(scroll>=arti.eq(3).offset().top - 500){
            $(".content4 article.tab4").addClass("on");
        }else{
            $(".content4 article.tab4").removeClass("on");
        }

        // content5
        if(scroll>=content.eq(4).offset().top - 500){
            $(".content5>section").addClass("on");
        }else{
            $(".content5>section").removeClass("on");
        }

        // content6
        if(scroll>=content.eq(5).offset().top - 500){
            $(".content6>section").addClass("on");
        }else{
            $(".content6>section").removeClass("on");
        }

        // content7
        if(scroll>=content.eq(6).offset().top - 500){
            $(".content7>section").addClass("on");
        }else{
            $(".content7>section").removeClass("on");
        }

        // content8
        if(scroll>=content.eq(7).offset().top - 700){
            $(".content8>section").addClass("on");
        }else{
            $(".content8>section").removeClass("on");
        }



        // 스크롤이벤트 con4 1
        if(scroll<=5100){
            $("article.tab1 strong").css({ "transform":"translateX(-1000px)"});
        }else if(5100<scroll && scroll<=5600){
            $("article.tab1 strong").css({ "transform":"translateX(" + -(1000 - (scroll-5100) * 2) + "px)" });
        }else{
            $("article.tab1 strong").css({ "transform":"translateX(0)"});
        }

        if(scroll<=5200){
            $("article.tab1 span").css({ "transform":"translateX(1000px)"});
        }else if(5200<scroll && scroll<=5700){
            $("article.tab1 span").css({ "transform":"translateX(" + (1000 - (scroll-5200) * 2) + "px)" });
        }else{
            $("article.tab1 span").css({ "transform":"translateX(0)"});
        }

        if(scroll<=5400){
            $("article.tab1 span:last-of-type").css({ "transform":"translateX(1000px)"});
        }else if(5400<scroll && scroll<=5900){
            $("article.tab1 span:last-of-type").css({ "transform":"translateX(" + (1000 - (scroll-5400) * 2) + "px)" });
        }else{
            $("article.tab1 span:last-of-type").css({ "transform":"translateX(0)"});
        }

        // 스크롤이벤트 con4 2
        if(scroll<=6200){
            $("article.tab2 strong").css({ "transform":"translateX(1000px)"});
        }else if(6200<scroll && scroll<=6700){
            $("article.tab2 strong").css({ "transform":"translateX(" + (1000 - (scroll-6200) * 2) + "px)" });
        }else{
            $("article.tab2 strong").css({ "transform":"translateX(0)"});
        }

        if(scroll<=6300){
            $("article.tab2 span").css({ "transform":"translateX(-1000px)"});
        }else if(6300<scroll && scroll<=6800){
            $("article.tab2 span").css({ "transform":"translateX(" + -(1000 - (scroll-6300) * 2) + "px)" });
        }else{
            $("article.tab2 span").css({ "transform":"translateX(0)"});
        }

        if(scroll<=6500){
            $("article.tab2 span:last-of-type").css({ "transform":"translateX(-1000px)"});
        }else if(6500<scroll && scroll<=7000){
            $("article.tab2 span:first-of-type").css({ "transform":"translateX(" + -(1000 - (scroll-6500) * 2) + "px)" });
        }else{
            $("article.tab2 span:first-of-type").css({ "transform":"translateX(0)"});
        }

        // 스크롤이벤트 con4 3
        if(scroll<=7500){
            $("article.tab3 strong").css({ "transform":"translateX(-1000px)"});
        }else if(7500<scroll && scroll<=8000){
            $("article.tab3 strong").css({ "transform":"translateX(" + -(1000 - (scroll-7500) * 2) + "px)" });
        }else{
            $("article.tab3 strong").css({ "transform":"translateX(0)"});
        }

        // 스크롤이벤트 con4 4
        if(scroll<=8500){
            $("article.tab4 strong").css({ "transform":"translateX(1000px)"});
        }else if(8500<scroll && scroll<=9000){
            $("article.tab4 strong").css({ "transform":"translateX(" + (1000 - (scroll-8500) * 2) + "px)" });
        }else{
            $("article.tab4 strong").css({ "transform":"translateX(0)"});
        }

        if(scroll<=8600){
            $("article.tab4 span").css({ "transform":"translateX(-1000px)"});
        }else if(8600<scroll && scroll<=9100){
            $("article.tab4 span").css({ "transform":"translateX(" + -(1000 - (scroll-8600) * 2) + "px)" });
        }else{
            $("article.tab4 span").css({ "transform":"translateX(0)"});
        }

        if(scroll<=8800){
            $("article.tab4 span:last-of-type").css({ "transform":"translateX(-1000px)"});
        }else if(8800<scroll && scroll<=9300){
            $("article.tab4 span:first-of-type").css({ "transform":"translateX(" + -(1000 - (scroll-8800) * 2) + "px)" });
        }else{
            $("article.tab4 span:first-of-type").css({ "transform":"translateX(0)"});
        }

    });//scroll 끝

});