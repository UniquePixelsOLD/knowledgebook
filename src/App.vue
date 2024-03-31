<script>
</script>

<template>
  <div class="content">
    <div class="left-side-div">
      <div class="left-side">
        <h1>Knowledge Book</h1>
        <span>from UniquePixels</span>
        <router-link to="/" class="redirect">Home</router-link>
        <router-link to="/create" class="redirect">Create Project</router-link>
      </div>
    </div>
    <div class="right-side">
      <RouterView/>
    </div>
  </div>
</template>

<style>

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
  position: absolute;
  height: 100%;
}

h1 {
  color: var(--vt-c-indigo)
}

.redirect {
  color: white;
  text-decoration: none;
  border: 2px solid var(--vt-c-indigo);
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  transition: 0.2s;
}

.redirect:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 5px 5px;
}

.left-side {
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 10px;
  background-color: var(--color-background-soft);
  min-height: 100%;
  align-items: stretch;
}

.right-side {
  padding-left: 270px;
  padding-top: 20px;
}

h2 {
  color: white;
}

</style>
