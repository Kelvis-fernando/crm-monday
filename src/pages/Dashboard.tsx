import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "Red",
      title: "NFT",
      owner: "Pinkis",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "done",
      priority: 5,
      progress: 40,
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

      status: "progress",
      priority: 3,
      progress: 20,
      description: "Make a currency",
      timestemp: new Date(),
    },
    {
      category: "Q3 2022",
      color: "red",
      title: "Build bot",
      owner: "Marcio",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",

      status: "working on it",
      priority: 5,
      progress: 70,
      description: "Building a bot",
      timestemp: new Date(),
    },
  ];

  const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];
  console.log(uniqueCategories);

  return (
    <div className="w-full p-8">
      <h1>My projects</h1>
      <div className="h-4/5">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket, index) => ticket.category === uniqueCategories[index])
                .map((filteredTicket, index) => (
                  <TicketCard id={index} color={filteredTicket.color} ticket={filteredTicket} />
                ))}
            </div>
          ))}
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
