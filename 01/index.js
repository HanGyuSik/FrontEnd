// 랜덤수
let userNum;
let randNum;

// 화면 보기함수
const dispDom = (msgP, inNumP, bt1P, bt2P) => {
  document.getElementById("msg").style.display = msgP;
  document.getElementById("inNum").style.display = inNumP;
  document.getElementById("bt1").style.display = bt1P;
  document.getElementById("bt2").style.display = bt2P;
}


// 주사위
// function showDice() {}
const showDice = () => {
  randNum = Math.floor(Math.random()*6)+1;
  console.log(`주사위 랜덤수 => ${randNum}`);

// dom제어
  dispDom("none", "block","none", "block");
}



// 확인
const showOk = ()=>{
  userNum = form1.num.value;

 // dom제어
 dispDom("block", "none", "block","none",);

  // 주사위
  let tag = `<img src="./이미지/${randNum}.png">`
  
  // ox
  let ox;
  if(randNum==userNum) ox= 'o';
  else ox = 'x';
  tag = `${tag}<img src="./이미지/${ox}.png">`;
  document.getElementById("msg").innerHTML=tag;
  console.log(`확인 => ${userNum}`);

}

//DOM이 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
  // 주사위 버튼만 보이게
// dom제어
dispDom("none", "none", "block","none",);
})
