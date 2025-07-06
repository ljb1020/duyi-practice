import { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);     // 当前计数
  let timeIdRef = useRef(null);
  // 计数超过 20 时自动暂停并清零
  useEffect(() => {
    if (count > 20) {
      handlePause();
      setCount(0);
    }
  }, [count]);

  // 开始 / 继续计数
  const handleStart = () => {
    if(timeIdRef.current) return;
    timeIdRef.current = setInterval(()=>{
        setCount(prev => prev + 1);
    },1000);
  };

  // 暂停计数
  const handlePause = () => {
     clearInterval(timeIdRef.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>计数</button>
      <button onClick={handlePause}>暂停</button>
    </div>
  );
}
