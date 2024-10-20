<template>
  <div class="relative w-full overflow-hidden" id="education">
    <!-- wrapper slide -->
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="min-w-full relative">
        <img :src="slide.img" :alt="'Slide ' + (index + 1)" class="w-full h-screen object-cover opacity-60" />
        <div class="absolute top-20 left-20 opacity-80 md:w-1/3 rounded bg-slate-50 p-3">
          <div class="flex text-black gap-4">
            <img :src="slide.img2" :alt="slide.img2" class="w-20 h-20 md:w-40 md:h-40" />
            <div class="flex flex-col justify-center">
              <h1 class="font-bold">Name : {{ slide.title }}</h1>
              <p>Study Program : {{ slide.prodi }}</p>
              <p>Year : {{ slide.year }}</p>
              <p>GPA : {{ slide.gpa }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Tombol Previous -->

    <font-awesome-icon @click="prevSlide" icon="caret-left" class="cursor-pointer w-8 h-8 absolute top-1/2 left-4 transform -translate-y-1/2 hover:opacity-100 opacity-50 bg-green-600 text-white rounded-full" />

    <!-- Tombol Next -->
    <font-awesome-icon @click="nextSlide" icon="caret-right" class="cursor-pointer w-8 h-8 absolute top-1/2 right-4 transform -translate-y-1/2 hover:opacity-100 opacity-50 bg-green-600 text-whit2 rounded-full" />
    <!-- Indicator (dots) -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)" class="w-3 h-3 bg-white rounded-full" :class="currentIndex === index ? 'bg-blue-500' : 'opacity-50'"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, // Index slide yang aktif
      slides: [
        {
          img: "/ns.jpg",
          img2: "/univ.png",
          title: "Nusa Putra University",
          prodi: "Informatic Engineering",
          year: "2020-2024",
          gpa: "3.27",
        },
        {
          img: "/36jkt.jpg",
          img2: "/smk.png",
          title: "SMKN 36 Jakarta",
          prodi: "Agribisnis",
          year: "2016-2019",
          gpa: "8.0",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>
