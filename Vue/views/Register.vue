<template>
    <Header />
    <div class="content content--recovery">
        <div class="container">
            <div class="register">
                <h2 class="h2 recovery__title register__title">
                    Регистрация
                </h2>
                <div class="register-forms">
                    <form action="" id="form-individual" class="refister__form">

                        <MaterialInput type="text" label="Логин" @handleChange="setLogin" :error="errorLogin"/>
                        <MaterialInput type="text" label="Email" @handleChange="setEmail" :error="errorEmail"/>
                        <MaterialInput type="password" label="Пароль" @handleChange="setPassword" :error="errorPassword"/>
                        <MaterialInput type="password" label="Повторите пароль" @handleChange="setPasswordConfirm" :error="errorPasswordConfirm"/>
                        <MaterialPhoneInput type="text" label="Телефон" @handleChange="setPhone" :error="errorPhone"/>
                        <button type="button" class="btn btn-primary btn-block" @click="sendForm">Зарегистрирвоаться</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
    import {ref, onMounted} from "vue";
    import Header from "../components/Header/Header.vue";
    import Footer from "../components/Footer/Footer.vue";
    import MaterialInput from "../components/UI/MaterialInput.vue";
    import MaterialPhoneInput from "../components/UI/MaterialPhoneInput.vue";
    import api from "../api";
    import router from "../router/router";

    export default {
        name: 'Home',
        components: {
            MaterialInput,
            MaterialPhoneInput,
            Header,
            Footer
        },
        setup(props) {
            let login = ref('')
            let email = ref('')
            let password = ref('')
            let passwordConfirm = ref('')
            let phone= ref('')
            let errorLogin = ref({hasError: false, errorMessage: ''})
            let errorEmail = ref({hasError: false, errorMessage: ''})
            let errorPassword = ref({hasError: false, errorMessage: ''})
            let errorPasswordConfirm = ref({hasError: false, errorMessage: ''})
            let errorPhone = ref({hasError: false, errorMessage: ''})

            const setLogin = (value) => {
                login.value = value
                errorLogin.value.hasError = false
            }

            const setEmail = (value) => {
                email.value = value
                errorEmail.value.hasError = false
            }

            const setPassword = (value) => {
                password.value = value
                errorPassword.value.hasError = false;
            }

            const setPasswordConfirm = (value) => {
                passwordConfirm.value = value
                errorPasswordConfirm.value.hasError = false;
            }

            const setPhone = (value) => {
                phone.value = value
                errorPhone.value.hasError = false;
            }

            const sendForm = () => {
                if(login.value == '' || login.value.length < 3) {
                    errorLogin.value.hasError = true;
                    errorLogin.value.errorMessage = 'Введите логин'
                }

                if(email.value == '') {
                    errorEmail.value.hasError = true;
                    errorEmail.value.errorMessage = 'Введите email'
                }
                else {
                    let re = /\S+@\S+\.\S+/;
                    if(!re.test(email.value)) {
                        errorEmail.value.hasError = true;
                        errorEmail.value.errorMessage = 'Введите корректный email'
                    }
                }

                if(password.value.length < 6) {
                    errorPassword.value.hasError = true;
                    errorPassword.value.errorMessage = 'Пароль должен содержать не менее 6 символов'
                }

                if(passwordConfirm.value != password.value || passwordConfirm.value == '' ) {
                    errorPasswordConfirm.value.hasError = true;
                    errorPasswordConfirm.value.errorMessage = 'Пароль должен совпадать'
                }

                if(phone.value === '' || phone.value.indexOf('_') != -1) {
                    errorPhone.value.hasError = true;
                    errorPhone.value.errorMessage = 'Введите телефон'
                }

                if(!errorLogin.value.hasError && !errorEmail.value.hasError && !errorPassword.value.hasError && !errorPasswordConfirm.value.hasError && !errorPhone.value.hasError) {
                    console.log('send')
                    api.post('/api/register',{
                        login: login.value,
                        email: email.value,
                        password: password.value,
                        passwordConfirm: passwordConfirm.value,
                        phone: phone.value
                    }).then((res) => {
                        console.log(res)
                        localStorage.setItem('access_token', res.data.access_token)
                        router.push('/cabinet')
                    }).catch(error => {
                        console.log(error.response)
                        errorEmail.value.hasError = true,
                        errorEmail.value.errorMessage = error.response.data.message
                    })
                }
            }

            return {
                login,
                email,
                password,
                passwordConfirm,
                phone,
                errorLogin,
                errorEmail,
                errorPassword,
                errorPasswordConfirm,
                errorPhone,
                setLogin,
                setEmail,
                setPassword,
                setPasswordConfirm,
                setPhone,
                sendForm,
            }
        }
    }
</script>
