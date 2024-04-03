<script>

import TranslationEntry from "@/components/project/TranslationEntry.vue";
import SelectableProject from "@/components/projects/SelectableProject.vue";
import AddTranslation from "@/components/project/AddTranslation.vue";

export default {
  components: {AddTranslation, SelectableProject, TranslationEntry},
  props: {
    projectId: String,
    translation: {
      type: Array,
      required: true
    },
    translationKey: String,
    languages: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      remainingLanguages: {}
    }
  },
  methods: {
    reloadRemainingLanguages() {
      this.remainingLanguages = this.languages.filter(lang => this.translation[lang] === undefined);
    },
    created() {
      this.reloadRemainingLanguages()
    }
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
                    :translation-key="this.translationKey"></AddTranslation>

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