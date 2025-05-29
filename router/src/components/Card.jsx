import { useNavigate } from "react-router";

export function Card({ image, title, description }) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/home/vegetarian/${title}`);
    console.log("Card clicked");
  };

  return (
    <section className="flex-1/4 my-2">
      <img className="w-full h-52 object-cover" src={image} alt={title} />
      <h1 className="text-lg font-bold my-2">{title}</h1>
      <p className="my-2 line-clamp-2">{description}</p>
      <button
        className="py-2 bg-amber-300 w-full cursor-pointer"
        onClick={handleSubmit}
      >
        View
      </button>
    </section>
  );
}
