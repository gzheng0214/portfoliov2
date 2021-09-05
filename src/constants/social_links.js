import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const data = [
  {
    icon: <AiFillGithub />,
    url: "https://github.com/gzheng0214",
    label: "Github",
    target: true,
  },
  {
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/gzheng0214/",
    label: "LinkedIn",
    target: true,
  },
  {
    icon: <AiOutlineMail />,
    url: "mailto:gzheng0214@gmail.com",
    label: "Email",
  },
];

export default data;
