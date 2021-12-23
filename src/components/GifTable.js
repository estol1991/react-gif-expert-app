import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import Gif from "./Gif";

const GifTable = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__backInDown">{category}</h3>
      <div className="gif-table">
        {loading ? <span className="animate__animated animate__pulse">"Cargando..."</span> : images.map((img) => <Gif {...img} key={img.id} />)}
      </div>
    </>
  );
};

export default GifTable;
