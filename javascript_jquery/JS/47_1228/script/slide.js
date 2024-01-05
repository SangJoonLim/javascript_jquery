// 외부스크립트 slide.js

// 1. 변수선언

// querySelector(단수), querySelectorAll(복수)

const slide = document.querySelector('.slide');
// 상품목록의 부모요소

const slide_img = document.querySelectorAll('.slide li');
// 상품목록의 자손요소


// 상품목록
const l_btn=document.getElementById('l_btn');//이전
const r_btn=document.getElementById('r_btn');//다음

// stop 버튼 변수
const stop_btn = document.querySelector('.fa-stop')
// 쿼리셀렉터에선 클래스명이다를경우 클래스를 써도됨
const play_btn = document.querySelector('.fa-play')
// play 버튼 변수

const img_n = slide_img.length; //li개수를 변수에 담음 length = slide_img(slide li)의 개수를 구해라

console.log(img_n); 
//6

const img_w = 480; // 상품사진의 너비
const m = 60; // 여백사이즈
const s_count = 3; //하나의 페이지에 보여질 상품개수

let count = 0; //이전, 다음클릭시 사용할 변수값 설정

slide.style.width = (img_w+m)*img_n-m+'px';
//이미지 사이즈 계산없이 서식으로 적용하기 

// 왼쪽으로 움직이는 슬라이드 함수 작성하기
function mslide(n){
    // slide.style.width = (img_w+m)*img_n+'px';
    slide.style.left = (img_w+m)*-n+'px';
    count=n;
    console.log(count); //이전버튼 클릭시 3,2,1,0
    console.log(slide.style.left); // -480-60 =-540 -1080 -1620
}

//이전버튼 클릭시 왼쪽으로 슬라이드 이동
l_btn.addEventListener('click', function(){
    if(count>0){ //만약 카운터 값이 0보다 크면
        mslide(count-1);
        //카운트값에 -1빼서 mslide에 넘김
    }
    

    else{
        mslide(img_n-s_count); //li개수(6) -3 = 3
    }


})

//다음버튼 클릭시 오른쪽으로 슬라이드 이동
r_btn.addEventListener('click', function(){
    if(count<img_n-s_count){ //0보다 li개수가 많다면
        mslide(count+1); //0+1해서 넘김
    }
    else{ //그렇지 않다면
        mslide(0); //0을 대입하여 처음으로 돌아가게함
    }
});

// 오토슬라이드 3초마다 자동으로 슬라이드움직이게하기
// 시간객체 = setInterval(함수명, 반복시간)

// let Timer = setInterval(function(){
//     console.log('반복호출실행');
// }, 3000);

// 0,1,2,3 페이지 이동시 카운터 개수를 셋팅해놓고 그것을 이미지에 적용?

let Timer = setInterval(function(){
    console.log('반복호출실행');

    if(count==3){
        count=0;
    }

    else{
        count++;
    }
    mslide(count); //mslide에 count값을 넘겨서 자동으로 움직이게 한다.
    
    console.log(count);
}, 3000);

//stop_btn 클릭시 시간을 제거하여 멈추게함
stop_btn.addEventListener('click',function(){
    clearInterval(Timer);
});

//play_btn클릭시 시간을 다시 생성하여 자동으로 움직이게함
play_btn.addEventListener('click',function(e){ //e=event객체
    // 기존 자동재생이 되고 있다면 제거하고
    clearInterval(Timer);

    // 3초마다 움직이게 함
    Timer = setInterval(function(){
        console.log('반복호출실행');
    
        if(count==3){
            count=0;
        }
    
        else{
            count++;
        }
        mslide(count); //mslide에 count값을 넘겨서 자동으로 움직이게 한다.
        
        console.log(count);
    }, 3000);
    // let Timer로 let전역변수를 생성했으니 play내부에서는 쓰면안된다 
    e.preventDefault();//이벤트 중복현상을 제거

    
});


//노랑풍선에서는 플레이버튼을 누르면 플레이가사라지고 스탑으로 바뀜 스탑을 누를시 플레이사라지고 스탑아이콘만있음 그런식으로 만들수도있다.

// 메인 배너에 쓸수도있음
// 가로 100% 개수 4개면 총 500%
// html > slide wrapper 100% , .slide width:500% , .slide li{100%} 로설정하면 반응형으로 바꿀수있음 그리고 js에서 쓴 픽셀값을 %로바꾸면된다




