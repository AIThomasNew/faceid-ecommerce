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

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const loginSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = '/'
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <motion.div custom={1} variants={textAnimation} className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Вход</h2>
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
                    <button className="button-login" type="submit">
                        Ок
                    </button>
                    <Link to="/register">Регистрация</Link>
                </div>
            </form>
        </motion.div>
    )
}

export default Login
