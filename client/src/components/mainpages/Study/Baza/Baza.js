import React from 'react'
import bazaIrinaImg from '../img/baza-photo.png'

const Baza = () => {
    return (
        <div>
            <div className="Baza padding-class">
                <div className="Baza-content">
                    <div className="Baza-heading">
                        <h1>
                            Базовый курс по перманентному макияжу
                            {/* <span>Базовый курс</span> по перманентному макияжу */}
                        </h1>

                        <p>
                            Отбросьте сомнения - этот курс непременно изменит Вашу жизнь! Мы учли все нюансы, курс
                            дополнен самой актуальной информацией о перманентном макияже. Учись и работай уже на своем
                            аппарате. В курс включен стартовый набор. Освой новую профессию и стань практикующим
                            мастером за 10 дней.
                        </p>

                        <a href="#For" className="Button-start">
                            НАЧАТЬ
                        </a>
                    </div>
                </div>
                <div className="Baza-image">
                    <img src={bazaIrinaImg} alt="baza_img" />
                </div>
            </div>
        </div>
    )
}

export default Baza
