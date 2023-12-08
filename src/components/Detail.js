import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sh0402/hnm-example/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
    // console.log(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="flex gap-4">
      <div className="left">
        <img src={product?.img} alt="" />
      </div>

      <div className="right flex-1">
        <div className="item-info">
          <span>{product?.new == true ? "신제품" : ""}</span>
          <div>{product?.choice == true ? "Conscious choice" : ""}</div>
          <h5>{product?.title}</h5>
          <p>₩{product?.price}</p>
        </div>

        <div className="item-option">
          <select name="size" id="size">
            <option value="사이즈 선택">사이즈 선택</option>
          </select>
        </div>

        <div className="button-group">
          <button>구매하기</button>
        </div>
      </div>
    </div>
  );
};
