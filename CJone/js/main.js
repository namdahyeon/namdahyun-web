$(document).ready(function(){


    //리사이즈
    $(window).resize(function(){
        width=$(document).width();
    });
    

    /* 해상도체크 */
    var width = $(document).width();

    /* 고객센터 */
    $(".link").click(function () {
        if (width < 767) {
            if ($(this).hasClass('on')) {
                $(this).removeClass('on').parents('dd').find('ul').css({ 'display': 'none' });
            } else {
                $(this).addClass('on').parents('dd').find('ul').css({ 'display': 'block' });
            }
        } else {
            if ($(this).hasClass('on')) {
                $(this).removeClass('on').parents('dd').css({'border': 'solid 1px transparent'}).find('ul').css({'display': 'none'});
            } else {
                $(this).addClass('on').parents('dd').css({
                    'border': 'solid 1px #ccc',
                    'border-radius': '3px',
                    'box-sizing': 'border-box',
                }).find('ul').css({'display': 'block'});
            }
        }
        
    });


    $(".gnb>ul>li").click(function () {
        if (width < 767) {
            if ($(this).hasClass('on')) {
                $(this).css({ 'background-position-y': '28px' }).removeClass('on').children('ul').css({'display':'none'});
            } else {
                $(this).css({ 'background-position-y': '-20px' }).addClass('on').children('ul').css({'display':'block'});
            }
        } else {
            
        }
        
    });


    /* header hover */
    $("nav.gnb").mouseover(function () {
        if (width >= 767) {
            $(".header_wrap").css({'height': '455px'});
            $("nav.gnb>ul>li>ul").css({'display': 'block'});
            // 서치 무효화
            $(".sch_btn").css({'background': '#222 url(./images/btn_gnb_search.png)no-repeat 8px 10px'});
            $(".search").removeClass('on').slideUp();
        }
        
    });
    $("nav.gnb").mouseleave(function () {
        if(width >= 767){
            $(".header_wrap").css({'height': 'auto'});
            $("nav.gnb>ul>li>ul").css({'display': 'none'});
        }
        
    });


    /* 모바일사이즈 헤더 작동 */
    /* 모바일 header */
    $(".open").click(function () {
        $(".mobile").css({
            'transform': 'translateX(100%)',
            'box-shadow': '0 0 0 1000000px rgba(0,0,0,.5)',
            'transition': 'all 0.4s ease 0s'
        });
        $(".close").css({ 'transform': 'translateX(325px)' });
        $("body").css({ "overflow": "hidden" });

        // 서치 무효화
        $(".sch_btn").css({
            'background': '#222 url(./images/btn_gnb_search.png)no-repeat 8px 10px'
        });
        $(".search").removeClass('on').slideUp();
    });
    $(".close").click(function () {
        //고객센터 리셋
        $(".link").removeClass('on').parents('dd').css({'border': 'solid 1px transparent'}).find('ul').css({'display': 'none'});
        //gnb 리셋
        $(".gnb>ul>li").removeClass('on').css({ 'background-position-y': '28px' }).children('ul').css({'display': 'none'});;
        $(".mobile").css({
            'transform': 'translateX(0%)',
            'box-shadow': 'none'
        });
        $(".close").css({ 'transform': 'translateX(-280px)' });
        $("body").css({ "overflow": "visible" });
    });


    /* 서치 */
    $(".sch_btn").click(function(){
        if($(".search").hasClass('on')){
            $(this).css({
                'background':'#222 url(./images/btn_gnb_search.png)no-repeat 8px 10px'
            });
            $(".search").removeClass('on').slideUp();
        }else{
            $(this).css({
                'background':'#fff url(./images/btn_gnb_search.png)no-repeat 8px -14px'
            });
            $(".search").addClass('on').slideDown().css({
                'display':'block'
            });
        }
    });


    /* 로그인 이미지 */
    // loop img
    var loop="";
    for(i=0; i<82; i++){
        if(i<10){
            loop+="<img src='images/loop/loop_0000" + i + ".png' alt='로그인버튼" + i + "'>"
        }else{
            loop+="<img src='images/loop/loop_000" + i + ".png' alt='로그인버튼" + i + "'>"
        }
    }
    // appear img
    var appear="";
    for(i=0; i<57; i++){
        if(i<10){
            appear+="<img src='images/appear/appear_0000" + i + ".png' alt='로그인버튼" + i + "'>"
        }else{
            appear+="<img src='images/appear/appear_000" + i + ".png' alt='로그인버튼" + i + "'>"
        }
    }
    // appear2 img
    var appear2="";
    for(i=48; i>=0; i--){
        if(i<10){
            appear2+="<img src='images/appear/appear_0000" + i + ".png' alt='로그인버튼" + i + "'>"
        }else{
            appear2+="<img src='images/appear/appear_000" + i + ".png' alt='로그인버튼" + i + "'>"
        }
    }
    // 각 img 적용
    $(".login").find('a').html(loop);
    $(".login").find('span').html(appear);
    $(".login").find('em').html(appear2);

    // 자동 애니메이션 재생
    for(var j=0; j<82; j++){
        $(".login a>img").eq(j).css({"animation":"ani 4.1s linear " + (2.8 + 0.05*j)+"s infinite normal"});
    }
    for(var k=0; k<57; k++){
        $(".login span>img").eq(k).css({"animation":"ani 2.85s linear " + 0.05 * k + "s 1 normal"});
    }
    // hover할 때 appear2 동작
    $('.login').hover(function(){
        $(".login img").css({
            "animation":"none"
        });
        for(var k=0; k<50; k++){
            $(".login em img").eq(k).css({"animation":"ani 2.4s linear " + 0.05 * k + "s 1 normal"});
        }
        //애니메이션 마지막 유지
        $(".login em img:last-of-type").css({
            "animation":"ani2 5s linear " + 0.05 * k + "s 1 normal"
        });
    },function(){
        $(".login em img").css({
            "animation":"none"
        });
        for(var k=0; k<57; k++){
            $(".login span img").eq(k).css({"animation":"ani 2.85s linear " + 0.05 * k + "s 1 normal"});
        }
        for(var j=0; j<82; j++){
            $(".login a img").eq(j).css({"animation":"ani 4.1s linear " + (2.8 + 0.05*j)+"s infinite normal"});
        }
    });


    /* 오토배너 */
    var $bnnNum = 0;
    lastNum = $("section>div>ul li").size() - 1;
    

    $(".next").click(function(e){
        //배너일시정지
        clearInterval($autoBnn);
        $(".controls>p").css({'background-position-y':'-5px'});
        flag = false;

        e.preventDefault();
        $bnnNum++;
        if($bnnNum > lastNum)$bnnNum = 0;
        $book_w = $(".section_inner").width();
        $("section>div>ul").animate({ left: -$book_w * $bnnNum },1000,function(){
            if($(".slide").eq($bnnNum).hasClass("white")){
                $("section").addClass("on");
            }else{
                $("section").removeClass("on");
            }
            $(".controls li").css({'background-position-y':'-9px'});
            $(".controls li").eq($bnnNum).css({'background-position-y':'-39px'});
        });
    });
    
    $(".prev").click(function(e){
        //배너일시정지
        clearInterval($autoBnn);
        $(".controls>p").css({'background-position-y':'-5px'});
        flag = false;

        e.preventDefault();
        $bnnNum--;
        if($bnnNum < 0)$bnnNum = lastNum;
        $book_w = $(".section_inner").width();
        $("section>div>ul").animate({ left: -$book_w * $bnnNum },1000,function(){
            // 배너 컨트롤 색상변경
            if($(".slide").eq($bnnNum).hasClass("white")){
                $("section").addClass("on");
            }else{
                $("section").removeClass("on");
            }
            $(".controls li").css({'background-position-y':'-9px'});
            $(".controls li").eq($bnnNum).css({'background-position-y':'-39px'});
        });
    });

    var $bnnNum = 0;
    var $banner = $(".controls>ul>li").click(function(e){
        //배너일시정지
        clearInterval($autoBnn);
        $(".controls>p").css({'background-position-y': '-5px'});
        flag = false;

        e.preventDefault();
        $bnnNum = $banner.index(this);
        $("section>div>ul").animate({ left: -width * $bnnNum }, 600, function () {
            if($(".slide").eq($bnnNum).hasClass("white")){
                $("section").addClass("on");
            }else{
                $("section").removeClass("on");
            }
            $(".controls li").css({'background-position-y':'-9px'});
            $(".controls li").eq($bnnNum).css({'background-position-y':'-39px'});
        });
    });
    $bnnNum = $banner.index(this) + 1;
    $(window).stop().resize(function () {
        var $banner_w = $(".section_inner").width();
        $("section>div>ul").css({ "left": -$bnnNum * $banner_w });
    });


    
    function autoBanner() {
        $book_w = $(".section_inner").width();
        $bnnNum++;
        if ($bnnNum > lastNum) $bnnNum = 0;
        $("section>div>ul").animate({ "left": -$book_w * $bnnNum }, 1000, function () {
            // 배너 컨트롤 색상변경
            if($(".slide").eq($bnnNum).hasClass("white")){
                $("section").addClass("on");
            }else{
                $("section").removeClass("on");
            }
            $(".controls li").css({
                'background-position-y':'-9px'
            });
            $(".controls li").eq($bnnNum).css({
                'background-position-y':'-39px'
            });
        });
    }
    var $autoBnn = setInterval(autoBanner, 5000);

    // 배너 재생 or 일시정지
    var flag = true;
    $(".controls>p").click(function(){
        if(flag){
            clearInterval($autoBnn);
            $(".controls>p").css({'background-position-y':'-5px'});
            flag = false;
        }else{
            $autoBnn = setInterval(autoBanner, 5000);
            $(".controls>p").css({'background-position-y':'-35px'});
            flag = true;
        }
    });


    /* mobile swipe */
    $("section").bind("swipeleft", function () {
        $(".next").trigger("click");
    });

    $("section").bind("swiperight", function () {
        $(".prev").trigger("click");
    });



    /* content1 quick 메뉴 */
    // quick1
    var quick1 = "";
    for(var i=0; i<20; i++){
        if(i<10){
            quick1 += "<img src='images/quick01/quick01_0000" + i + ".png' alt='카드등록안내" + i + "' />"
        }else{
            quick1 += "<img src='images/quick01/quick01_000" + i + ".png' alt='카드등록안내" + i + "' />"
        }
    }
    // quick2
    var quick2 = "";
    for(var i=0; i<20; i++){
        if(i<10){
            quick2 += "<img src='images/quick02/quick02_0000" + i + ".png' alt='카드등록안내" + i + "' />"
        }else{
            quick2 += "<img src='images/quick02/quick02_000" + i + ".png' alt='카드등록안내" + i + "' />"
        }
    }
    // quick3
    var quick3 = "";
    for(var i=0; i<20; i++){
        if(i<10){
            quick3 += "<img src='images/quick03/quick03_0000" + i + ".png' alt='카드등록안내" + i + "' />"
        }else{
            quick3 += "<img src='images/quick03/quick03_000" + i + ".png' alt='카드등록안내" + i + "' />"
        }
    }
    // quick4
    var quick4 = "";
    for(var i=0; i<20; i++){
        if(i<10){
            quick4 += "<img src='images/quick04/quick04_0000" + i + ".png' alt='카드등록안내" + i + "' />"
        }else{
            quick4 += "<img src='images/quick04/quick04_000" + i + ".png' alt='카드등록안내" + i + "' />"
        }
    }

    $("a.quick1").find('span').html(quick1);
    $("a.quick2").find('span').html(quick2);
    $("a.quick3").find('span').html(quick3);
    $("a.quick4").find('span').html(quick4);

    $("a.quick").hover(function(){
        //애니메이션 재생
        for(var k=0; k<20; k++){
            $(this).find('img').eq(k).css({
                "animation":"ani 1s linear " + 0.05*k + "s 1 normal"
            });
        }
    },function(){
        //애니메이션 삭제
        $(this).find('img').css({
            "animation":"none"
        });
    });
    

    
    /* resize */
    $(window).resize(function(){
        scroll_w=$(document).width();
    });

    $(".Top").click(function(){
        $("html,body").stop().animate({"scrollTop": 0 },1000);
    });

    /* scroll 이벤트 */
    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        var scroll_w=$(document).width();
        var scroll_h=$(window).height();
        
        // content2 bg 모션
        $(".c2_bg1").css({ "top" : 200 + scroll * 0.2}); //135
        $(".c2_bg2").css({ "top" : 500 + scroll * 0.2}); //162
        $(".c2_bg3").css({ "top": 722 + scroll * 0.1 }); //119
        $(".c2_bg5").css({ "bottom": -100 + scroll * 1.1 }); //206 l
        $(".c2_bg6").css({"bottom":-2500+scroll*1}); //508
        $(".c2_bg7").css({ "top": -1000 + scroll * 1.3 }); //bw

        if(scroll<1080){
            $(".c2_bg8").css({"top" : -400 + scroll * 1.2}); //sw
            $(".c2_bg4").css({"top" : 400 + scroll / 2.2}); //206 r
        }


        // content2 네이버 scroll[PC]
        if(scroll_w>1024){
            if(scroll>1400 && scroll<1600){
                var scroll_n = scroll-1400;
                $(".hot_item4").css({"top":500 + scroll_n});
            }
        };
        
        
        // 스크롤탑 위치
        if(scroll>scroll_h){
            $("div.Top").addClass("on");
        }else{
            $("div.Top").removeClass("on");
        }
        
        var scroll_b;
        if(scroll_w>1024){
            scroll_b=scroll-2950;
            if(scroll>2950){
                $(".Top").css({"bottom":50+scroll_b});
                if(scroll_b+50>294){
                    $(".Top").css({"bottom":294});
                }
            }else{
                $(".Top").css({"bottom":50});
            }
        }else if(scroll_w>768&&scroll_w<1024){
            scroll_b=scroll-3450;
            if(scroll>3450){
                $(".Top").css({"bottom":50+scroll_b});
                if(scroll_b+50>312){
                    $(".Top").css({"bottom":312});
                }
            }else{
                $(".Top").css({"bottom":50});
            }
        }else{
            scroll_b=scroll-5100;
            if(scroll>5100){
                $(".Top").css({"bottom":50+scroll_b});
                if(scroll_b+50>319){
                    $(".Top").css({"bottom":319});
                }
            }else{
                $(".Top").css({"bottom":50});
            }
        }
        
    });



    /* 계열사 바로가기 메뉴 */
    $("li.family").click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on')
        }else{
            $(this).addClass('on')
        }
        return false;
    });
    

    /* content3 */
    $(".global").click(function () {
        // 리스트전환
        $(".global ul").css({ 'display': 'none' });
        $(this).find('ul').css({ 'display': 'block' });
        $(".global>a").css({
            'color': '#888',
            'text-decoration': 'none'
        });
        $(this).find('a').css({
            'color': '#222',
            'text-decoration': 'underline'
        });

        // 로고갯수에 의한 height조절
        if (width < 767) {
            var glo = $(this).find('li').length;
            if (glo < 1) {
                $(".content3>div").css({ 'height': '350px' });
            } else if (glo < 5) {
                $(".content3>div").css({ 'height': '430px' });
            } else if (glo < 9) {
                $(".content3>div").css({ 'height': '520px' });
            } else if (glo < 13) {
                $(".content3>div").css({ 'height': '560px' });
            } else {
                $(".content3>div").css({ 'height': '916px' });
            }
        } else {
            var glo = $(this).find('li').length;
            if (glo < 1) {
                $(".content3>div").css({ 'height': '295px' });
            } else if (glo < 7) {
                $(".content3>div").css({ 'height': '370px' });
            } else if (glo < 13) {
                $(".content3>div").css({ 'height': '440px' });
            } else {
                $(".content3>div").css({ 'height': '695px' });
            }
        }
        return false;
    });

    $(".global li>a").hover(function () {
        $(this).parents('li').addClass('on');
    }, function () {
        $(this).parents('li').removeClass('on');
    });


    $(window).resize(function () {

        $(".global1").trigger("click"); //content3 높이지정. li 첫번째 선택

        scroll_w = $(document).width();

        if (scroll_w < 767) {
            $(".hot_item4").css({ "top": "1225px" }); // scroll하고 risize 할 시, 네이버 top 위치 리셋
            $(".content3>div").css({ 'height': '916px' }); //content3
        } else if (scroll_w >= 767 && scroll_w < 1024) {
            $(".hot_item4").css({ "top": "470px" });
            $(".content3>div").css({ 'height': '695px' });
        } else {
            $(".hot_item4").css({ "top": "502px" });
            $(".content3>div").css({ 'height': '695px' });
        }

        var $banner_w = $(".section_inner").width();
        $("section>div>ul").css({ "left": -$bnnNum * $banner_w });
    });

    

});
    
