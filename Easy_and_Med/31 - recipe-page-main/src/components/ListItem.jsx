export function ListItem({ title = "", text }) {
  return (
    <li className=" ml-5  text-lg text-zinc-500 mt-2">
      <div className="ml-4 ">
        <span className="font-bold text-zinc-700 font-Outfit">
          {title ? `${title}: ` : ""}
        </span>
        <span className="font-Outfit">{text}</span>
      </div>
    </li>
  );
}
