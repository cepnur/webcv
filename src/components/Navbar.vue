<template>
  <div class="navbar fixed w-full z-30">
    <nav class="md:flex container px-5 mx-auto md:justify-between py-3">
      <div class="flex justify-between">
        <a href="#home" class="font-bold">CEPNUR</a>
        <div @click="isOpen = !isOpen" class="flex md:hidden flex-col items-center justify-center cursor-pointer">
          <!-- Garis pertama -->
          <span class="block w-7 h-1 bg-green-400 rounded transition-transform duration-300" :class="isOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <!-- Garis kedua -->
          <span class="block w-7 h-1 bg-green-400 rounded mt-1 transition-opacity duration-300" :class="isOpen ? 'opacity-0' : ''"></span>
          <!-- Garis ketiga -->
          <span class="block w-7 h-1 bg-green-400 rounded mt-1 transition-transform duration-300" :class="isOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </div>
      </div>

      <!-- Desktop menu -->
      <div class="hidden md:flex gap-3">
        <a v-for="link in links" :key="link.name" :href="link.href" @click="setActive(link.name)" :class="link.name === activeLink ? 'border-b-2 border-green-500 text-green-500' : ''" class="hover:border-b-2 hover:border-green-500">
          {{ link.name }}
        </a>
      </div>
    </nav>

    <!-- Mobile Menu -->

    <div class="navres w-full absolute duration-300" :class="isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'">
      <div v-if="isOpen" class="mobile flex container mx-auto ssm:mx-5 flex-col xxxs:mx-9 sssm:mx-5 sm:mx-5 space-y-2 my-1 md:hidden w-full">
        <a v-for="link in links" :key="link.name" :href="link.href" @click="setActive(link.name)" :class="link.name === activeLink ? 'border-b-2 border-green-500 text-green-500' : ''" class="hover:border-b-2 hover:border-green-500">
          {{ link.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

//active link state
const activeLink = ref("Home");

//Links data
const links = ref([
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About Me",
    href: "#about",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Experiences",
    href: "#experiences",
  },
  {
    name: "Skill",
    href: "#skill",
  },
]);

//setActive link
const setActive = (name) => {
  activeLink.value = name;
  isOpen.value = false;
};
</script>

<style scoped>
/* Add active state styling */
.active {
  font-weight: bold;
  border-bottom: 2px solid black; /* or any underline effect */
}
</style>
