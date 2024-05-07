import { PrepTime } from "./components/PrepTime";

export default function App() {
  return (
    <main>
      <img src="src\assets\image-omelette.jpeg" alt="omelette image" />
      <section className="p-8">
        <h1 className="font-YoungSerif text-4xl text-zinc-800">
          Simple Omelette Recipe
        </h1>
        <p className="text-zinc-500 mt-6 text-[0.99rem] ">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <PrepTime />
      </section>
    </main>
  );
}
