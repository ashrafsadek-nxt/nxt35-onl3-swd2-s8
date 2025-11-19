import { useState, useEffect } from "react";

function TitleTwo() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  useEffect(() => {
    // ✅ بيغير عنوان الصفحة بناءً على حاصل ضرب count × num
    document.title = `Count = ${count * num}`;
  }, [count, num]);

  return (
    <>
      <h3>2nd useEffect Example</h3>

      <h4>Count = {count}</h4>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>

      <h4>Num = {num}</h4>
      <button onClick={() => setNum((n) => n + 2)}>+2</button>
    </>
  );
}

export default TitleTwo;