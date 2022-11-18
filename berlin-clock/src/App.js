import "./App.css";
import React, { useEffect, useState } from "react";
import Seconds from "./Components/Seconds";
import Hours from "./Components/Hours";
import Minutes from "./Components/Minutes";
import MinutesSmall from "./Components/MinutesSmall";

function App() {
  const [Second, setSecond] = useState("black");
  const [UpHour, setUpHour] = useState(["black", "black", "black", "black"]);
  const [DownHour, setDownHour] = useState(["black", "black", "black", "black"]);
  const [UpMinute, setUpMinute] = useState(["black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black"]);
  const [DownMinute, setDownMinute] = useState(["black", "black", "black", "black"]);
  const [value, setValue] = useState(new Date());

  const secondsHandler = () => {
    const date = new Date();
    if (date.getSeconds() % 2) {
      setSecond("grey");
    } else {
      setSecond("black");
    }
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (hours > 4) {
      if (hours > 9) {
        if (hours > 14) {
          if (hours > 19) {
            setUpHour(["grey", "grey", "grey", "grey"]);
          } else {
            setUpHour(["grey", "grey", "grey", "black"]);
          }
        } else {
          setUpHour(["grey", "grey", "black", "black"]);
        }
      } else {
        setUpHour(["grey", "black", "black", "black"]);
      }
    } else {
      setUpHour(["black", "black", "black", "black"]);
    }

    if (hours / 6 >= 1) {
      if (hours / 6 >= 2) {
        if (hours / 6 >= 3) {
          if (hours / 6 >= 4) {
            setDownHour(["grey", "grey", "grey", "grey"]);
          } else {
            setDownHour(["grey", "grey", "grey", "black"]);
          }
        } else {
          setDownHour(["grey", "grey", "black", "black"]);
        }
      } else {
        setDownHour(["grey", "black", "black", "black"]);
      }
    } else {
      setDownHour(["black", "black", "black", "black"]);
    }

    //Block of minutes
    if (minutes / 5 >= 1) {
      if (minutes / 5 >= 2) {
        if (minutes / 5 >= 3) {
          if (minutes / 5 >= 4) {
            if (minutes / 5 >= 5) {
              if (minutes / 5 >= 6) {
                if (minutes / 5 >= 7) {
                  if (minutes / 5 >= 8) {
                    if (minutes / 5 >= 9) {
                      if (minutes / 5 >= 10) {
                        if (minutes / 5 >= 11) {
                          setUpMinute(["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey"]);
                        } else {
                          setUpMinute(["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "black"]);
                        }
                      } else {
                        setUpMinute(["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "black", "black"]);
                      }
                    } else {
                      setUpMinute(["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey", "black", "black", "black"]);
                    }
                  } else {
                    setUpMinute(["grey", "grey", "grey", "grey", "grey", "grey", "grey", "black", "black", "black", "black"]);
                  }
                } else {
                  setUpMinute(["grey", "grey", "grey", "grey", "grey", "grey", "black", "black", "black", "black", "black"]);
                }
              } else {
                setUpMinute(["grey", "grey", "grey", "grey", "grey", "black", "black", "black", "black", "black", "black"]);
              }
            } else {
              setUpMinute(["grey", "grey", "grey", "grey", "black", "black", "black", "black", "black", "black", "black"]);
            }
          } else {
            setUpMinute(["grey", "grey", "grey", "black", "black", "black", "black", "black", "black", "black", "black"]);
          }
        } else {
          setUpMinute(["grey", "grey", "black", "black", "black", "black", "black", "black", "black", "black", "black"]);
        }
      } else {
        setUpMinute(["grey", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black"]);
      }
    } else {
      setUpMinute(["black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black"]);
    }


    //Block of minutes
    if (minutes % 5 >= 1) {
      if (minutes % 5 >= 2) {
        if (minutes % 5 >= 3) {
          if (minutes % 5 >= 4) {
            setDownMinute(["grey", "grey", "grey", "grey"]);
          } else {
            setDownMinute(["grey", "grey", "grey", "black"]);
          }
        } else {
          setDownMinute(["grey", "grey", "black", "black"]);
        }
      } else {
        setDownMinute(["grey", "black", "black", "black"]);
      }
    } else {
      setDownMinute(["black", "black", "black", "black"]);
    }

    console.log(minutes);
    return setValue(date);
  }
  useEffect(() => {
    const interval = setInterval(secondsHandler, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>BERLIN CLOCK</p>
        <Seconds backgroundColor={Second}></Seconds>
        <Hours hourBox={UpHour} />
        <Hours hourBox={DownHour} />
        <Minutes minuteBox={UpMinute}></Minutes>
        <MinutesSmall minuteBox={DownMinute} />

        <div>
          <p>Current time:</p>
          <div>{value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds()}</div>
        </div>
      </header>

    </div>
  );
}

export default App;
