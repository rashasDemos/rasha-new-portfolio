import React, { ReactElement } from "react";
import { NextPage } from "next";
import { Box, Text } from "rebass";

interface LayoutProps {
  children: ReactElement;
}

export const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <Box px={[16,100]} py={[32,0]}sx={{textAlign: 'right', color: 'white'}}>
      {children}
    
    </Box>
  );
};
