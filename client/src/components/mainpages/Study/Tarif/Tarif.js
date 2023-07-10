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
            value: 'Без стартового набора',
            type: 'Лайт',
        },
        {
            value: 'Учебное пособие по перманентному макияжу',
            type: 'Лайт',
        },
        {
            value: '5 дней онлайн подготовка',
            type: 'Лайт',
        },
        {
            value: '5 дней практика в центре',
            type: 'Лайт',
        },
        {
            value: '6 моделей',
            type: 'Лайт',
        },
        {
            value: 'Поддержка в чате после обучения',
            type: 'Лайт',
        },
        {
            value: 'Без возможности стажировки в центре после обучения',
            type: 'Лайт',
        },
        {
            value: 'Доступ к урокам 1 месяц после завершения обучения',
            type: 'Лайт',
        },
        {
            value: 'Скидка -10% на пигменты в магазине центра FaceID',
            type: 'Лайт',
        },
        {
            value: 'Свидетельство о присвоении квалификации «Косметик 4 разряда»',
            type: 'Лайт',
        },
        {
            value2: 'Стартовый набор стоимостью 22580 (гарантия на оборудование 3 месяца)',
            type: 'Стандарт',
        },
        {
            value2: 'Учебное пособие по перманентному макияжу',
            type: 'Стандарт',
        },
        {
            value2: '5 дней онлайн подготовка',
            type: 'Стандарт',
        },
        {
            value2: '5 дней практика в центре',
            type: 'Стандарт',
        },
        {
            value2: 'Практика на 9 моделях',
            type: 'Стандарт',
        },
        {
            value2: 'Поддержка в чате после обучения',
            type: 'Стандарт',
        },
        {
            value2: 'Возможность стажировки в центре после обучения 1 месяц',
            type: 'Стандарт',
        },
        {
            value2: 'Набор плакатов и чек листов',
            type: 'Стандарт',
        },
        {
            value2: 'Памятки для клиентов • Договор с клиентом',
            type: 'Стандарт',
        },
        {
            value2: 'Доступ к урокам 3 месяца после завершения обучения',
            type: 'Стандарт',
        },
        {
            value2: 'Скидка -10% на пигменты в магазине центра FaceID',
            type: 'Стандарт',
        },
        {
            value2: 'Свидетельство о присвоении квалификации «Косметик 4 разряда»',
            type: 'Стандарт',
        },
        {
            value3: 'Стартовый набор стоимостью 57980 (гарантия на оборудование 1 год)',
            type: 'Стандарт+',
        },
        {
            value3: 'Учебное пособие по перманентному макияжу',
            type: 'Стандарт+',
        },
        {
            value3: '5 дней онлайн подготовка',
            type: 'Стандарт+',
        },
        {
            value3: '5 дней практика в центре',
            type: 'Стандарт+',
        },
        {
            value3: 'Практика на 9 моделях',
            type: 'Стандарт+',
        },
        {
            value3: 'Поддержка в чате после обучения',
            type: 'Стандарт+',
        },
        {
            value3: 'Возможность стажировки в центре после обучения 1 месяц',
            type: 'Стандарт+',
        },
        {
            value3: 'Набор плакатов и чек листов',
            type: 'Стандарт+',
        },
        {
            value3: 'Памятки для клиентов',
            type: 'Стандарт+',
        },
        {
            value3: 'Договор с клиентом',
            type: 'Стандарт+',
        },
        {
            value3: 'Доступ к урокам 6 месяцев после завершения обучения',
            type: 'Стандарт+',
        },
        {
            value3: 'Скидка -10% на пигменты в магазине центра FaceID',
            type: 'Стандарт+',
        },
        {
            value3: 'Свидетельство о присвоении квалификации «Косметик 4 разряда»x  ',
            type: 'Стандарт+',
        },
    ]

    return (
        <Section ref={element}>
            <Title value="Тарифы" />
            <div className="background">
                <img src={pricing1} alt="background" className="bg1" />
                {/* <img src={pricing2} alt="background" className="bg2" /> */}
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
                                    {data.map(({value, value2, value3, type}, index2) => {
                                        return (
                                            <Fragment key={index2}>
                                                {name === 'Лайт' ? (
                                                    type === name ? (
                                                        <li>{value}</li>
                                                    ) : (
                                                        <li className="a">{value}</li>
                                                    )
                                                ) : name === 'Стандарт' ? (
                                                    type === name ? (
                                                        <li>{value2}</li>
                                                    ) : (
                                                        <li className="a">{value2}</li>
                                                    )
                                                ) : (
                                                    name === 'Стандарт+' &&
                                                    (type === name ? (
                                                        <li>{value3}</li>
                                                    ) : (
                                                        <li className="a">{value3}</li>
                                                    ))
                                                )}
                                            </Fragment>
                                        )
                                    })}
                                </ul>

                                <div className="pricing__plan__content__actions">
                                    <span>Купить сейчас</span>
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

const Section = styled.section`
    .a {
        display: None;
    }
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
    // .pricing__plan__content {
    //     width: 500px;
    // }
    .pricing__plan__content ul li {
        margin-top: 13px;
        font-size: 13px;
    }
    .pricing__plan__content__actions:hover {
        cursor: pointer;
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
                    padding: 0 2rem;
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
                        margin: 0 20px;
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
