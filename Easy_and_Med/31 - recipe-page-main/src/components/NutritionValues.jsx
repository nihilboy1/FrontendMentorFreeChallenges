export function NutritionValues({ title, info }) {
  return (
    <div className=" flex font-Outfit">
      <div className="w-[50%]">
        <span className="text-zinc-500 text-[1.3rem] text-left ml-8">
          {title}
        </span>
      </div>
      <span className="text-amber-900 text-[1.3rem] font-bold ml-8">{info}</span>
    </div>
  );
}
