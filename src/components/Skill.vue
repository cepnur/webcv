<template>
  <div class="container mx-auto md:grid md:grid-cols-4 md:pb-10 grid grid-cols-2 gap-5 items-center md:pt-20 px-10 h-full" id="skill">
    <div v-for="(skill, index) in skills" :key="index" class="p-5 relative">
      <div class="flex flex-col items-center">
        <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" @click.prevent="toggleText(index)" href="" class="">
          <font-awesome-icon :icon="skill.icon" class="hover:shadow-lg hover:shadow-green-600 w-20 h-20 md:w-36 md:h-36 rounded-md" />
        </a>
        <transition>
          <p v-if="showText[index]" class="absolute text-white bottom-0 bg-green-400 px-2 rounded">{{ skill.title }}</p>
        </transition>
      </div>
    </div>
    <div v-for="(skill, index) in skill2" :key="index" class="p-6 relative">
      <div class="flex flex-col items-center">
        <a data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" @click.prevent="toggleText2(index)" href="">
          <img :src="skill.img" alt="" class="hover:shadow-lg hover:shadow-green-600 w-20 h-20 md:w-36 md:h-36 rounded-md" />
        </a>
        <transition>
          <p v-if="tampilText[index]" class="absolute bottom-0 text-white bg-green-400 px-2 rounded">{{ skill.title }}</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    const skills = ref([
      {
        icon: ["fab", "html5"],
        title: "HTML",
      },
      {
        icon: ["fab", "css3-alt"],
        title: "CSS",
      },
      {
        icon: ["fab", "js"],
        title: "Javascript",
      },
      {
        icon: ["fab", "vuejs"],
        title: "Vuejs",
      },
      {
        icon: ["fab", "php"],
        title: "PHP",
      },
      {
        icon: ["fab", "git-alt"],
        title: "Git",
      },
      {
        icon: ["fab", "bootstrap"],
        title: "Bootstrap",
      },
      {
        icon: ["fas", "database"],
        title: "Sql",
      },
      {
        icon: ["fab", "github"],
        title: "Github",
      },
    ]);

    const skill2 = [
      {
        img: "/mikrotik.jpg",
        title: "Mikrotik",
      },
      {
        img: "/tailwind.png",
        title: "Tailwindcss",
      },
    ];

    const showText = ref(Array(skills.value.length).fill(false));

    const toggleText = (index) => {
      showText.value[index] = !showText.value[index];
    };

    const tampilText = ref(Array(skills.value.length).fill(false));

    const toggleText2 = (index) => {
      tampilText.value[index] = !tampilText.value[index];
    };
    return {
      showText,
      tampilText,
      toggleText,
      toggleText2,
      skills,
      skill2,
    };
  },
};
</script>
<style scope>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
