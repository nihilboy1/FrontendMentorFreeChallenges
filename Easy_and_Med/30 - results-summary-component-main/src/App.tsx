import { ContinueButton } from "./components/ContinueButton";
import { Header } from "./components/Header";
import { SummaryItem } from "./components/SummaryItem";

export function App() {
  return (
    <main className="min-h-screen flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mx-2 transition-all">
      <Header />
      <section className="p-4 sm:w-[22rem] transition-all">
        <h2 className="font-hankenGrotesk font-bold text-xl">Summary</h2>
        <SummaryItem label="Reaction" pontuation={80} />
        <SummaryItem label="Memory" pontuation={92} />
        <SummaryItem label="Verbal" pontuation={61} />
        <SummaryItem label="Visual" pontuation={72} />
        <ContinueButton />
      </section>
    </main>
  );
}
