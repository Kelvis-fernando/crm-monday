import FormTicket from "../components/FormTicket";

interface TicketPageProps {
  update?: boolean;
}

const TicketPage = ({ update }: TicketPageProps) => {
  return (
    <div className="w-full p-8">
      <h1>Create a ticket</h1>
      <div className="flex justify-center items-center mt-10 w-full">
        <FormTicket />
      </div>
    </div>
  );
};

export default TicketPage;
