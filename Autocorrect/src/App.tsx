import { useState, useEffect } from 'react';
import submit from './autoCorrector';
export default function App() {
  const [text, setText] = useState<string>('');
  useEffect(() => {
    submit(text, setText);
    return () => {};
  }, [text]);

  return (
    <input
      placeholder="Enter text"
      value={text}
      data-testid="textarea"
      onChange={(e) => setText(e.target.value)}
    />
  );
}
