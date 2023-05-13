<template>
    <div :class="$style.wrapper">
        <div :class="$style.container">
            <div :class="$style.logo">
                <a href="/">ARIZONA RP</a>
            </div>
            <div :class="$style.menu">
                <a href="/" :class="$style.menuBtn">Главная</a>
                <a href="/" :class="$style.menuBtn">Форумы</a>
                <a href="/" :class="$style.menuBtn">Что нового?</a>
                <a href="/" :class="$style.menuBtn">Пользователи</a>
            </div>
            <div :class="$style.Notauth" v-if="!this.verification">
                <router-link to="/login" :class="$style.loginBtn">Войти</router-link>
                <router-link to="/register" :class="$style.registerBtn">Регистрация</router-link>
            </div>
            <div :class="$style.auth" v-if="this.verification">
                <div>
                    <div :class="$style.notAvatar" v-if="userInfo.avatar === null"></div>
                    <img :src="userInfo.avatar.path" v-if="userInfo.avatar" alt="avatar" :class="$style.avatar">
                </div>
                <a :href="'/member/' + this.userInfo.id" :class="$style.name">{{userInfo.login}}</a>
                <img src="https://www.svgrepo.com/show/231260/messages-mails.svg" alt="" :class="$style.messages">
                <img src="https://www.svgrepo.com/show/469394/notification.svg" alt="" :class="$style.notifications">
                <img src="https://www.svgrepo.com/show/384394/find-glass-magnifier-search-seo.svg" alt="" :class="$style.find">
            </div>
        </div>
    </div>
</template>

<script>


import axios from "axios";

export default {
    name: "Header",
    data(){
        return {
            verification: false,
            userInfo: {}
        }
    },
    beforeMount() {
        try{
            const token = localStorage.getItem("token")
            axios.get('http://localhost:3000/api/get-auth/',{
                headers:{
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                if(response.status === 200) {
                    this.verification = true
                    this.userInfo = response.data
                }else console.log(response.status)
            }).catch(err => console.log(err.response.status))
        }catch(e){
            console.log(e)
        }
    }
}
</script>

<style module lang="scss">
.find{
    width: 20px;
    height: 20px;
}
.notifications{
    width: 20px;
    height: 20px;
}
.messages{
    width: 20px;
    height: 20px;
}
.auth{
    display: flex;
    align-items: center;
    gap: 0 20px;
}
.name{
    color: white;
    font-size: 18px;
}
.notAvatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: gray;
}
.avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.wrapper {
  background: rgb(21, 50, 71);
  background: linear-gradient(90deg, rgba(21, 50, 71, 1) 0%, rgba(21, 50, 71, 1) 100%, rgba(9, 9, 121, 1) 100%);
  padding: 20px;
}

.container {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 32px;

  a {
    color: white;

    &:hover {
      color: red
    }
  }
}

.menu {
  display: flex;
  gap: 0 40px;
  font-size: 23px;
}

.menuBtn {
  position: relative;
  color: whitesmoke;

  &:hover {
    color: gray;
  }

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    background-size: 20px 20px;
    top: 2px;
    left: -30px;
  }

  &:nth-child(1) {
    &:before {
      background-image: url('https://www.svgrepo.com/show/508300/home.svg');
    }
  }

  &:nth-child(2) {
    &:before {
      background-image: url('https://www.svgrepo.com/show/404635/chat-communication-message-talk.svg');
    }
  }

  &:nth-child(3) {
    &:before {
      background-image: url('https://www.svgrepo.com/show/406710/new-button.svg');
    }
  }

  &:nth-child(4) {
    &:before {
      background-image: url('https://www.svgrepo.com/show/366516/users.svg');
    }
  }
}

.Notauth {
  display: flex;
  font-size: 20px;
  gap: 0 40px;
}

.loginBtn {
  color: whitesmoke;
  position: relative;

  &:hover {
    color: gray;
  }

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-image: url('https://www.svgrepo.com/show/244093/login.svg');
    background-size: 20px 20px;
    position: absolute;
    top: 2px;
    left: -30px;
  }
}

.registerBtn {
  color: whitesmoke;
  position: relative;

  &:hover {
    color: gray;
  }

  &:before {
    content: "";
    width: 20px;
    height: 20px;
    background-image: url('https://www.svgrepo.com/show/408384/user-person-profile-check.svg');
    background-size: 20px 20px;
    position: absolute;
    top: 2px;
    left: -30px;
  }
}
</style>