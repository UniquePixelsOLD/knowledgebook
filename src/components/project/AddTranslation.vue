<script>

import SaveNotification from "@/components/SaveNotification.vue";
import axios from "axios";

export default {
  components: {SaveNotification},
  props: {
    projectId: String,
    languages: [],
    translationKey: String
  },
  data() {
    return {
      selectedLanguage: '',
      translation: null,
      unsaved: false,
    }
  },
  methods: {

    postData() {

      axios.put("http://localhost:8080/translation/" + this.projectId + "/"
          + this.translationKey + "/" + this.selectedLanguage + "/add/" + this.translation)
          .then(value => {
            if (value.status === 200) {

              let translation = value.data.translations[this.translationKey];

              console.log(translation);
              console.log(typeof translation);

              this.$emit('updateTranslations');
            }
          })
          .catch(reason => {
            console.log(reason)
          })


    },

    createSaved(data) {

      if (!data) {
        this.selectedLanguage = '';
        this.translation = null;
        this.unsaved = false;
      }

      if (this.selectedLanguage.isEmpty) {
        return
      }

      if (this.translation == null) {
        return
      }

      this.postData();

    },
    checkUnsaved() {

      if (this.selectedLanguage.isEmpty && this.translation == null) {
        this.unsaved = false;
        return;
      }

      this.unsaved = true;
    }
  },
  mounted() {
    console.log(this.languages);
  }
}

</script>

<template>

  <SaveNotification v-if="unsaved" @save-changes="this.createSaved"></SaveNotification>

  <div class="add">
    <select v-model="selectedLanguage" name="LANG" @change="this.checkUnsaved">
      <option value="" disabled selected>LANG</option>
      <option v-for="language in this.languages" :key="language" :value="language">{{ language }}</option>
    </select>
    <input v-model="translation" placeholder="Translation..." @keyup="this.checkUnsaved">
  </div>
</template>

<style scoped>

.add {
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  border: 2px solid #282828;
  border-radius: 20px;
  background-color: #282828;
  margin: 0;
  padding: 0;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
}

.add select {
  height: 100%;
  width: 90px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #282828;
  color: #878787;
  font-size: 20px;
  padding-left: 10px;
  border-color: #282828;
  text-transform: uppercase;
}

.add input {
  width: 95%;
  height: 100%;
  overflow: hidden;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #282828;
  color: white;
  font-size: 22px;
}

option:enabled {
  color: white;
}

input {
  border: 2px solid #282828;
}

.add {
  height: 40px;
}
</style>