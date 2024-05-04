import "./styles.css";
import StopWatch from "./StopWatch";
import { useRef } from "react";

export default function App() {
  const firstChildRef = useRef();
  const secondChildRef = useRef();
  const thirdChildRef = useRef();

  const handleClick = () => {
    firstChildRef.current.reset();
    secondChildRef.current.reset();
    thirdChildRef.current.reset();
  };

  return (
    <div className="App">
      <h1>STOPWATCHES</h1>
      <div className="stopwatch">
      <h3>STOPWATCH 1</h3>
      <StopWatch ref={firstChildRef} />
      <h3>STOPWATCH 2</h3>
      <StopWatch ref={secondChildRef} />
      <h3>STOPWATCH 3</h3>
      <StopWatch ref={thirdChildRef} />
      <br />
      </div>
      <p id="master"><button onClick={handleClick}>RESET ALL</button></p>
    </div>
  );
}
