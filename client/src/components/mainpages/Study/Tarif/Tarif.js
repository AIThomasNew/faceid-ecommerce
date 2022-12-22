import React, {Fragment} from 'react'
import styled from 'styled-components'
import Title from './Title'
import pricing1 from './img/pricing1.png'
import pricing2 from './img/pricing2.png'
import play from './img/play.png'
import {motion} from 'framer-motion'
import {useScroll} from './useScroll'
import {pricingAnimation} from './animation'

function Tarif() {
    const [element, controls] = useScroll()
    const plans = [
        {
            name: 'Лайт',
            price: 49000,
        },
        {
            name: 'Стандарт',
            price: 72000,
        },
        {
            name: 'Стандарт+',
            price: 108000,
        },
    ]

    const data = [
        {
            value: 'Full face Rs.250',
            type: 'Лайт',
        },
        {
            value: 'Cheeks Rs. 90',
            type: 'Лайт',
        },
        {
            value: 'Jawline Rs.50',
            type: 'Лайт',
        },
        {
            value: 'Lower Lip Rs.50',
            type: 'Лайт',
        },
        {
            value: 'Upper Lip Rs.50',
            type: 'Лайт',
        },
        {
            value: 'Under arms Rs.100',
            type: 'Лайт',
        },
        {
            value: 'Full Legs Rs.450',
            type: 'Стандарт',
        },
        {
            value: 'Half Legs Rs.300',
            type: 'Стандарт',
        },
        {
            value: 'Daily Backups',
            type: 'Стандарт+',
        },
        {
            value: 'One Click Setup',
            type: 'Стандарт+',
        },
    ]

    return (
        <Section ref={element}>
            <Title value="Тарифы" />
            <div className="background">
                <img src={pricing1} alt="background" className="bg1" />
                <img src={pricing2} alt="background" className="bg2" />
            </div>
            <div className="pricing__title">
                <p>От нуля к профессии за 10 дней</p>
                <h2>Вы можете выбрать любой тарифный план, который вам по душе..</h2>
            </div>
            <div className="pricing">
                {plans.map(({name, price}, index) => {
                    return (
                        <motion.div
                            className="pricing__plan"
                            key={index}
                            variants={pricingAnimation}
                            animate={controls}
                            transition={{
                                delay: 0.03,
                                type: 'tween',
                                duration: 0.8,
                            }}
                        >
                            <div className="pricing__plan__name">
                                <h2>{name}</h2>
                                <div className="pricing__plan__name__price">
                                    <span>₽</span>
                                    <p>{price}</p>
                                </div>
                            </div>
                            <div className="pricing__plan__content">
                                <ul className={`pricing__plan__content__features ${name}`}>
                                    {data.map(({value, type}, index2) => {
                                        return (
                                            <Fragment key={index2}>
                                                {name === 'Лайт' ? (
                                                    type === name ? (
                                                        <li>{value}</li>
                                                    ) : (
                                                        <li className="line">{value}</li>
                                                    )
                                                ) : name === 'Стандарт' ? (
                                                    type === 'Лайт' || type === name ? (
                                                        <li>{value}</li>
                                                    ) : (
                                                        <li className="line">{value}</li>
                                                    )
                                                ) : (
                                                    name === 'Стандарт+' && <li>{value}</li>
                                                )}
                                            </Fragment>
                                        )
                                    })}
                                </ul>
                                <div className="pricing__plan__content__actions">
                                    <span>Order Now</span>
                                    <img src={play} alt="Order Now" />
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </Section>
    )
}

// https://irinaabasheva.getcourse.ru/page4 - Лайт
// https://irinaabasheva.getcourse.ru/page5 - Стандарт
// https://irinaabasheva.getcourse.ru/page6 - Стандарт +

const Section = styled.section`
    min-height: 100vh;
    padding: 5rem 0;
    position: relative;
    // overflow: hidden;
    .background {
        .bg1 {
            position: absolute;
            top: -60%;
            left: -5%;
            z-index: -1;
            height: 1100px;
        }
        .bg2 {
            position: absolute;
            right: 0;
            bottom: 5rem;
            height: 510px;
        }
    }
    .pricing__title {
        margin: 6rem 10rem;
        p {
            color: var(--color-red);
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }
        h2 {
            color: #180f14;
            font-size: 2rem;
        }
    }
    .pricing {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 0 10rem;
        &__plan {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            &:nth-child(2) {
                .pricing__plan__content {
                    padding: 0 5rem;
                    border-left: 0.2rem solid #180f14;
                    border-right: 0.2rem solid #180f14;
                }
            }
            &__name {
                background-color: #180f14;
                width: 17rem;
                height: 17rem;
                border-radius: 10rem;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: var(--color-red);
                h2 {
                    font-size: 2rem;
                    line-height: 1.3rem;
                }
                &__price {
                    color: #fff;
                    display: flex;
                    position: relative;
                    span {
                        position: absolute;
                        top: 1rem;
                        left: -0.9rem;
                        font-size: 1.3rem;
                    }
                    p {
                        // font-size: 4rem;
                        font-size: 3.5rem;
                        font-weight: bold;
                    }
                }
            }
            &__content {
                &__features {
                    list-style-type: none;
                    text-align: center;
                    color: #180f14;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    .line {
                        text-decoration: line-through;
                    }
                    margin-bottom: 2rem;
                }
                &__actions {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: #180f14;
                    gap: 0.5rem;
                    span {
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        padding: 1rem;
        background-color: var(--color-red);
        .pricing__title {
            margin: 0;
            padding: 0 2rem;
            text-align: center;
            h2 {
                font-size: 1.3rem;
            }
        }
        .background {
            display: none;
        }
        .pricing {
            grid-template-columns: 1fr;
            padding: 1rem;
            gap: 4rem;
            &__plan {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                &__name {
                    height: 10rem;
                    width: 10rem;
                    h2 {
                        font-size: 1.5rem;
                    }
                    &__price {
                        p {
                            font-size: 3rem;
                        }
                    }
                }
                &:nth-child(2) {
                    .pricing__plan__content {
                        padding: 0rem;
                        border: none;
                    }
                }
            }
        }
    }
`
export default Tarif

// import React from 'react'

// const Tarif = () => {
//     return (
//         <div>
//             <div className="Tarif-Container padding-class">
//                 <h2>Тарифы</h2>
//                 <div className="Tarif">
//                     <div className="1T">
//                         <h3>1. Тариф Лайт</h3>
//                         <ul>
//                             <li> • Без стартового набора </li>
//                             <li> • Учебное пособие по перманентному макияжу </li>
//                             <li> • 5 дней онлайн подготовка </li>
//                             <li> • 5 дней практика в центре </li>
//                             <li>• 6 моделей </li>
//                             <li>• Поддержка в чате после обучения </li>
//                             <li>• Без возможности стажировки в центре после обучения </li>
//                             <li>• Доступ к урокам 1 месяц после завершения обучения </li>
//                             <li> • Скидка -10% на пигменты в магазине центра FaceID </li>
//                             <li> • Свидетельство о присвоении квалификации «Косметик 4 разряда». </li>
//                         </ul>
//                         <h3>49000р Ссылка - https://irinaabasheva.getcourse.ru/lait</h3>
//                     </div>
//                     <div className="2T">
//                         <h3>2. Тариф Стандарт</h3>
//                         <ul>
//                             <li>• Стартовый набор стоимостью 22580 (гарантия на оборудование 3 месяца)</li>
//                             <li>• Учебное пособие по перманентному макияжу </li>
//                             <li>• 5 дней онлайн подготовка </li>
//                             <li> • 5 дней практика в центре </li>
//                             <li>• Практика на 9 моделях </li>
//                             <li> • Поддержка в чате после обучения </li>
//                             <li> • Возможность стажировки в центре после обучения 1 месяц </li>
//                             <li>• Набор плакатов и чек листов </li>
//                             <li> • Памятки для клиентов • Договор с клиентом </li>
//                             <li> • Доступ к урокам 3 месяца после завершения обучения </li>
//                             <li> • Скидка -10% на пигменты в магазине центра FaceID </li>
//                             <li> • Свидетельство о присвоении квалификации «Косметик 4 разряда». </li>
//                         </ul>
//                         <h3>72000р Ссылка - https://irinaabasheva.getcourse.ru/standart</h3>
//                     </div>
//                     <div className="3T">
//                         <h3>3. Тариф Стандарт+</h3>
//                         <li>• Стартовый набор стоимостью 57980 (гарантия на оборудование 1 год) </li>
//                         <li> • Учебное пособие по перманентному макияжу </li>
//                         <li> • 5 дней онлайн подготовка </li>
//                         <li> • 5 дней практика в центре </li>
//                         <li> • Практика на 9 моделях </li>
//                         <li>• Поддержка в чате после обучения </li>
//                         <li>• Возможность стажировки в центре после обучения 1 месяц </li>
//                         <li>• Набор плакатов и чек листов </li>
//                         <li>• Памятки для клиентов </li>
//                         <li>• Договор с клиентом </li>
//                         <li> • Доступ к урокам 6 месяцев после завершения обучения </li>
//                         <li>• Скидка -10% на пигменты в магазине центра FaceID </li>
//                         <li>• Свидетельство о присвоении квалификации «Косметик 4 разряда». </li>

//                         <h3>108000р Ссылка - https://irinaabasheva.getcourse.ru/standart+</h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Tarif
