// 전체적으로 나올 페이지

import mvboxOffice from '../jsondata/mvboxOffice.json'


export default function Mvlist() {
  const mv = mvboxOffice.boxOfficeResult.dailyBoxOfficeList // json파일 가져오기
  //  console.log(mv)v


  let info = {}
  const key1 = ['rank', 'movieCd', 'openDt', 'MovieNm']
  const keys = {
    'movieNm': '영화 명',
    'movieCd': '영화 코드',
    'openDt': '개봉 일자',
    'rank': '순위'
  }
  for (let i of key1) {
    info[keys[i]] = mv[i]
  }
  console.log(info)

  let lis = [];
  for (let [k, v] of Object.entries(info)) {
    lis.push(<li key={info.movieCd + k}><span>{k}</span><span className='pan2'>{v}</span></li>);
    //console.log(k, v)
  }

  return (
    <>
      <h1>BoxOffice</h1>
      <div>
        <form className='fo'>
          <input type="text" ref={txtRef} placeholder='댓글을 입력하시오'></input>
          <button type='submit'>등록</button>
          <button type='reset'>취소</button>
        </form>
      </div>
    </>
  );
}


