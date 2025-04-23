export function Card({ title, userId, completed }) {
  return (
    <div className="border-2 border-amber-500 my-2 p-2">
      <h1>UserId : {userId}</h1>
      <h1>Title : {title}</h1>
      <h1>Completed : {completed.toString()}</h1>
    </div>
  );
}
