import React from "react";
import { NextPage } from "next";
import { Box, Text } from "rebass";
import Link from "next/link";

interface MainInfoProps {
  
}

const links = [
  {
    link:
      "https://github.com/rasha-rahman123/Portfolio-Website-Rasha/blob/master/rasha%20rahman%20resume%20freelance.pdf",
    name: "Resume",
  },
  {
    link: "https://www.linkedin.com/in/rasha-rahman-ab2624123/",
    name: "LinkedIn",
  },
  {
    link: "https://twitter.com/raaahhh_sha",
    name: "Twitter",
  },
];

export const MainInfo: NextPage<MainInfoProps> = ({}) => {
  return (
    <Box height={[500]} >
      {" "}
      <Text sx={{textAlign:["left", "right"], transition: 'all 300ms ease'}} fontWeight={600}>RASHA RAHMAN</Text>
      <Text sx={{textAlign:["left", "right"]}}  fontWeight={300}>Product Developer, UCLA 20</Text>
      <Text sx={{textAlign:["left", "right"]}}  fontWeight={300}>
        {links.map((x, i) => (
          <Link key={i} href={x.link}>
            <a>
              <Text  sx={{textAlign:["left", "right"], ":hover":{color: 'aquamarine'}}} display="inline" mr={i < 2 && 2} >
                {x.name}
              </Text>
            </a>
          </Link>
        ))}
      
      </Text>
    </Box>
  );
};
