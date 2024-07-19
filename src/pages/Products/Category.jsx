import Input from "./Input.jsx";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <div className="">
      <h2 className="text-xl font-normal mb-2">Category</h2>

      <div className=" flex flex-col">
        <label className=" block relative cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test"
            className=""
          />
          All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
