import * as Slider from "@radix-ui/react-slider";
import { useState, useEffect } from "react";

const TicketPage = () => {
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    console.log(sliderValue);
  }, [sliderValue]);
  const teste = () => console.log(sliderValue);

  return (
    <div className="w-full p-8">
      <h1>Create a ticket</h1>
      <div className="flex justify-center items-center mt-10">
        <form className="flex-col grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-semibold" htmlFor="title">
              Title
            </label>
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
              name="title"
              id="title"
              type="text"
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
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-1 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
            >
              <option value="done">Done</option>
              <option value="work in progress">Work in progress</option>
              <option value="progress">Progress</option>
              <option value="stuck">Stuck</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold" htmlFor="status">
              Progress
            </label>
            <Slider.Root
              className="flex relative items-center w-52 select-none touch-none mt-4"
              defaultValue={[0]}
              max={100}
              step={10}
              aria-label="Volume"
              onValueChange={() => setSliderValue}
            >
              <Slider.Track className="w-full h-1  bg-zinc-300 relative]">
                <Slider.Range className="absolute bg-zinc-600 h-full"  />
              </Slider.Track>
              <Slider.Thumb className="block w-[20px] h-[20px] bg-zinc-800 border shadow rounded-[50%]" />
            </Slider.Root>
          </div>
          <button
            className="border border-slate-600 h-9 rounded text-sm font-semibold hover:bg-zinc-500 hover:text-white"
            onClick={() => teste()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
