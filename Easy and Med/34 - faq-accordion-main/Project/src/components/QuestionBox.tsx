interface QuestionBoxProps {
  FAQs: {
    question: string;
    answer: string;
    opened: boolean;
  };

  openAndCloseQuestion: (value: string) => void;
}

export function QuestionBox({ FAQs, openAndCloseQuestion }: QuestionBoxProps) {
  return (
    <button
      className="questionBox"
      onClick={() => {
        openAndCloseQuestion(FAQs.question);
      }}
    >
      <div className="innerQuestionBox">
        <h2 className="question">{FAQs.question}</h2>
        <img
          className="openedQuestionIcon"
          src={FAQs.opened ? "/icon-minus.svg" : "/icon-plus.svg"}
          alt=""
        />
      </div>
      {FAQs.opened ? <p className="answer">{FAQs.answer}</p> : null}
    </button>
  );
}
