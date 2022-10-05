/*
필요한 파츠
폭탄을 표현할 배열 -> 경고문 제작
폭탄 섞을 준비 및 초기화 준비
버튼누른 후 폭탄 셔플 -> 숫자와 폭탄 판별
버튼이 눌릴때 마다 배열추가 및 숫자를 따로 배열에 저장(남은 버튼 및 폭탄그림)
그림 출력
*/

let num = []; // 폭탄숫자의 배열


//DOM 구축, 숫자 배열 입력
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 8; i++) {
        num.push(0); // 하트를 받을 곳
    }
    num.push(1); // 폭탄을 받을 곳
    console.log(num);
});

//======================================================= 1.

// 메시지 출력
const msgShow = (m) => {
    const msg = document.getElementById("msg");
    msg.innerHTML = `<h2>${m}</h2>`; // 요소 내의 HTML 소스 가져옴
}

let shuffleFlag = false; // 셔플확인 변수 생성, 실패를 시작으로 선언

//======================================================== 2.

// 글 출력 및 그림 초기화 함수
const init = () => {
    msgShow(""); // 메세지 초기화

    for (let i = 1; i <= 9; i++) { // 그림 초기화
        document.getElementById(`box${i}`).innerHTML = ``; //HTML의 요소 호출
    }

    selNum = []; // 선택한 숫자 배열 초기화
}

// 폭탄 섞기
const boxShuffle = () => {
    num.sort(() => Math.random() - 0.5); // sort : 셔플, -0.5: 양수/음수 구분
    shuffleFlag = true; // 섞은것을 출력

    init(); // 초기화
    console.log(num);
}

//========================================================= 3.

// 숫자 선택시 기록할 배열 & 선택한 상자갯수 기록할 변수
let selNum = [];
let cnt = 0;

// 폭탄을 섞어서 게임준비
const show = (n) => { // 함수 show 실행, n = 연결된 숫자
    if (!shuffleFlag) {
        msgShow("plese shuffle");
        return;
    }
    // 배열에 따른 그림변경
    let imgSrc = null;
    if ((num[n - 1] == 1)) imgSrc = 'boom';
    else imgSrc = 'hart';

    // 숫자박스에 그림 출력
    document.getElementById(`box${n}`).innerHTML = `<img src = ./images/${imgSrc}.png>`
    console.log(n);

    if (!selNum.includes(n)) selNum.push(n);


    // 성공 체크
    if (selNum.length == 8) { // 폭탄제외
        let fn = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((i) => !selNum.includes(i));
        console.log(fn[0]);
        document.getElementById(`box${fn[0]}`).innerHTML = `<img src = ./images/hart.png>`
        msgShow('sucess');
        shuffleFlag = false;
    }
    // 실패 체크
    if (imgSrc == 'boom') {
        shuffleFlag = false;
        msgShow('fale');
    }



}