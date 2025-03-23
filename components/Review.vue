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
    <a href="https://www.fiverr.com/s/yvLREQ6" class="flex items-center justify-center">
      <button
          class="flex justify-center items-center w-[100%] m-4 md:w-[80%] xl:w-[43%] px-6 py-3 bg-[#0A5EB0] rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition"
        >
          View More Review in Fiverr 
          <img data-aos="zoom-out-up" src="../assets/images/fiverr-icon.svg" alt="Profile Image" class="basis-1/6 h-[40px] w-[40px] object-contain rounded-full" />
        </button>
    </a>
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
      avatar: "https://fiverr-res.cloudinary.com/image/upload/t_profile_small,q_auto,f_auto/v1/attachments/profile/photo/d0b3d769b5479f55847f97f8da4b851d-1708175873481/5a769277-889a-4d05-a443-6ea9bea392aa.png",
      rating: 5,
    },
    {
      name: "Pwashere",
      comment: "Bishal is excellent, amazing communication and an approach to go beyond and deliver the best, I highly recommend him!",
      avatar: "https://fiverr-res.cloudinary.com/image/upload/t_profile_small,q_auto,f_auto/v1/attachments/profile/photo/c9803680d93d198941f0c716dc6f0272-1589443806882/d371d305-38c1-4f4a-a5d3-1d0a23c52420.jpg",
      rating: 5,
    },
    {
      name: "sammichael103'",
      comment: "Exceptional, well done. Will like to work with him again :)",
      avatar: "https://fiverr-res.cloudinary.com/image/upload/t_profile_small,q_auto,f_auto/v1/profile/photos/63446403/original/photo.jpg",
      rating: 5,
    },
    {
      name: "prabin04",
      comment: "Highly recommend. Bishal is always quick and interactive. He always meets the expectations and would definitely buy the service again from him.",
      avatar: "https://fiverr-res.cloudinary.com/image/upload/t_profile_small,q_auto,f_auto/v1/attachments/profile/photo/f48f0c5f86540f935618c2a1eb78e17b-1618494564741/54f01116-373c-458a-b42a-8e6af2c5d114.JPG",
      rating: 5,
    },
    {
      name: "cufflabs",
      comment: "https://fiverr-res.cloudinary.com/image/upload/t_profile_small,q_auto,f_auto/v1/attachments/profile/photo/148948705f1f8631867e3bcca79d10dc-1675487892452/2b955d0c-05f8-4bda-a73d-bd89263a10e5.jpg",
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
  