<template>
    <section id="works" class="py-20 ">
      <div  class="container mx-auto px-4 ">
        <h2 data-aos="zoom-in-up" class="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span class="bg-[#0A97B0] bg-clip-text text-transparent">
            Selected Works
          </span>
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div data-aos="zoom-in-up" v-for="(project, index) in projects" :key="index" 
               class="group  bg-[#1e1e1e] p-8 border-cyan-300/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2">
            <div class="rounded-xl overflow-hidden flex justify-center">
              <img data-aos="" :src="project.url" :alt="project.title" class="min-h-[300px] object-fill transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-70 z-[-1]"></div>
            </div>
            
            <div class="p-6 text-center flex flex-col justify-between h-[50%] items-center">
              <div>
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-slate-400 mb-4">{{ project.description }}</p>
            </div>
              <div>
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in project.technologies" :key="tech" 
                      class="px-3 py-1 bg-[#0A5EB0] rounded-full text-xs text-slate-300">
                  {{ tech }}
                </span>
              </div>
              <a href="https://github.com/bishal-kcalb" class="inline-flex items-center text-[#0A97B0] hover:text-cyan-300">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import blockchain from '@/assets/images/Supply_Chain_Using_Blockchain.png';
  import supplychain from '@/assets/images/Blockchain_Development_2.png';
  import staking from '@/assets/images/staking.png'
  import bridge from '@/assets/images/Blockchain_Development.png'
  const projects = [
    {
      title: "Blockchain Development",
      description: "An ethereum based private blockchain",
      technologies: ["Geth", "Besu"],
      url:blockchain
    },
    {
      title: "Supply Chain Using Blockchain",
      description: "A modern supply chain management in healthcare using blockchain with role based using user wallet",
      technologies: ["Besu", "Solidity", "Nuxt3"],
      url:supplychain
    },
    {
      title: "Token Bridge",
      description: "Bridge erc-20 token to different network",
      technologies: ["Solidity", "Nuxt3", "Express"],
      url:bridge
    },
    {
      title: "Staking",
      description: "Staking erc-20 token",
      technologies: ["Solidity", "Nuxt3"],
      url:staking
    },
    // {
    //   title: "Photography Portfolio",
    //   description: "Sleek portfolio for a professional photographer",
    //   technologies: ["Vue", "GSAP", "Sanity CMS"],
    //   url:img1
    // },
    // {
    //   title: "AI Chatbot Interface",
    //   description: "Modern UI for an AI-powered customer service chatbot",
    //   technologies: ["Vue", "TensorFlow.js", "Web Speech API"],
    //   url: img2
    // }
  ];
  </script>