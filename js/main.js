// main.js
$(document).ready(function(){
    $("body,html").stop().animate({'scrollTop':0},1500,"swing");

    $(".logo").click(function(){
        $("body,html").stop().animate({'scrollTop':0},1500,"swing");
    });

    // 로딩페이지
    function imagesProgress() {
        var $container = $('#splash'),
        $progressBar = $container.find('.progress-bar'),
        $progressRab = $container.find('.rab'),
        $progressText = $container.find('.progress-text'),

        imgLoad = imagesLoaded('body'),
        imgTotal = imgLoad.images.length,

        imgLoaded = 0,
        current = 0,

        progressTimer = setInterval(updateProgress, 1000 / 60);
        imgLoad.on('progress',function(){
            imgLoaded++;
        });

        function updateProgress(){
            var target = (imgLoaded / imgTotal) * 100;
            current += (target - current) * 0.1;

            $progressBar.css({ width: current + '%' });
            $progressRab.css({ left: current + '%' });
            $progressText.text(Math.floor(current) + '%' );
            
            if(current >= 100){
                clearInterval(progressTimer);
                $container.addClass('progress-complete');
                $container.delay(500).animate({top:'-100%'},1000);
            }

            if(current > 99.9){
                current = 100;
            }
        }//updateProgress()
    }//imagesProgress()
    imagesProgress();


    // mouse move
    $("content").mousemove(function(e){
        var posX = e.pageX;
        var posY = e.pageY;

        $(".sec_bg").find("em").css({"left":"calc(50% + " + (20-(posX/30)) + "px)" });
        $(".cotc_bg").css({
            "right":"calc(30% + " + -(20-(posX/30)) + "px)" });
    });


    $(".subM1").click(function(){
        $("body,html").stop().animate({'scrollTop':0},1500,"swing");
        $("#gnb").removeClass('view');
        setTimeout(introClose,0);
    });
    // $(".subM2").click(function(){
    //     $("body,html").stop().animate({'scrollTop':6100},1500,"swing");
    //     $("#gnb").removeClass('view');
    //     setTimeout(introClose,0);
    // });
    // $(".subM3").click(function(){
    //     $("body,html").stop().animate({'scrollTop':8330},1500,"swing");
    //     $("#gnb").removeClass('view');
    //     setTimeout(introClose,0);
    // });
    $(".subM4").click(function(){
        $("body,html").stop().animate({'scrollTop':1000},1500,"swing");
        $("#gnb").removeClass('view');
        setTimeout(introClose,0);
    });
    $(".subM5").click(function(){
        $("#gnb").removeClass('view');
        setTimeout(introClose,0);
    });

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        
        if(0<scroll && scroll<=1200){
            $(".main1").css({ "transform":"scale(" + (1 + (scroll/1000)) + ")",
                            "top":-(scroll / 2) + "px" });
        }else{
            $(".main1").css({ "transform":"scale(1)",
                            "top":"0" });
        }

        if(0<scroll && scroll<=1200){
            $(".main3").css({ "top":(scroll / 8) + "px" });
        }else{
            $(".main3").css({ "top":"0" });
        }

        if(0<scroll && scroll<=1200){
            $(".main4").css({ "top":(scroll / 3) + "px" });
        }else{
            $(".main4").css({ "top":"0" });
        }

        if(0<scroll && scroll<=1200){
            $(".main_list").css({ "background-position-y":scroll + "px" });
        }else{
            $(".main_list").css({ "background-position-y":"0"});
        }

    });

    
    $('.noLk').click(function(e){
        e.preventDefault();
    });

});

// eyes
document.querySelector('body').addEventListener('mousemove',cateye);
function cateye(){
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+rotation+"deg)"
    });

    const eyeB = document.querySelectorAll('.eyeB');
    eyeB.forEach(function(eyeB){
        let x = (eyeB.getBoundingClientRect().left) + (eyeB.clientWidth / 2);
        let y = (eyeB.getBoundingClientRect().top) + (eyeB.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eyeB.style.transform = "translate(-50%,-50%) rotate("+rotation+"deg)"
    });

    const eyeE = document.querySelectorAll('.eye>p');
    eyeE.forEach(function(eyeE){
        let x = (eyeE.getBoundingClientRect().left) + (eyeE.clientWidth / 2);
        let y = (eyeE.getBoundingClientRect().top) + (eyeE.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eyeE.style.transform = "translate(-50%,-50%) rotate(-"+rotation+"deg)"
    });
}

var cotc = document.getElementById("contact");
function cotc_open(){
    cotc.classList.add("on");
}
function cotc_clese(){
    cotc.classList.remove("on");
}

var bod = document.getElementById("bod");

var eye1 = document.getElementById("eye1");
var eye2 = document.getElementById("eye2");
var eyeB1 = document.getElementById("eyeB1");
var eyeB2 = document.getElementById("eyeB2");

var cr = document.getElementById("cr");

var introM = document.getElementById("introM");

function introClose(){
    cr = document.getElementById("cr");

    bod.style.overflowY = "auto"
    eye1.style.animation = "wink .2s ease 0s 1 forwards"
    eye2.style.animation = "wink2 .2s ease 0s 1 forwards"
    eyeB1.style.opacity = "0"
    eyeB2.style.opacity = "0"
    introM.style.opacity = "0"
    cr.classList.add("st");
    function IM(){
        introM.style.display = "none"
    }
    setTimeout(IM,2000);
}

// function scl(){
//     var scroll = $(this).scrollTop();
//     var skl4 = document.getElementById('skl4');
    
//     if(8000<=scroll){
//         if(skl4.classList.contains('on')){
//         }else{
//             skl4.classList.add('on');
//         }
//     }else{
//         if(skl4.classList.contains('on')){
//             skl4.classList.remove('on');
//         }else{
//         }
//     }
// }
// window.addEventListener('scroll', scl);