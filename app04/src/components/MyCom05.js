// 해당컴포넌트에서만 사용하는 스타일 시트 정의.
import style from './My.module.css';    // 스타일 시트가 여러개 중첩될때 사용
import '../App.module.css';       // 마지막에 정의되는 스타일 시트를 따라가게도미

// export default를 function 앞에 넣을 수 있다.
function MyCom() {
  
  
  return (
    <>
      <h1>스타일 변경예시</h1>
      {/*각 컴포넌트에 서로다른 스타일 시트 적용*/}
      <p className={style.p1}>
        CSS
      </p>
      
    </>
  );
}
export default MyCom;