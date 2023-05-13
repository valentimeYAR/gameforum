<template>
    <div class="wrapper">
        <div class="container">
            <a href="/" class="main-link">Главный раздел</a>
            <div class="items">
                <div class="item">
                    <div class="left">
                        <div class="forum-svg"><ForumSVG/></div>
                        <a href="/" class="item-link">Новости и информация</a>
                    </div>
                    <div class="right">
                        <div class="themes">
                            <p class="quantity">165</p>
                            <p class="name">Темы</p>
                        </div>
                        <div class="messages">
                            <p class="quantity">165</p>
                            <p class="name">Сообщения</p>
                        </div>
                        <div class="last-post">
                            <div class="avatar">
                                <a href="/">
                                    <img src="https://mobimg.b-cdn.net/v3/fetch/09/095b038aa00195c9062326a822562324.jpeg" alt="">
                                </a>
                            </div>
                            <div class="post-info">
                                <div class="post-title">Состав администрации</div>
                                <div class="post-date">
                                    <p class="last-post-date">07.05.2023</p>
                                    <p class="last-post-author">Conor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="forum-svg"><ForumSVG/></div>
                        <a href="/" class="item-link">Тенхнический раздел</a>
                    </div>
                    <div class="right">
                        <div class="themes">
                            <p class="quantity">165</p>
                            <p class="name">Темы</p>
                        </div>
                        <div class="messages">
                            <p class="quantity">165</p>
                            <p class="name">Сообщения</p>
                        </div>
                        <div class="last-post">
                            <div class="avatar">
                                <a href="/">
                                    <img src="https://mobimg.b-cdn.net/v3/fetch/09/095b038aa00195c9062326a822562324.jpeg" alt="">
                                </a>
                            </div>
                            <div class="post-info">
                                <div class="post-title">Состав администрации</div>
                                <div class="post-date">
                                    <p class="last-post-date">07.05.2023</p>
                                    <p class="last-post-author">Conor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="svg"><LinkSVG/></div>
                        <a href="/" class="item-link">Наш паблик в VK</a>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="svg"><LinkSVG/></div>
                        <a href="/" class="item-link">Мы в Telegram</a>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="svg"><LinkSVG/></div>
                        <a href="/" class="item-link">Официальный сервер Discord</a>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="svg"><LinkSVG/></div>
                        <a href="/" class="item-link">Наша свободная группа в VK</a>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="svg"><LinkSVG/></div>
                        <a href="/" class="item-link">Наш YouTube канал - Arizona Games</a>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="svg"><LinkSVG/></div>
                        <a href="/" class="item-link">Наша беседа в Telegram</a>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="svg"><LinkSVG/></div>
                        <a href="/" class="item-link">Arizona Role Play | Модификации</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ForumSVG from "@/UI/ForumSVG.vue";
import LinkSVG from "@/UI/LinkSVG.vue";

export default {
    name: "MainPage",
    components: {LinkSVG, ForumSVG}
}
</script>

<style scoped lang="scss">

.wrapper {
  background-color: #171E29;
  min-height: 100vh;
  color: white;

}

.container {
  width: 1440px;
  margin: 0 auto;
  padding: 10px;
  padding-top: 20px;
}

.main-link {
  color: white;
  font-size: 25px;
}

.items {
  margin-top: 20px;
  background-color: #1F2B3B;
  padding: 20px;
  border-radius: 10px;
}

.item-link {
  color: white;
  font-size: 18px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid dimgray;
  padding: 20px 0 20px 40px;
  transition: transform 0.2s ease-out;
  position: relative;

  &:hover {
    transform: translateX(-5px);
  }
}
.svg{
    position: absolute;
    top: 8px;
    left: 3px;
}
.forum-svg{
    position: absolute;
    top: 20px;
    left: 0;
}
.right{
    display: flex;
}
.quantity{
    text-align: center;
    font-size: 15px;
    margin-bottom: 5px;
}
.name{
    color: #778693;
}
.themes{
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #778693;
}
.messages{
    margin-right: 20px;
}
.avatar{
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
.last-post{
    display: flex;
    gap: 0 20px;
    align-items: center;
}
.post-title{
    margin-bottom: 5px;
}
.post-date{
    display: flex;
    gap: 0 10px;
    align-items: center;
}
.last-post-date{
    color: #8193AC;
}
.last-post-author{
    color: red;
    font-weight: 700;
}
</style>