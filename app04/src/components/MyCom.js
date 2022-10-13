import {useState} from 'react';
import './My.css';
//useState Hook 사용


function MyCom(probs) {
  const myMv = { ...probs.item }; // App에서의 배열을 object로 받아옴.
  // 순위 rank
  // 영화명 movieNm

  const keys = ['rank', 'movieNm']   // 키로 지정
  const lis = keys.map((k) =>        // keys.map() : keys의 값을 반복하여 가져옴, 배열한정
    <li>
      <span className={k} key={k}> {myMv[k]}</span>
    </li>
  );

  let [cnt, setCnt] = useState(0);    // 변경하는 값  let, 초기값
  
  const upCnt = () =>{
    setCnt(cnt++);
    console.log(cnt)
  }
  return (
    <div className='mainDiv'>
      <ul>
        <li className='mvLi'></li>
        {lis}
      </ul>
      <div>
        {/* <span onClick={()=>{
          cnt++;
          console.log(cnt)
        }}>🎁</span> */}
        <span onClick={upCnt}>🎁</span>
        <span>{cnt}</span>
      </div>
    </div>
  );
}

export default MyCom;