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

    redirectError() {

    },

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
    <h2>Create a new Project</h2>

    <div class="input-field">
      <p>Bitte gib hier den Projektnamen an</p>
      <input v-model="this.projectName">
    </div>

    <div class="input-field">
      <p>Bitte gib hier die Projektbeschreibung an</p>
      <input v-model="this.projectDescription">
    </div>

    <div class="input-field">
      <p>Sprache</p>
      <select multiple>
        <option>Deutsch</option>
        <option>Englisch</option>
      </select>
    </div>

    <div class="input-field">
      <button @click="createProject">Create</button>
    </div>
  </div>
</template>

<style scoped>

.input-field {
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
}

.input-field p {
  padding-bottom: 15px;
}


</style>