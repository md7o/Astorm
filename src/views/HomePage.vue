<template>
  <div class="home"></div>
  <FirsPage />
  <FotterPage />
</template>

<script>
import FirsPage from "@/components/FirstPage.vue";
import FotterPage from "@/components/FotterPage.vue";

export default {
  name: "HomePage",
  data() {
    return {};
  },

  components: {
    FirsPage,
    FotterPage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Convergence&family=Dosis:wght@300&family=Titillium+Web:wght@300&display=swap");
* {
  font-family: "Convergence", sans-serif;
}
</style>
