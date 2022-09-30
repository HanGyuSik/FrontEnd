
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;


/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
   
});


/* 배열 섞기*/
let num1 = [1, 2, 3, 4, 5];
num1.sort();
console.log(num1);

const shuffleOld = (num1) => {
  for (let i = 0; i < num1.length; i++) {
    let idx1 = Math.floor(Math.random) * 5; // 0~4까지 랜덤수 생성
    let idx2 = Math.floor(Math.random) * 5; // 0~4까지 랜덤수 생성

    if (idx1 == idx2) continue;

    //idx1 위치의 값과 idx2위치의 값을 바꿔치기
    let temp = num1[idx1];
    num1[idx1] = num1[idx2];
    num1[idx2] = temp;

    console.log(`idx1 = ${idx1}, idx2 = ${idx2}`);
    console.log(num1);
  }
}

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}
console.log(shuffleOld);
console.log(num1);