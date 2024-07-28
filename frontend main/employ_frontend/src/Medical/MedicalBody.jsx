import React from "react";
import hosOne from "../../public/hospitalOne.jpg";
import hosTwo from "../../public/hospitalTwo.jpg";
import hosThree from "../../public/hospitalThree.avif";
import hosFour from "../../public/hospitalFour.jpg";
import hosFive from "../../public/hospitalFive.avif";
import hosSix from "../../public/hospitalSix.png";
import "./MedicalBody.css";
import { Link } from "react-router-dom";
const MedicalBody = () => {
  return (
    <div>
      <div className="allPics">
        <div className="oneHos">
          <div className="hospitalOne">
            <img
              style={{
                height: 250,
                width: 350,
                borderRadius: 20,
              }}
              src={hosOne}
              alt=""
            />
            <Link to="/hospitaldata">
              <button className="hosVistBtn">Government Hospital Indore</button>
            </Link>
          </div>

          <div className="hospitalOne">
            <img
              style={{
                height: 250,
                width: 350,
                borderRadius: 20,
                objectFit: "cover",
              }}
              src={hosTwo}
              alt=""
            />
            <Link>
              <button className="hosVistBtn">Medanta Hospital</button>
            </Link>
          </div>

          <div className="hospitalOne">
            <img
              style={{
                height: 250,
                width: 350,
                borderRadius: 20,
                objectFit: "cover",
              }}
              src={hosThree}
              alt=""
            />
            <Link>
              <button className="hosVistBtn">
                Devi Ahilya Hospital and Research Center
              </button>
            </Link>
          </div>
        </div>

        <div className="oneHos">
          <div className="hospitalOne">
            <img
              style={{
                height: 250,
                width: 350,
                borderRadius: 20,
                objectFit: "cover",
              }}
              src={hosFour}
              alt=""
            />
            <Link>
              <button className="hosVistBtn">Life Care Hospital</button>
            </Link>
          </div>

          <div className="hospitalOne">
            <img
              style={{
                height: 250,
                width: 350,
                borderRadius: 20,
                objectFit: "cover",
              }}
              src={hosFive}
              alt=""
            />
            <Link>
              <button className="hosVistBtn">Apolo Hospital</button>
            </Link>
          </div>
          <div className="hospitalOne">
            <img
              style={{
                height: 250,
                width: 350,
                borderRadius: 20,
                objectFit: "cover",
              }}
              src={hosSix}
              alt=""
            />
            <Link>
              <button className="hosVistBtn">Shalby Hospital</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalBody;
