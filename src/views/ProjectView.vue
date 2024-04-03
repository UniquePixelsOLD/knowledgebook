<script>

import axios from "axios";
import SearchComponent from "@/components/project/SearchComponent.vue";
import TranslationComponent from "@/components/project/TranslationComponent.vue";

export default {
  components: {TranslationComponent, SearchComponent},
  data() {
    return {
      projectName: null,
      projectId: null,
      projectDescription: null,
      languages: [],
      translations: [],
      error: null,
      search: null
    }
  },
  methods: {
    loadProject(projectId) {
      axios.get("http://localhost:8080/translation/" + projectId)
          .then(value => {

            this.projectName = value.data.projectName;
            this.projectId = value.data.projectId;
            this.projectDescription = value.data.projectDescription;
            this.translations = value.data.translations;
            this.languages = value.data.languages;

            console.log(value.data);

          }).catch(reason => {

        if (reason.status !== 200) {
          this.error = reason.statusText;
        }

      })
    },
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

    <div class="header">
      <h2>{{ projectName }}</h2>
      <p>{{ projectDescription }}</p>
    </div>

    <div class="content">

      <SearchComponent></SearchComponent>

      <div class="divider"></div>

      <div class="translations">

        <TranslationComponent
            v-for="key in Object.keys(translations)"
            :project-id="this.projectId"
            :translation="this.translations[key]"
            :translation-key="key"
            :languages="this.languages"
        ></TranslationComponent>

      </div>
    </div>
  </div>


</template>

<style scoped>

.header {
  margin-bottom: 40px;
}

.content {
  margin-right: 30px;
}

.divider {
  background-color: #707070;
  height: 1px;
  margin-bottom: 16px;
  margin-top: 16px;
}

</style>