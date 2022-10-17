import './Mv.css';
import mv from '../jsondata/mv.json';
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
  console.log(myinfo)
  // 화면에 출력할 내용을 JSX로 만들기

  let lis = [];
  for (let [k, v] of Object.entries(myinfo)) {
    lis.push(<li key={myinfo.movieCd + k}><span className='pan1'>{k}</span><span className='pan2'>{v}</span></li>);
    console.log(k, v)
  }
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

    </>
  );
}
export default MvInfo;