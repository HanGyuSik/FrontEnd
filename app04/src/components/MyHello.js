import './My.css';

// export default를 function 앞에 넣을 수 있다.
export default function MyHello(probs) {
  // 이 부분이 함수의 내용을 작성하는 부분
console.log(probs.name);
console.log('name');

  return (
    // div -> h1, h2 생성
    // css를 주기위해 선택자 부여 -> jsx에서는 class => className으로 선택자를 부여
    <div className='divHello'>
      <h1>Hello</h1>
      <h2>
        {/*조건부 랜더링*/}
      <span className='spanHello'>{probs.name}</span>
      <span className='spanNum'>{probs.num % 2===1 ?'홀수' : '짝수'}</span>
      <span className='spanNum'>{probs.ck || 'no' }</span>
      <span className='spanNum'>{probs.ck ? probs.ck :'no' }</span>
      </h2>
    </div>
  );
}

