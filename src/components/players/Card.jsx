import React, { useState } from "react";
import cardStyle from "./Card.module.scss";

const Card = ({ data }) => {
  const [front, setFront] = useState(true);

  return (
    <div onClick={() => setFront(!front)}>
      {/* front side of the card */}

      {front && (
        <div className={cardStyle.frontSide}>
          <img src={data.img} alt="" />
          <h3>{data.name}</h3>
        </div>
      )}

      {/* back side of the card */}

      {!front && (
        <div className={cardStyle.backSide}>
          {data.statistics.map((stats) => (
            <li>{stats}</li>
          ))}
          <h3>{data.name}</h3>
        </div>
      )}
    </div>
  );
};

export default Card;
