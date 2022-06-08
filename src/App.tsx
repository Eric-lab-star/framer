import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled(motion.div)`
  height: 100px;
  width: 100px;
  background-color: white;
  border-radius: 15px;
  margin-bottom: 200px;
  position: absolute;
`;

const boxVariant = {
  start: {
    scale: 1,
  },
  end: {
    scale: 1.5,
    rotateZ: 90,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
    },
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <Wrapper>
      <AnimatePresence>
        {showing ? (
          <Container variants={boxVariant} initial="start" animate="end" />
        ) : null}
      </AnimatePresence>
      <button onClick={onClick}>Click</button>
    </Wrapper>
  );
}

export default App;
