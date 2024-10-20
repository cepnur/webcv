<template>
  <div class="container mx-auto border-l-2 pt-20" id="experiences">
    <div class="border-t-2 mx-auto grid grid-cols-1 justify-items-center md:flex md:flex-row pl-5">
      <p class="pr-5">Internship at Mangcoding</p>
      <div v-for="(experience, index) in experiences" :key="index" class="bg-zinc-100 text-black h-auto w-3/4 md:w-1/2 lg:w-1/3 p-5">
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
          class="h-full flex flex-col items-center relative border-t border-r border-black before:content-[''] before:absolute before:top-[-1rem] before:left-0 before:text-cyan-500 before:border-b before:border-black before:w-full before:h-px"
        >
          <div class="border-b-2 flex items-start justify-center h-60">
            <img :src="experience.img" :alt="experience.name" class="w-60 p-5" />
          </div>
          <h1 class="font-bold">{{ experience.name }}</h1>
          <ul class="list-disc px-5 pt-5">
            <li>{{ experience.title }}</li>
            <li>{{ experience.job }}</li>
            <li>{{ experience.job2 }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { ref } from "vue";
export default {
  setup() {
    AOS.init({
      duration: 1000, // Atur durasi animasi jika diperlukan
      once: false, // Hanya memutar animasi sekali
    });
    AOS.refresh();
    const experiences = ref([
      {
        img: "/imigrasilogo.png",
        name: "Imigrasi Sukabumi",
        title: "Responsive Website and many Functional",
        job: "Develop an intuitive and responsive user inferface to make navigation and information access easier",
        job2: "Developing websites for immigration agencies with a focus on providing information and services related to visas and passports online.",
      },
      {
        img: "/smk1.png",
        name: "SMK Negeri 1 Cibadak",
        title: "Responsive Website and some Functional",
        job: "Implement user interfaces (UI) using HTML,CSS,and JavaScript.",
        job2: "Optimize websites for performance and accessibility across devices and browsers.",
      },
    ]);

    return {
      experiences,
    };
  },
};
</script>
