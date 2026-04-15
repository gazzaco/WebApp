import { useState } from 'react';

export default function MyInput() {
  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>Reset</button>
    </div>
  );
}