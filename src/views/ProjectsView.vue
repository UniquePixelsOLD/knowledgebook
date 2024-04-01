<script>
import axios from "axios";
import SelectableProject from "@/components/projects/SelectableProject.vue";

export default {
  components: {SelectableProject},
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

      <SelectableProject
          :project-description="projects.projectDescription"
          :project-id="projects.projectId"
          :project-name="projects.projectName"
          :translations="projects.translations">

      </SelectableProject>

    </div>
  </div>

</template>

<style scoped>
</style>