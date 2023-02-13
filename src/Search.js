import React, { useEffect, useState } from "react";
import Api_container from "./Api_container";

const Search = () => {
  const [checkapi, setCheckapi] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((result) => {
      result.json().then((resp) => {
        console.warn("result", resp);
        setCheckapi(resp);
        console.log(resp);
      });
    });
  }, []);
  return (
    <>
      <div className="container">
        <Api_container data={checkapi} />
      </div>
    </>
  );
};
export default Search;
