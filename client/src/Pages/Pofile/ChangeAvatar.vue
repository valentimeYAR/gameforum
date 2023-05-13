<template>
    <div class="popup-container">
        <div class="popup-content">
            <p class="close" @click="closePopup">X</p>
            <h2 class="title">Изменение аватарки</h2>
            <input type="text" class="input" placeholder="Ссылка на фотографию..." v-model="path">
            <button class="button" @click="updateAvatar">Сохранить</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ChangeAvatar",
    data() {
        return {
            path: ''
        }
    },
    props:{
        popup:{
            type: Boolean,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    },
    methods:{
        closePopup(){
            this.$emit('update:popup', false)
        },
        updateAvatar(){
            axios.put(`http://localhost:3000/api/avatar/${this.id}`,{
                path: this.path,
            })
            this.closePopup()
            location.reload()
        }
    }
}
</script>

<style scoped lang="scss">
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0D1E2B;
  padding: 20px;
  flex-direction: column;
  gap: 20px 0;
  position: relative;
}

.title {
  font-size: 20px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
}

.input {
  padding: 20px;
  width: 700px;
  font-size: 20px;
  color: white;
  background-color: #0E1219;
  border: 1px solid white;
  border-radius: 10px;
}

.button {
  padding: 10px 20px;
  background-color: teal;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  align-self: flex-start;
  border: 1px solid teal;

  &:hover {
    background-color: transparent;
  }
}
.close{
    color: white;
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: 700;
    cursor: pointer;
}
</style>