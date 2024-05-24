import CheckCircle from "../../../public/check-circle.svg";
import Image from "next/image";
import { toast } from "sonner";

export function ToastElement() {
  return (
    <button
      onClick={() => toast.dismiss()}
      className="border bg-teal-900 text-white rounded-lg p-4 w-full flex flex-col"
    >
      <div className="flex  gap-4 w-full">
        <Image width={22} src={CheckCircle} alt="Check Circle" />
        <span>Message Sent!</span>
      </div>
      <span className="mt-2 text-[0.8rem]">
        Thanks for completing the form. We'll be in touch soon
      </span>
    </button>
  );
}
