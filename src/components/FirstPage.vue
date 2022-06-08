<template>
  <div class="theme" :class="mode">
    <MainHeader :mode="mode" @toggle="toggle" />

    <div class="obama grid justify-evenly items-center mt-50px lg:flex">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl lg:text-8xl text-mblue">Astorm</h1>
        <p class="pt-3 text-3xl lg:text-5xl text-mblue">
          All your important files in one place.
        </p>

        <button
          class="learn_but bg-DeadBlue transition-all hover:bg-gray-700 px-24 py-2 rounded-xl mt-4"
        >
          <a
            class="text-2xl text-mblue"
            href="https://astorm.net/en/ArchiveStorm.zip"
            >Learn more</a
          >
        </button>
        <div class="py-3 px-20 text-5xl">
          <a class="px-3 text-blue-400" href="#"
            ><FontAwesome :icon="['fab', 'twitter']"
          /></a>
          <a class="px-3 text-yellow-400" href="#"
            ><FontAwesome icon="envelope"
          /></a>
        </div>
      </div>

      <div>
        <img
          class="w-52 mt-10 lg:w-80 mx-auto"
          src="../assets/images/archive.png"
        />
      </div>
    </div>

    <center>
      <div class="mt-80 mb-56">
        <h1 class="my-12 text-mblue text-7xl">Products</h1>
        <hr class="w-8/12 border-2 border-mblue" />
      </div>
    </center>

    <center>
      <div class="felx xl:grid grid-cols-3 text-mblue max-w-screen-2xl">
        <div
          class="buyig_apps bg-DeadBlue py-32 lg:rounded-tl-3xl lg:rounded-bl-3xl"
        >
          <img
            class="buyig_apps lg:w-64 w-52"
            src="../assets/images/archives.png"
          />
          <h1 class="buyig_apps bg-DeadBlue lg:text-7xl text-5xl pt-16">
            Archivestorm
          </h1>
          <p class="buyig_apps text-6xl bg-DeadBlue py-16">
            $749.<span class="buyig_apps bg-DeadBlue text-3xl">99</span>
          </p>

          <button
            class="font-bold lg:px-16 lg:py-2 lg:text-2xl bg-gray-900 transition-all hover:bg-gray-700 px-24 py-6 text-4xl rounded-xl mt-4"
          >
            Buy now
          </button>
        </div>
        <div class="py-32">
          <img class="lg:w-64 w-52" src="../assets/images/filess.png" />
          <h1 class="text-7xl pt-16">Files</h1>
          <p class="text-6xl e py-16">$549.<span class="text-3xl">99</span></p>

          <button
            class="font-bold lg:px-16 lg:py-2 lg:text-2xl bg-DeadBlue transition-all hover:bg-gray-700 px-24 py-6 text-4xl rounded-xl mt-4"
          >
            Buy now
          </button>
        </div>
        <div class="buyig_apps bg-DeadBlue py-32 rounded-tr-3xl rounded-br-3xl">
          <img class="lg:w-64 w-52" src="../assets/images/database.png" />
          <h1 class="buyig_apps bg-DeadBlue lg:text-7xl text-5xl pt-16">
            DataBase
          </h1>
          <p class="buyig_apps text-6xl bg-DeadBlue py-16">
            $249.<span class="buyig_apps bg-DeadBlue text-3xl">99</span>
          </p>

          <button
            class="font-bold lg:px-16 lg:py-2 lg:text-2xl bg-gray-900 transition-all hover:bg-gray-700 px-24 py-6 text-4xl rounded-xl mt-4"
          >
            Buy now
          </button>
        </div>
      </div>
    </center>

    <!-- ======================== -->

    <center>
      <div class="my-72">
        <h1 class="my-12 text-mblue text-7xl">Features</h1>
        <hr class="w-8/12 border-2 border-mblue" />
      </div>
    </center>

    <div class="">
      <div class="grid xl:flex justify-evenly items-center">
        <div>
          <img
            class="w-80 hidden xl:block"
            src="../assets/images/checklist.png"
          />
        </div>
        <div>
          <h1 class="lg:text-6xl text-center text-4xl text-mblue">Save</h1>
          <hr class="w-4/5 border-2 mx-auto border-mblue my-5" />
          <p class="text-3xl lg:text-5xl text-center text-mblue max-w-4xl">
            Saves, archives, retrieves, and classifies documents, images, paper
            and electronic files.
          </p>
        </div>
      </div>

      <div class="grid xl:flex justify-evenly items-center mt-80">
        <div>
          <h1 class="text-6xl text-center text-mblue">Transfer</h1>
          <hr class="w-4/5 border-2 mx-auto border-mblue my-5" />
          <p class="text-3xl text-center lg:text-5xl text-mblue max-w-4xl">
            No installation required, can be transferred and used on any Windows
            device.
          </p>
        </div>
        <div>
          <img
            class="xl:w-72 w-32 hidden xl:block"
            src="../assets/images/server.png"
          />
        </div>
      </div>

      <!-- ========================= -->

      <div class="grid pb-72 xl:flex justify-evenly items-center mt-80">
        <div>
          <img class="w-80 hidden xl:block" src="../assets/images/import.png" />
        </div>
        <div>
          <h1 class="text-6xl text-center text-mblue">Import</h1>
          <hr class="w-4/5 border-2 mx-auto border-mblue my-5" />
          <p class="text-3xl text-center lg:text-5xl text-mblue max-w-4xl">
            Works perfectly with all scanners and media to import images.
          </p>
        </div>
      </div>
      <!-- -------------------------------- -->
    </div>

    <transition name="fade">
      <div
        @click="Up()"
        class="fixed bg-transparent right-10 bottom-10"
        v-show="scY > 800"
      >
        <button
          class="lg:block hidden py-5 px-7 text-5xl rounded-full bg-mblue font-extrabold text-white"
        >
          <FontAwesome class="bg-transparent" icon="arrow-up" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "FirsPage",

  data() {
    return {
      size: 7.95,
      scY: 0,
      scTimer: 0,
      mode: "",
    };
  },
  components: {
    MainHeader,
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      //  =============================
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
      //  =============================
    },
    Up: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    toggle() {
      if (this.mode === "light") {
        this.mode = "dark";
      } else {
        this.mode = "light";
      }
    },
  },
};
</script>

<style>
.light {
  background-color: rgb(255, 255, 255);
  transition: background 0.3s ease;
}

.light h1,
.light p {
  color: #306fc8;
}

.light hr {
  border: #306fc8 2px solid;
}

.light .learn_but {
  background-color: rgb(234, 234, 234);
  box-shadow: rgb(167, 167, 167) 0px 0px 5px;
  color: #306fc8;
}

.light .obama {
  background-color: #f8f8f8;
  box-shadow: rgb(210, 210, 210) 0px 0px 15px;
  padding-bottom: 50px;
  margin-top: 15vh;
}

.light .buyig_apps {
  background-color: #f8f8f8;
}

body {
  background-color: rgb(17 24 39);
}

.obama {
  margin-top: 15vh;
}

.fade-enter-from {
  transform: translateX(50vh);
}
.fade-enter-to {
  transform: translateX(0);
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-from {
  transform: translateX(0);
}
.fade-leave-to {
  transform: translateX(50vh);
}
.fade-leave-active {
  transition: all 0.5s ease;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background-color: rgb(46, 46, 46);
}

::-webkit-scrollbar-thumb {
  background-color: rgb(91, 91, 91);
}
</style>
