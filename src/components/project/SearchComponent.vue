<script>
export default {
  data() {
    return {
      search: null,
    }
  },
  methods: {
    sortTranslations() {
      this.$router.push({path: '/project', query: {search: this.search, projectId: this.projectId}})
    },
    getProjectId() {
      this.projectId = this.$route.query.projectId;
      this.search = this.$route.query.search
    }
  },
  mounted() {
    this.getProjectId();
  }
}
</script>

<template>
  <div class="search">
    <input v-model="this.search" type="text" placeholder="Search translations..." class="search-input"
           @keyup="this.sortTranslations">
  </div>
</template>

<style scoped>
.search {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  height: 62px;
}

.search input {
  height: 62px;
  border: 2px solid var(--color-background-soft);
  background-color: var(--color-background-soft);
  border-radius: 20px;
  padding-left: 20px;
  color: white;
  font-size: 20px;
  width: 100%;
  max-width: 100%;
  max-lines: 1;
}

</style>