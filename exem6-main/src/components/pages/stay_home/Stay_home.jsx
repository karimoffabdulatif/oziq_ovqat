import React from "react";
import "./Stay_home.css";
import ban from "../../img/ban.png";
function Stay_home() {
  return (
    <div className="stay">
      <div className="stay_text">
        <h1>
          Uyda qoling & kundalik extiyojlaringizni <br /> do'konimizdan oling
        </h1>
        <p>
          Nest bilan har kuni harid qilishni boshlang{" "}
          <b style={{ color: "green" }}>Nest Mart</b>{" "}
        </p>
        <div className="search">
          <p className="pp">Elektron manzilingizni kiriting</p>
          <button className="btn_ser">Yuborish</button>
        </div>
      </div>
      <div className="stay_img">
        <img className="ban" src={ban} alt="" />
      </div>
    </div>
  );
}

export default Stay_home;
