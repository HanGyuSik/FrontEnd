import './My.css';
import MyHello from './MyHello';

// export default를 function 앞에 넣을 수 있다.
function MyCom() {
  return (
    // root -> h1, h2 생성
    <>
    {/*속성값을 만들수 있음 => MyHello 컴포넌트에서 probs매개변수(object type)에 전달*/}
      <MyHello name = 'pnu' num='1' ck=''/>
      <MyHello name = 'Kdi' num='2' ck='1'/>
      <MyHello name = '부산' num='3'ck=''/>
    </>
  );
}
export default MyCom;
