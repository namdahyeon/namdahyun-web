$(document).ready(function(){
    

    // 주메뉴
    $("#gnb>ul>li>a").mouseover(function(){
        $(this).addClass('on').css('border-bottom','solid 4px #043385');
    });

    $("#gnb>ul>li>a").mouseleave(function(){
        $(this).removeClass('on').css('border-bottom','none');
    });

    $("#gnb>ul>li>a").hover(function(){
        if($('.company>a').hasClass('on')){
            $(this).clearQueue().next().css('display','block').animate({
                'height':'310px'},600);
         }else if($('.careers>a').hasClass('on')){
            $(this).clearQueue().next().css('display','block').animate({
                'height':'170px'},600);
         }else if($('.nowsroom>a').hasClass('on')){
            $(this).clearQueue().next().css('display','block').animate({
                'height':'170px'},600);
         }else if($('.product>a').hasClass('on')){
            $(this).clearQueue().next().css('display','block').animate({
                'height':'380px'},600);
         }else if($('.customer>a').hasClass('on')){
            $(this).clearQueue().next().css('display','block').animate({
                'height':'210px'},600);
         }else{
            $(this).clearQueue().next().animate({
                'height':'0'},600);
         };
    });

    // surch
    $("#srchPopBtn").click(function(){
        $(this).addClass('on');
        $('.srch_area').css({'display':'block','box-shadow':'0 0 0 999999px rgba(0,0,0,.6)'});
    });
    $("#srchPopCloseBtn").click(function(){
        $('#srchPopBtn').removeClass('on');
        $('.srch_area').css('display','none');
    });


    /* banner */
    var $bnnNum = 0;
    lastNum = $("ul.slide_wrap>li").length - 1;
    
    /* 다음 */
    $(".btn_next").click(function(){
        $bnnNum++;
        if($bnnNum > lastNum)$bnnNum = 0;
        $("ul.slide_wrap>li").removeClass('view');
        $("ul.slide_wrap>li").eq($bnnNum).addClass('view');

        $("ul.paging>li").removeClass('on');
        $("ul.paging>li").eq($bnnNum).addClass('on');
    });
    /* 이전 */
    $(".btn_prev").click(function(){
        $bnnNum--;
        if($bnnNum < 0)$bnnNum = lastNum;
        $("ul.slide_wrap>li").removeClass('view').eq($bnnNum).addClass('view');
        $("ul.paging>li").removeClass('on').eq($bnnNum).addClass('on');
    });


    /* 컨트롤 클릭 */
    var $bnnNum = 0;
    var $banner = $("ul.paging>li").click(function(e){
        e.preventDefault();
        $bnnNum = $banner.index(this);
        $("ul.slide_wrap>li").removeClass('view').eq($bnnNum).addClass('view');
        $("ul.paging>li").removeClass('on').eq($bnnNum).addClass('on');
    });
    $bnnNum = $banner.index(this) + 1;
    /* 컨트롤 오토 */
    function autoBanner(){
        $bnnNum++;
        if ($bnnNum > lastNum) $bnnNum = 0;
        $("ul.slide_wrap>li").removeClass('view').eq($bnnNum).addClass('view');
        $("ul.paging>li").removeClass('on').eq($bnnNum).addClass('on');
    }
    
    var $autoBnn = setInterval(autoBanner,5000);

    /* 배너 재생 명령 */
    var flag = true;
    $("ul.paging>li").click(function(){
        if(flag){
            clearInterval($autoBnn);
            flag = false;
        }else{
            $autoBnn = setInterval(autoBanner,5000);
            flag = true;
        }
    });
    
    // 배너 재생 or 일시정지
    var flag = true;
    $(".btn_pause").click(function(){
        if(flag){
            clearInterval($autoBnn);
            $(".btn_pause").css({'background-position-x':'-9px'});
            flag = false;
        }else{
            $autoBnn = setInterval(autoBanner, 5000);
            $(".btn_pause").css({'background-position-x':'0px'});
            flag = true;
        }
    });
    /* //banner end */







    // 바로가기
    $("#utillSnsBtn").hover(function(){
        if($('#utillSnsBtn').hasClass('on')){
            $(this).removeClass('on').next().css('display','none');
        }else{
            $(this).addClass('on').next().css('display','block');
        };
    });

    $(".kor").hover(function(){
        if($('.kor').hasClass('on')){
            $(this).removeClass('on').next().css('display','none');
        }else{
            $(this).addClass('on').next().css('display','block');
        };
    });


    // 문의하기
    // 문의유형선택
    $(".tab_list li").click(function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    });

});


// 랜덤이미지
function changeJcaptcha(){
    var imgNum = Math.floor(Math.random()*10+1);
    $('#jcaptchaImg').attr("src",'images/capshar_' + imgNum + '.jpg');
    return false;
}

// var imgNum = Math.floor(Math.random()*10+1);
// document.write('<img src="images/capshar_' + imgNum + '.jpg" alt="랜덤이미지" />' + "<br />");
