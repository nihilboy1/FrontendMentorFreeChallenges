import { ListItem } from "./ListItem";

export function BoxList({ type, data }) {
  return (
    <ul className={`${type} ${type == "list-decimal" ? "text-amber-900" : ""}`}>
      {data?.map((item) => {
        return <ListItem title={item.title} text={item.text} />;
      })}
    </ul>
  );
}
