// stop/pause, reset

import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import msToTime from "./utils";
import "./styles.css";

const StopWatch = forwardRef((props, ref) => {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    let interval;
    if (flag) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [flag]);

  const startPause = () => {
    setFlag(!flag);
  };

  const reset = () => {
    setTime(0);
    setFlag(false);
  };

  useImperativeHandle(ref, () => ({
    reset,
  }));

  const formattedTime = msToTime(time);

  return (
    <div>
      <p class="time">
        {formattedTime.hours}:{formattedTime.minutes}:{formattedTime.seconds}:
        {formattedTime.milliseconds}
      </p>
      <button onClick={startPause}>Start/Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
});

export default StopWatch;
