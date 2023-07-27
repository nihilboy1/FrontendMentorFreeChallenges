import { Header } from "./components/Header";
import { SummaryItem } from "./components/SummaryItem";

export function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="p-5">
        <h2 className="font-hankenGrotesk font-bold text-xl">Summary</h2>
        <SummaryItem label="Reaction" pontuation={80} />
        <SummaryItem label="Memory" pontuation={92} />
        <SummaryItem label="Verbal" pontuation={61} />
        <SummaryItem label="Visual" pontuation={72} />
      </section>
    </main>
  );
}
