<script>
import {defineComponent} from "vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";

export default defineComponent({
  components: {SidebarComponent}
})
</script>

<template>
  <div class="content">
    <SidebarComponent></SidebarComponent>
    <div class="right-side">
      <RouterView/>
    </div>
  </div>
</template>

<style>

.right-side {
  margin-left: 270px;
  padding-top: 20px;
  margin-bottom: 20px;
}
</style>
