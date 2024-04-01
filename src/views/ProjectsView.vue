<script>
import axios from "axios";

export default {
  data() {
    return {
      content: [],
      error: null
    }
  },
  mounted() {
    this.loadProjects()
  },
  methods: {
    redirectToPage(projectId) {
      this.$router.push({path: '/project', query: {projectId: projectId}})
    },
    loadProjects() {
      axios.get("http://localhost:8080/translation/all")
          .then(value => {
            console.log(value.status)
            this.content = value.data;
            console.log(this.content)
          })
          .catch(reason => {

            if (reason.response.status != 200) {
              this.error = reason.response.status;
              return
            }

          })
    }
  }

}
</script>

<template>

  <div v-if="error" class="error">
    <h2>{{ this.error }} Nothing to display...</h2>
  </div>
  <div v-else>

    <div class="projects" v-for="projects in this.content">

      <div class="project">

        <div class="project-info">
          <div class="left">
            <h2>{{ projects.projectName }}</h2>
            <p>{{ projects.projectDescription }}</p>
            <span>{{ projects.projectId }}</span>
          </div>
          <div class="right">
            <button class="edit" @click="this.redirectToPage(projects.projectId)">
              Edit
            </button>
            <button class="delete">Delete</button>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<style scoped>

.project-info {
  display: flex;
  justify-content: space-between;
}

.project {
  display: block;
  width: 85vw;
  padding: 15px; /* Optional: Füge Innenabstand hinzu */
  box-sizing: border-box; /* Berücksichtigt den Padding-Wert in der Gesamtbreite */
  border: 2px solid var(--color-background-mute);
  background-color: var(--color-background-mute);
  margin-bottom: 20px;
  border-radius: 20px;
  transition: 0.3s;
}

.project:hover {
  border-color: rgb(60, 60, 60);
}

.left {
  display: flex;
  flex-direction: column;
}

.right {
  display: flex;
  flex-direction: column;
}

button {
  background-color: var(--color-background-mute);
  border: 2px solid white;
  padding: 5px;
  width: 120px;
  height: 35px;
  margin: 5px;
  border-radius: 30px;
  color: white;
}

.edit {
  transition: 0.3s;
  background-color: #4d4dec;
  border-color: #4d4dec;
}

.edit:hover {
  background-color: #5757ef;
  border-color: #5757ef;
}

.delete {
  transition: 0.3s;
  background-color: #f83434;
  border-color: #f83434;
}

.delete:hover {
  background-color: #fb4141;
  border-color: #fb4141;
}
</style>