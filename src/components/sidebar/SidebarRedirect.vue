<script>

export default {
  props: {
    icon: String,
    redirect: String,
    text: String
  }
}

</script>

<template>

  <router-link :to="this.redirect" class="router">
    <div class="element">
      <div class="img">
        <slot></slot>
      </div>
      {{ text }}
      <p>-></p>
    </div>
  </router-link>
</template>

<style scoped>

.element {
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 25px;
}

.router {
  text-decoration: none;
  color: white;
}

.router:hover {
  text-decoration: underline;
}

p {
  margin-left: 5px;
  text-decoration: none;
}

.img {
  height: 33px;
  margin-right: 10px;
  color: white;
}

slot img {
  color: white;
}

</style>