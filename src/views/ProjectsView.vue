<script>
import axios from "axios";

export default {
  data() {
    return {
      content: []
    }
  },
  mounted() {
    this.loadProjects()
  },
  methods: {
    loadProjects() {

      //fetch("http://localhost:8080/translation/all", {
      //  headers: {
      //    "Authentication": "Bearer hallo",
      //    "Content-Type": "application/json"
      //  }
      //}).then(value => {
      //  this.content = value.body
      //})

      axios.get("http://localhost:8080/translation/all")
          .then(value => {
            console.log(value.status)
            this.content = value.data;
            console.log(this.content)
          })
          .catch(reason => {
            console.log(reason)
          })
    }
  }
  //watch: {
  //  '$route': {
  //    handler: function (to, from) {
//
  //      if (from === undefined) {
  //        return
  //      }
//
  //      console.log("From " + from.query + " to " + to.query);
  //      this.setupProjectId();
  //    },
  //    immediate: true
  //  }
  //}
}
</script>

<template>
  <div class="projects" v-for="projects in this.content">

    <div class="project">

      <div class="project-info">
        <div class="left">
          <h2>{{ projects.projectName }}</h2>
          <p>{{projects.projectDescription}}</p>
          <span>{{ projects.projectId }}</span>
        </div>
        <div class="right">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
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
  border-color: black;
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
  width: 90px;
  margin: 5px;
  border-radius: 30px;
  color: white;
}

.edit {
  background-color: #4d4dec;
  border-color: #4d4dec;
}

.delete {
  background-color: #f83434;
  border-color: #f83434;
}
</style>