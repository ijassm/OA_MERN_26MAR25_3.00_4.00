export function Card({ image, title, description }) {
  return (
    <section className="flex-1/4 my-2">
      <img className="w-full h-52 object-cover" src={image} alt={title} />
      <h1 className="text-lg font-bold my-2">{title}</h1>
      <p className="my-2 line-clamp-2">{description}</p>
      <button className="py-2 bg-amber-300 w-full">View</button>
    </section>
  );
}
