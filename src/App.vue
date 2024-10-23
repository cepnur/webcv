<template>
  <div>
    <Navbar />
    <Header />
    <About />
    <Education />
    <Experiences />
    <Api />
    <Apiuniv />
    <Skill />
    <Footer />
    <!-- Icon WhatsApp melayang di sudut kanan bawah -->
    <a :href="whatsappLink" target="_blank" class="fixed bottom-10 right-10 text-white rounded-full shadow-lg transition" title="Chat with me on WhatsApp">
      <!-- Gunakan Font Awesome untuk ikon WhatsApp -->
      <font-awesome-icon icon="fa-brands fa-whatsapp" class="text-3xl w-8 h-8 p-2 md:w-10 md:h-10 md:p-4 bg-green-500 rounded-full hover:<p>text me</p>" />
    </a>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Experiences from "./components/Experiences.vue";
import Api from "./components/Api.vue";
import Apiuniv from "./components/Apiuniv.vue";
import Skill from "./components/Skill.vue";
import Footer from "./components/Footer.vue";
import Education from "./components/Education.vue";

const phoneNumber = "6285782547783"; // no wa
const message = "Hello, I would like to contact you."; // Pesan otomatis

// Membuat link WhatsApp dengan nomor dan pesan otomatis
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
</script>
