import vkIcon from "./footer-social/vk.png"
import instagram from "./footer-social/instagram.png"
import twitter from "./footer-social/twitter.png"
import gitHub from "./footer-social/gitHub.png"
import linkedIn from "./footer-social/linkedIn.png"
import "./Footer.css"

const Footer = () => {
    return ( 
        <footer>
          <div className="footer__container footer-container">
            <div className="footer-container__content footer-content">
              <ul className="footer-content__social-list footer-content-social-list">
                <li className="footer-content-social-list__item">
                  <a href="#"><img src={vkIcon} alt="VK icon"/></a>
                </li>
                <li className="footer-content-social-list__item">
                  <a href="#"><img src={instagram} alt="Instagram icon"/></a>
                </li>
                <li className="footer-content-social-list__item">
                  <a href="#"><img src={twitter} alt="Twitter icon"/></a>
                </li>
                <li className="footer-content-social-list__item">
                  <a href="#"><img src={gitHub} alt="Github icon"/></a>
                </li>
                <li className="footer-content-social-list__item">
                  <a href="#"><img src={linkedIn} alt="LinkedIn icon"/></a>
                </li>
              </ul>
              <p className="footer-content__privacy">© 2022 frontend-dev.com</p>
            </div>
          </div>
        </footer>
     );
}
 
export default Footer;