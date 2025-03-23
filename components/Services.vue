<template>
    <section id="works" class="py-20 ">
      <div  class="container mx-auto px-4 ">
        <h2 data-aos="zoom-in-up" class="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span class="bg-[#0A97B0] bg-clip-text text-transparent">
            My Services
          </span>
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div data-aos="zoom-in-up" v-for="(project, index) in projects" :key="index" 
               class="group  bg-[#1e1e1e] p-8 border-cyan-300/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2">
            <div class="rounded-xl overflow-hidden">
              <img data-aos="" :src="project.url" :alt="project.title" class="min-h-[300px] object-fill transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-70 z-[-1]"></div>
            </div>
            
            <div class="p-6 text-center flex flex-col justify-between h-[50%] items-center">
              <div>
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-slate-400 mb-4">{{ project.description }}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import blockchain_service from '@/assets/images/blockchain-service.webp';
  import cloud from '@/assets/images/cloud.png';
  import webDevelopment from '@/assets/images/web.jpeg'
  import bridge from '@/assets/images/bridge.png'
  import img2 from '@/assets/images/img2.jpg'
  const projects = [
    {
      title: "Blockchain Development",
      description: "Empower your business with cutting-edge blockchain solutions designed for security, transparency, and efficiency. I specialize in custom blockchain development, smart contract creation, decentralized applications (DApps), and token development on Ethereum, Binance Smart Chain, Polygon, and more.",
      technologies: ["Geth", "Besu"],
      url:blockchain_service
    },
    {
      title: "Web Development",
      description: "Build high-performance, modern, and user-friendly websites with  custom web development solutions. I specialize in creating responsive, scalable, and visually stunning websites tailored to your business needs.",
      technologies: ["Besu", "Solidity", "Nuxt3"],
      url:webDevelopment
    },
    {
      title: "Cloud Deployment",
      description: "Harness the power of the cloud with  cloud deployment services designed to streamline your operations, improve scalability, and ensure high availability. Whether you are looking to deploy your web applications, databases, or entire infrastructure, I provide tailored cloud solutions to fit your business needs.",
      technologies: ["Solidity", "Nuxt3", "Express"],
      url:cloud
    },
    {
      title: "Machine Learning and AI",
      description: "Unlock the potential of your data with  Machine Learning (ML) and Artificial Intelligence (AI) development services. I help businesses leverage advanced algorithms and intelligent systems to solve complex problems, enhance decision-making, and improve operational efficiency. My solutions are designed to transform raw data into actionable insights and predictive models.",
      technologies: ["Solidity", "Nuxt3"],
      url:img2
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