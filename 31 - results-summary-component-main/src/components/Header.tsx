export function Header() {
  return (
    <header className="flex flex-col items-center py-4 justify-around h-[24rem] w-full rounded-b-3xl bg-gradient-to-b from-lightSlateBlue to-cobaltBlue">
      <h1 className="text-center text-lightLavender font-black text-xl font-hankenGrotesk">
        Your Result
      </h1>
      <div className="mt-5 flex flex-col items-center justify-center h-40 w-40 rounded-full bg-gradient-to-b from-violetBlue to-lightRoyalBlue ">
        <span className="text-center text-white font-black text-7xl font-hankenGrotesk">
          76
        </span>
        <span className="text-center text-lightLavender font-medium text-sm font-hankenGrotesk">
          of 100
        </span>
      </div>
      <h2 className="text-center text-white font-black text-2xl font-hankenGrotesk">
        Great
      </h2>
      <p className="px-10 text-center text-lightLavender font-medium text-lg font-hankenGrotesk">
        You scored higher than 65% of the people who gave taken these tests
      </p>
    </header>
  );
}
