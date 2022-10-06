// 옛방식
    /*function show(){
      
      console.log("hello"); // println
      }
    */



// 현방식

const show = ()=>{
  // 1. 태그만들기
  
  /*
  let tag = "";                   //{}밖으로 나오면 정보가 사망.
   for(let i = 1; i < 7; i++){     //for안에 변수 선언시 for밖으로 나오면 사망.
    
    //tag = tag + '<div class = divMsg>'+i+'</div>'; // 넣고자 하는 태그를 변수화. 옛방식
    tag = tag + `<div id = divMsg><img src = './이미지/${i}.png'></div>`     // 템플릿문자열 : `` + ${}, 원하는 태그를 순서대로 넣는다.
  
  }
  */
  

  //------------------------------------------------------------------------

  let tag = "";
  let i = Math.floor(Math.random()*6 ) + 1; // 첫번째는 0이기 때문
    
  tag = `<div id = divMsg><img src = './이미지/${i}.png'></div>`

  console.log(tag);

  // 2. DOM에서 태그넣을 요소 선택
  const divMsg = document.querySelector('#msg')
  
  // 3. 선택된 요소의 HTML변경
  divMsg.innerHTML = tag

  // 3-1. 스타일 변경
  divMsg.style.background = "red";

  // console,log(msgDiv.getComputedStyle()); 아직 구현안됨.


}


