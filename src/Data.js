import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaWix,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  FaWordpress,
  FaBootstrap
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <FaInstagram />,
  <FaLinkedin />,
  
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Sayed Aasim",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+916386542125",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "sayedaasim0945@gmail.com",
  },
];

export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <FaBootstrap />,
  <FaReact />,
  <FaNodeJs />,
  <FaWix />,
  <FaWordpress />,
];

export const experiences = [
  
  {
    di: 1,
    year: "2023",
    position: "Junior Web Developer",
    company: "sidzifi.com",
  },
  {
    id: 2,
    year: "2022",
    position: "Intern Web Dveloper",
    company: "sidzifi.com",
  },
];
export const finishes = [
  {
    id: 1,
    number: "1+",
    itemName: "Years Of Experience",
  },
  
  {
    id: 2,
    number: "15+",
    itemName: "Projects",
  },
 
];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Hayat Masjid Zahra colony Thakurganj, Lucknow",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "sayedaasim0945@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91 6386542125",
  },
];
