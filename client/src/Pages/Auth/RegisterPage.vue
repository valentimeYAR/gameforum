<template>
    <div class="wrapper">
        <div class="container">
            <h2 class="title">Регистрация</h2>
            <div class="register-block">
                <div class="description-block">
                    <p class="register-description">Имя пользователя: </p>
                    <p class="important">Обязательно</p>
                </div>
                <div class="input-block">
                    <input
                            type="text"
                            class="register-input"
                            v-bind:value="login"
                            @input="inputLogin"
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
                    <p class="important">Обязательно</p>
                </div>
                <div class="input-block">
                    <input
                        type="text"
                        class="register-input"
                        v-bind:value="password"
                        @input="inputPassword"
                    />
                </div>
            </div>
            <div class="register-block">
                <div class="description-block">
                    <p class="register-description">Электронная почта: </p>
                    <p class="important">Обязательно</p>
                </div>
                <div class="input-block">
                    <input
                        type="text"
                        v-bind:value="email"
                        @input="inputEmail"
                        class="register-input"
                    />
                </div>
            </div>
            <div class="buttons-block">
                <button class="accept">Регистрация</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            login: '',
            password: '',
            email: '',
        }
    },
    methods:{
        inputLogin(e){
            this.login = e.target.value
        },
        inputPassword(e){
            this.password = e.target.value
        },
        inputEmail(e){
            this.email = e.target.value
        }
    }
}
</script>

<style scoped>
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
.accept{
    padding: 20px;
    color: white;
    background-color: #0078AF;
    font-size: 20px;
    border-radius: 10px;
}
</style>