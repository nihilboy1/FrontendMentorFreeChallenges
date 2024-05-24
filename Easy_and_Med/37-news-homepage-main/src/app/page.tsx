import Image from "next/image";

import retroPcs from "../../public/image-retro-pcs.jpg";
import topLaptops from "../../public/image-top-laptops.jpg";

import gamingGrowth from "../../public/image-gaming-growth.jpg";
import { Header } from "./components/Header";
import { CoverImage } from "./components/CoverImage";

export default function Home() {
  return (
    <main className="p-5 min-h-[100vh] text-slate-900 lg:max-w-[65rem] xl:max-w-[72rem] transition-all">
      <Header />
      <div className="xl:flex xl:gap-8">
        <div>
          <CoverImage />
          <section className="sm:flex ">
            <h1 className="lg:text-[3.5rem] sm:text-[3.2rem] sm:w-[50%] text-[2.5rem] font-black leading-none mb-4 ">
              The Bright Future of Web 3.0?
            </h1>
            <div className="sm:w-[50%] sm:flex sm:flex-col sm:ml-8  ">
              <p className="opacity-75 sm:leading-relaxed lg:text-[0.95rem]">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="sm:mt-6 sm:self-start  mt-4 mb-8 p-3 px-8 tracking-[0.25rem] font-black bg-red-500 hover:bg-slate-900 hover:text-white">
                READ MORE
              </button>
            </div>
          </section>
        </div>
        <section className="xl:max-h-[31.5rem] xl:w-[52rem] px-6 py-8 bg-slate-950 text-white">
          <h2 className="xl:mt-2 xl:text-[2.5rem] text-3xl font-bold text-amber-400 mb-8">
            New
          </h2>
          <article>
            <h3 className="hover:text-amber-400 cursor-pointer font-bold text-xl mb-2">
              Hydrogen VS Electric Cars
            </h3>
            <p className="opacity-75 xl:text-[0.9rem]">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </article>
          <hr className="my-6 opacity-50 xl:my-8" />
          <article>
            <h3 className="hover:text-amber-400 cursor-pointer font-bold text-xl mb-2">
              The Downsides of AI Artistry
            </h3>
            <p className="opacity-75 xl:text-[0.9rem]">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <hr className="my-6 opacity-50 xl:my-8" />
          <article>
            <h3 className="hover:text-amber-400 cursor-pointer font-bold text-xl mb-2">
              Is VC Funding Drying Up?
            </h3>
            <p className="opacity-75 xl:text-[0.9rem]">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </section>
      </div>
      <section className="mt-16 lg:grid lg:grid-cols-2 lg:grid-rows-2  xl:grid-cols-3  xl:grid-rows-1 gap-2 ">
        <article className="flex gap-5 mb-10">
          <Image
            src={retroPcs}
            alt="retro pcs"
            className="w-[6.5rem] h-[9rem]"
          />
          <div>
            <h2 className="text-red-500 text-3xl font-bold">01</h2>
            <h3 className="text-lg font-black py-3">Reviving Retro PCs</h3>
            <p className="opacity-75">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </article>
        <article className="flex gap-5 mb-10">
          <Image src={topLaptops} alt="retro pcs" className="w-[6.5rem]" />
          <div>
            <h2 className="text-red-500 text-3xl font-bold">02</h2>
            <h3 className="text-lg font-black py-3">Top 10 Laptops of 2022</h3>
            <p className="opacity-75">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </article>
        <article className="flex gap-5 mb-10">
          <Image
            src={gamingGrowth}
            alt="retro pcs"
            className="w-[6.5rem] h-[9rem]"
          />
          <div>
            <h2 className="text-red-500 text-3xl font-bold">03</h2>
            <h3 className="text-lg font-black py-3">The Growth of Gaming</h3>
            <p className="opacity-75">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
