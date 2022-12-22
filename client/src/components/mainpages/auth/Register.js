import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {motion} from 'framer-motion'

const textAnimation = {
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


function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const registerSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = '/'
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <motion.div custom={1} variants={textAnimation} className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Регистрация</h2>
                <input type="text" name="name" required placeholder="Имя" value={user.name} onChange={onChangeInput} />

                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={user.email}
                    onChange={onChangeInput}
                />

                <input
                    type="password"
                    name="password"
                    required
                    autoComplete="on"
                    placeholder="Пароль"
                    value={user.password}
                    onChange={onChangeInput}
                />

                <div className="row">
                    <button className="button-register" type="submit">
                        Ок
                    </button>
                    <Link to="/login">Вход</Link>
                </div>
            </form>
        </motion.div>
    )
}

export default Register
