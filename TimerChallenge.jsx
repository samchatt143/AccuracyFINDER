import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeremaining, settimeremaining] = useState(targetTime * 1000);

  const timerisActive = timeremaining > 0 && timeremaining < targetTime * 1000;

  if (timeremaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    settimeremaining(targetTime * 1000);
  }
  /*const [timerStarted, setTimerStarted] = useState(false);
  const [timerexpired, setTimerexpired] = useState(false);*/
  //let timer;
  function handleStart() {
    timer.current = setInterval(() => {
      settimeremaining((prevtimeremaining) => prevtimeremaining - 10);
    }, 10);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeremaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerisActive ? handleStop : handleStart}>
            {timerisActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerisActive ? "active" : undefined}>
          {timerisActive ? "Time is running..." : "Time inactive"}
        </p>
      </section>
    </>
  );
}
