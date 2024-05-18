import React from "react";
import { Link } from "react-router-dom";
import "../footer/Footer.css";
import log from "../../img/log.png";
import logo from "../../img/Logo.png";
import hand from "../../img/hand.png";
import teleg from "../../img/teleg.png";
import time from "../../img/time.png";
import store from "../../img/store.png";
import play from "../../img/play.png";
import uzcard from "../../img/uzcard.jpg";
import Group16 from "../../img/Group16.png";
import footer2 from "../../img/Footer2.png";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="foot">
          <Link to={"/"}>
            <img src={logo} width={215} alt="" />
          </Link>
          <h3>
             Ajoyib oziq-ovqat do'koni<br />
            sayti
          </h3>
          <div className="loc">
            <img src={log} alt="" />
            <p>Address: 102 Amir Temur</p>
          </div>
          <p>Tashkent Yunusobod, Uzbeksitan</p>
          <div className="loc">
            <img src={hand} alt="" />
            <p>Tel Uz: +998(94) 001-76-53</p>
          </div>
          <div className="loc">
            <img src={teleg} alt="" />
            <p>t.me/ak_0_001</p>
          </div>
          <div className="loc">
            <img src={time} alt="" />
            <p>Vaqtlar:10:00 - 18:00, Du - Shan</p>
          </div>
        </div>
        <div className="foot">
          <h2>Kompaniya</h2>
          <p>Biz haqimizda</p>
          <p>Yetkazib berish haqida ma'lumot</p>
          <p>Maxfiylik siyosati</p>
          <p>Shartlar va shartlar</p>
          <p>Biz bilan bog'laning</p>
          <p>Yordam markazi</p>
          <p>Karyera</p>
        </div>
        <div className="foot">
          <h2>Akkaunt</h2>
          <Link to={"/login"}>
            <p>Kirish</p>
          </Link>
          <p>Savatni ko'rish</p>
          <p>Mening istaklar ro'yxatim</p>
          <p>Buyurtmani kuzatish</p>
          <p>Yordam chiptasi</p>
          <p>Yetkazib berish tafsilotlari</p>
          <p>Maxsulotlarni solishtiring</p>
        </div>
        <div className="foot">
          <h2>Korporatv</h2>
          <p>Sotuvchiga aylaning</p>
          <p>Hamkorlik Dasturi</p>
          <p>Fermer xo'jaligi</p>
          <p>Fermerlik kasblari</p>
          <p>Bizning yetkazib beruvchilarimiz</p>
          <p>Foydalanish imkoniyatlari</p>
          <p>Aksiyalar</p>
        </div>
        <div className="foot">
          <h2>Ommabob</h2>
          <p>Sut va sut maxsulotlari</p>
          <p>Saryog' va margarin</p>
          <p>Tuxum o'rnini bosuvchi maxsulotlar</p>
          <p>Marmeladlar</p>
          <p>Smetana va Qaymoqlar</p>
          <p>Choy va choy maxsulotlari</p>
          <p>Pishloq</p>
        </div>
        <div className="foot">
          <h2>Ilovani o'rnatish</h2>
          <p>App Store yoki Play Marketdan</p>
          <div className="play">
            <img src={store} alt="" />
            <img src={play} alt="" />
          </div>
          <p>Ishonchli to'lov usullari</p>
          <img src={uzcard} alt="" />
        </div>
      </div>
      <hr className="hr" />
      <div className="finish">
        <p>
          © 2024, <b style={{ color: "green" }}>Nest</b> Karimov & Komilov <br /> Barcha huquqlardan himoyalangan
        </p>
        <div className="phone">
          <div className="p_img">
            <img src={Group16} alt="" />
            <div className="p_text">
              <h3>+998(94)001-76-53</h3>
              <p>Ishlash vaqti 8:00 - 22:00</p>
            </div>
          </div>
          <div className="phone">
            <div className="p_img">
              <img src={Group16} alt="" />
              <div className="p_text">
                <h3>+998(20)004-70-44</h3>
                <p>Ishlash vaqti 8:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
        <img src={footer2} alt="" />
      </div>
    </div>
  );
}

export default Footer;
