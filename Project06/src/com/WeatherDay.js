// json데이터를 호출
import wt from '../Json/Weather.json';
export default function WeatherDay(props){  
  const d = props.d;
  const wta = wt.response.body.items.item[0];
  console.log(wta)

  const items = [];
  const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Pm`] 
  for(let k of keys){
    items.push(wta[k])
  }

  console.log(keys)
  return(
    <>
    <h2>{props.d}</h2>
    <ul>
      <li>{d}일후 오후강수량</li>
      <li>{d}일후 오전날씨예보</li>
      <li>{d}일후 오전강수량</li>
      <li>{d}일후 오후날씨예보</li>
    </ul>
    </>
  );
}