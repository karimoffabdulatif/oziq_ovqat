import React, { useState, useEffect } from "react";
import axios from "../../api";
import rating from "../../img/rating.png";
import vec from "../../img/Vector27.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import Skeleton from "../../skeleton/Skeleton";
function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products?limit=${count * 10}`)
      .then((res) => setData(res.data))
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  }, [count]);
  let products = data?.map((el) => (
    <div key={el.id} className="api_card">
      <div className="api_img">
        <Link to={`/products/${el.id}`}>
          <img className="rasm" src={el.image} width={140} alt="" />
        </Link>
      </div>

      <div className="rating">
        <p> {el.rating.rate}</p>
        <img src={rating} alt="" />
      </div>
      <div className="api_textt">
        <p>{el.category}</p>
        <h4>{el.description.slice(0, 50)}</h4>
        <div className="sold">
          {" "}
          <h3>Sold {el.rating.count}</h3>
          <Rating />
        </div>
        <p style={{ color: "green" }}> {el.title.slice(0, 40)}...</p>
        <div className="money">
          <h4 style={{ color: "green" }}>${el.price}</h4>
          <button className="btn_api">
            <img src={vec} alt="" /> Add
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      {loading ? <Skeleton count={10} /> : <></>}
      <div className="api_cards">{products}</div>
      <div className="twobtns">
        <Button onClick={(e) => setCount((p) => p + 1)} variant="contained">
          Kegingisini ko'rish
        </Button>
        <Button onClick={(e) => setCount((p) => p - 1)} variant="contained">
          Ortga
        </Button>
      </div>
    </div>
  );
}

export default Product;
