import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "green",
      title: "NFT",
      owner: "Pinkis",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "Done",
      priority: 5,
      progress: 100,
      description: "Make a video",
      timestemp: new Date(),
    },
    {
      category: "Q2 2022",
      color: "blue",
      title: "Bitcoin",
      owner: "Joao",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "Progress",
      priority: 3,
      progress: 50,
      description: "Make a currency",
      timestemp: new Date(),
    },
    {
      category: "Q3 2022",
      color: "yellow",
      title: "Build bot",
      owner: "Marcio",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "Working on it",
      priority: 5,
      progress: 70,
      description: "Building a bot",
      timestemp: new Date(),
    },
    {
      category: "Q4 2022",
      color: "red",
      title: "IA Validation credit card",
      owner: "Joao",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "Stuck",
      priority: 1,
      progress: 10,
      description: "Contructing a IA for made a credit card validation",
      timestemp: new Date(),
    },
  ];

  // const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];
  // console.log(uniqueCategories);

  return (
    <div className="w-full p-8">
      <h1>My projects</h1>
      <div className="h-4/5">
        <div>
          {tickets && tickets.map((ticket, index) => <TicketCard key={index} ticket={ticket} />)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
