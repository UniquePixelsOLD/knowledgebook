<script>

import {defineComponent} from "vue";
import SidebarRedirect from "@/components/sidebar/SidebarRedirect.vue";

export default defineComponent({
  components: {SidebarRedirect}
})
</script>

<template>
  <div class="background">

    <img src="../../assets/UP_Banner.png" width="250px" height="auto">

    <div class="header-text">
      <p>Knowledge</p>
      <p>Book</p>
    </div>
    <div class="redirects">
      <SidebarRedirect redirect="/" text="Projects"><img src="../../assets/icons/menu_book.svg"></SidebarRedirect>
      <SidebarRedirect redirect="/create" text="Create Project"><img src="../../assets/icons/add_circle.svg"></SidebarRedirect>
      <SidebarRedirect redirect="/translation-pr" text="Translation PR"><img src="../../assets/icons/supervisor.svg"></SidebarRedirect>
    </div>
    <div class="text">
      <p>Copyright 2024 © UniquePixels.net</p>
    </div>
  </div>
</template>

<style scoped>

.text p {
  text-align: center;
  font-size: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.header-text {
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 50px;
}

.redirects {
  margin-bottom: 20vh;
}

.header-text p {
  filter: drop-shadow(3px 3px 5px black);
  font-weight: bold;
  font-size: 30px;
}

.background {
  position: fixed;
  height: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: var(--color-background-soft);
  min-height: 100%;
  align-items: stretch;
  justify-content: space-between;
}
</style>