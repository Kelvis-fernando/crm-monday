import { Link } from "react-router-dom";
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import { useEffect } from "react";

import { Ticket } from "../types/Ticket";

interface TicketCard {
  id: number;
  color: string;
  ticket: Ticket;
}

const TicketCard = (props: TicketCard) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="flex w-full">
      {/* <Link> */}
      <div className="w-4 m-1"></div>
      <h3>{props.ticket.owner}</h3>
      {/* <AvatarDisplay />
      <StatusDisplay />
      <PriorityDisplay /> */}
      {/* </Link> */}
      {/* <DeleteBlock /> */}
    </div>
  );
};

export default TicketCard;
