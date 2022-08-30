import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import S from "./Section.module.css";
import Image from "../Image/Image";
import Video from "../Video/Video";

const Section = () => {
  const [data, setData] = useState("2022-08-29");
  const [infos, setInfos] = useState({})

  const url = `https://api.nasa.gov/planetary/apod?api_key=cfc6pA7kyAgQdATFivgeENC3WLslXp04aHxCbCBC&date=${data}`;

  const handleReq = async () => {
    let response = await fetch(url);
    const json = await response.json();
    setInfos(json)
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
    <section className={S.container}>
      <div className={S.divReq}>
        <Input
          type="date"
          style={S.input}
          onChange={(e) => {
            handleChange(e, "data");
          }}
        />
        <Button style={S.button} onClick={handleClick} text={"Enviar"} />
      </div>

      <div>
        {infos.media_type == 'image' ?
        <Image src={infos.url}/> 
        : 
        <Video src={infos.url}/>}
      </div>
    </section>
  );
};

export default Section;
