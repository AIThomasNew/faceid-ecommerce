import React, { useState, useContext, useRef } from "react";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import See from "./icon/see.svg";
import axios from "axios";
import images from "./index";
import "./header.css";
import { SeeMode } from "../see-mode/";
import { useSeeMode } from "../see-mode/module";
import { SERVER_URL } from "../mainpages/Info/models";

const textAnimation = {
  hidden: {
    y: -300,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [handleSeeMode, setSeeMode] = useState(false);
  const logoutUser = async () => {
    await axios.get(`${SERVER_URL}/api/user/logout`, {
      withCredentials: true,
    });
    // localStorage.removeItem("firstLogin");
    window.location.href = "/";
  };
  
  

  // see mode
  const store = useSeeMode();
  const turn = useSeeMode((state) => state.turn);
  const styles = {
    color: store.color,
    fontSize: store.size,
    fontFamily: store.font,
    fontStyle: store.style,
    fontWeight: store.style,
    textDecoration: store.style,
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        whileInView="visible"
        className="app__navbar"
      >
        <motion.div variants={textAnimation} className="app__navbar-logo">
          <img src={images.faceid} alt="app__logo" />
          {/* {isAdmin ? <h3 style={{color: "#fff"}}>Админ</h3> : <img src={images.faceid} alt="app__logo" />} */}
        </motion.div>

        <motion.div variants={textAnimation} className="app__navbar-links">
          <Link to="/" className="p__opensans" style={turn ? styles : {}}>
            ГЛАВНАЯ
          </Link>
          <Link to="/study" className="p__opensans" style={turn ? styles : {}}>
            ОБУЧЕНИЕ
          </Link>
          <Link
            to="/services"
            className="p__opensans"
            style={turn ? styles : {}}
          >
            УСЛУГИ
          </Link>
          {/* <Link to="/shop" className="p__opensans" style={turn ? styles : {}}>
            {isAdmin ? "ТОВАРЫ" : "МАГАЗИН"}
          </Link> */}
        </motion.div>

        <motion.div variants={textAnimation} className="app__navbar-login">
          
          {/* <li>
                    <img src={Close} alt="" width="30" className='menu' />
                </li> */}
          <li style={{ marginRight: 10 }}>
            <img
              style={{ cursor: "pointer" }}
              src={See}
              alt="see_icon"
              onClick={() => setSeeMode(!handleSeeMode)}
            />
          </li>
        </motion.div>
        

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <VscChromeClose
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />

              <div className="app__navbar-smallscreen_links">
                <Link
                  to="/"
                  className="li__opensans"
                  onClick={() => setToggleMenu(false)}
                  style={turn ? styles : {}}
                >
                  Главная
                </Link>
                <Link
                  to="/study"
                  className="li__opensans"
                  onClick={() => setToggleMenu(false)}
                  style={turn ? styles : {}}
                >
                  Обучение
                </Link>
                <Link
                  to="/services"
                  className="li__opensans"
                  onClick={() => setToggleMenu(false)}
                  style={turn ? styles : {}}
                >
                  Услуги
                </Link>
                {/* <Link
                  to="/shop"
                  className="li__opensans"
                  onClick={() => setToggleMenu(false)}
                  style={turn ? styles : {}}
                >
                  Магазин
                </Link> */}
              </div>
            </div>
          )}
        </div>

      </motion.nav>

      {handleSeeMode ? <SeeMode /> : ""}
    </>
  );
};

export default Header;
