<script>
import axios from "axios";

export default {
  data() {
    return {
      options: [],
      selectedOption: null
    };
  },
  mounted() {
    this.fetchOptions();
  },
  methods: {
    fetchOptions() {
      axios.get("http://localhost:8080/translation/projects")
          .then(response => {
            this.options = response.data;
          })
          .catch(error => {
            console.error('Error fetching options:', error);
          })
    },
    updateUrl() {
      this.$router.push({
        query: {
          projectId: this.selectedOption
        }
      });
    }
  }
};
</script>

<template>

  <header>
    <h1>UniquePixels Knowledge Book</h1>
    <div class="select-project">
      <h2>Project</h2>
      <select v-model="selectedOption" @change="updateUrl">
        <option v-for="option in options"
                :key="option.value" :value="option.value">{{ option.label }}
        </option>
      </select>
    </div>
  </header>

  <RouterView/>
</template>

<style scoped>
header {
  background-color: var(--color-background-mute);
  padding: 20px;
}

h1 {
  text-align: center;
  color: white;
}

.select-project {
  display: flex;
  align-items: baseline;
}

select {
  margin-left: 10px;
  font-size: 20px;
  padding: 10px;
  background-color: var(--color-background-mute);
  color: white;
  border: 2px solid var(--vt-c-indigo);
  border-radius: 10px;
}

h2 {
  color: white;
}

</style>
