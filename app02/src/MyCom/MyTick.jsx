// jsx = js
import './My.css';
import MyTime from './MyTime';

function MyTick() {
  return ( // 리턴은 한개만 가능( 여러개를 할 경우 div, fragment, <>로 묶을 수 있다.)
    <>
      <h2 className='my2'>현재 시간</h2>
      <MyTime/>
    </>
  );
}

export default MyTick;