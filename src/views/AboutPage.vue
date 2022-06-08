<template>
  <div class="about text-white text-5xl flex justify-center items-center">
    <button
      @click="printing()"
      class="bg-gray-300 px-11 py-5 rounded-3xl text-black"
    >
      Print
    </button>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      Winax: 1.2,
    };
  },
  methods: {
    printing() {
      window.print("hlao");
    },
  },
};
</script>

<style>
button.selected {
  border: 3px solid salmon;
}
</style>
