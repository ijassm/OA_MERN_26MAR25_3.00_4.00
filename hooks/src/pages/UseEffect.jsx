import { useEffect, useState } from "react";

function Card({ title, userId, completed }) {
  return (
    <div className="border-2 border-amber-500 my-2 p-2">
      <h1>UserId : {userId}</h1>
      <h1>Title : {title}</h1>
      <h1>Completed : {completed.toString()}</h1>
    </div>
  );
}

export const UseEffect = () => {
  console.log("Component Rendered");

  const [name, setName] = useState("AK🧔");
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);

  const handleChange = () => {
    setName("🔴Red Dragon🐲");
  };

  useEffect(() => {
    console.log("useEffect 1 triggered");
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    console.log("useEffect 2 triggered", count);
  }, [count]); // This effect runs every time 'count' changes

  useEffect(() => {
    console.log("useEffect 3 triggered");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 text-gray-900">
      <h1 className="my-4 text-6xl">{name}</h1>
      <h1 className="my-4 text-6xl">{count}</h1>
      <button
        className="py-2 px-4 border-2 border-amber-600 cursor-pointer my-4"
        onClick={handleChange}
      >
        Upgrade
      </button>
      <button
        className="py-2 px-4 border-2 border-amber-600 cursor-pointer my-4"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <hr />

      <section className="flex flex-wrap gap-4">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
};
