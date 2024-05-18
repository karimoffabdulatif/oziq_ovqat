import React from "react";
import Stay_home from "../stay_home/Stay_home";
import Footer from "../footer/Footer";
import "../admin/Admin.css";
import girl from "../../img/girl.png";
function Admin() {
  return (
    <div>
      <div className="continer">
        <div className="admin">
          <h1 className="how">How can help you ?</h1>
          <div className="admin_panel">
            <div className="admin_text">
              <h1>Admin panel</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
                <br />
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
                <br />
                leo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
                <br />
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
                <br />
                leo.
              </p>
            </div>
            <div className="admin_text">
              <h2>01. Visit Feedback</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
                <br />
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
                <br />
                leo.
              </p>
              <b>03. Billing Inquiries</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
                <br />
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
                <br />
                leo.
              </p>
            </div>
            <div className="admin_text">
              <h2>02. Employer Services</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
                <br />
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
                <br />
                leo.
              </p>
              <h2> 04 .General Inquiries</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{" "}
                <br />
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
                <br />
                leo.
              </p>
            </div>
          </div>
        </div>
        <div className="karta"></div>
        <div className="office">
          <div className="office_text">
            <h2>Office</h2>
            <p>
              Amir Temur, Bodomzor <br />
              Toshkent, 60601, UZB <br /> Phone:+998(94)001 46 53 <br /> Email:
              t.me/ak_0_001
            </p>
            <button className="office_btn">View map</button>
          </div>
          <div className="office_text">
            <h2>Office</h2>
            <p>
              Amir Temur, Bodomzor <br />
              Toshkent, 60601, UZB <br /> Phone:+998(94)001 46 53 <br /> Email:
              t.me/ak_0_001
            </p>
            <button className="office_btn">View map</button>
          </div>
          <div className="office_text">
            <h2>Office</h2>
            <p>
              Amir Temur, Bodomzor <br />
              Toshkent, 60601, UZB <br /> Phone:+998(94)001 46 53 <br /> Email:
              t.me/ak_0_001
            </p>
            <button className="office_btn">View map</button>
          </div>
        </div>
        <div className="inputlar">
          <div className="left">
            <h3>Contact form</h3>
            <h1>Drop Us a Line</h1>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className="inputlar_flex">
            <div className="int_flex">
              <div className="inp_lar">
                <div className="inpl">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="inpl">
                  <input type="text" placeholder="Your Phone" />
                </div>
              </div>
              <div className="inp_lar">
                <div className="inpl">
                  <input type="text" placeholder="Your Email" />
                </div>
                <div className="inpl">
                  <input type="text" name="" id="" placeholder="Subject" />
                </div>
              </div>
              <div className="comment"></div>
              <button className="send">Send message</button>
            </div>

            <div className="int_img">
              <img src={girl} alt="" />
            </div>
          </div>
        </div>

        <Stay_home />
        <Footer />
      </div>
    </div>
  );
}

export default Admin;
