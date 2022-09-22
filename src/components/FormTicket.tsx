import axios from "axios";
import { FormEvent, useState } from "react";

const FormTicket = () => {
  const [formData, setFormData] = useState({
    progress: 0,
  });

  const idUrl = window.location.href.split("/")[5];

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateOrEditBaner = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const sendDataObject = {
      title: data.title,
      owner: data.owner,
      avatar: data.avatar,
      status: data.status,
      progress: Number(data.progress),
      description: data.description,
    };

    if (idUrl !== undefined) {
      try {
        await axios.put(`http://localhost:3333/ticket/update/${idUrl}`, sendDataObject);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post("http://localhost:3333/ticket", sendDataObject);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {!idUrl ? (
        <form onSubmit={handleCreateOrEditBaner} className="flex-col grid grid-cols-2 gap-2 w-3/4">
          <div>
            <label className="block text-sm font-semibold" htmlFor="title">
              Title
            </label>
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
              name="title"
              id="title"
              type="text"
              required
              placeholder="Insert a title"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="description">
              Description
            </label>
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
              name="description"
              id="description"
              required
              type="text"
              placeholder="Insert a description"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="owner">
              Owner
            </label>
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
              name="owner"
              id="owner"
              required
              type="text"
              placeholder="Who is the owner?"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="avatar">
              Avatar
            </label>
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
              name="avatar"
              id="avatar"
              type="text"
              placeholder="Insert the link for your image avatar"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="status">
              Status
            </label>
            <select
              name="status"
              id="status"
              required
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
            >
              <option value="Done">Done</option>
              <option value="Working on it">Working on it</option>
              <option value="Progress">Progress</option>
              <option value="Stuck">Stuck</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="status">
              Progress
            </label>
            <input
              type="range"
              id="progress"
              name="progress"
              min="0"
              max="100"
              onChange={handleChange}
              className="w-full bg-zinc-500 text-black"
            />
          </div>
          <button className="border border-slate-600 h-9 rounded text-sm font-semibold hover:bg-zinc-500 hover:text-white">
            Submit
          </button>
        </form>
      ) : (
        <form onSubmit={handleCreateOrEditBaner} className="flex-col grid grid-cols-2 gap-2 w-3/4">
          <div>
            <label className="block text-sm font-semibold" htmlFor="title">
              Title
            </label>
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
              name="title"
              id="title"
              type="text"
              required
              placeholder="Insert a title"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="description">
              Description
            </label>
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
              name="description"
              id="description"
              required
              type="text"
              placeholder="Insert a description"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="owner">
              Owner
            </label>
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
              name="owner"
              id="owner"
              required
              type="text"
              placeholder="Who is the owner?"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="avatar">
              Avatar
            </label>
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
              name="avatar"
              id="avatar"
              type="text"
              placeholder="Insert the link for your image avatar"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="status">
              Status
            </label>
            <select
              name="status"
              id="status"
              required
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
            >
              <option value="Done">Done</option>
              <option value="Working on it">Working on it</option>
              <option value="Progress">Progress</option>
              <option value="Stuck">Stuck</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="status">
              Progress
            </label>
            <input
              type="range"
              id="progress"
              name="progress"
              min="0"
              max="100"
              onChange={handleChange}
              className="w-full bg-zinc-500 text-black"
            />
          </div>
          <button className="border border-slate-600 h-9 rounded text-sm font-semibold hover:bg-zinc-500 hover:text-white">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default FormTicket;
