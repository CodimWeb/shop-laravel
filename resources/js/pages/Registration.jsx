import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom'

import Header from "../components/Header";
import Footer from "../components/Footer";
import MaterialInput from "../components/UI/MaterialInput";
import MaterialPhoneInput from "../components/UI/MaterialPhoneInput";

import api from "../api";

const Registration = () => {
    const isAuth = !!localStorage.getItem('access_token')

    if(isAuth) {
        return <Navigate to={'/'} />
    }

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Регистрация"
    }, []);

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [phone, setPhone] = useState('');
    const [errorLogin, setErrorLogin] = useState({hasError: false, errorMessage: ''})
    const [errorEmail, setErrorEmail] = useState({hasError: false, errorMessage: ''})
    const [errorPassword, setErrorPassword] = useState({hasError: false, errorMessage: ''})
    const [errorPasswordConfirm, setErrorPasswordConfirm] = useState({hasError: false, errorMessage: ''})
    const [errorPhone, setErrorPhone] = useState({hasError: false, errorMessage: ''})


    const handleLogin = (value) => {
        setLogin(value)
        setErrorLogin({hasError: false, errorMessage: ''})
    }

    const handleEmail = (value) => {
        setEmail(value)
        setErrorEmail({hasError: false, errorMessage: ''})
    }

    const handlePassword = (value) => {
        setPassword(value)
        setErrorPassword({hasError: false, errorMessage: ''})
    }

    const handlePasswordConfirm = (value) => {
        setPasswordConfirm(value)
        setErrorPasswordConfirm({hasError: false, errorMessage: ''})
    }

    const handlePhone = (value) => {
        setPhone(value)
        setErrorPhone({hasError: false, errorMessage: ''})
    }

    const sendForm = (e) => {
        e.preventDefault()
        console.log(e)
        console.log(login)
        if(login == '' || login.length < 3) {
            setErrorLogin({hasError: true, errorMessage: 'Введите логин'})
        }

        if(email == '') {
            setErrorEmail({hasError: true, errorMessage: 'Введите email'})
        }
        else {
            let re = /\S+@\S+\.\S+/;
            if(!re.test(email)) {
                setErrorEmail({hasError: true, errorMessage: 'Введите корректный email'})
            }
        }
        if(password.length < 6) {
            setErrorPassword({hasError: true, errorMessage: 'Пароль должен содержать не менее 6 символов'})
        }

        if(passwordConfirm != password || passwordConfirm == '' ) {
            setErrorPasswordConfirm({hasError: true, errorMessage: 'Пароль должен совпадать'})
        }

        if(phone === '' || phone.indexOf('_') != -1) {
            setErrorPhone({hasError: true, errorMessage: 'Введите телефон'})
        }
        //
        if(!errorLogin.hasError && !errorEmail.hasError && !errorPassword.hasError && !errorPasswordConfirm.hasError && !errorPhone.hasError) {
            console.log('send')
            api.post('/api/register',{
                login: login,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm,
                phone: phone
            }).then((res) => {
                console.log(res)
                localStorage.setItem('access_token', res.data.access_token)
                navigate("/");
            }).catch(error => {
                setErrorEmail({
                    hasError: true,
                    errorMessage: error.response.data.message
                })
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
                            Регистрация
                        </h2>
                        <div className="register-forms">
                            <form action="" id="form-individual" className="refister__form" onSubmit={(e) =>{ sendForm(e)}}>
                                <MaterialInput type="text" label="Логин" error={errorLogin} handleChange={handleLogin}/>
                                <MaterialInput type="text" label="Email" error={errorEmail} handleChange={handleEmail}/>
                                <MaterialInput type="password" label="Пароль" error={errorPassword} handleChange={handlePassword}/>
                                <MaterialInput type="password" label="Повторите пароль" error={errorPasswordConfirm} handleChange={handlePasswordConfirm}/>
                                <MaterialPhoneInput type="text" label="Телефон" error={errorPhone} handleChange={handlePhone}/>

                                <button type="submit" className="btn btn-primary btn-block">Зарегистрирвоаться</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Registration;
