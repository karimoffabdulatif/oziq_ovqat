import React, { useEffect, useState } from "react";
import "./Home.css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import loading from "../../skeleton/Skeleton";
import "swiper/css/navigation";
import ceratine from "../../img/creatine.jpg";
import mass from "../../img/mass.jpg";
import pro from "../../img/pro.jpg";
import food1 from "../../img/food1.png";
import food2 from "../../img/food2.png";
import food3 from "../../img/food3.png";
import food4 from "../../img/food4.png";
import food5 from "../../img/food5.png";
import food6 from "../../img/food6.png";
import food7 from "../../img/food11.png";
import food8 from "../../img/food8.png";
import food9 from "../../img/food9.png";
import food10 from "../../img/food10.png";
import axios from "../../api";
import Product from "../Product/Product";
import skidka from "../../img/skidka.png";
import price from "../../img/price.png";
import doc from "../../img/doc.png";
import wide from "../../img/wide.png";
import box from "../../img/box.png";
import Stay_home from "../stay_home/Stay_home";
import Footer from "../footer/Footer";
function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="continer">
        <div className="home-page">
          <Swiper
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="hero">
                <div className="hero_text">
                  <h1>
                    Yangi <br /> Sabzavotlar <br /> Katta chegirma
                  </h1>
                  <p>Birinchi buyurtmangiz uchun 50% chegirma oling</p>
                  <div className="search">
                    <p className="pp">Elektron manzilingizni kiriting</p>
                    <button className="btn_ser">Yuborish</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero hero2">
                <div className="hero_text">
                  <h1>
                    Welcome to
                    <br /> Uzbekistan <br />
                  </h1>
                  <p>Birinchi buyurtmangiz uchun 50% chegirma oling</p>
                  <div className="search">
                    <p className="pp"> Elektron manzilingizni kiriting</p>
                    <button className="btn_ser">Yuborish</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero hero3">
                <div className="hero_text">
                  <h1>
                    Eng zo'r <br /> Mevalar
                  </h1>
                  <p>Birinchi buyurtmangiz uchun 50% chegirma oling</p>
                  <div className="search">
                    <p className="pp"> Elektron manzilingizni kiriting</p>
                    <button className="btn_ser">Yuborish</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <section className="">
          <div className="products__text">
            <div className="big__text">
              <h3>Mazkur toifalar</h3>
            </div>

            <div className="items">
              <p>Keks & sut</p>
              <p>Kofe&Choy</p>
              <p>Hayvon ovqatlari</p>
              <p>Sabzavotlar</p>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <img src={food1} alt="" />
              <h6>Keks & Sut</h6>
              <p>26 maxsulot</p>
            </div>

            <div className="card" id="card1">
              <img src={food2} alt="" />
              <h6>Organik kivi</h6>
              <p>28 maxsulot</p>
            </div>

            <div className="card" id="card2">
              <img src={food3} alt="" />
              <h6>Shaftoli</h6>
              <p>14 maxsulot</p>
            </div>

            <div className="card" id="card3">
              <img src={food4} alt="" />
              <h6>Qizil olma</h6>
              <p>54 maxsulot</p>
            </div>

            <div className="card" id="card4">
              <img src={food5} alt="" />
              <h6>Disertlar</h6>
              <p>56 maxsulot</p>
            </div>

            <div className="card" id="card5">
              <img src={food6} alt="" />
              <h6>Sabzavotlar</h6>
              <p>72 maxsulot</p>
            </div>

            <div className="card" id="card6">
              <img src={food7} alt="" />
              <h6>Qulpnay</h6>
              <p>32 maxsulot</p>
            </div>

            <div className="card" id="card7">
              <img src={food8} alt="" />
              <h6>Qora olxo'ri</h6>
              <p>123 maxsulot</p>
            </div>

            <div className="card" id="card8">
              <img src={food9} alt="" />
              <h6>Olma kremi</h6>
              <p>34 maxsulot</p>
            </div>

            <div className="card" id="card9">
              <img src={food10} alt="" />
              <h6>Kofe & Choy</h6>
              <p>89 maxsulot</p>
            </div>
          </div>
        </section>
        <div className="mini_boxes">
          <div className="mini_box">
            <div className="mini_box_text">
              <h3>
                Maxsulotlarimiz & <br /> Har kuni yangi <br /> Tozza
              </h3>
              <button className="btn_mini">Hoziroq harid</button>
            </div>
          </div>
          <div className="mini_boxxx">
            <div className="mini_box_text">
              <h3>
                Eng yaxshi <br /> Organik <br />
                Maxsulotlar Online 
              </h3>
              <button className="btn_mini">Hoziroq harid</button>
            </div>
          </div>
          <div className="mini_boxx">
            <div className="mini_box_text">
              <h3>
                Nonushtangiz <br /> sog'lom <br />
                va oson qiling
              </h3>
              <button className="btn_mini">Hoziroq harid</button>
            </div>
          </div>
        </div>
        <div className="api_flex">
          <div className="api_text">
            <h1>Ommabob Maxsulotlar</h1>
            <div className="api_p">
              <p style={{ color: "green" }}>Hammasi</p>
              <p>Sut & Sut maxsulotlari</p>
              <p>Kofelar & Choylar</p>
              <p>Hayvon ovqatlari</p>
              <p>Go'shtlar</p>
              <p>Sabzavotlar</p>
              <p>Mevalar</p>
            </div>
          </div>
          <Product loading={loading} data={data} />
        </div>
        <Stay_home />
        <div className="best_p">
          <div className="best_price">
            <img className="bst" src={skidka} alt="" />
            <div className="best_text">
              <h3>
                Zo'r narxlar & <br /> takliflar
              </h3>
              <p>Buyurtmalar 50$ dan ko'p</p>
            </div>
          </div>
          <div className="best_price">
            <img className="bst" src={price} alt="" />
            <div className="best_text">
              <h3>
                Qo'shimcha <br /> yetkazib berish
              </h3>
              <p>24/7 ajoyib xizmat</p>
            </div>
          </div>
          <div className="best_price">
            <img className="bst" src={doc} alt="" />
            <div className="best_text">
              <h3>Ajoyib kundalik</h3>
              <p>Ro'yxatdan o'tganingizda</p>
            </div>
          </div>
          <div className="best_price">
            <img className="bst" src={wide} alt="" />
            <div className="best_text">
              <h3>
                Keng <br /> assortiment
              </h3>
              <p>Mega chegirmalar</p>
            </div>
          </div>
          <div className="best_price">
            <img className="bst" src={box} alt="" />
            <div className="best_text">
              <h3>
                Oson <br /> qaytariladigan
              </h3>
              <p>30 kun ichida</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
