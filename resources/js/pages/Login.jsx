import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom'

import api from "../api";
import Header from "../components/Header";
import MaterialInput from "../components/UI/MaterialInput";
import Footer from "../components/Footer";

const Login = () => {
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem('access_token')

    if(isAuth) {
        return <Navigate to={'/'} />
    }


    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState({hasError: false, errorMessage: ''})
    const [errorPassword, setErrorPassword] = useState({hasError: false, errorMessage: ''})
    const [errorCredentials, setErrorCredentials] = useState(false)

    const handleLogin = (value) => {
        setLogin(value)
        setErrorLogin({hasError: false, errorMessage: ''})
    }

    const handlePassword = (value) => {
        setPassword(value)
        setErrorPassword({hasError: false, errorMessage: ''})
    }

    const sendForm = (e) => {
        e.preventDefault()

        if (login == '' || login.length < 3) {
            setErrorLogin({hasError: true, errorMessage: 'Введите логин'})
        }

        if (password.length < 6) {
            setErrorPassword({hasError: true, errorMessage: 'Пароль должен содержать не менее 6 символов'})
        }

        if(!errorLogin.hasError && !errorPassword.hasError) {
            console.log('send')
            api.post('/api/auth/login',{
                login: login,
                password: password,
            }).then((res) => {
                console.log(res)
                localStorage.setItem('access_token', res.data.access_token)
                navigate("/");
            }).catch((error) => {
                console.log(error)
                setErrorCredentials(true)
            })
        }
    }

    return (
        <>
            <Header/>
            <div className="content content--recovery">
                <div className="container">
                    <div className="register">
                        <h2 className="h2 recovery__title register__title">
                            Вход
                        </h2>
                        <div className="register-forms">
                            <form action="" id="form-individual" className="refister__form" onSubmit={(e) =>{ sendForm(e)}}>
                                <MaterialInput type="text" label="Логин" error={errorLogin} handleChange={handleLogin}/>
                                <MaterialInput type="password" label="Пароль" error={errorPassword} handleChange={handlePassword}/>
                                { errorCredentials ? <p className="xs text-danger error-message">Не верный логин или пароль</p> : null}
                                <button type="submit" className="btn btn-primary btn-block">Войти</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
