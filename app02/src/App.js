import logo from './logo.svg';
import './App.css';
import MyTick from './MyCom/MyTick';

function App() { 
  console.log("app");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>

      <MyTick/>
    </div>
  );
}

export default App;

// 위가 앱의 전체 구조.