/* web_std */
$(document).ready(function(){
    
    // 가로세로 비율 맞춰 스크롤 이동하기
    var winW = $(window).width();
    var winH = $(window).height();

    var W = containerWid - winW;
    var H = containerWid - winH;
    var R = W/H;

    /* container 가로크기 만큼 body의 높이값 지정 */
    var Length = $(".contWrap>section").length;
    var containerWid = 1920 * Length;
    $("body").height(containerWid);

    $(window).resize(function(){
        Length = $(".contWrap>section").length;
        containerWid = 1920 * Length;
        $("body").height(containerWid);

        winW = $(window).width();
        winH = $(window).height();

        W = containerWid - winW;
        H = containerWid - winH;
        R = W/H;
    });

    var lastScrollTop = 0;

    $(window).scroll(function(){
        var scroll = $(this).scrollTop(); // 현재 스크롤 값

        var winW = $(window).width();
        var winH = $(window).height();

        var W = containerWid - winW;
        var H = containerWid - winH;
        var R = W/H;

        var scrollR = scroll * R;

        $(".contWrap").css({"transform":"translateX(-" + scrollR + "px)"});

        lastScrollTop = scroll;
    });



    var $left1 = 0;
    var $left2 = 0;
    var $left3 = 0;
    var $left4 = 0;
    var $left5 = 0;
    var $left6 = 0;
    $('.bgSrc p.cup2').click(function(){
        $left1 = $left1+500;
        $(this).addClass('mov').stop().animate({margin:'0 0 2000px ' + ($left1-300) + 'px'
        },500).animate({margin:'0 0 0 ' + $left1 + 'px'
        },3000,function(){
            $(this).removeClass('mov');
        });
    });
    $('.bgSrc p.spoon1').click(function(){
        $left2 = $left2+500;
        $(this).addClass('mov').stop().animate({margin:'0 0 2000px ' + ($left2-300) + 'px'
        },500).animate({margin:'0 0 0 ' + $left2 + 'px'
        },3000,function(){
            $(this).removeClass('mov');
        });
    });
    $('.bgSrc p.spoon2').click(function(){
        $left3 = $left3+500;
        $(this).addClass('mov').stop().animate({margin:'0 0 2000px ' + ($left3-300) + 'px'
        },500).animate({margin:'0 0 0 ' + $left3 + 'px'
        },3000,function(){
            $(this).removeClass('mov');
        });
    });
    $('.bgSrc p.coaster1').click(function(){
        $left4 = $left4+500;
        $(this).addClass('mov').stop().animate({margin:'0 0 2000px ' + ($left4-300) + 'px'
        },500).animate({margin:'0 0 0 ' + $left4 + 'px'
        },3000,function(){
            $(this).removeClass('mov');
        });
    });
    $('.bgSrc p.coaster3').click(function(){
        $left5 = $left5+500;
        $(this).addClass('mov').stop().animate({margin:'0 0 2000px ' + ($left5-300) + 'px'
        },500).animate({margin:'0 0 0 ' + $left5 + 'px'
        },3000,function(){
            $(this).removeClass('mov');
        });
    });
    $('.bgSrc p.coaster4').click(function(){
        $left6 = $left6+500;
        $(this).addClass('mov').stop().animate({margin:'0 0 2000px ' + ($left6-300) + 'px'
        },500).animate({margin:'0 0 0 ' + $left6 + 'px'
        },3000,function(){
            $(this).removeClass('mov');
        });
    });
    $('.bgSrc p.spoon1').click(function(){
        $(this).find('span').css('display','none');
    });
});