import styled from "styled-components";

const boxes = [
  { color: "red", left: 0 },
  { color: "blue", left: 20 },
  { color: "green", left: 40 },
  { color: "yellow", left: 60 },
  { color: "purple", left: 80 },
];

const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20rem);
  gap: 3rem;
  overflow: hidden;
  margin-top: 3rem;
`;

const StyledCard = styled.div`
  height: 20rem;
  border-radius: 1rem;
  grid-area: -1 / 1;
  position: relative;
`;

const App = () => {
  return (
    <div>
      <h1>React Infinite Slider</h1>
      <StyledCardWrapper>
        {boxes.map((box) => (
          <StyledCard
            key={boxes.indexOf(box)}
            style={{
              backgroundColor: box.color,
              left: box.left + boxes.indexOf(box) * 3 + "rem",
            }}
          ></StyledCard>
        ))}
      </StyledCardWrapper>
    </div>
  );
};

export default App;
