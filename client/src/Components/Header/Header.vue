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
            <div :class="$style.auth">
                <a href="/" :class="$style.loginBtn">Войти</a>
                <a href="/" :class="$style.registerBtn">Регистрация</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style module lang="scss">
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

.auth {
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