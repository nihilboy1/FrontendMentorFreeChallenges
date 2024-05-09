import { PrepTime } from "./components/PrepTime";
import { BoxList } from "./components/BoxList";
import { NutritionValues } from "./components/NutritionValues";
import { HLine } from "./components/HLine";

const ingredientsData = [
  { text: "2-3 large eggs" },
  { text: "Salt, to taste" },
  { text: "Papper, to taste" },
  { text: "1 tablespoon of butter or oil" },
  { text: "Optional fillings: cheese, diced vegetables, cooked meats, herbs" },
];

const instructionsData = [
  {
    title: "Beat the eggs",
    text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    text: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface. ",
  },
  {
    title: "Add fillings (optional)",
    text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    text: "Serve hot, with additional salt and pepper if needed.",
  },
];

export default function App() {
  return (
    <main className="mx-auto sm:w-[28rem] bg-white rounded-xl  ">
      <div className="p-8">
        <img
          src="src\assets\image-omelette.jpeg"
          alt="omelette image"
          className="w-full rounded-2xl"
        />
      </div>
      <section className="p-8">
        <h1 className="font-YoungSerif text-4xl text-zinc-800">
          Simple Omelette Recipe
        </h1>
        <p className="text-zinc-500 font-Outfit mt-6 ">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <PrepTime />
        <h2 className="font-YoungSerif text-4xl text-amber-900  mb-4">
          Ingredients
        </h2>
        <BoxList type="list-disc" data={ingredientsData} />
        <hr className="mt-6 mb-6" />
        <h2 className="font-YoungSerif text-4xl text-amber-900 mb-4">
          Instructions
        </h2>
        <BoxList type="list-decimal" data={instructionsData} />
        <HLine />
        <h2 className="font-YoungSerif text-4xl text-amber-900 mb-4">
          Nutrition
        </h2>
        <p className="text-zinc-500 font-Outfit mt-6 mb-4  ">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <NutritionValues title={"Calories"} info={"277kcal"} />
        <HLine />
        <NutritionValues title={"Carbs"} info={"0g"} />
        <HLine />
        <NutritionValues title={"Protein"} info={"20g"} />
        <HLine />
        <NutritionValues title={"Fat"} info={"22g"} />
      </section>
    </main>
  );
}
