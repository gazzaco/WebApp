import { useState } from 'react';

export default function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </div>
  );
}