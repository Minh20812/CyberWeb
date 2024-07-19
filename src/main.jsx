import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Favorites from "./pages/Favorites";
import User from "./pages/User";
import ProductSearchPage from "./pages/Products/ProductSearchPage.jsx";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage.jsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ResultsEnterFromSearch from "./search2/ResultsEnterFromSearch";
import Carts from "./search2/Carts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="carts" element={<Carts />} />
            <Route path="user" element={<User />} />
            <Route path="product-search" element={<ProductSearchPage />} />
            <Route path="/product-detail" element={<ProductDetailsPage />} />
            <Route path="shopping-cart" element={<Carts />} />
            <Route path="/search" element={<ResultsEnterFromSearch />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
