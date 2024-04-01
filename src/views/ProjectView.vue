<script>

import axios from "axios";

export default {
  data() {
    return {
      projectName: null,
      projectId: null,
      projectDescription: null,
      translations: [],
      error: null
    }
  },
  methods: {
    loadProject(projectId) {
      axios.get("http://localhost:8080/translation/" + projectId)
          .then(value => {

            this.projectName = value.data.projectName;
            this.projectDescription = value.data.projectDescription;
            this.translations = value.data.translations;

          }).catch(reason => {

        if (reason.status != 200) {
          this.error = reason.statusText;
          return
        }

      })
    }
  },
  mounted() {
    let projectId = this.$route.query.projectId;

    console.log(projectId);

    if (projectId === undefined) {
      return
    }

    this.loadProject(projectId);

  }
}

</script>

<template>

  <p v-if="this.error">{{ this.error }}</p>
  <div v-else>
    <p>{{ projectName }}</p>
    <p>{{ projectId }}</p>
    <p>{{ projectDescription }}</p>
    <p>{{ translations }}</p>
  </div>


</template>

<style scoped>

</style>