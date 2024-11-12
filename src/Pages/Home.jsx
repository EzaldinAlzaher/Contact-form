import { Contact } from "../Components/Contact";
import { Form } from "../Components/Form";
import { Heading } from "../Components/Heading";
import { Media } from "../Components/Media";

export const Home = () => {
  return (
    <div className="py-10 px-5 xl:p-16 xl:flex xl:relative ">
      <div className="flex flex-col items-center xl:items-start">
        <Heading />
        <Contact />
      </div>
      <Form />
      <Media />
    </div>
  );
};
