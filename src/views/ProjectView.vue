<script>
import axios from "axios";

export default {
  data() {
    return {
      projectId: '',
    }
  },
  methods: {
    setupProjectId() {
      this.projectId = this.$route.query.projectId;
    }
  },
  created() {
    this.setupProjectId();
  },
  watch: {
    '$route': {
      handler: function (to, from) {

        if (from === undefined) {
          return
        }

        console.log("From " + from.query + " to " + to.query);
        this.setupProjectId();
      },
      immediate: true
    }
  }
}
</script>

<template>
  <h2>Project {{ projectId }}</h2>
</template>

<style scoped>
</style>