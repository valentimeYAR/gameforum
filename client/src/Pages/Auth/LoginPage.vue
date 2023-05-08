<template>
    <div class="wrapper">
        <div class="container">
            <h2 class="title">Авторизация</h2>
            <div class="login-block">
                <input
                        type="text"
                        placeholder="Login..."
                        class="input"
                        v-bind:value="login"
                        @input="inputLogin"
                />
                <input
                        type="password"
                        placeholder="Password..."
                        class="input"
                        v-bind:value="password"
                        @input="inputPassword"
                />
                <div class="buttons-block">
                    <a class="login" href="/" @click="acceptLogin">Войти</a>
                    <button class="register">Регистрация</button>
                    <button class="forgot-password">Забыли пароль?</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "LoginPage",
    data() {
        return {
            login: '',
            password: '',
        }
    },
    methods: {
        inputLogin(e) {
            this.login = e.target.value
        },
        inputPassword(e) {
            this.password = e.target.value
        },
        acceptLogin(){
            axios.post('http://localhost:3000/api/login/',{
                login: this.login,
                password: this.password,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                const {token} = res.data
                localStorage.setItem('token', token)
            })
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
  background-color: #171E29;
}

.container {
  width: 1400px;
  margin: 0 auto;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;
}

.login-block {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
}
.input{
    width: 700px;
    padding: 20px;
    background-color: #1F2B3B;
    border-radius: 10px;
    color: white;
    font-size: 18px;
}
.title{
    color: white;
    font-size: 30px;
}
.buttons-block{
    display: flex;
    gap: 0 20px;
    justify-content: center;
}
.login{
    padding: 20px;
    font-size: 20px;
    border-radius: 10px;
    background-color: palegreen;
    border: 1px solid palegreen;
    &:hover{
        background-color: transparent;
        color: white;
    }
}
.register{
    padding: 20px;
    font-size: 20px;
    border-radius: 10px;
    background-color: darkgray;
    border: 1px solid darkgray;
    &:hover{
        background-color: transparent;
        color: white;
    }
}
.forgot-password{
    padding: 20px;
    font-size: 20px;
    border-radius: 10px;
    background-color: red;
    border: 1px solid red;
    &:hover{
        background-color: transparent;
        color: white;
    }
}
</style>