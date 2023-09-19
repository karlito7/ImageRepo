<script>
export default {
    name: "LoginView",
    data() {
        return {
            dropzoneOptions: {
              url: this.$store.getters.getUploadURL,
              thumbnailWidth: 150
            }
      }
    },
    watch: {
        filter(value) {
            this.updateActiveFilter(value);
        },
    },
};
</script>

<template>
<div class="wrapper">
    This is register
    <router-link to="/login">Have an account?</router-link>
</div>
</template>

<style scoped>
.wrapper  {
    width: 100%;
    height: 100vh;
}
</style>
