import "./App.scss";
import { useEffect, useState } from "react";

const proxy = "http://localhost:8080";

function App() {
  const [box, setBox] = useState([]);

  useEffect(() => {
    fetch(proxy + "/api/box")
      .then((res) => res.json())
      .then((res) => {
        setBox(res);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(box);

  return (
    <>
      <div className={"image-container"}>
        {box.map((boxes, index) => (
          <div key={index}>
            <p>Index number: {index}</p>
            <p>x-coordinates: {boxes.x}</p>
            <p>y-coordinates: {boxes.y}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
