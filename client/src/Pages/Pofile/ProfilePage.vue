<template>
    <div class="wrapper">
        <div class="container">
            <div class="top">
                <div class="avatar">
                    <div class="no-avatar" v-if="userInfo.avatar === null"></div>
                    <img v-if="userInfo.avatar" :src="userInfo.avatar.path" alt="avatar" class="avatar">
                </div>
                <div class="user-info">
                    <p class="name">{{ userInfo.login }}</p>
                    <div class="role">{{userInfo.role}}</div>
                    <p class="register date-block"><span>Дата регистрации:</span> 25.05.2017</p>
                    <p class="last-active date-block"><span>Последняя активность: </span>49 минут назад</p>
                </div>
                <div class="edit-profile" @click="popup = true">Редактировать фото профиля</div>
            </div>
            <div class="bottom-wrapper">
                <div class="bottom-container">
                    <div class="messages-block bottom-block">
                        <p class="block-title">Сообщения</p>
                        <p class="quantity">{{userInfo.messages}}</p>
                    </div>
                    <div class="reactions-block bottom-block">
                        <p class="block-title">Реакции</p>
                        <p class="quantity">{{userInfo.reactions}}</p>
                    </div>
                    <div class="scores-block bottom-block">
                        <p class="block-title">Баллы</p>
                        <p class="quantity">{{userInfo.scores}}</p>
                    </div>
                </div>
            </div>
        </div>
        <ChangeAvatar v-if="popup" :popup="popup" @update:popup="closePopup" :id="userInfo.id"/>
    </div>
</template>

<script>
import axios from "axios";
import ChangeAvatar from "@/Pages/Pofile/ChangeAvatar.vue";
export default {
    name: "ProfilePage",
    components: {ChangeAvatar},
    data() {
        return {
            userInfo: {},
            popup: false
        }
    },
    methods:{
        closePopup(value){
            this.popup = value
        }
    },
    beforeMount() {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:3000/api/get-auth/', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            if (response.status === 200) {
                this.userInfo = response.data
            } else console.log(response.status)
        })
    }
}
</script>

<style scoped lang="scss">
.edit-profile {
  position: absolute;
  border-radius: 5px;
  border: 1px solid #31435D;
  background-color: #1A2330;
  color: white;
  padding: 20px;
  top: 0;
  right: 0;
  cursor: pointer;
}

.quantity {
  color: white;
  font-size: 22px;
}

.bottom-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.bottom-wrapper {
  background-color: #1F2B3B;
}

.bottom-block {
  text-align: center;
}

.block-title {
  color: #8494AC;
  font-size: 14px;
  margin-bottom: 5px;
}

.wrapper {
  background-color: #171E29;
  padding-top: 50px;
  min-height: 100vh;
}

.container {
  width: 1400px;
  margin: 0 auto;
  padding: 50px 20px;
  border: 1px solid #31435D;
  border-radius: 10px;
}

.top {
  display: flex;
  gap: 0 50px;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
}

.no-avatar {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: gray;
}

.avatar {
  width: 250px;
  height: 250px;
  border-radius: 50%;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
}

.name {
  color: white;
  font-size: 25px;
  font-weight: 600;
}

.role {
  background-color: gray;
  text-align: center;
  padding: 20px;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  color: white;
}

.date-block {
  color: white;
  font-size: 14px;

  span {
    color: #8494AC;
  }
}

// End top
</style>