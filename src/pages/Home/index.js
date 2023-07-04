import React from "react";

import CustomCard from "../../components/custom-card";
import cardItem from "../../utils/cardItem";

import "./Styles.Home.css";

const Home = () => {
  return (
    <div>
      <div className="custom-card-home">
        {cardItem.map((item, key) => (
          <CustomCard
            customCardStyle={item.customCardStyle}
            key={key}
            style={{ backgroundColor: item.color }}
            icon={item.icon}
            title={item.title}
            number={item.number}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
