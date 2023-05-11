import React from 'react'
import images from './index'
import {NavLink} from 'react-router-dom'
import {BsWhatsapp} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import './Footer.css'

const Footer = () => (
    <div className="app__footer section__padding" id="login">
        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Контакты</h1>
                <p className="p__opensans">Пермь, ул. Попова, 23, этаж 2, офис 4,</p>
                <p className="p__opensans">8-992-222-06-05</p>
                <p className="p__opensans">8-992-222-25-02</p>
            </div>
            <div className="app__footer-links_logo">
                <img src={images.faceid} alt="footer_logo" />
                <p className="p__opensans">ИП Абашева Ирина Сергеевна</p>
                <p className="p__opensans">ИНН: 7707083893</p>
                <p className="p__opensans">ОГРН: 321595800088301</p>
                <p to="/info" className="p__opensans">
                    faceidpermanent@yandex.ru
                </p>
                <div className="app__footer-links_icons">
                    <a href="https://wa.me/message/2U5J65LCKLKWK1">
                        <BsWhatsapp />
                    </a>
                    <a href="https://t.me/abasheva_pm">
                        <FaTelegramPlane />
                    </a>
                    <a href="https://vk.com/face_id_permanent">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="rgb(153, 153, 153)">
                            <path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z" />
                        </svg>
                    </a>
                </div>
                <div>
                    <NavLink to="/info" className="p__opensans select">
                        Сведения об образовательной организации
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/privacy-policy" className="p__opensans select">
                        Политика конфиденциальности
                    </NavLink>
                </div>
            </div>
            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">График работы</h1>
                <p className="p__opensans">Понедельник-Воскресенье:</p>
                <p className="p__opensans">09:00 - 19:00 </p>
                <p className="p__opensans">Перерыв:</p>
                <p className="p__opensans">12:00 - 12:30 </p>
            </div>
        </div>
        <div className="footer__copyright">
            <p className="p__opensans">2023 FACE ID. Все права защищены.</p>
        </div>
    </div>
)
export default Footer