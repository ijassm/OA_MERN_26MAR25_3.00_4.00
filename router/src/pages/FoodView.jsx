import { useParams } from "react-router";

export const FoodView = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>FoodView</h1>
      <p>Title - {id}</p>
    </div>
  );
};
