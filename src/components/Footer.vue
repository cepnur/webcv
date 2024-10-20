<template>
  <div class="footer">
    <div class="container mx-auto pb-5">
      <div class="py-10 md:flex">
        <div class="flex flex-col md:w-1/4">
          <p class="pb-3 underline">Contact Me</p>
          <div v-for="(foot, index) in footer" :key="index" class="flex gap-3 items-center h-full">
            <font-awesome-icon :icon="foot.icon" class="w-4 h-4" />
            <p>{{ foot.title }}</p>
          </div>
        </div>
        <div class="md:w-1/2 flex gap-3 items-center pt-8 h-full">
          <font-awesome-icon icon="map-location-dot" class="w-4 h-4" />
          <p>Jl.Deli, Lr.25 No.25, Koja, Jakarta Utara</p>
        </div>
      </div>
      <div class="flex items-center justify-end gap-2">
        <font-awesome-icon :icon="['fas', 'copyright']" class="w-4 h-4" />
        <p>2024 Cepnur All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const footer = [
      {
        icon: ["fab", "square-instagram"],
        title: "muhammadcep",
      },
      {
        icon: ["fas", "envelope"],
        title: "muhamadcepnur@gmail.com",
      },
      {
        icon: ["fas", "phone"],
        title: "(+62) 85782547783",
      },
    ];
    return {
      footer,
    };
  },
};
</script>
