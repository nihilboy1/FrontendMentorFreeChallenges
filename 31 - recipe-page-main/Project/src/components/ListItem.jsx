export function ListItem({ title = "", text }) {
  return (
    <li className=" ml-5 font-Outfit text-lg text-zinc-500 mt-2">
      <div className="ml-4">
        <span className="font-bold text-zinc-700">
          {title ? `${title}: ` : ""}
        </span>
        <span>{text}</span>
      </div>
    </li>
  );
}
