import React from "react";
import { actressList } from "./ActressData";
const ActressList = () => {
  return (
    <div>
      {actressList.map((item, index, self) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid white",
              width: "400px",
              marginBottom: "1rem",
              padding: "10px",
            }}
          >
            <img src={item.image} alt="actress photo" />
            <h3>{item.name}</h3>
            <p>{item.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ActressList;
