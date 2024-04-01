<script>

export default {
  props: {
    projectName: String,
    projectId: String,
    projectDescription: String,
    translations: []
  },
  methods: {
    redirectToPage(projectId) {
      this.$router.push({path: '/project', query: {projectId: projectId}})
    }
  }
}

</script>

<template>

  <div class="element">

    <div class="left">
      <h2>{{ projectName }}</h2>
      <p>{{ projectDescription }}</p>
    </div>

    <div class="middle">
      <span>{{ projectId }}</span>
    </div>

    <div class="right">
      <button class="edit" @click="this.redirectToPage(this.projectId)">
        <img src="../../assets/icons/edit.svg">
      </button>
      <button class="delete">
        <img src="../../assets/icons/delete.svg">
      </button>
    </div>

  </div>

</template>

<style scoped>

button {
  border-radius: 20px;
  margin-left: 20px;
  transition: 0.3s;
}

.edit {
  background-color: #3668EA;
  width: 100px;
  height: 70px;
  border: 2px solid #3668EA;
}

.edit:hover {
  cursor: pointer;
  border-color: #3362dc;
  background-color: #3362dc;
}

.delete {
  background-color: #EF2525;
  width: 70px;
  height: 70px;
  border: 2px solid #EF2525;
}

.delete:hover {
  cursor: pointer;
  border-color: #de2323;
  background-color: #de2323;
}

.element {
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--color-background-soft);
  border-radius: 20px;
  background-color: var(--color-background-soft);
  margin-right: 20px;
  margin-top: 20px;
  padding: 20px;
}

.left h2 {
  color: #d7d7d7;
}

.left p {
  color: #bebebe;
}

.middle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  color: #5a5a5a;
}

.right {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

</style>