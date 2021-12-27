import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifTable from "./components/GifTable";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  // const handleAdd = () => {
  //   setCategories(categories => [...categories, "Friends"]);
  // };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(cat =>
          <GifTable key={cat} category={cat} />          
        )}
      </ol>
    </>
  );
};

export default GiftExpertApp;
