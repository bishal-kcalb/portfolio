<template>
  <section id="home" class="relative min-h-screen flex items-center pt-16">
    <div class="absolute inset-0 z-0"></div>
    <div data-aos="zoom-in-right" class="container mx-auto px-4 z-10 relative bg-[#1e1e1e] p-[42px] rounded-2xl">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="block">Hi, I'm</span>
          <span ref="nameRef" class="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"></span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-300 mb-8">
          A <span class="text-[#0A97B0]">creative developer</span> specialized in building 
          memorable digital experiences
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#works" class="px-6 py-3 bg-[#0A5EB0] rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition">
            View My Work
          </a>
          <a href="#contact" class="px-6 py-3 border border-slate-700 rounded-lg font-medium hover:bg-slate-800 transition">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Typewriter from "typewriter-effect/dist/core"; // Import TypewriterJS

const nameRef = ref(null);

onMounted(() => {
  new Typewriter(nameRef.value, {
    strings: ["BISHAL GHIMIRE"],
    autoStart: true,
    loop: true,
    cursor: "|",
    delay: 200, // Speed of typing
    deleteSpeed: 50, // Speed of deleting
  });
});
</script>

  