import './My06.css';       // 마지막에 정의되는 스타일 시트를 따라가게도미

// export default를 function 앞에 넣을 수 있다.
function MyCom(probs) { //object type 
  const MyMv = { ...probs.item };

  let arr = [1,2,3]
  arr = arr.map((item) => item*2)
  console.log(arr)
  // console.log(probs)    //probs : 가지고 있는 모든 내용물을 나열, 넘어온 데이터이기에 수정 불가
  // console.log(probs.item)  // 특정 내용물 하나만을 지정해서 가져옴
  // console.log(MyMv)
  // const lis = Object.entries(MyMv).map((item)=> console.log(item[1]))
  const lis = Object.entries(MyMv).map((item) =>
  (
    <li key={item[0]}>
        <span className='mvLik'>{item[0]}</span> :
        <span className='mvLiv'>{item[1]}</span>
    </li>
  ));
  console.log(Object.entries(MyMv))
  return (
    <>
      <h1>object 타입연습</h1>
      <ul>
        {lis}
      </ul>
    </>
  );
}
export default MyCom;