import Input from "./Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml-5 flex flex-col">
        <h2 className="text-xl font-normal mb-2 mt-2">Price</h2>

        <label className="block relative pl-[35px] mb-3 cursor-pointer select-none hover:bg-gray-300">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-[50%]"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
