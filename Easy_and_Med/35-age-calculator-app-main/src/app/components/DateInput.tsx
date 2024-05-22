import { DateError } from "../page";


interface DateInputProps {
  label: string,
  ref: React.RefObject<HTMLInputElement>,
  error: DateError,
  genericError: boolean,
}

export function DateInput({label, ref, error, genericError}: DateInputProps) {
  return (
    <label
      className={`flex flex-col w-[5.5rem] font-black tracking-[0.2rem] text-[0.8rem] mb-1 ${
        genericError ? "text-red-400" : "text-zinc-500"
      }`}
    >
      {label}
      <input
        className={`mb-[1px] p-4 rounded-lg font-black tracking-widest text-lg text-black border focus:outline-none focus:border-2 ${
          genericError &&
          "border-red-500 focus:ring-red-500 hover:border-red-900"
        } hover:border-violet-600 focus:ring-violet-600`}
        type="number"
        ref={ref}
      />
      {error.error && (
        <span className="mt-1 font-normal tracking-normal text-red-500">
          {error.message}
        </span>
      )}
    </label>
  );
}
