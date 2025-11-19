import { useState, useEffect } from "react";

function Title() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ✅ بيغير عنوان التبويب في المتصفح مع كل تحديث للعداد
    document.title = `Count = ${count}`;
  }, [count]);

  return (
    <>
      <h3>1st useEffect Example</h3>

      <h4>Count = {count}</h4>

      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </>
  );
}

export default Title;