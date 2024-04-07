import React from "react";
import { laptopData } from "./LaptopData";
const LaptopList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {laptopData.map((item, index, self) => {
        return (
          <div
            key={item.id}
            style={{
              width: "600px",
              height: "400px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <img
              src={item.image}
              alt=""
              style={{ width: "300px", padding: "1rem" }}
            />
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default LaptopList;
