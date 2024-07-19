import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className=" flex justify-center items-center flex-col gap-4 px-0 lg:w-[240px] bg-purple-500">
        <img src={img} alt={title} className=" w-[50%] h-[50%]" />
        <div className="">
          <h3 className="card-title">{title}</h3>
          <section className=" flex justify-between">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className=" flex justify-between">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
