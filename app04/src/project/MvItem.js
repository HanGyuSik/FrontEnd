import { useState } from 'react';
import './Mvlist';
//useState Hook 사용


export default function MvItem(props) {
  const myMv = { ...props.item }; // App에서의 배열을 object로 받아옴.

  // let info = {}
  // const key1 = ['rank', 'movieCd', 'openDt', 'MovieNm']
  // const keys = {
  //   'movieNm': '영화 명',
  //   'movieCd': '영화 코드',
  //   'openDt': '개봉 일자',
  //   'rank': '순위'
  // }
  // for (let i of key1) {
  //   info[keys[i]] = mv[i]
  // }
  // console.log(info)
  return (
    <>
    </>
  );
}
