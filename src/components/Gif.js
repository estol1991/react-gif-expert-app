import React from "react";

const Gif = ({ id, title, url }) => {
  // console.log(imgs);
  return(
    <div className="gif animate__animated animate__fadeInLeft">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
};

export default Gif;
