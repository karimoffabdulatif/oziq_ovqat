import React, { useState } from "react";
import "../Navbar/Navbar.css";
import Nest from "../../img/Logo.png";
import Group from "../../img/Group.png";
import Vector from "../../img/Vector.png";
import Gr from "../../img/Gr.png";
import Head from "../../img/Head.png";
import Vector24 from "../../img/Vector24.png";
import Olov from "../../img/Olov.png";
import Nav from "../../img/Nav.png";
import Hand from "../../img/Handphone.png";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { VscChevronDown } from "react-icons/vsc";
function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="nav_top">
        <div className="continer">
          <div className="nav_top_center">
            <div className="nav_top_flex">
              <p>Biz haqimizda | Mening Hisobim | Istaklar ro'yxati | Buyurtmani kuzatish</p>
            </div>
            <div className="nav_top_flex">
              <p>Kuryerga murojaat qilib 100% xavfsiz yetkazib berish</p>
            </div>
            <div className="nav_top_flex">
              <p>
                Yordam kerakmi? Bizga qo'ng'iroq qiling:{" "}
                <b style={{ color: "green" }}>:+998(20)001-74-53</b> | UZB | SO'M
              </p>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="nav_medium">
          <div className="continer">
            <div className="nav_medium_flex">
              <Link to={"/"}>
                <div>
                  <img src={Nest} alt="" />
                </div>
              </Link>
              <div className="navbar__search">
                <select name="" id="all">
                  <option value="All Categories">Barcha kategoriyalar</option>
                </select>
                <input type="text" placeholder="Qidirayotgan maxsulot nomini kiriting..." />
                <div className="lupa">
                  <CiSearch />
                </div>
              </div>
              <div className="btn_loc">
                <CiLocationOn />
                <select name="" id="btn_loc">
                  <option value=" Your Location">Manzilingiz</option>
                </select>
              </div>
              <div className="nav_med_flex">
                <div className="nav_med">
                  <img src={Group} alt="" />
                  <p>Taqqoslash</p>
                </div>
                <div className="nav_med">
                  <img src={Vector} alt="" />
                  <p>Istaklar ro'yxati</p>
                </div>
                <div className="nav_med">
                  <img src={Gr} alt="" />
                  <p>Savat</p>
                </div>
                <Link className="link" to={"/login"}>
                  <div className="nav_med">
                    <img src={Head} alt="" />
                    <p>Hisob</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="nav_bottom">
            <div className="continer">
              <div className="nav_flex">
                <div className={`nav_bot_flex ${toggle ? "show" : " "}`}>
                  <button className="btn_browe">
                    <img src={Vector24} alt="" />
                    Ko'rish
                    <select name="" id="cate">
                      <option value="All Categories">Kategoriyalar</option>
                    </select>
                  </button>
                  <div className="nav">
                    <img src={Olov} alt="" />
                    <h3>Shartnomalar</h3>
                  </div>
                  <div className="nav">
                    <h3>Uy</h3>
                    <img src={Nav} width={10} alt="" />
                  </div>
                  <div className="nav">
                    <h3>Haqimizda</h3>
                  </div>
                  <div className="nav">
                    <h3>Do'kon</h3>
                    <VscChevronDown />
                  </div>
                  <div className="nav">
                    <h3>Sotuvchilar</h3>
                    <VscChevronDown />
                  </div>
                  <div className="nav">
                    <h3>Mega menyu</h3>
                    <VscChevronDown />
                  </div>
                  <div className="nav">
                    <h3>Blog</h3>
                    <VscChevronDown />
                  </div>
                  <div className="nav">
                    <h3>Sahifalar</h3>
                    <VscChevronDown />
                  </div>
                  <div className="nav">
                    <h3>A'loqa</h3>
                  </div>
                </div>

                <div className="nav_bot_flexx">
                  <div className="phone">
                    <img src={Hand} alt="" />
                    <div className="handphone">
                      <h1>001-74-53</h1>
                      <p>Qo'llab-quvvatlash markazi 24/7</p>
                    </div>
                  </div>
                </div>
                <button className="menu" onClick={() => setToggle(!toggle)}>
                  <CiMenuBurger />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
