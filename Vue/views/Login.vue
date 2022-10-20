<template>
    <Header />
    <div class="content content--recovery">
        <div class="container">
            <div class="register">
                <h2 class="h2 recovery__title register__title">
                    Вход
                </h2>
                <div class="register-forms">
                    <form action="" id="form-individual" class="refister__form">
                        <MaterialInput type="text" label="Логин" @handleChange="setLogin" :error="errorLogin"/>
                        <MaterialInput type="password" label="Пароль" @handleChange="setPassword" :error="errorPassword"/>
                        <p v-if="errorCredentials" class="xs text-danger" style="margin-top: -12px; transform: translateY(-8px)">Не верный логин или пароль</p>
                        <button type="button" class="btn btn-primary btn-block" @click="sendForm">Войти</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
    import {ref, onMounted} from "vue";
    import router from "../router/router";
    import Header from "../components/Header/Header.vue";
    import Footer from "../components/Footer/Footer.vue";
    import MaterialInput from "../components/UI/MaterialInput.vue";
    import api from "../api";

    export default {
        name: 'Home',
        components: {
            MaterialInput,
            Header,
            Footer
        },
        setup(props) {
            let login = ref('')
            let password = ref('')
            let errorLogin = ref({hasError: false, errorMessage: ''})
            let errorPassword = ref({hasError: false, errorMessage: ''})
            let errorCredentials = ref(false)

            const setLogin = (value) => {
                login.value = value
                errorLogin.value.hasError = false
            }

            const setPassword = (value) => {
                password.value = value
                errorPassword.value.hasError = false;
            }

            const sendForm = () => {
                if(login.value == '' || login.value.length < 3) {
                    errorLogin.value.hasError = true;
                    errorLogin.value.errorMessage = 'Введите логин'
                }


                if(password.value.length < 6) {
                    errorPassword.value.hasError = true;
                    errorPassword.value.errorMessage = 'Пароль должен содержать не менее 6 символов'
                }

                if(!errorLogin.value.hasError && !errorPassword.value.hasError) {
                    console.log('send')
                    api.post('/api/auth/login',{
                        login: login.value,
                        password: password.value,
                    }).then((res) => {
                        localStorage.setItem('access_token', res.data.access_token)
                        router.push('/')
                    }).catch((error) => {
                        console.log(error)
                        errorCredentials.value = true
                    })
                }
            }

            return {
                login,
                password,
                errorLogin,
                errorPassword,
                errorCredentials,
                setLogin,
                setPassword,
                sendForm,
            }
        }
    }
</script>
