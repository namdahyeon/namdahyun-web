// menu
mainMenu = function() {
    document.getElementById('gnb').classList.toggle('view');
};

// mov
var mov = document.getElementById('mov');

var movNum = 0;
lastNum = mov.children.length-1;

var list = document.getElementById('list');

function autoMove(){
    movNum++;
    if(movNum>lastNum) movNum=0;

    mov.children[0].classList.remove("view");
    mov.children[1].classList.remove("view");
    mov.children[2].classList.remove("view");
    mov.children[3].classList.remove("view");
    mov.children[4].classList.remove("view");
    mov.children[5].classList.remove("view");

    mov.children[movNum].classList.add("view");

    setTimeout(function(){
            var i = 0;
            for(i=0;i<6;i++){
                if($('#mov>section').eq(i).hasClass('view')){
                }else{
                    $('#mov>section').eq(i).removeClass("last");
                }
            }
    },3000);
    setTimeout(function(){
        mov.children[movNum].classList.add("last");
    },0);
    

    // list
    list.children[0].classList.remove("on");
    list.children[1].classList.remove("on");
    list.children[2].classList.remove("on");
    list.children[3].classList.remove("on");
    list.children[4].classList.remove("on");
    list.children[5].classList.remove("on");

    list.children[movNum].classList.add("on");
    /* console.log(movNum); */
}
var auto = setInterval(autoMove,8000);
clearInterval(auto);
// 서브페이지실행
function scl(){
    var scroll = $(this).scrollTop();
    var subPage = document.getElementById('subP');
    
    if(1000<=scroll){
        if(subPage.classList.contains('subP')){
        }else{
            subPage.classList.add('subP');
            subPage.style.marginLeft = '0';
            auto = setInterval(autoMove,8000);
        }
    }else{
        clearInterval(auto);
        if(subPage.classList.contains('subP')){
            subPage.classList.remove('subP');
        }else{
        }
    }
    if(1000>scroll){
        subPage.style.display = 'none';
        subPage.style.marginLeft = '99999px';
    }else 
        subPage.style.display = 'block';

    }
window.addEventListener('scroll', scl);

function work1(){
    movNum = 5;
    setTimeout(autoMove,0);
    clearInterval(auto);

    st.classList.remove("stop");
    st.classList.add("start");
}
function work2(){
    movNum = 0;
    setTimeout(autoMove,0);
    clearInterval(auto);

    st.classList.remove("stop");
    st.classList.add("start");
}
function work3(){
    movNum = 1;
    setTimeout(autoMove,0);
    clearInterval(auto);

    st.classList.remove("stop");
    st.classList.add("start");
}
function work4(){
    movNum = 2;
    setTimeout(autoMove,0);
    clearInterval(auto);

    st.classList.remove("stop");
    st.classList.add("start");
}
function work5(){
    movNum = 3;
    setTimeout(autoMove,0);
    clearInterval(auto);

    st.classList.remove("stop");
    st.classList.add("start");
}
function work6(){
    movNum = 4;
    setTimeout(autoMove,0);
    clearInterval(auto);

    st.classList.remove("stop");
    st.classList.add("start");
}

var st = document.getElementById('st');

function stp(){    
    st.classList.toggle("stop");
    st.classList.toggle("start");
    if(st.classList.contains('stop')){
        setTimeout(autoMove,0);
        auto = setInterval(autoMove,8000);
    }else if(st.classList.contains('start')){
        clearInterval(auto);
    }
}

function prv(){
    if(movNum==0){
        movNum=4;
    }else if(movNum==1){
        movNum=5;
    }else{
        movNum -= 2;
    }
    setTimeout(autoMove,0);
    clearInterval(auto);

    st.classList.remove("stop");
    st.classList.add("start");
}

function nxt(){
    setTimeout(autoMove,0);
    clearInterval(auto);

    st.classList.remove("stop");
    st.classList.add("start");
}


/* enex_web */
var Con = document.getElementById('con');
function Pc(){
    Con = document.getElementById('con');
    if(con.classList.contains('tab')){
        Con.classList.add("pc");
        Con.classList.remove("tab");
    }else if(Con.classList.contains('mob')){
        Con.classList.add("pc");
        Con.classList.remove("mob");
    }
}
function Tab(){
    Con = document.getElementById('con');
    if(Con.classList.contains('pc')){
        Con.classList.add("tab");
        Con.classList.remove("pc");
    }else if(Con.classList.contains('mob')){
        Con.classList.add("tab");
        Con.classList.remove("mob");
    }
}
function Mob(){
    Con = document.getElementById('con');
    if(Con.classList.contains('pc')){
        Con.classList.add("mob");
        Con.classList.remove("pc");
    }else if(Con.classList.contains('tab')){
        Con.classList.add("mob");
        Con.classList.remove("tab");
    }
}
