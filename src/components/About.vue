<template>
  <div data-aos="zoom-in" id="about" class="container mx-auto text-center text-lg px-5 md:text-2xl md:py-32">
    <div v-for="(text, index) in displayTexts.slice(0, -1)" :key="index">
      <!-- Tampilkan paragraf-paragraf awal -->
      <p v-html="text"></p>
    </div>

    <!-- Tombol "Selengkapnya" jika paragraf terakhir belum ditampilkan -->
    <p v-if="!showLastText" @click="toggleText" class="cursor-pointer text-green-600 py-2 px-4 rounded mt-5">More</p>

    <!-- Paragraf terakhir dengan efek typing -->
    <div v-if="showLastText">
      <p v-html="displayTexts[displayTexts.length - 1]"></p>
    </div>

    <!-- Tombol "Tampilkan Lebih Sedikit" setelah paragraf terakhir ditampilkan -->
    <p v-if="showLastText" @click="toggleText" class="cursor-pointer text-green-600 py-2 px-4 rounded mt-5">Show Less</p>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      fullTexts: [
        "Hi, I'm Muhamad Cepnur Al-Basori,",
        "a passionate Front-end Developer with a focus on creating seamless, user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive websites that not only look great but also provide a smooth user experience across all devices. <strong>Im able to learn new technology</strong>",
        "I'm graduate from Nusa Putra University, with Informatics engineering program study. Programmer with +1 experience Years in Front end Developer. Experienced in use HTML, Javascript, Tailwindcss, Vuejs, PHP, Laravel, WordPress. currently being learn Back end.",
      ],
      displayTexts: ["", "", ""], // Menyimpan teks yang ditampilkan
      showLastText: false, // Kontrol untuk paragraf terakhir
    };
  },
  mounted() {
    // Ketika komponen dipasang, lakukan typing pada paragraf-paragraf sebelum paragraf terakhir
    this.typeTexts();
    AOS.init({
      duration: 1000, // Atur durasi animasi jika diperlukan
      once: true, // Hanya memutar animasi sekali
    });
  },
  methods: {
    async typeTexts() {
      // Efek typing untuk paragraf-paragraf awal (kecuali yang terakhir)
      for (let i = 0; i < this.fullTexts.length - 1; i++) {
        await this.typeText(i);
      }
    },
    typeText(index) {
      return new Promise((resolve) => {
        let fullText = this.fullTexts[index];
        let currentIndex = 0;
        const typingSpeed = 40; // Kecepatan efek pengetikan
        const interval = setInterval(() => {
          this.displayTexts[index] += fullText[currentIndex];
          currentIndex++;
          if (currentIndex >= fullText.length) {
            clearInterval(interval);
            resolve();
          }
        }, typingSpeed);
      });
    },
    toggleText() {
      if (this.showLastText) {
        // Jika paragraf terakhir sedang ditampilkan, sembunyikan dan hapus teksnya
        this.displayTexts[this.fullTexts.length - 1] = "";
      } else {
        // Jika paragraf terakhir belum ditampilkan, mulai efek typing untuk paragraf terakhir
        this.typeText(this.fullTexts.length - 1);
      }
      this.showLastText = !this.showLastText; // Toggle tampilan paragraf terakhir
    },
  },
};
</script>

<style scoped>
p {
  font-family: "Courier New", Courier, monospace;
  margin: 10px 0;
}
</style>
