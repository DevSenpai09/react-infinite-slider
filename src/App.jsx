import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

const StyledApp = styled.main`
  overflow: hidden;
  width: 100vw;
  max-width: 1000px;

  h1 {
    text-align: center;
    margin-bottom: 5rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
`;

const StyledSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
  gap: 30px;
`;

const StyledCard = styled.div`
  height: 200px;
  border-radius: 1rem;
  grid-area: -1 / 1;
  position: relative;
`;

const App = () => {
  const sliderCon = useRef(null);

  const [boxes, setBoxes] = useState([
    { left: 0, color: "red", boxRef: useRef(null) },
    { left: 200, color: "blue", boxRef: useRef(null) },
    { left: 400, color: "green", boxRef: useRef(null) },
    { left: 600, color: "yellow", boxRef: useRef(null) },
    { left: 800, color: "gray", boxRef: useRef(null) },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBoxes = boxes.map((e) => {
        if (
          e.boxRef.current.getBoundingClientRect().x >
          sliderCon.current.getBoundingClientRect().width
        ) {
          if (boxes.indexOf(e) == boxes.length - 1) {
            console.log(boxes[0].left);
            return {
              ...e,
              left: boxes[0].left - 250,
            };
          } else {
            return {
              ...e,
              left: boxes[boxes.indexOf(e) + 1].left - 100,
            };
          }
          console.log(e.left);
        }
        return { ...e, left: e.left + 100 };
      });
      console.log(newBoxes);
      setBoxes(newBoxes);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <StyledApp ref={sliderCon}>
      <h1>React Infinite Slider</h1>
      <StyledSlider>
        {boxes.map((e, i) => (
          <StyledCard
            key={Math.random() * Math.random()}
            style={{
              backgroundColor: e.color,
              left: `${e.left + 30 * boxes.indexOf(e)}px`,
            }}
            ref={boxes[i].boxRef}
          ></StyledCard>
        ))}
      </StyledSlider>
    </StyledApp>
  );
};
export default App;
