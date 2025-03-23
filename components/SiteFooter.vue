<template>
    <footer data-aos="zoom-out-up" class="py-8 mb-8">
      <div class="container mx-auto px-4 text-center">
        <div class="flex justify-center space-x-8 mb-6">
          <!-- <a v-for="item in navItems" :key="item.name" :href="item.href" class="text-slate-300 hover:text-white transition-colors">
            {{ item.name }}
          </a> -->
        </div>
        <div class="text-slate-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Bishal Ghimire. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];
  </script>