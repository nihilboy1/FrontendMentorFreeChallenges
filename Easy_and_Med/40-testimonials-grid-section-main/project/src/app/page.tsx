"use client";

import { useState, useEffect } from "react";
import { Testimonial } from "./components/Testimonial";
import testimonialsData from "./testimonialsData.json";
import { TestimonialProps } from "./components/Testimonial";

export default function Home() {
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  return (
    <main className="min-h-[100vh] p-8 xl:px-[4rem] xl:py-[4rem]  text-white grid-cols-1 grid-rows-1 xl:grid-cols-4 xl:grid-rows-2 md:grid-rows-3 md:grid-cols-3   grid gap-6">
      {testimonials.map((testimonial, index) => {
        let className = `flex flex-col rounded-xl p-6 rounded-xl shadow-xl `;
        if (index === 0) {
          className += "md:col-span-2 ";
        }

        if (index === 2) {
          className += "xl:row-start-2";
        }

        if (index === 3) {
          className += "xl:row-start-2 md:col-span-2";
        }

        if (index === 4) {
          className +=
            "md:font-bold md:row-start-3 md:col-span-3 xl:row-start-1 xl:row-span-2";
        }

        return (
          <Testimonial key={index} {...testimonial} className={className} />
        );
      })}
    </main>
  );
}
