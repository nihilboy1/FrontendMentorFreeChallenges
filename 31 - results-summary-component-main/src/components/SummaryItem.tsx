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
  const [color, setColor] = useState("");
  useEffect(() => {
    if (label === "Reaction") {
      setIcon(iconReaction);
      setColor("lightRed");
    } else if (label === "Memory") {
      setIcon(iconMemory);
      setColor("orangeyYellow");
    } else if (label === "Verbal") {
      setIcon(iconVerbal);
      setColor("greenTeal");
    } else if (label === "Visual") {
      setIcon(iconVisual);
      setColor("cobaltBlue");
    }
  }, []);
  return (
    <article
      className={`flex items-center justify-between bg-opacity-10 ${
        "bg-" + color
      }  p-4 rounded-lg mt-2`}
    >
      <div className="flex items-center h-5 gap-2">
        <img src={icon} alt="memory icon" />
        <span
          className={`font-hankenGrotesk text-lg ${
            label === "Memory" ? "text-orangeyYellow" : ""
          }`}
        >
          {label}
        </span>
      </div>
      <div>
        <span>{pontuation}</span>
        <span className="font-hankenGrotesk"> / 100</span>
      </div>
    </article>
  );
}
