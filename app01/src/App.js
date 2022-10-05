import logo from './logo.svg';
import './App.css';
import MyTick from './componet/MyTick';

// 이미지같은 곳에서도 /가 필수, class는 HTML과의 충돌을 대비하여 이름 변경
function App() { // 함수
  console.log("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyTick/>
    </div>
  );
}

export default MyTick;
