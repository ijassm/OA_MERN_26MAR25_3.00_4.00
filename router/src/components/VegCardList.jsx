import { vegDishes } from "../constants/data";
import { Card } from "./Card";

export const VegCardList = () => {
  return (
    <main className="flex gap-2 flex-wrap max-w-4xl mx-auto my-12">
      {vegDishes.map((data) => {
        return <Card {...data} />;
      })}
    </main>
  );
};
