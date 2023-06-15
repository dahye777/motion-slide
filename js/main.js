//6개
/*
어떤 작업이 실행되어야 하는가?
1. 버튼(open, close)
2. 순환(append, prepend)
*/
const frame = document.querySelector(".frame");
const articles = frame.querySelectorAll("article");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const opens = frame.querySelectorAll(".open");
const closes = frame.querySelectorAll(".close");

// next, prev를 클릭할 때

next.addEventListener("click", ()=>{
    frame.append(frame.firstElementChild);
})
prev.addEventListener("click",()=>{
    frame.prepend(frame.lastElementChild);
})

// open, close를 클릭할 때

opens.forEach((el,index)=>{
    el.addEventListener("click",(e)=>{
        e.target.closest("article").classList.add("on");


        // hide를 붙이는 코드
        // on이 붙어있지 않은 article을 어떻게 선택할 것인지?
        // on이 붙어있지 않다면 hide클래스를 붙여달라

        // 활성화 되지 않은 article은 모두 hide를 붙여서 보이지 않게 해야하므로
        // 반복문을 사용해야합니다

        // on클래스가 없다면 && 모두 hide클래스를 부여
        for(let el of articles) !el.classList.contains("on") && el.classList.add("hide");

        // 반복문 안에서 on이 없는 대상을 모두 hide해야합니다
        // 실무에서는 보통 3항연산자를 이용한 조건문이나 (앞의 조건)&& 앞의 조건이 참인 것을 판단해서
        // && 뒤의 내용을 판단하도록 합니다 따라서 조건문처럼 사용할 수 있습니다
    })

    
})

closes.forEach((el,index) => {
    el.addEventListener("click", (e)=>{

        // 클릭이벤트가 발생한 대상에 article을 찾아서 on을 지웁니다
        e.target.closest("article").classList.remove("on");
        // 그리고 반복을 돌면서 모든 article의 hide를 지웁니다
        for(let el of articles) el.classList.remove("hide");
    })
})