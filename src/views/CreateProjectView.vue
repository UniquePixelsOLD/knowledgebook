<script>
import axios from "axios";

export default {
  data() {
    return {
      projectName: null,
      projectId: null,
      projectDescription: null
    }
  },
  methods: {
    createProject() {
      axios.post("http://localhost:8080/translation/create", {
        projectName: this.projectName,
        projectDescription: this.projectDescription
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(value => {
        console.log(value)
      })
    }
  }
};

</script>

<template>
  <div class="create-project">
    <div class="area">
      <h2>Create a new Project</h2>

      <div class="input-field">
        <p>Enter an project name</p>
        <input v-model="this.projectName">
      </div>

      <div class="input-field">
        <p>Enter a project description</p>
        <input v-model="this.projectDescription">
      </div>
    </div>
    <div class="save">
      <div class="input-field">
        <button @click="createProject">Create Project</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.save {
  position: absolute;
  top: 3%;
  right: 3%;
}

.save button {
  font-size: 25px;
  background-color: #4d4dec;
  border: 2px solid #4d4dec;
  color: white;
  padding: 10px;
  border-radius: 20px;
}

.input-field {
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
}

.input-field input {
  background-color: var(--vt-c-black-mute);
  border: none;
  padding: 10px;
  color: white;
  font-size: 16px;
}

.input-field p {
  padding-bottom: 15px;
}


</style>