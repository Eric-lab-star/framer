import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled(motion.svg)`
  width: 150px;
  height: 100px;
`;

const svgVariants = {
  start: {
    fill: "transparent",
    pathLength: 0,
    stroke: "rgba(255,255,255,1)",
    strokeWidth: 6,
  },
  end: { pathLength: 1, stroke: "#feee34", transition: { duration: 4 } },
};

function App() {
  return <Wrapper></Wrapper>;
}

export default App;
