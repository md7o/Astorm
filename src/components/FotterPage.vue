<template>
  <center>
    <div
      class="py-24 grid xl:grid-cols-3 grid-cols-2 justify-center items-center bg-DeadBlue"
    >
      <!-- ========================= -->

      <div>
        <ul>
          <li class="bg-DeadBlue text-mblue text-3xl font-extrabold">
            About us
          </li>

          <li
            v-for="about in abouts"
            :key="about"
            class="bg-DeadBlue text-mblue text-2xl"
          >
            <a href="#" class="cursor-pointer hover:underline">
              {{ about }}
              <hr class="w-3/12 border-mblue mt-5" />
            </a>
          </li>
        </ul>
      </div>

      <!-- ========================= -->

      <div>
        <ul>
          <li class="bg-DeadBlue text-mblue text-3xl font-extrabold">
            programs
          </li>

          <li
            v-for="program in programs"
            :key="program"
            class="bg-DeadBlue text-mblue text-2xl"
          >
            <a href="#" class="cursor-pointer hover:underline">
              {{ program }}
              <hr class="w-3/12 border-mblue mt-5" />
            </a>
          </li>
        </ul>
      </div>
      <div class="w-28 hidden xl:block xl:mx-auto">
        <a href="#"
          ><img class="bg-DeadBlue" src="../assets/images/home.png"
        /></a>
      </div>
    </div>
  </center>
</template>

<script>
export default {
  name: "FotterPage",
  data() {
    return {
      abouts: ["home", "contant", "about"],
      programs: ["archivestorm", "files", "DataBase"],
    };
  },
};
</script>

<style></style>
