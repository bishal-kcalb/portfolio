<template>
    <section data-aos="zoom-out-up" id="skills" class="py-20 ">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span class="bg-[#0A97B0] bg-clip-text text-transparent">
            Skills & Tools
          </span>
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div data-aos="zoom-in-up" v-for="(category, name) in skillCategories" :key="name" 
               class="bg-[#1e1e1e] rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <h3 class="text-xl font-bold mb-4 text-[#0A97B0]">{{ name }}</h3>
            <ul class="space-y-3">
              <li v-for="skill in category" :key="skill.name" class="flex items-center">
                <div class="w-full bg-transparent rounded-full h-2">
                  <div class="bg-[#0A5EB0] h-2 rounded-full" :style="`width: ${skill.level}%`"></div>
                </div>
                <span class="ml-3 text-slate-300">{{ skill.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SkillTools/>
    </section>
  </template>
  
  <script setup>
  const skillCategories = {
    "Blockchain": [
      { name: "Solidity", level: 90 },
      { name: "Geth", level: 85 },
      { name: "Besu", level: 95 },
      { name: "Web3", level: 90 }
    ],
    "Frontend": [
      { name: "Vue.js", level: 90 },
      { name: "Nuxt", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 }
    ],
    "Backend": [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Firebase", level: 85 },
      { name: "MongoDB", level: 70 }
    ],
    // "Design": [
    //   { name: "Figma", level: 85 },
    //   { name: "Adobe XD", level: 80 },
    //   { name: "UI/UX", level: 90 },
    //   { name: "Animation", level: 75 }
    // ],
    "Other": [
      { name: "Three.js", level: 80 },
      { name: "WebGL", level: 70 },
      { name: "Git", level: 85 },
      { name: "DevOps", level: 65 }
    ]
  };
  </script>