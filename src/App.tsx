import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { MouseEvent, useState } from "react";
import { exit } from "process";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(183, 14, 255, 1);
`;

const GridBox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const Box = styled(motion.div)`
  display: flex;
  height: 200px;
  min-width: 200px;
  background-color: white;
  border-radius: 15px;
  justify-content: center;
  width: 100%;
  :first-child,
  :last-child {
    grid-column: span 2;
  }
`;

const PopupBox = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(183, 14, 255, 0.6);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUp = styled(Box)`
  width: 400px;
`;

function App() {
  const [clickedId, setClickedId] = useState("");
  const layoutIdArray = ["1", "2", "3", "4"];

  return (
    <Wrapper>
      <GridBox>
        {layoutIdArray.map((v) => (
          <Box key={v} layoutId={v} onClick={() => setClickedId(v)} />
        ))}
      </GridBox>
      <AnimatePresence>
        {clickedId ? (
          <PopupBox
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={() => setClickedId("")}
          >
            <PopUp layoutId={clickedId} />
          </PopupBox>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
