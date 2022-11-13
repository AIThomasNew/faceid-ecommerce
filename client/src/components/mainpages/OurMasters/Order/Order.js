import React, {useEffect, useState} from 'react'
import './Order.css'
import {NavLink, useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'
// import emailjs from 'emailjs-com'

const textAnimationUp = {
    hidden: {
        y: -200,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}
const textAnimationDown = {
    hidden: {
        y: 200,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}



const Order = () => {
    const [formState, setFormState] = useState({})    
    const change = event => {setFormState({...formState, [event.target.name]: event.target.value})}
    const submit = (event) => {
        event.preventDefault()
        const config = {
            Username: 'thomas.new.it@gmail.com',
            Password: '1C9FFE486C4551FEC7BCAC44485604325F57',
            Host: 'smtp.elasticemail.com',
            Port: 2525,
            To: 'thomas.new.it@gmail.com',
            From: formState.email,
            Subject: 'Заявка на услугу ;) !',
            // Body: `${formState.name} оставил заявку на услугу.`,
            Body: `${formState.name}: ${formState.message}`,
        }
        if(window.Email) {
            window.Email.send(config).then(() => alert('Заявка успешно отправлена!'))
        }
    }


    const {pathname} = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])


    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            className="Entry app__bg">
            <motion.h1 custom={1} variants={textAnimationUp} className="headtext__cormorant">
                Форма записи
            </motion.h1>

            <motion.div custom={2} variants={textAnimationDown} className="Entry__card">
                <div className="Entry__form">
                    <form onSubmit={submit} className="form">

                        <label>Имя</label>
                        <input 
                        type="text" 
                        name="name" 
                        value={formState.name || ''} 
                        onChange={change} 
                        className="form-name" />


                        <label>Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={formState.email || ''} 
                        onChange={change}
                        className="form-email" />

                        
                        <label>Сообщение</label>
                        <textarea
                        type="text"
                        name="message" 
                        rows="4" 
                        value={formState.message || ''}
                        onChange={change} 
                        className="form-text" />
                        
                        <input 
                        className="input-btn-form" 
                        type="submit" 
                        value="Send" />
                    </form>
                </div>
            </motion.div>

            <div>
                <NavLink to="/price" className="container__price">
                    <p>Назад</p>
                </NavLink>
            </div>

        </motion.div>
    )
}

export default Order
