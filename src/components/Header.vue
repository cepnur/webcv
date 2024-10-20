<template>
  <div class="container mx-auto px-5 py-20 md:py-20" id="home">
    <div class="md:flex md:justify-between w-full items-center">
      <div data-aos="fade-right" class="text-xl md:text-2xl flex flex-col justify-center gap-3 md:w-1/2">
        <p>Hello, <strong class="text-green-800">I'm</strong></p>
        <h1 class="text-green-800 text-3xl md:4xl lg:text-6xl font-bold">Muhamad Cepnur Al-Basori</h1>
        <p class="text-2xl md:3xl lg:text-4xl font-bold box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500">Front End Developer</p>
        <p>"I offer the best result and I am ready to work together to develop a website that is responsive, dynamic and meets your business needs"</p>
      </div>

      <div data-aos="fade-left" class="relative pt-10 flex md:w-1/2 items-center justify-center">
        <img src="/hexa.png" alt="logo" class="w-3/4 z-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rotate-90 duration-300" />
        <div class="absolute sm:left-24 left- sssm:left-16 xxs:left-24 xs:left-20 ssm:left-20 md:left-26 top-19 md:top-15 md:left-20 lg:left-28 xl:left-36 w-40 sssm:w-36 xxs:w-44 xs:w-48 ssm:w-40 md:w-6/12">
          <img src="/profil.png" alt="profil" class="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init({
      duration: 1000, // Atur durasi animasi jika diperlukan
      once: true, // Hanya memutar animasi sekali
    });
  },
};
</script>
