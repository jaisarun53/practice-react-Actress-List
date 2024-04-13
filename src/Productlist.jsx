import React from "react";
import { productData } from "../productdata.js";

const Productlist = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        background: "white",
        padding: "3rem",
      }}
    >
      {productData.map((item, index, self) => {
        return (
          <div
            key={item.id}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              padding: "20px",
            }}
          >
            <img
              src={item.image}
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
            <h3>{item.name}</h3>
            <p style={{ color: "orange" }}>Rs.{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Productlist;
