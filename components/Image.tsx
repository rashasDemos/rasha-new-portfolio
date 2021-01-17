import React from "react";
import { NextPage } from "next";
import { Box, Button, Text } from "rebass";
import Image from "next/image";
import styles from "../styles/Image.module.css";
import Link from "next/link";


interface ImageProps {
  imageHover: boolean;
  setImageHover: (x: boolean) => void;
  selectedProj: number;
  clickedProj: number;
}

const images = ["eit.png", "snmf.png", "jskc.png", "cp3v.png"];
const demo = [
  "https://eitrainer.app",
  "https://spotifymusicfinder.xyz/",
  "https://js-keys.vercel.app/",
  "https://orbmusic.club/",
];
const github = [
  "https://github.com/rasha-rahman123/EIT",
  "https://github.com/rasha-rahman123/sprandom",
  "https://github.com/rasha-rahman123/js-key-finder",
  "https://github.com/rasha-rahman123/chord",
];

export const ImageR: NextPage<ImageProps> = ({
  setImageHover,
  imageHover,
  selectedProj,
  clickedProj,
}) => {
  const changeHover: (bool: boolean) => void = (bool) => {
    setImageHover(bool);
  };
  return (
    <Box
      sx={{
        mt: [3, 0, 0],
        background: "radial-gradient(purple,orange,pink,skyblue,lime)",
        backgroundSize: "600% 600%",
        backgroundPositionX: "50%",
        borderRadius: 10,
        backgroundPositionY: selectedProj
          ? selectedProj * 20 + "%"
          : clickedProj * 20 + "%",
        transition: "all " + 900  + "ms ease-in-out",
        width: ["80vw", "100%"],
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: [1, 4],
      }}
    >
      <Image
        className={styles.image}
        onMouseEnter={() => changeHover(true)}
        src={`/${images[selectedProj ? selectedProj : clickedProj]}`}
        layout="intrinsic"
        width="800"
        height="500"
      />
      <Box
        onMouseEnter={() => changeHover(true)}
        onMouseLeave={() => changeHover(false)}
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bg: "#2c2c2e80",
          top: 0,
          transition: "all 1s ease",
          opacity: imageHover ? 1 : 0,
          display: "grid",
          gridTemplateColumns: "49.5% 1% 49.5%",
        }}
      >
        <Link href={demo[clickedProj]}>
          <a>
            <Box
              sx={{
                background: "linear-gradient(pink,lightblue)",
                opacity: 0.6,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 5,
                color: "#00000080",
                backgroundSize: "600% 600%",
                backgroundPositionY: "0%",
                borderRadius: "10px 0px 0px 10px",
                height: '100%',
                transition: "all 300ms ease",
                ":hover": {
                  backgroundPositionY: "100%",
                  color: "navy",
                },
              }}
            >
              <Text>DEMO</Text>
            </Box>
          </a>
        </Link>

        <Box sx={{ background: "black" }} />

        <Link href={github[clickedProj]}>
          <a>
            <Box
              sx={{
                background: "linear-gradient(salmon,lightgreen)",
                opacity: 0.6,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 5,
                color: "#00000080",
                height: '100%',
                backgroundSize: "600% 600%",
                backgroundPositionY: "0%",
                borderRadius: "0px 10px 10px 0px",
                transition: "all 1s ease",
                ":hover": {
                  backgroundPositionY: "100%",
                  color: "darkgreen",
                },
              }}
            >
              <Text>GITHUB</Text>
            </Box>
          </a>
        </Link>
      </Box>
    </Box>
  );
};
