import React, { useState } from "react";
import Card from "./Card";
import containerStyle from "./CardContainer.module.scss";

const CardContainer = ({ data }) => {
  const [newData, setNewData] = useState("");

  let output = data.filter((e) =>
    e.name.toLowerCase().includes(newData.toLowerCase())
  );

  return (
    <main>
      <input onChange={(e) => setNewData(e.target.value)} />

      <div className={containerStyle.container}>
        {output.map((dt, index) => (
          <Card key={index} data={dt} />
        ))}
      </div>
    </main>
  );
};

export default CardContainer;
