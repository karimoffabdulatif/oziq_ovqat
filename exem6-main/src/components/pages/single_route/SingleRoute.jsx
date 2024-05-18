import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api";
import "../single_route/Single.css";
import { Link } from "react-router-dom";
import Home from "../../img/home.png";
import lupa from "../../img/lupa.png";
import {
  Rating,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import limonad from "../../img/limonad.png";
import cart from "../../img/cartt.png";
import vector from "../../img/Vector.png";
import vector34 from "../../img/Vector34.png";
import bir from "../../img/bir.png";
import ikki from "../../img/ikki.png";
import uch from "../../img/uch.png";
import tort from "../../img/tort.png";
import besh from "../../img/besh.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import banan from "../../img/banan.png";
import tarvuz from "../../img/tarvuz.png";
import Stay_home from "../stay_home/Stay_home";
import footer from "../footer/Footer";
import Footer from "../footer/Footer";
function valuetext(value) {
  return `${value}°C`;
}

const SingleRoute = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  }, []);

  if (!product) {
    return (
      <div className="load">
        <div class="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="single_nav">
        <div className="continer">
          <div className="sing">
            <img src={Home} alt="" />
            <Link to={"/"}>
              <p>Home </p>
            </Link>
            <p>Product </p>
            <p style={{ color: "rgb(126, 126, 126)" }}>{product?.category}</p>
          </div>
        </div>
      </div>
      <div className="continer">
        <div className="single_cards">
          <div className="single_cards_flex">
            <div className="single_card">
              <img src={product?.image} width={250} alt="" />
              <div style={{ display: "block" }} className="lupa">
                <img src={lupa} alt="" />
              </div>
            </div>
            <div className="single_mini_cards">
              <div className="mini_card_sing">
                <img src={product.image} width={60} alt="" />
              </div>
              <div className="mini_card_sing">
                <img src={product.image} width={60} alt="" />
              </div>
              <div className="mini_card_sing">
                <img src={product.image} width={60} alt="" />
              </div>
              <div className="mini_card_sing">
                <img src={product.image} width={60} alt="" />
              </div>
            </div>
          </div>
          <div className="single_text">
            <div className="sale">
              <p style={{ color: "rgb(247, 75, 129) " }}>Sale Off</p>
            </div>
            <h1>{product?.title.slice(0, 31)}..</h1>
            <div className="ra">
              <Rating />
              <p>({product.rating.rate})</p>
            </div>
            <h1 style={{ color: "rgb(59, 183, 126) " }}>${product?.price}</h1>
            <div className="dec">
              <p>{product?.description}</p>
            </div>
            <div className="count_flex">
              <input type="number" className="count" placeholder="1" />
              <button className="btn_c">
                <img src={cart} alt="" /> Add to cart
              </button>
              <div className="heart_flex">
                <img src={vector} width={22} alt="" />
              </div>
              <div className="heart_flex">
                <img src={vector34} width={22} alt="" />
              </div>
            </div>
            <div className="types">
              <div className="type">
                <p>
                  Type:{" "}
                  <b style={{ color: " rgb(59, 183, 126)" }}>
                    {" "}
                    {product?.category}
                  </b>{" "}
                </p>
                <p>
                  Sold:{" "}
                  <b style={{ color: " rgb(59, 183, 126)" }}>
                    {" "}
                    {product?.rating.count}
                  </b>
                </p>
              </div>
              <div className="type">
                <p>
                  Life: <b style={{ color: " rgb(59, 183, 126)" }}> 2 year</b>{" "}
                </p>
                <p>
                  Tags:{" "}
                  <b style={{ color: " rgb(59, 183, 126)" }}> 8 itams In</b>
                </p>
              </div>
              <div className="type">
                <p>
                  Garanty:{" "}
                  <b style={{ color: " rgb(59, 183, 126)" }}> 1 year</b>{" "}
                </p>
                <p>
                  Stock:{" "}
                  <b style={{ color: " rgb(59, 183, 126)" }}> 8 itams In</b>
                </p>
              </div>
            </div>
          </div>
          <div className="single_left_cards">
            <div className="single_left_card">
              <h1>Category</h1>
              <hr className="hr" />
              <div className="single_mini">
                <div className="single_mini_text">
                  <img src={bir} alt="" />
                  <h4>Milks & Dairies</h4>
                </div>
                <div className="single_top">
                  <p>5</p>
                </div>
              </div>
              <div className="single_mini">
                <div className="single_mini_text">
                  <img src={ikki} alt="" />
                  <h4>Clothing</h4>
                </div>
                <div className="single_top">
                  <p>6</p>
                </div>
              </div>
              <div className="single_mini">
                <div className="single_mini_text">
                  <img src={uch} alt="" />
                  <h4>Pet Foods</h4>
                </div>
                <div className="single_top">
                  <p>12</p>
                </div>
              </div>
              <div className="single_mini">
                <div className="single_mini_text">
                  <img src={tort} alt="" />
                  <h4>Baking material</h4>
                </div>
                <div className="single_top">
                  <p>7</p>
                </div>
              </div>
              <div className="single_mini">
                <div className="single_mini_text">
                  <img src={besh} alt="" />
                  <h4>Fresh Fruit</h4>
                </div>
                <div className="single_top">
                  <p>16</p>
                </div>
              </div>
            </div>
            <div className="single_left_card">
              <h1>Fill by price</h1>
              <hr className="hr" />
              <Box sx={{ width: 300 }}>
                <Slider
                  className="slider"
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
              <div className="from">
                <p>
                  From: <b style={{ color: "rgb(59, 183, 126)" }}>$500</b>
                </p>
                <p>
                  To: <b style={{ color: "rgb(59, 183, 126)" }}>$1000</b>
                </p>
              </div>
              <div className="check">
                <h2>Color</h2>
                <div className="ch">
                  <input type="checkbox" name="" id="checkbox" />
                  <p>Red (56)</p>
                </div>
                <div className="ch">
                  <input type="checkbox" name="" id="checkbox" />
                  <p>Green (78)</p>
                </div>
                <div className="ch">
                  <input type="checkbox" name="" id="checkbox" />
                  <p>Blue (54)</p>
                </div>
              </div>
              <div className="check">
                <h2>Item Condition</h2>
                <div className="ch">
                  <input type="checkbox" name="" id="checkbox" />
                  <p>New (1506)</p>
                </div>
                <div className="ch">
                  <input type="checkbox" name="" id="checkbox" />
                  <p>Refurbished (27)</p>
                </div>
                <div className="ch">
                  <input type="checkbox" name="" id="checkbox" />
                  <p>Used (45)</p>
                </div>
              </div>
            </div>
            <div className="single_left_card">
              <h1>New products</h1>
              <hr className="hr" />
              <div className="limonad">
                <div className="limonad_img">
                  <img src={limonad} alt="" />
                </div>
                <div className="limonad_text">
                  <h3>Chen Cardigan</h3>
                  <p>$99.50</p>
                  <Rating />
                </div>
              </div>
              <hr className="hr2" />
              <div className="limonad">
                <div className="limonad_img">
                  <img src={banan} alt="" />
                </div>
                <div className="limonad_text">
                  <h3>Chen Sweater</h3>
                  <p>$89.50</p>
                  <Rating />
                </div>
              </div>
              <hr className="hr2" />
              <div className="limonad">
                <div className="limonad_img">
                  <img src={tarvuz} alt="" />
                </div>
                <div className="limonad_text">
                  <h3>Colorful Jacket</h3>
                  <p>$25</p>
                  <Rating />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hom">
          <Stay_home />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SingleRoute;
