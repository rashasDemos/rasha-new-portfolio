import React, { useState } from 'react'
import {NextPage} from 'next'
import { Box, Text } from 'rebass';
interface ProjectGalleryProps {
  selectedProj : number,
  clickedProj : number,
  setSelectedProj : (x:number) => void,
  setClickedProj :  (x:number) => void,
}
const array =  ['Emotional Intelligence Trainer (EIT)','Spotify New Music Finder', 'Javascript Keycode Copier','Chord Progression 3D Visualizer']

export const ProjectGallery: NextPage<ProjectGalleryProps> = ({selectedProj, clickedProj, setSelectedProj, setClickedProj}) => {



        return   <Box
        display="grid"
    
        pt={4}

        pb={4}
      >
        <Box
          display="flex"
          sx={{
            flexDirection: "column",
            textAlign:["left", "right"],
          }}
        >
          <Text mb={2} fontSize={5} fontWeight={600}>
            PROJECTS
          </Text>

          {array.map((x,i) => <Box key={i}  onMouseEnter={() => setSelectedProj(i)} onMouseLeave={() => setSelectedProj(clickedProj)} onClick={() => setClickedProj(i)}><Text my={1} sx={{cursor: 'pointer'}} color={selectedProj === i ? 'yellow' : 'white'} mb={1} fontSize={2} fontWeight={300}>
           {x}
           </Text></Box>)}
    
        </Box>
      </Box>;
}