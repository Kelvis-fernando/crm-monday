import { useEffect, useState } from "react";
import TicketCard from "../components/TicketCard";
import axios from "axios";
import { Ticket } from "../types/Ticket";

const Dashboard = () => {
  const [ticket, setTicket] = useState<Ticket[]>([]);
  const tickets = [
    {
      id: "40a9f4ce-39ac-11ed-a261-0242ac120002",
      category: "Q1 2022",
      title: "NFT",
      owner: "Pinkis",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "Done",
      progress: 100,
      description: "Make a video",
      timestemp: new Date(),
    },
    {
      id: "4187340b-8255-4daa-8d3d-c693bd56885d",
      category: "Q2 2022",
      title: "Bitcoin",
      owner: "Joao",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "Progress",
      progress: 50,
      description: "Make a currency",
      timestemp: new Date(),
    },
    {
      id: "4a1bca5a-39ac-11ed-a261-0242ac120002",
      category: "Q3 2022",
      title: "Build bot",
      owner: "Marcio",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "Working on it",
      progress: 70,
      description: "Building a bot",
      timestemp: new Date(),
    },
    {
      id: "ae5a8ee3-157a-4c7e-a3e3-b8f16eedd9ba",
      category: "Q4 2022",
      title: "IA Validation credit card",
      owner: "Joao",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "Stuck",
      progress: 10,
      description: "Contructing a IA for made a credit card validation",
      timestemp: new Date(),
    },
    {
      id: "5321a584-39ac-11ed-a261-0242ac120002",
      category: "Q6 2022",
      title: "Creating a bot to buy houses",
      owner: "Pedro",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "Progress",
      progress: 50,
      description: "Contructing a bot to buy houses in curitiba",
      timestemp: new Date(),
    },
  ];

  // const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];
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
