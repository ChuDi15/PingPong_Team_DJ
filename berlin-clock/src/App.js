import "./App.css";
import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import Seconds from "./Components/Seconds";
import Hours from "./Components/Hours";

function App() {
  const [Second, setSecond] = useState("black");
  const [UpHour, setUpHour] = useState(["black", "black", "black", "black"]);
  const [DownHour, setDownHour] = useState(["black", "black", "black", "black"]);
  const [value, setValue] = useState(new Date());

  const secondsHandler = () => {
    const date = new Date();
    if (date.getSeconds() % 2) {
      setSecond("grey");
    } else {
      setSecond("black");
    }
    const hours = date.getHours(); 
    if(hours > 4 ){
      if(hours > 9){
        if(hours > 14){
          if(hours > 19){
            setUpHour(["grey", "grey", "grey", "grey"]);
          }else{
            setUpHour(["grey", "grey", "grey", "black"]);
          }
        }else{
          setUpHour(["grey", "grey", "black", "black"]);
        }
      }else{
        setUpHour(["grey", "black", "black", "black"]);
      }
    }else{
      setUpHour(["black", "black", "black", "black"]);
    }
    if(hours%5 > 1 ){
      if(hours%5 > 2){
        if(hours%5 > 3){
          if(hours%5 > 4){
            setDownHour(["grey", "grey", "grey", "grey"]);
          }else{
            setDownHour(["grey", "grey", "grey", "black"]);
          }
        }else{
          setDownHour(["grey", "grey", "black", "black"]);
        }
      }else{
        setDownHour(["grey", "black", "black", "black"]);
      }
    }else{
      setDownHour(["black", "black", "black", "black"]);
    }

    console.log(date.getSeconds());
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
      </header>
      <div>
        <p>Current time:</p>
        <div>{value.getSeconds()}</div>
      </div>
    </div>
  );
}

export default App;
