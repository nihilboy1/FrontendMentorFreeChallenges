export function DateText({
  number,
  time,
}: {
  number: number;
  time: "year" | "month" | "day";
}) {
  return (
    <p className="font-black text-[3.2rem] mt-[-1rem] italic">
      <span className="text-violet-600">{number ? number : "- -"}</span> {time}
      {number ? number > 1 && "s" : ""}
    </p>
  );
}
