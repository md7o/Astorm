<template>
  <div class="toggle-wrapper">
    <label for="toggle">
      <input
        type="checkbox"
        :checked="mode === 'light' ? 'cheked' : false"
        @change="$emit('toggle')"
      />
      <div class="text-center text-white">
        <span class="slide"></span>
        <p class="theme_text">{{ mode }}</p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style>
input {
  position: relative;
  width: 70px;
  height: 40px;
  appearance: none;
  -webkit-appearance: none;
  background-color: rgb(45, 76, 131);
  outline: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease all;
}

input:checked {
  background-color: rgb(255, 255, 255);
}
input:before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  top: 5px;
  left: 7px;
  background: aliceblue;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

input:checked::before {
  background-color: rgb(45, 76, 131);
  left: 35px;
}

.light .theme_text {
  color: white;
}
</style>
