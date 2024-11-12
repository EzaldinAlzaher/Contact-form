import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInfo = (Event) => {
    console.log(name);
    console.log(email);
    console.log(message);
    Event.preventDefault();
    alert(`Name: ${name}, Email: ${email}`)
  };

  
  return (
    <>
      <div className="bg-white p-5 rounded-3xl xl:w-[700px] xl:h-[896px] xl:p-12 xl:ml-28">
        <h2 className="text-background mt-0 mb-14">I`m interested in...</h2>
        <form action="" className="flex flex-wrap ">
          <button className="text-white bg-dark_pink text-[12px] font-[500] py-[12px] px-[8px] border-none rounded-[8px] mr-2 mb-2 xl:p-4 xl:w-48 xl:h-16 xl:text-[20px]">
            UI/UX design
          </button>
          <button className="text-gray-400 bg-white text-[12px] font-[500] py-[12px] px-[8px] border-2 border-solid border-gray-400 rounded-[8px] mr-2 mb-2 xl:p-4 xl:text-[20px]">
            Web design
          </button>
          <button className="text-gray-400 bg-white text-[12px] font-[500] py-[12px] px-[8px] border-2 border-solid border-gray-400 rounded-[8px] mr-2 mb-2 xl:p-4 xl:text-[20px]">
            Java
          </button>
          <button className="text-gray-400 bg-white text-[12px] font-[500] py-[12px] px-[8px] border-2 border-solid border-gray-400 rounded-[8px] mr-2 mb-2 xl:p-4 xl:text-[20px]">
            Graphic design
          </button>
          <button className="text-gray-400 bg-white text-[12px] font-[500] py-[12px] px-[8px] border-2 border-solid border-gray-400 rounded-[8px] mr-2 mb-2 xl:p-4 xl:text-[20px]">
            Design system
          </button>
          <button className="text-gray-400 bg-white text-[12px] font-[500] py-[12px] px-[8px] border-2 border-solid border-gray-400 rounded-[8px] mr-2 mb-2 xl:p-4 xl:text-[20px]">
            Other
          </button>

          <input
            type="text"
            placeholder="Your name"
            onChange={(evt) => setName(evt.target.value)}
            className="border-t-0 border-x-0 border-b-2 border-gray-400 outline-none w-screen my-9 text-[16px] xl:text-[20px] xl:my-8 xl:mt-12"
          />
          <input
            type="text"
            placeholder="Your email"
            onChange={(evt) => setEmail(evt.target.value)}
            className="border-t-0 border-x-0 border-b-2 border-gray-400 outline-none w-screen mb-9 text-[16px] xl:text-[20px]  xl:my-8"
          />
          <input
            type="text"
            placeholder="Your message"
            onChange={(evt) => setMessage(evt.target.value)}
            className="border-t-0 border-x-0 border-b-2 border-gray-400 outline-none w-screen mb-9 text-[16px] xl:text-[20px]  xl:my-8"
          />

          <button
            className="py-[10px] px-6 bg-dark_pink rounded-2xl flex justify-center items-center text-white border-none w-[206px] mb-6 mt-14 xl:py-6 xl:px-16 xl:w-[315px] xl:h-[78px] xl:text-[20px] xl:mt-52"
            onClick={(Event) => handleInfo(Event)}
          >
            <img
              src="/public/Images/send.png"
              alt=""
              className="w-6 h-6 mr-3"
            />
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};
