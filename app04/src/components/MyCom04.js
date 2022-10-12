import './My.css';

// export default를 function 앞에 넣을 수 있다.
function MyCom() {
  const styleobj = {
    color: 'white', backgroundColor: 'green',
    padding: '5px', textAlign: 'center'
  }
  return (
    <>
      <h1>스타일 변경예시</h1>
      {/*인라인 스타일은 object타입으로*/}
      {/*바깥 {}는 jsx의 표현식을 위한 {}이고 안쪽{}는 자바스크립트의 object타입 표시*/}
      <p style={{
        color : 'white', 
        backgroundColor : 'black',
        margin: '5px',
        padding: '5px',
        textAlign: 'center'}}>
        리액트에서 스타일 변경 - 인라인형식
      </p>

      <p style={styleobj}>
        리액트에서 스타일 변경 - 인라인형식으로 변수 사용
      </p>

      <p>
        리액트에서 스타일 변경 - CSS사용
      </p>
    </>
  );
}
export default MyCom;