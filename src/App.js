import React from "react";
import Stack from "./components/Stack";
import "./App.css";

// const initialCardsState = [
//   { id: "red", clrName: "Red" },
//   { id: "blue", clrName: "Blue" },
//   { id: "green", clrName: "Green" },
//   { id: "black", clrName: "Black" },
// ];

function App() {
  // const [cardState, setCardState] = useState(initialCardsState);

  // const setCardStateHandler = () => {};

  return (
    <div className="app">
      <div className="stacks">
        <Stack
          id="red"
          clrName="Red"
          // cardState={cardState}
          // setCardState={setCardStateHandler}
        />
        <Stack
          id="green"
          clrName="Green"
          // cardState={cardState}
          // setCardState={setCardStateHandler}
        />
        <Stack
          id="blue"
          clrName="Blue"
          // cardState={cardState}
          // setCardState={setCardStateHandler}
        />
        <Stack
          id="black"
          clrName="Black"
          // cardState={cardState}
          // setCardState={setCardStateHandler}
        />
      </div>
    </div>
  );
}

export default App;
