import { Box, Text } from "rebass";
import { Layout } from "../components/Layout";
import { useState } from "react";

import { ProjectGallery } from "../components/ProjectGallery";
import { MainInfo } from "../components/MainInfo";
import { ImageR } from "../components/Image";
import {Transition} from 'react-transition-group';
const Home: React.FC = () => {
  const [selectedProj, setSelectedProj] = useState<number>(0);
  const [clickedProj, setClickedProj] = useState<number>(0);
  const [imageHover, setImageHover] = useState<boolean>(false);

  return (
    <Layout>
      <>
        <Box
          display="flex"
          sx={{
            justifyContent: ['space-around',"center","space-between"],
            flexDirection: ["column-reverse","column-reverse","row"],
            textAlign: "right",
            alignItems: "center",

          }}
          px={16}
          height={'100vh'}

          width="100%"
        >
          <Box>
          <ImageR
              clickedProj={clickedProj}
              imageHover={imageHover}
              selectedProj={selectedProj}
              setImageHover={setImageHover}
    
            />
          </Box>
          <Box sx={{ flexDirection: ["column","row","column"], display: 'flex', justifyContent: 'space-between', height: ['25vh','25vh','50vh'], alignSelf: ['center','flex-end','center'], mb: [5,3, 0], mt: [0,6,0] }}>
          <MainInfo/>
            <ProjectGallery
              clickedProj={clickedProj}
              selectedProj={selectedProj}
              setClickedProj={setClickedProj}
              setSelectedProj={setSelectedProj}
            />
          </Box>
        </Box>
      </>
    </Layout>
  );
};

export default Home;
