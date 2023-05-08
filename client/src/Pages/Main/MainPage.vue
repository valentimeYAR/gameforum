<template>
    <div class="wrapper">
        <div class="container">
            <a href="/" class="main-link">Главный раздел</a>
            <div class="items">
                <div class="item">
                    <div class="left">
                        <div class="svg"><ForumSVG/></div>
                        <a href="/" class="item-link">Новости и информация</a>
                    </div>
                    <div class="right">
                        Остальная инфа
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="svg"><ForumSVG/></div>
                        <a href="/" class="item-link">Тенхнический раздел</a>
                    </div>
                    <div class="right">
                        Остальная инфа
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <div class="svg"><LinkSVG/></div>
                        <a href="/" class="item-link">Наш паблик в VK</a>
                    </div>
                    <div class="right">
                        Остальная инфа
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
  height: 100%;
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
</style>