<template>
  <div>
    <button @click="openMessageBox">SHOW</button>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    openMessageBox() {
      this.$messageBox.show(
        {
          title: "App",
          content: "This is Content for App",
          type: "warn",
        },
        () => {
          console.log("oPEN");
        }
      );
    },
  },
};
</script>

<style scoped lang="scss"></style>
