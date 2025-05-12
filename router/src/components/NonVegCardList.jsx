import { nonVegDishes } from "../constants/data";
import { Card } from "./Card";

export const NonVegCardList = () => {
  return (
    <main className="flex gap-2 flex-wrap max-w-4xl mx-auto my-12">
      {nonVegDishes.map((data) => {
        return <Card {...data} />;
      })}
    </main>
  );
};
