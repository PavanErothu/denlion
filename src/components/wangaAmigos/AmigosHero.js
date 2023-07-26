import React from "react";
import wa_hero_img from "../images/wanga_amigos_hero_img.svg";
function AmigosHero() {
  return (
    <div className="">
      <div className="mt-5 pt-5 container">
        <div className="">
          <img
            src={wa_hero_img}
            alt="wa_hero"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>{" "}
    </div>
  );
}
export default AmigosHero;
