<script>
export default {
  props: {
    language: String,
    translationKey: String,
    translation: String,
    languages: []
  }
}
</script>

<template>

  <div class="translation">
    <div class="text">
      <p class="language">{{language}}</p>
      <p class="translation-text">{{translation}}</p>
    </div>

    <button class="delete">
      <img src="../../assets/icons/delete.svg">
    </button>

  </div>

</template>

<style scoped>

.language {
  text-transform: uppercase;
  color: #878787;
  padding-right: 5px;
}

.delete {
  background-color: #EF2525;
  border: 2px solid #EF2525;
  border-radius: 20px;
}

.delete:hover {
  cursor: pointer;
}

.delete img {
  width: 35px;
  height: 35px;
}

.text {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.translation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #282828;
  border-radius: 20px;
  background-color: #282828;
  margin: 0;
  padding: 0;
}

</style>