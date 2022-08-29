import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import S from "./Section.module.css";

const Section = () => {
  const [data, setData] = useState("");

  const url = `https://api.nasa.gov/planetary/apod?api_key=cfc6pA7kyAgQdATFivgeENC3WLslXp04aHxCbCBC&date=${data}`;

  const handleReq = async () => {
    let response = await fetch(url);
    const json = await response.json();
    // setData([...data,...json.copyright]);
    console.log(json.copyright);
  };

  const handleChange = (e, data) => {
    setData(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleReq();
    console.log(data);
  };

  useEffect(() => {
    handleReq();
  }, [data]);

  return (
    <section>
      <div>
        <Input
          type="date"
          style={S.input}
          onChange={(e) => {
            handleChange(e, "data");
          }}
        />
        <Button style={S.button} onClick={handleClick} text={"Enviar"} />
      </div>
    </section>
  );
};

export default Section;
