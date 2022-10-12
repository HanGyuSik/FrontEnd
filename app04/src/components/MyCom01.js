import './My.css';

function MyCom() {
  return (
    // root -> div -> h1, h2 생성 : h1, h2를 가로로 나열할 경우 사용(박스가 필요)
    <div>
      <h1>Hello</h1>
      <h2>React!!</h2>
    </div>
  );
}

export default MyCom;