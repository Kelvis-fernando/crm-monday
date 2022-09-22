import { useEffect, useState } from "react";
import TicketCard from "../components/TicketCard";
import axios from "axios";
import { Ticket } from "../types/Ticket";

const Dashboard = () => {
  const [ticket, setTicket] = useState<Ticket[]>([]);

  // const uniqueCategories = [...new Set(ticket?.map(({ category }) => category))];
  // console.log(uniqueCategories);

  useEffect(() => {
    axios.get("http://localhost:3333/tickets").then((response) => setTicket(response.data));
  }, []);

  return (
    <div className="w-full p-8">
      <h1>My projects</h1>
      <div className="h-4/5">
        <div>
          {ticket && ticket.map((ticket, index) => <TicketCard key={index} ticket={ticket} />)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
