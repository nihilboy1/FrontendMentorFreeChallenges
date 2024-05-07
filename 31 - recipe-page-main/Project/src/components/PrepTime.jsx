import { ListItem } from "./ListItem";

export function PrepTime() {
  return (
    <section className="bg-fuchsia-50  p-6 rounded-2xl mt-6">
      <h3 className="text-xl font-bold font-Outfit text-fuchsia-950">
        Preparation time
      </h3>

      <ul className="list-disc">
        <ListItem title={"Total"} text={"Aproximately 10 minutes"} />
        <ListItem title={"Preparation"} text={"5 minutes"} />
        <ListItem title={"Cooking"} text={"5 minutes"} />
      </ul>
    </section>
  );
}
