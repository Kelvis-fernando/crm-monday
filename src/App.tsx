import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import "./styles/main.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex space-x-auto">
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/ticket" element={<TicketPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
