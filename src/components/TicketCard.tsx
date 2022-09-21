import { useEffect, useState } from "react";
import { Ticket } from "../types/Ticket";
import { XCircle, PencilSimple } from "phosphor-react";
import * as Progress from "@radix-ui/react-progress";

interface TicketCard {
  ticket: Ticket;
}

const TicketCard = (props: TicketCard) => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(props.ticket.progress), 800);
    return () => clearTimeout(timer);
  }, []);

  const bgColorValidation = (color: string) => {
    switch (color) {
      case "Stuck":
        return "bg-red-200";
      case "Progress":
        return "bg-blue-200";
      case "Done":
        return "bg-green-200";
      case "Working on it":
        return "bg-yellow-200";
      default:
        break;
    }
  };

  return (
    <div className="flex text-sm gap-1 h-20 mt-1">
      <div
        className={`flex items-center justify-center w-4 ${bgColorValidation(
          props.ticket.status
        )} rounded`}
      ></div>
      <div className="flex items-center justify-center bg-zinc-300 w-1/6">
        <img className="rounded-[50%] w-12 h-12" src={props.ticket.avatar} />
      </div>
      <div className="flex items-center justify-center font-semibold bg-zinc-300 w-1/5">
        {props.ticket.title}
      </div>
      <div className="flex items-center justify-center text-center bg-zinc-300 w-1/5 font-semibold text-[10px]">
        {props.ticket.description}
      </div>
      <div
        className={`flex items-center justify-center ${bgColorValidation(
          props.ticket.status
        )} w-1/5 font-semibold rounded`}
      >
        {props.ticket.status}
      </div>
      <div className="flex items-center justify-center bg-zinc-300 w-1/5 font-semibold">
        <Progress.Root value={70} className="w-4/5 h-6 overflow-hidden bg-zinc-400 rounded-[15px]">
          <Progress.Indicator
            className="bg-violet-500  h-full transition"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center bg-zinc-300 w-8 rounded font-semibold">
        <XCircle className="hover:text-zinc-500" size={22} />
        <PencilSimple className="hover:text-zinc-500" size={22} />
      </div>
    </div>
  );
};

export default TicketCard;
