<template>
    <div class="min-h-screen flex flex-col font-sans text-gray-800">
      <!-- Navbar -->
      <nav class="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
          <NuxtLink to="/" class="flex items-center gap-2 group">
             <img src="/assets/logo.jpg" alt="Store Logo" class="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"> 
          </NuxtLink>
  
          <!-- Desktop Menu -->
          <ul class="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase text-gray-600">
            <li><NuxtLink to="/" class="hover:text-black transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/products/" class="hover:text-black transition-colors">Shop</NuxtLink></li>
            <li><NuxtLink to="/categories/" class="hover:text-black transition-colors">Categories</NuxtLink></li>
            <li><NuxtLink to="/navpages/contactus" class="hover:text-black transition-colors">Contact</NuxtLink></li>
          </ul>
  
          <!-- Icons -->
          <div class="flex items-center space-x-6">
            <NuxtLink to="/cart" class="relative group" title="View Cart">
              <svg class="w-6 h-6 text-gray-700 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span v-if="cart.length > 0" class="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {{ cart.length }}
              </span>
            </NuxtLink>
            
            <button @click="menuOpen = !menuOpen" class="md:hidden text-2xl focus:outline-none">
              <span v-if="!menuOpen">☰</span>
              <span v-else>✕</span>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu -->
        <transition name="fade">
          <ul v-if="menuOpen" class="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col space-y-4 shadow-lg absolute w-full left-0">
            <li><NuxtLink to="/" class="block py-2 px-4 hover:bg-gray-50 rounded" @click="menuOpen = false">Home</NuxtLink></li>
            <li><NuxtLink to="/products/" class="block py-2 px-4 hover:bg-gray-50 rounded" @click="menuOpen = false">Shop</NuxtLink></li>
            <li><NuxtLink to="/categories/" class="block py-2 px-4 hover:bg-gray-50 rounded" @click="menuOpen = false">Categories</NuxtLink></li>
            <li><NuxtLink to="/navpages/contactus" class="block py-2 px-4 hover:bg-gray-50 rounded" @click="menuOpen = false">Contact Us</NuxtLink></li>
          </ul>
        </transition>
      </nav>
  
      <!-- Page Content -->
      <main class="flex-grow">
        <slot />
      </main>
  
      <!-- Footer -->
      <footer class="bg-white border-t border-gray-100 pt-16 pb-8 text-gray-600">
        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="font-bold text-gray-900 mb-4 tracking-wider text-sm">COMPANY</h3>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="#" class="hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-4 tracking-wider text-sm">HELP</h3>
            <ul class="space-y-3 text-sm">
              <li><a href="#" class="hover:text-black transition-colors">FAQ</a></li>
              <li><a href="#" class="hover:text-black transition-colors">Shipping & Returns</a></li>
              <li><a href="#" class="hover:text-black transition-colors">Size Guide</a></li>
            </ul>
          </div>
          <div>
             <h3 class="font-bold text-gray-900 mb-4 tracking-wider text-sm">CONTACT</h3>
             <ul class="space-y-3 text-sm">
               <li>support@onlinestore.com</li>
               <li>+1 (555) 123-4567</li>
             </ul>
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-4 tracking-wider text-sm">FOLLOW US</h3>
            <div class="flex space-x-4">
              <!-- Social Icons placeholder -->
              <a href="#" class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all">FB</a>
              <a href="#" class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all">IG</a>
              <a href="#" class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all">TW</a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-100 mt-12 pt-8 text-center text-xs text-gray-400">
          <p>&copy; 2025 Online Store. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  const menuOpen = ref(false);
  const { cart, initCart } = useCart();

  onMounted(() => {
    initCart();
  });
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  
