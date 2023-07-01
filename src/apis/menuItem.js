import { AiOutlineHome, AiOutlineDollarCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { RiFileChartLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";

const menuItem = [
  {
    path: "/home",
    name: "Home",
    icon: <AiOutlineHome size={20} />,
  },
  {
    path: "/course",
    name: "Course",
    icon: <BsBookmark size={20} />,
  },
  {
    path: "/students",
    name: "Students",
    icon: <SlGraduation size={20} />,
  },
  {
    path: "/payment",
    name: "Payment",
    icon: <AiOutlineDollarCircle size={20} />,
  },
  {
    path: "/report",
    name: "Report",
    icon: <RiFileChartLine size={20} />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <GiSettingsKnobs size={20} />,
  },
];

export default menuItem;
