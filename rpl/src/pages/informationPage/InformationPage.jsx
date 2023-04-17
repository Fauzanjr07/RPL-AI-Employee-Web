import "../stylingPage.scss"
import myImage from "../../images/telkomLogo.png";
import {Link} from "react-router-dom";

const InformationPage = () => {
  return (
    <div className="login">
      <div className="login__container">
        <div className="form__container">
          <div className="form__left">
            <img className="logo" src={myImage} alt="Logo Telkom" />
          </div>
          <div className="form__right">
            <div className="informationPage__form">
              <div className="tittle">
                <span>Selamat Fauzan anda telah berhasil absen!</span>
                <span className="tittle__bottom">anda telah melakukan absensi ke-1 untuk shift pagi dengan waktu pukul 09:10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
