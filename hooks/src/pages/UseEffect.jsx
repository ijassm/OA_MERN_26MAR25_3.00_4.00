import { useEffect, useState, useCallback, useMemo } from "react";
import { CardList, Loader } from "../components";
import { useFetch } from "../customHooks";

export const UseEffect = () => {
  console.log("Component Rendered");

  const [name, setName] = useState("AK🧔");
  const [count, setCount] = useState(1);
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const completedTasks = useMemo(
    () => data.filter((item) => item.completed === true),
    [data]
  );

  const handleChange = useCallback(() => {
    setName("🔴Red Dragon🐲");
  }, []); // Empty dependency array means this function doesn't change

  const handleAddData = () => {
    setData((prevData) => [
      ...prevData,
      { id: 465456, title: "New Item", userId: 4654654, completed: false },
    ]);
  };

  useEffect(() => {
    console.log("useEffect 1 triggered");
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    console.log("useEffect 2 triggered", count);
  }, [count]); // This effect runs every time 'count' changes

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
      <button
        className="py-2 px-4 border-2 border-amber-600 cursor-pointer my-4"
        onClick={handleAddData}
      >
        Add Data
      </button>
      <hr />

      {loading ? (
        <Loader loading={loading} />
      ) : (
        <CardList data={completedTasks} handleChange={handleChange} />
      )}
    </main>
  );
};
