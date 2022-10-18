import './Mv.css';
import './MyTimer';
import mv from '../jsondata/mv.json';


//useState Hook
import { useState, useEffect } from 'react';
import React from 'react';
import MyTimer from './MyTimer';

function MvInfo() {

  //json데이터 추출
  const Info = mv.movieInfoResult.movieInfo;
  // console.log(Info);

  //화면에 출력할 정보를 오브젝트로 생성
  let myinfo = {};
  const key1 = ['movieNm', 'movieCd', 'openDt', 'prdtStatNm', 'showTm']
  const key2 = ['audits', 'nations', 'directors', 'genres', 'companys']
  const keys = {
    'movieNm': '영화 명',
    'movieCd': '영화 코드',
    'openDt': '개봉 일자',
    'prdtStatNm': '제작 상태',
    'showTm': '상영 시간',
    'audits': '관람등급',
    'nations': '개봉 국가',
    'directors': '감독',
    'genres': '장르',
    'companys': '제작사'
  }
  // key1에 해당하는 값 추출
  for (let k of key1) {
    myinfo[keys[k]] = Info[k];
  }
  // console.log(myinfo)


  // key2에 해당하는 값 배열에서 추출
  for (let k of key2) {
    switch (k) {
      case 'audits':
        myinfo[keys[k]] = Info[k].map((item) => item.watchGradeNm);
        break;
      case 'nations':
        myinfo[keys[k]] = Info[k].map((item) => item.nationNm);
        break;
      case 'directors':
        myinfo[keys[k]] = Info[k].map((item) => item.peopleNm);
        break;
      case 'genres':
        myinfo[keys[k]] = Info[k].map((item) => item.genreNm);
        break;
      default:
      case 'companys':
        myinfo[keys[k]] = Info[k].filter((item) => item.companyPartNm === '배급사');
        myinfo[keys[k]] = myinfo[keys[k]].map((item) => item.companyNm);
        break;

    }

  }
  //console.log(myinfo)
  // 화면에 출력할 내용을 JSX로 만들기

  // count 제어
  let cntup = 0;
  let cntdown = 0;

  //state변수 
  let [cntUpSt, setCntUpSt] = useState(0); //변수와 함수를 쌍으로 반환 , (0) : 초기값
  let [cntDownSt, setCntDownSt] = useState(0);

  const handleup = () => {
    console.log('local : ', ++cntup)

    //state변수 증가
    setCntUpSt(++cntUpSt);
    console.log('state : ', cntUpSt)
  };


  const handledown = () => {
    console.log('local : ', ++cntdown)

    //state변수 증가
    setCntDownSt(++cntDownSt);
    console.log('state : ', cntDownSt)
  };

  //useEffect(()=>{} , []) : 인자가 2개가능, 콜백함수
  //useEffect() : 랜더링시 계속 발생
  useEffect(() => {
    console.log('useEffect 랜더링 발생시 계속 수행=> ', cntUpSt)
  });

  //useEffect() : 랜더링시 계속 발생
  useEffect(() => {
    console.log('useEffect 랜더링 발생시 1회 수행=> ', cntUpSt)
  }, []);

  //useEffect() : 관련 state변수가  변경될때 실행
  useEffect(() => {
    console.log('useEffect 랜더링 발생시 1회 수행=> ', cntUpSt)
  }, [cntUpSt]);



  let lis = [];
  for (let [k, v] of Object.entries(myinfo)) {
    lis.push(<li key={myinfo.movieCd + k}><span className='pan1'>{k}</span><span className='pan2'>{v}</span></li>);
    //console.log(k, v)
  }

  //---------------------------------

  // 시계아이콘 클릭하면 변수변경
  let [flag, setFlag] = useState(true)
  const handleTimer = () => {
    //setFlag2(flag2 === 'none'?'inline-flex':'none');
    setFlag(!flag)
  };



  return (
    <>
      <h1>영화 상세</h1>
      {/* <ul>
        <li><span>영화명</span><sapn>{Info.movieNm}</sapn></li>
        <li><span>영화코드</span></li>
        <li><span>개봉일자</span></li>
        <li><span>제작상태</span></li>
        <li><span>상영시간</span></li>
        <li><span>관람등급</span></li>
        <li><span>제작국가</span></li>
        <li><span>감독</span></li>
        <li><span>장르</span></li>
        <li><span>배급사</span></li>
        <li><span>영화명</span></li>
        <li><span>영화명</span></li>
      </ul> */}
      <ul>
        {lis}
      </ul>
      <div className='TTs'>
        <span onClick={handleup} className='o'>👍</span>
        <div className='p'>{cntUpSt}</div>
        <span onClick={handledown} className='o'>🧨</span>
        <div className='p'>{cntDownSt}</div>
        <span onClick={handleTimer} className='o'>⏱</span>
      </div >
      
      
      <div>
        {/* style={{'display':flag2}}><MyTimer> */}
        {flag && <MyTimer />} 
        {/*flag, cntDownSt : Hook-usestate의 영향을 받는 곳에 배치.*/}
      </div> 
    </>
  );
}
export default MvInfo;