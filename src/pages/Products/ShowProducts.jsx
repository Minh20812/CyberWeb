import React, { useEffect, useState } from "react";
import CardProducts from "../../components/cards/CardProducts";

const ShowProducts = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch initial data on component mount
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://reqres.in/api/users?page=1&per_page=3`
        );
        const json = await res.json();
        setData(json.data);
        setTotalPage(json.total_pages);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []); // Empty dependency array ensures this runs only once

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://reqres.in/api/users?page=${page + 1}&per_page=3`
      );
      const json = await res.json();

      setTimeout(() => {
        setLoading(false);
        setData((prev) => {
          const newData = [...prev, ...json.data];
          const uniqueData = Array.from(
            new Set(newData.map(JSON.stringify))
          ).map(JSON.parse);
          return uniqueData;
        });
        setPage(page + 1);
      }, 500);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-10 lg:col-span-3 lg:gap-x-8 px-4">
        {data &&
          data.map((user, index) => (
            <CardProducts
              key={`${user.id}-${index}`}
              image={user.avatar}
              name={`${user.first_name} ${user.last_name}`}
              price={user.email}
            />
          ))}
      </div>

      {page < totalPage && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoadMore}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default ShowProducts;

// <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-10 lg:col-span-3 lg:gap-x-8 px-4">
//   {dataProducts.map((e, id) => (
//     <div key={id} className=" flex items-center justify-center">
//       <CardProducts image={e.image} name={e.name} price={e.price} />
//     </div>
//   ))}
// </div>
