import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";

export function UseRef() {
  const [inputValue, setInputValue] = useState("fgdf");
  //   const [count, setCount] = useState(0);
  const count = useRef(0);
  const inputRef = useRef();

  //   console.log(count);

  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, [inputValue]);

  function handleSubmit() {
    console.log(inputRef.current.value);
  }

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <main className="text-center my-5 text-3xl">
      <input
        className="border-2 border-black p-2 rounded-md"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
      />
      <h1>Render Count: {count.current}</h1>
      <button onClick={handleSubmit}>Submit</button>
    </main>
  );
}
