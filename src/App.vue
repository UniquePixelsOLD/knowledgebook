<script>
</script>

<template>
  <div class="content">
    <div class="left-side-div">
      <div class="left-side">
        <div class="left-header">
          <h1>Knowledge Book</h1>
          <span>from UniquePixels</span>
        </div>
        <router-link to="/" class="redirect">
          <img src="./assets/icons/home.svg">
          Home
        </router-link>
        <router-link to="/create" class="redirect">
          <img src="./assets/icons/add.svg">
          Create Project
        </router-link>
      </div>
    </div>
    <div class="right-side">
      <RouterView/>
    </div>
  </div>
</template>

<style>

router-link {
  display: flex;
  align-items: center;
}

.redirect img {
  height: 30px;
  margin-right: 5px;
}

.left-side span {
  font-style: italic;
  padding-left: 6px;
  padding-bottom: 50px;
}

.content {
  display: flex;
  justify-content: stretch;
}

header {
  background-color: var(--color-background-mute);
  padding: 20px;
}

.left-side-div {
  position: fixed;
  height: 100%;
}

h1 {
  color: var(--vt-c-indigo)
}

.left-header {
  margin: 10px;
  margin-bottom: 50px;
}

.redirect {
  color: white;
  font-size: 20px;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  transition: 0.2s;
  padding: 10px;
}

.redirect:hover {
  background-color: var(--vt-c-indigo);
}

.left-side {
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: var(--color-background-soft);
  min-height: 100%;
  align-items: stretch;
}

.right-side {
  margin-left: 270px;
  margin-top: 20px;
}

h2 {
  color: white;
}

</style>
