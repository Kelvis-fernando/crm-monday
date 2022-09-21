import logo from "../assets/crm-logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col items-center h-screen w-12 bg-zinc-900 text-white text-center">
      <div className="mb-8">
        <img src={logo} alt="Logo" className="w-6 h-6 mt-4" />
      </div>
      <div className="grid grid-cols-1 gap-2 place-items-center">
        <div onClick={() => navigate("/ticket")} className="text-3xl text-white hover:text-zinc-400">
          +
        </div>
        <div onClick={() => navigate("/")} className="text-lg text-white hover:text-zinc-400">
          ❮❮
        </div>
      </div>
    </nav>
  );
};

export default Nav;
