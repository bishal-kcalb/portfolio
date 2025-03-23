<template>
    <section id="reviews" class="py-20  text-white">
      <div data-aos="zoom-in-right" class="container mx-auto px-4 ">
        <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span class="bg-[#0A97B0] bg-clip-text text-transparent">Clients Review</span>
        </h2>
  
        <Swiper
          :modules="[Autoplay, Pagination]"
          :slides-per-view="1"
          :loop="true"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 5000 }"
          class="max-w-3xl mx-auto"
        >
          <SwiperSlide v-for="(review, index) in reviews" :key="index" class ='mb-8'>
            <div class="bg-[#1e1e1e] rounded-2xl p-6 shadow-xl text-center text-white">
              <div data-aos="zoom-in-right" class="mb-8">
                <img :src="review.avatar" alt="Client photo" class="w-16 h-16 rounded-full mx-auto" />
              </div>
              <p class="text-lg text-gray-300 mb-2">"{{ review.comment }}"</p>
              <p class="text-cyan-400 font-semibold">{{ review.name }}</p>
              <div data-aos="zoom-in-right" class="flex justify-center mt-2">
                <span v-for="star in 5" :key="star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    :fill="star <= review.rating ? '#FFD700' : '#4d4d4d'"
                  >
                    <path
                      d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.786 1.4 8.17L12 18.896l-7.334 3.86 1.4-8.17-5.934-5.786 8.2-1.191z"
                    />
                  </svg>
                </span>
              </div>
            </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination, Autoplay } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/pagination";
  
  // Sample reviews
  const reviews = ref([
    {
      name: "Addyvey",
      comment: "Was really pleasure work with him . Honest and professional.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
    },
    {
      name: "Blockgenesis",
      comment: "The seller is skillful, very fast and responsive. He has a good knowledge of blockchain and is able to complete the job as requested on time. I look forward to working with him again in the near future. Thank you!",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
    },
    {
      name: "Pwashere",
      comment: "Bishal is excellent, amazing communication and an approach to go beyond and deliver the best, I highly recommend him!",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
    },
  ]);
  </script>
  
  <style scoped>
 ::v-deep(.swiper-pagination-bullet) {
  background: #0A97B0 !important; /* Change to your desired color */
  opacity: 1;
}

  ::v-deep(.swiper-pagination-bullet-active) {
  background: #FFCFEF !important; /* Change to your active color */
}

  </style>
  