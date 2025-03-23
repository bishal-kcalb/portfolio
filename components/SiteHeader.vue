<template>
  <header class="fixed w-full bg-black-500 backdrop-blur-md z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent">

      </div>
      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li v-for="item in navItems" :key="item.name">
            <a 
              :href="item.href" 
              @click="setActiveTab(item.name)"
              :class="['font-bold  transition-all duration-300', activeTab === item.name ? 'text-[#0A97B0]' : 'text-white']"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
      <button class="md:hidden">
        <span class="block w-6 h-0.5 bg-white mb-1.5"></span>
        <span class="block w-6 h-0.5 bg-white mb-1.5"></span>
        <span class="block w-6 h-0.5 bg-white"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const activeTab = ref("Home");

const setActiveTab = (tabName) => {
  activeTab.value = tabName;
};
</script>
