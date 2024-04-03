<script>

import TranslationEntry from "@/components/project/TranslationEntry.vue";
import SelectableProject from "@/components/projects/SelectableProject.vue";
import AddTranslation from "@/components/project/AddTranslation.vue";
import axios from "axios";

export default {
  components: {AddTranslation, SelectableProject, TranslationEntry},
  props: {
    projectId: String,
    translation: [],
    translationKey: String,
    languages: []
  },
  data() {
    return {
      remainingLanguages: {
        type: Array
      }
    }
  },
  methods: {
    reloadRemainingLanguages() {
      this.remainingLanguages = this.languages.filter(lang => this.translation[lang] === undefined);
    },
    refreshComponent(data) {

      axios.get("http://localhost:8080/translation/" + this.projectId)
          .then(value => {

            this.translation = value.data.translations[this.translationKey];
            this.reloadRemainingLanguages();

          }).catch(reason => {
        console.log(reason);
      })

    }
  },
  mounted() {
    this.reloadRemainingLanguages()
  }
}

</script>

<template>
  <div class="translations">
    <p>{{ translationKey }}</p>

    <div class="entries">

      <TranslationEntry
          v-for="language in Object.keys(translation)"
          :language="language"
          :translation-key="this.translationKey"
          :languages="this.languages"
          :translation="translation[language]">
      </TranslationEntry>

    </div>

    <AddTranslation :languages="this.remainingLanguages"
                    :project-id="this.projectId"
                    :translation-key="this.translationKey" @updateTranslations="this.refreshComponent"></AddTranslation>

  </div>

</template>

<style scoped>

.entries {
  margin: 20px;
}

p {
  font-style: italic;
  color: white;
}

.translations {
  padding: 10px;
  border: 2px solid var(--color-background-soft);
  border-radius: 20px;
  background-color: var(--color-background-soft);
}

</style>