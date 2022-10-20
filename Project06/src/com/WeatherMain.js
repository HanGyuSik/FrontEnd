// 메인 확장팩
// 1. 날씨예보 버튼으로 나올 확장팩 호출
import WeatherDay from "./WeatherDay";
// 
import { useState } from "react";
function WeatherMain() {
  const handleClick = (d) => {
    setDay(d);
    console.log(d)
  }

  let[day, setDay] = useState(3);


  return (

    <>
      <h1>날씨예보</h1>
      {/* form으로 버튼 생성*/}
      {/* 버튼으로 어떠한 이벤트가 발생하게 하기위해 onclick함수 생성 */}
      <form>
        {/* preventDefault : 이벤트(새창으로 로딩) 방지 */}
        {/* handleclick : 임의로 위에서 지정하는 함수 */}
        <button onClick={(e) => {e.preventDefault() ; handleClick(3);}}>3일후 날씨</button>
        {/*  */}
        <button onClick={(e) => {e.preventDefault() ; handleClick(4);}}>4일후 날씨</button>
        <button onClick={(e) => {e.preventDefault() ; handleClick(5);}}>5일후 날씨</button>
        <button onClick={(e) => {e.preventDefault() ; handleClick(6);}}>6일후 날씨</button>
     </form>
      <WeatherDay d={day}/>
    </>




  );
}
export default WeatherMain;