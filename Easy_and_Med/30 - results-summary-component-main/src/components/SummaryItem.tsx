import { useEffect, useState } from "react";
import iconMemory from "../assets/images/icon-memory.svg";
import iconReaction from "../assets/images/icon-reaction.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";

interface SummaryItemProps {
  label: "Reaction" | "Memory" | "Verbal" | "Visual";
  pontuation: number;
}

export function SummaryItem({ label, pontuation }: SummaryItemProps) {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (label === "Reaction") {
      setIcon(iconReaction);
    } else if (label === "Memory") {
      setIcon(iconMemory);
    } else if (label === "Verbal") {
      setIcon(iconVerbal);
    } else if (label === "Visual") {
      setIcon(iconVisual);
    }
  }, []);
  return (
    <article
      className={`flex items-center justify-between bg-opacity-5 ${
        label === "Visual"
          ? "bg-cobaltBlue"
          : label === "Reaction"
          ? "bg-lightRed"
          : label === "Memory"
          ? "bg-orangeyYellow"
          : label === "Verbal"
          ? "bg-greenTeal"
          : ""
      }  p-4 rounded-lg mt-2`}
    >
      <div className="flex items-center h-5 gap-2">
        <img src={icon} alt="memory icon" />
        <span
          className={`font-hankenGrotesk text-lg  ${
            label === "Visual"
              ? "text-cobaltBlue"
              : label === "Reaction"
              ? "text-lightRed"
              : label === "Memory"
              ? "text-orangeyYellow"
              : label === "Verbal"
              ? "text-greenTeal"
              : ""
          }`}
        >
          {label}
        </span>
      </div>
      <div>
        <span className="font-hankenGrotesk font-bold">{pontuation}</span>
        <span className="font-hankenGrotesk opacity-40"> / 100</span>
      </div>
    </article>
  );
}
