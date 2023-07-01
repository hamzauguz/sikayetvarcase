import React from "react";
import "./Styles.Home.css";

import { SlGraduation } from "react-icons/sl";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineDollarCircle, AiOutlineUser } from "react-icons/ai";

import CustomCard from "../../components/custom-card";

const Home = () => {
  const cardItem = [
    {
      icon: <SlGraduation color="#74C1ED" size={34} />,
      title: "Students",
      number: 243,
      color: "#F0F9FF",
      customCardStyle: "",
    },
    {
      icon: <BsBookmark color="EE95C5" size={34} />,
      title: "Course",
      number: 13,
      color: "#FEF6FB",
      customCardStyle: "",
    },
    {
      icon: <AiOutlineDollarCircle color="#F6C762" size={34} />,
      title: "Payments",
      number: "556,000₺",
      color: "#FEFBEC",
      customCardStyle: "",
    },
    {
      icon: <AiOutlineUser color="#FFFFFF" size={34} />,
      title: "Users",
      number: 3,
      color: "#FEFBEC",
      customCardStyle: "linear-yellow",
    },
  ];
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
