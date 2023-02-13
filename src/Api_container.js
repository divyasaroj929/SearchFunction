import React, { useRef, useState } from "react";

const Api_container = ({ data }) => {
  console.log(data);

  const [check, setCheck] = useState("");
  let Timer = useRef();

  const myDebouncing = (e) => {
    if (Timer) clearTimeout(Timer.current);
    Timer.current = setTimeout(() => {
      console.log("call function in 1 sec");
      setCheck(e.target.value);
    }, 1000);
  };

  return (
    <>
      <div className="store-api">
        <input
          type="text"
          placeholder="search here..."
          onChange={myDebouncing}
          className="search"
        />
        <div className="home-api">
          {data
            .filter((data) => data.title.toLowerCase().includes(check))
            .map((value) => {
              return (
                <div className="search-bar">
                  {value.id}
                  <div className="summery">
                    <span>{value.title}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Api_container;
