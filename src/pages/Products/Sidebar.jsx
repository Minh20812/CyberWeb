import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className=" w-[15%] fixed h-[100%] border-r-2 border-gray-200 z-[3] flex flex-col items-center text-sm">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
