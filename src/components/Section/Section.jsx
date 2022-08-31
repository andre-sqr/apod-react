import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import S from "./Section.module.css";
import Image from "../Image/Image";
import Video from "../Video/Video";
import { GoTelescope } from "react-icons/go";

const Section = () => {
  const [data, setData] = useState("");
  const [infos, setInfos] = useState({});

  const url = `https://api.nasa.gov/planetary/apod?api_key=cfc6pA7kyAgQdATFivgeENC3WLslXp04aHxCbCBC&date=${data}`;

  const handleReq = async () => {
    let response = await fetch(url);
    const json = await response.json();
    setInfos(json);
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleReq();
  };

  useEffect(() => {
    handleReq();
  }, []);

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
        <Button
          style={S.button}
          onClick={handleClick}
          text={"Buscar "}
          icon={<GoTelescope />}
        />
      </div>

      <div>
        {infos.media_type == "image" ? (
          <Image src={infos.url} />
        ) : (
          <Video src={infos.url} />
        )}
      </div>
      <div className={S.title}>{infos.title}</div>
      <div className={S.copyright}>
        {infos.copyright == undefined
          ? ""
          : `Image Credit & Copyright: ${infos.copyright}`}
      </div>
      <div className={S.explanation}>{infos.explanation}</div>
    </section>
  );
};

export default Section;
