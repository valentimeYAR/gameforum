<template>
    <div class="wrapper">
        <div class="container">
            <h2 class="title">Регистрация</h2>
            <div class="register-block">
                <div class="description-block">
                    <p class="register-description">Имя пользователя: </p>
                    <p class="important" v-if="login.length < 8">Обязательно</p>
                </div>
                <div class="input-block">
                    <input
                            type="text"
                            class="register-input"
                            v-model="login"
                            :class="{'error': response || login.length < 8}"
                            @focus="response = null"
                    />
                    <p class="input-description">
                        Это имя будет отображаться в Ваших сообщениях. Вы можете использовать любое имя, какое
                        пожелаете.
                    </p>
                </div>
            </div>
            <div class="register-block">
                <div class="description-block">
                    <p class="register-description" style="padding-right: 105px">Пароль: </p>
                    <p class="important" v-if="password.length < 8">Обязательно</p>
                </div>
                <div class="input-block">
                    <input
                            v-bind:type="showPassword ? 'text' : 'password'"
                            class="register-input"
                            v-model="password"
                            :class="{'error': password.length < 8}"
                    />
                    <img
                            src="https://www.svgrepo.com/show/506475/eye-slash.svg"
                            alt="show password"
                            class="show-password"
                            @mouseenter="this.showPassword=true"
                            @mouseleave="this.showPassword=false"
                    >
                </div>
            </div>
            <div class="register-block">
                <div class="description-block">
                    <p class="register-description">Электронная почта: </p>
                    <p class="important" v-if="!isEmailValid">Обязательно</p>
                </div>
                <div class="input-block">
                    <input
                            type="email"
                            v-model="email"
                            @input="validateEmail"
                            class="register-input"
                            :class="{'error': !isEmailValid}"
                    />
                </div>
            </div>
            <div class="buttons-block">
                <p v-if="!isEmailValid" class="error-message">Некорректный email-адрес</p>
                <p v-if="response" class="error-message">{{response}}</p>
                <button
                    class="accept"
                    @click="acceptRegistration"
                    :disabled="password.length < 8 || login.length < 8 || !isEmailValid"
                >Регистрация</button>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: 'RegisterPage',
    data() {
        return {
            login: '',
            password: '',
            email: '',
            showPassword: false,
            response: null,
            isEmailValid: false
        }
    },
    methods: {
        validateEmail() {
            if(this.email.length === 0){
                this.isEmailValid = false
            }else if(this.email.includes('@') && this.email.length >= 8 && this.email.includes('.')){
                this.isEmailValid = true
            }
        },
        acceptRegistration() {
            try{
                axios.post('http://localhost:3000/api/user', {
                    login: this.login,
                    email: this.email,
                    password: this.password
                }).then(response => {
                    this.response = response.data.message
                    this.$router.push('/login')
                }).catch(error => {
                        this.response = error.response.data.message
                })
            }catch(e){
                console.log(e)
            }
        }
    },
}
</script>

<style scoped lang="scss">
.wrapper {
  background-color: #171E29;
    min-height: 100vh;
}

.container {
  width: 1400px;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;
}

.title {
  color: white;
  font-size: 30px;
}

.register-block {
  display: flex;
  gap: 0 20px;
  align-items: center;
}

.register-description {
  color: white;
  font-size: 20px;
  text-align: right;
}

.register-input {
  width: 800px;
  padding: 20px;
  background-color: #1F2B3B;
  border-radius: 10px;
  color: white;
  font-size: 18px;
}

.input-block {
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  position: relative;
}

.input-description {
  width: 800px;
  color: #3267A2;
  font-size: 14px;
}

.description-block {
  display: flex;
  flex-direction: column;
  gap: 5px 0;
}

.important {
  font-size: 14px;
  text-align: left;
  color: orangered;
}

.accept {
  padding: 20px;
  color: white;
  background-color: #0078AF;
  font-size: 20px;
  border-radius: 10px;
    border: 1px solid #0078AF;

  &:hover {
    background-color: transparent;
  }
  &:disabled {
    background-color: gray;
  }
}

.show-password {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 13px;
  right: 10px;
    cursor: pointer;
  &:hover {
    transform: rotateY(-10px);
  }
}
.error-message{
    align-self: center;
    color: red;
    font-size: 20px;
    font-weight: 700;
}
.buttons-block{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px 0;
}
.error{
    border: 1px solid red;
}
</style>