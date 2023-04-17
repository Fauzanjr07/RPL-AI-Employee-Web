import "../stylingPage.scss"
import myImage from "../../images/telkomLogo.png";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <div className="form__container">
          <div className="form__left">
            <img className="logo" src={myImage} alt="Logo Telkom" />
          </div>
          <div className="form__right">
            <div className="login__form">
              <div className="tittle">
                <span className="tittle__up">Selamat Datang!</span>
                <span>Absensi Pegawai Telkom</span>
              </div>
              <div className="selectEmployee">
                  <span className="descChioce">Pilih Jadwal Absen:</span>
                  <select className="dropdown__employee" name="dropdown__employee">
                    <option value="" selected disabled>Pilih Absensi</option>
                    <option value="option1">Absen 1</option>
                    <option value="option2">Absen 2</option>
                    <option value="option3">Absen 3</option>
                  </select>
              </div>
              <div className="submit">
                <Link to="/faceRecognitionPage">
                  <input className="submit__box" type="button" value="Mulai" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
