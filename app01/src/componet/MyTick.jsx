import './my.css';

// 이미지같은 곳에서도 /가 필수, class는 HTML과의 충돌을 대비하여 이름 변경
function App() { // 함수
  console.log("MyTick 컴포넌트");
  return (
    <h2>
      현재시간    
    </h2>
  );
}

export default MyTick;
