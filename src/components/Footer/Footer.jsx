import "./style.scss";

import phone from "../../assets/icons/phone-call.svg";
import mail from "../../assets/icons/mail.svg";
import ig from "../../assets/icons/instagram.svg";
import tg from "../../assets/icons/tg.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                <h2 className="logo logo-footer">Happy Cats</h2>
                <div className="footer-list">
                    <ul className="social">
                    <li className="social__item">
                        <a href="#">
                        <img src={phone} alt="Link" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#">
                        <img src={mail} alt="Link" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#">
                        <img src={ig} alt="Link" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#">
                        <img src={tg} alt="Link" />
                        </a>
                    </li>
                    </ul>
                    <div className="copyright">
                    <p>© Iuliia Bogdanova, 2023</p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
