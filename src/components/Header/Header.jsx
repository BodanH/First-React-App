import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../utills/BtnDarkMode/BtnDarkMode.jsx";

import "./Header.css"

const Header = () => {
  const activeLink = "current";
  const normalLink = "";
  const BurgerRef = useRef(null);
  
  const [burgerMode, setBurgerMode] = useState(false);

  useEffect(() => {
    if (burgerMode) {
      BurgerRef.current.classList.add("active");  
    } else {
      BurgerRef.current.classList.remove("active");
    }   

}, [burgerMode]);
 
    const toogleBurgerMode = () => {
        setBurgerMode((currentValue) => {
            return currentValue === false ? true : false;
        });
    }

    return (
        <header>
          <div className="header__container header-container">
            <div className="header-container__content header-content">
              <NavLink to="/" className="header-content__logo">
                <span>Freelancer</span> portfolio
              </NavLink>
              <nav className="header-content__navigation">
              <ul className="header-content__list header-content-list">
                <li className="header-content-list__item"><NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink></li>
                <li className="header-content-list__item"><NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>Projects</NavLink></li>
                <li className="header-content-list__item"><NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>Contacts</NavLink></li>
              </ul>
              <BtnDarkMode/>
              </nav>
              <div className="header-burger__icon" onClick={toogleBurgerMode}>
                <span></span>
              </div>
              <div className="header-content__burger header-burger" ref={BurgerRef}>
                <div className="header-burger__body">
                  <div className="header-burger__content">
                    <div className="header-burger__title">
                      <div className="header-burger__logo">
                        <span>Freelancer</span> portfolio
                    </div>
                    <BtnDarkMode/>
                      <div className="header-burger__close-icon" onClick={toogleBurgerMode}>
                          <span></span>
                    </div>
                    </div>
                      <nav className="header-burger__navigation">
                        <ul className="header-burger__list header-burger-list">
                          <li className="header-burger-list__item"><NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Home</NavLink></li>
                          <li className="header-burger-list__item"><NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : normalLink}>Projects</NavLink></li>
                          <li className="header-burger-list__item"><NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>Contacts</NavLink></li>
                        </ul>
                      </nav>
                  </div>               
                </div>
              </div>
            </div>
          </div>
        </header>
    );
}
 
export default Header;