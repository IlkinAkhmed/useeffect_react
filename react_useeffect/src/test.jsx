import axios from "axios";
import React, { useEffect, useState } from "react";
import Main from "./Components/Main";

const Test = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = "http://localhost:3000/products";
    const datas = async () => {
      try {
        const res = await axios(`${url}`);
        setData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    datas();
    return () => {
      console.log("data was sent");
    };
  }, []);
  return (
    <div className="wrapper">
      <h1>Getting data from Api trough react</h1>
      {isLoading ? (
        <i className="fa-solid fa-spinner fa-spin"></i>
      ) : (
        <div className="cards" >
          {data && data.map((item) => (
            <div className="card" key={item.id}>
                <Main {...item}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Test;
