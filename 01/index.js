/*기존 함수 선언 방식*/ 
/*
function funPrint(){
  console.log("외부 자바스크립트");
}
*/
// ES6+ : 화살표 함수
const funPrint = (n) => {
//  console.log(n);
//  console.log("외부 자바스크립트");
console.log(`버튼${n}`);
}
// 변수





//  console.log("Dom test");

/* jQuery
$document.ready(){
}
*/
// document.addEventListener("DOMContentLoaded", 콜백함수);
// 자바에서의 인자처럼 함수를 인자대신 사용가능, function을 자주 쓰기에 기호화.
// document.addEventListener("DOMContentLoaded",function (){});
// Dom이 생성되고 난 후에 요소를 CRUD함.
document.addEventListener("DOMContentLoaded",() => {
//  console.log(document.getElementById("bt").innerHTML); // id기반으로 요소 찾기

//------------요소 생성-----------------
/*  let bt = document.createElement("button")
  document.getElementById("bt").append(bt);
*/

//-----------요소 찾기------------------
// html collection
/* const bts1 = document.getElementsByClassName("bt1");
console.log(bts1);

// html collection
const bts2 = document.getElementsByTagName("button");
console.log(bts2);

// node
const bts3 = document.querySelector(".bt1");
console.log(bts3);
*/
// node list
const bts4 = document.querySelectorAll(".bt1");
console.log(bts4);

/* console.log(bts4[0].innerHTML);
console.log(bts4[0].innerTest);
console.log(bts4[1].textContent);
*/ 


// 반복문 for
/* for(let i = 0; i < bts4.length; i++){
  console.log(typeof bts4[i]);
// bts4[i].innerHTML = `mybutton${i+1}`
// console.log(bts4[i].innerHTML);
}
*/
/*    반복문 for in*/
// for(let i in bts4){
//   console.log(i)
// }

//  반복문 for each : 메소드형식, 중간에 종료 불가
// bts4.forEach((item)=>{
//   console.log(item.innerHTML);
// });

// bts4.forEach((item, idx)=>{
//   console.log(`${idx} : ${item.innerHTML}`);
// });

// 반복문 for of
for(let item of bts4){
  console.log(item.innerHTML);
}

for(let [idx, item] of bts4.entries()){
  console.log(`${idx} : ${item.innerHTML}`);
}

});