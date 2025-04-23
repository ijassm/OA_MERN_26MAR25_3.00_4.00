import { memo } from "react";
import { Card } from "./Card";

export const CardList = memo(({ data }) => {
  console.log("CardList Rendered");

  return (
    <section className="flex flex-wrap gap-4">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </section>
  );
});
