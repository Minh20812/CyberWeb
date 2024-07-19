import Input from "./Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className=" flex flex-col">
        <h2 className=" text-xl font-normal mb-2 mt-2">Colors</h2>
        <label className="block relative pl-[35px] mb-3 cursor-pointer select-none">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="block relative pl-[35px] mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-[50%]"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
