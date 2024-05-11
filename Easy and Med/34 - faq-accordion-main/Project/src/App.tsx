import React, { useState } from "react";
import "./App.css";
import { QuestionBox } from "./components/QuestionBox";

const FAQsData = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    opened: false,
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    opened: false,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    opened: false,
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    opened: false,
  },
];

export default function App() {
  const [FAQs, setFAQs] = useState(FAQsData);

  function openAndCloseQuestion(question: string) {
    const filteredFAQs = FAQs.filter((FAQ) => {
      if (question == FAQ.question) {
        FAQ.opened = !FAQ.opened;
        return FAQ;
      }
      FAQ.opened = false;
      return FAQ;
    });

    setFAQs(filteredFAQs);
  }

  return (
    <>
      <img className="backgroundImage" />
      <main className="container">
        <div className="titleBox">
          <img className="starIcon" src="/icon-star.svg" alt="star icon" />
          <h1 className="title">FAQs</h1>
        </div>
        {FAQs.map((item, index) => (
          <React.Fragment key={item.question}>
            <QuestionBox
              FAQs={item}
              openAndCloseQuestion={openAndCloseQuestion}
            />
            {index !== FAQs.length - 1 && <hr className="hline" />}
          </React.Fragment>
        ))}
      </main>
    </>
  );
}
