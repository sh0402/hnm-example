import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);

    console.log(item);
  };

  return (
    <div className="product-card flex flex-col gap-1" onClick={showDetail}>
      <img src={item?.img} alt="" />
      <div>{item.choice == true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <span>{item?.new == true ? "신제품" : ""}</span>
    </div>
  );
};
