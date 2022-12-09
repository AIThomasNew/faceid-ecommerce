import React from 'react'
import foryouImg from '../img/foryou-photo.png'

const ForYou = () => {
    return (
        <div>
            <div className="ForYou padding-class" id="For">
                <div className="ForYou-container">
                    <div className="ForYou-image">
                        <img src={foryouImg} alt="foryou_image" />
                    </div>
                    <div className="ForYou-content">
                        <h2>ЭТО КУРС ДЛЯ ТЕБЯ! ЕСЛИ ТЫ:</h2>
                        <span></span>
                        <ul>
                            <li>1. Решила сменить сферу деятельности</li>
                            <li>2. Бьюти-мастер и хочешь расширить спектр своих услуг</li>
                            <li>3. Мамочка в декрете и хочешь сама выстраивать свой график работы</li>
                            <li>
                                4. Мастер перманентного макияжа, получивший некачественное обучение или с длительным
                                перерывом в практике
                            </li>
                            <li>5. Хочешь быть топ-мастером перманентного макияжа и иметь высокий доход</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForYou
