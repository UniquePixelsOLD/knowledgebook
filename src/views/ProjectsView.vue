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
      axios.get("http://localhost:8080/translation/all")
          .then(value => {
            this.content = value.data;
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
  <div class="elements" v-for="projects in this.content">

    <h2>{{projects.projectName}}</h2>
    <h2>{{projects.projectId}}</h2>
    <h2>{{projects.translations}}</h2>

  </div>
</template>

<style scoped>
</style>