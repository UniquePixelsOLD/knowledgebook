<script>

export default {
  methods: {
    click(saved) {
      this.$emit('save-changes', saved)
    }
  }
}

</script>

<template>

  <div class="box">
    <div class="content">
      <div class="text">
        <p>You have unsaved changes!</p>
      </div>

      <div class="action">
        <button class="save" @click="this.click(true)">Save</button>
        <button class="discard" @click="this.click(false)">Discard</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.box {
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  background-color: #111214;
  padding: 20px;
}

.content {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: row;
}

.text {
  margin: 10px;
}
</style>