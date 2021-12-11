import React, { useState, useEffect } from "react";
import axios from "axios";

function App(props) {
  const [data, setData] = useState([]);
  const [newData, setnewData] = useState({
    title: "New Title",
    description: "new Description",
    date: "10/11/2021",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => {
      setData(res.data);
    });
  }, [data]);

  const handleClick = () => {
    axios.post("http://localhost:3001/", newData).then((res) => {
      setData([...data, res.data]);
    });
  };

  return (
    <div>
      {data.map((e) => {
        return (
          <div>
            Title: {e.title} Description: {e.description} Date: {e.date}
          </div>
        );
      })}

      <button onClick={handleClick}>POST</button>
    </div>
  );
}
export default App;
