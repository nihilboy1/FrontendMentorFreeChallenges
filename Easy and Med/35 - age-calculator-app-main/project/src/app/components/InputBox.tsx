export function InputBox({ label }: { label: string }) {
  return (
    <div className="flex flex-col w-[5.5rem]">
      <span className="font-black tracking-[0.2rem] text-[0.8rem] mb-1 text-zinc-500">
        {label}
      </span>
      <input
        className="border p-4 rounded-lg font-black tracking-widest text-lg text-black "
        type="number"
        placeholder="--"
      />
    </div>
  );
}
