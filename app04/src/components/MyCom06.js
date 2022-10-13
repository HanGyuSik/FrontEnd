import './My06.css';       // 마지막에 정의되는 스타일 시트를 따라가게도미

// export default를 function 앞에 넣을 수 있다.
function MyCom() {
  // objcet 생성 1
  let obj = new Object();   // 오브젝트 = 키와 값을 같이 가지고있는 데이터
  //console.log('object 생성 =>', obj);
  // object 생성 2
  let obj2 = {};
  // console.log('object 생성 =>', obj2);
  // object 생성3
  let mv = {
    "rnum": "1",
    "rank": "1",
    "rankInten": "0",
    "rankOldAndNew": "OLD",
    "movieCd": "20215601",
    "movieNm": "공조2: 인터내셔날",
    "openDt": "2022-09-07",
    "salesAmt": "186527512",
    "salesShare": "23.2",
    "salesInten": "-645733705",
    "salesChange": "-77.6",
    "salesAcc": "68000199650",
    "audiCnt": "18989",
    "audiInten": "-61139",
    "audiChange": "-76.3",
    "audiAcc": "6624892",
    "scrnCnt": "979",
    "showCnt": "3048"
  }
  // console.log('object 생성 =>', mv);
  // console.log('영화명 :', mv.movieNm);
  // console.log('영화명 :', mv['movieNm']);

  // object 순회 1
  for (let k in mv) {
    //   console.log(k, '=>', mv[k]);
    if (k === "moviNm") break;
  }
  // console.log("=================")

  // for(let k of mv){      : of는 배열에만 해당
  //   console.log(k,'=>',mv[k]);
  // }

  // object 순회 1
  for (let [k, v] of Object.entries(mv)) {
    //  console.log(k, '=>', v);
    if (k === "moviNm") break;
  }

  // 얕은 복사
  obj = mv;
  // console.log('얕은 복사 :', obj);

  // 깊은 복사
  obj2 = { ...mv };
  // console.log('깊은 복사(전개연산자...사용) :', obj2);

  //mv 오브젝트 내용 변경
  mv.movieNm = '공조2'
  console.log('얕은복사 : ', obj)
  console.log('깊은복사 : ', obj2)


  //jsx에 들어갈 내용 생성
  let lis = [];
  for (let [k, v] of Object.entries(mv)) {
    lis.push(<li key={k}>
      <span className='mvLik'>{k}</span> :
      <span className='mvLiv'>{v}</span></li>)
  }


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