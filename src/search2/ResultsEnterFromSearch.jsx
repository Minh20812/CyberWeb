import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CardProducts from "../components/cards/CardProducts";
import Footer from "../components/Footer";

const ResultsEnterFromSearch = () => {
  const location = useLocation();
  const [error, setError] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setDataFilter(
            data.products.filter((item) => {
              return (
                item &&
                item.title &&
                item.title.toLowerCase().includes(query.toLowerCase())
              );
            })
          );
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setError("Failed to fetch search results. Please try again later.");
        });
    }
  }, [query]);

  const handleClick = (id) => {
    navigate(`/add-product?k=${id}`);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedData = [...dataFilter];
    if (order === "priceAsc") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (order === "priceDesc") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setDataFilter(sortedData);
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-24">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-blue-500 hover:text-blue-600">
                Home
              </Link>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <Link to="/search" className="text-blue-500 hover:text-blue-600">
                Search
              </Link>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li>
              <span className="text-gray-500" aria-current="page">
                {dataFilter.length} products found for "{query}"
              </span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-6">
          Search Results for "{query}"
        </h1>

        {error ? (
          <p className="text-red-500">{error}</p>
        ) : dataFilter.length > 0 ? (
          <>
            <div className="mb-4">
              <label htmlFor="sort" className="mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
                className="border rounded p-2"
              >
                <option value="default">Default</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {dataFilter.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <CardProducts
                    id={item.id}
                    image={item.images[0]}
                    name={item.title}
                    price={`$${item.price}`}
                    showAddButton={true}
                    showBuyButton={false}
                    item={item}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-600">No products found for "{query}"</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ResultsEnterFromSearch;
