import mv from '../jsondata/mv.json'
export default function MyObject() {
  // //object 순회 : key값만 가져옴, 배열에서는 사용X
  // for(let k in mv){
  //   console.log('key : ', k)
  //   console.log('key값 : ', mv[k])

  //   // 값이 오브젝트임으로 반복순회
  //   for(let chk in mv[k]){
  //     console.log('자식key : ', chk)
  //     console.log('자식값 : ', mv[k][chk])
  //   }
  // }

  // const myInfo = mv.movieInfoResult.movieInfo; // 내가 원하는 정보의 위치
  // // console.log(myInfo)

  // object 순회
  // for(let k in myInfo){
  //   console.log('key : ', k)

  // }
  // Object.entries(오브젝트명) : [키와 값의 배열]의 배열로 반환
  // console.log(Object.entries(myInfo))

  //배열 순회
  // for(let item of Object.entries(myInfo)){   : 배열로 잡혀서 출력
  //   console.log(item)
  // }

  // 재구조화를 통해 배열을 분리하여 출력 가능
  // for(let [k, v] of Object.entries(myInfo)){
  //   console.log(k, v)
  // }

  // filter
  // const com = myInfo.companys;  //배열 : 각각의 요소가 object가 됨.
  // console.log(com)

  // // map() : 배열의 항목을 가지고와서 새로운 배열생성
  // //const mcom = com.map((item) => item) // company의 배열
  // //const mcom = com.map((item) => item.companyNm) // company의 배열에서 이름만 추출
  // const mcom = com.map((item) =>
  // item.companyNm + '(' + item.companyPartNm + ')')
  // console.log(mcom)

  // // filter(()=>{}) : 배열의 항목을 가지고와서 조건에 맞는 항목으로 새로운 배열 생성
  // const fcom = com.filter((item) =>
  // item.companyPartNm === '배급사'
  // )
  // console.log(fcom)

const myInfo = mv.movieInfoResult.movieInfo;
// 변수 선언 -> 임포트한 값.요소집합.요소 집합 : 내가 하고자하는 요소의 배열을 추출
console.log(myInfo)

const actor = myInfo.actors; // 추출한 값에서 원하는 인자를 추출
console.log(actor) 

const name = actor.map((item) => 
<li key = {item.cast.replace(' ', '') + item.peopleNm}>{item.peopleNm} : {item.cast}</li>)
console.log(name)

// replace : 키값의 공백 제거



  return (
    <>
    <h1>object 연습</h1>
    {name}
    </>
  );
}