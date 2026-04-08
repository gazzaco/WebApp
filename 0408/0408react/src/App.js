import { useState } from 'react'; // 1. useState 불러오기

function App() {
  // 2. [현재 상태값, 상태를 바꾸는 함수] = useState(초기값)
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1); // 3. 함수를 통해 값을 변경
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{count}</h1> {/* 4. 화면에 실시간으로 반영됨 */}
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
}

export default Counter;