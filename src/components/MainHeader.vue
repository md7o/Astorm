<template>
  <div
    class="bg-gray-900 flex sticky top-0 justify-between align-middle px-20 py-7 text-white mb-50"
  >
    <div>
      <a href="#"><img class="w-16" src="../assets/images/home.png" /></a>
    </div>
    <ToggleInput :mode="mode" @click="$emit('toggle')" />

    <div
      class="text-4xl cursor-pointer text-mblue hover:text-blue-300"
      @click="toggleMobileNav()"
      v-show="mobile"
      :class="{ 'icon-actiive': mobileNav }"
    >
      <FontAwesome icon="bars" />
    </div>

    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdownmenu text-2xl lg:text-5xl">
        <button
          class="absolute top-3 right-12 text-4xl font-bold border-4 px-5 py-2 rounded-full"
          @click="toggleMobileNav()"
          v-show="CloseApp"
          :class="{ 'close-actiive': mobileNav }"
        >
          X
        </button>
        <li><router-link :to="'/'">Home</router-link></li>
        <li><router-link :to="'about'">About</router-link></li>
        <li><router-link :to="'/'">contant</router-link></li>
        <li><router-link :to="'/'">blogs</router-link></li>
      </ul>
    </transition>
  </div>
</template>

<script>
import ToggleInput from "@/components/ToggleInput.vue";
export default {
  props: ["mode"],
  components: {
    ToggleInput,
  },

  data() {
    return {
      CloseApp: true,
      mobile: true,
      mobileNav: null,
    };
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style>
.icon-actiive {
  transition: ease 0.5s;
}

.dropdownmenu {
  background-color: #445781;
  position: fixed;
  width: 30%;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  left: 70%;
  top: 0;
  justify-content: center;
  align-items: center;
}

.dropdownmenu li {
  padding: 30px;
}

li {
  padding: 20px;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.7s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(100%);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>
