<template>
    <div class="min-h-screen flex flex-col">
      <nav class="bg-white shadow-md p-4 flex justify-between items-center">
      <div>
        <img src="/assets/logo.jpg" alt="Store Logo" class="h-10">
      </div>
      <ul class="hidden md:flex space-x-6">
        <li><NuxtLink to="/navpages/" class="hover:text-gray-500">Home</NuxtLink></li>
        <li><NuxtLink to="/products/" class="hover:text-gray-500">Shop</NuxtLink></li>
        <li><NuxtLink to="/categories/" class="hover:text-gray-500">Categories</NuxtLink></li>
        <li><NuxtLink to="/navpages/contactus" class="hover:text-gray-500">Contact Us</NuxtLink></li>
      </ul>
      <div class="flex items-center space-x-4">
        <NuxtLink to="" class="relative hover:text-gray-500">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" 
            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </NuxtLink>
        
        <!-- Hamburger Icon -->
        <button @click="menuOpen = !menuOpen" class="md:hidden text-2xl">
          ☰
        </button>
      </div>
    </nav>
  
    <!-- Mobile Menu -->
    <ul v-if="menuOpen" class="md:hidden bg-white shadow-md p-4 flex flex-col space-y-4 items-center">
      <li><NuxtLink to="/navpages/" class="hover:text-gray-500" @click="menuOpen = false">Home</NuxtLink></li>
      <li><NuxtLink to="/products/" class="hover:text-gray-500" @click="menuOpen = false">Shop</NuxtLink></li>
      <li><NuxtLink to="/categories/" class="hover:text-gray-500" @click="menuOpen = false">Categories</NuxtLink></li>
      <li><NuxtLink to="/navpages/contactus" class="hover:text-gray-500" @click="menuOpen = false">Contact Us</NuxtLink></li>
    </ul>
      <section class="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to our online store</h1>
      <p class="mb-6">Shop the latest trends at unbeatable prices.</p>
      <button class="bg-white text-blue-600 px-6 py-2 rounded shadow-md mb-6">Shop Now</button>
    </section>
      <section class="p-6 text-center">
    <h2 class="text-2xl font-bold mb-4">Shop by Category</h2>
    <div class="grid grid-cols-4 md:grid-cols-6 gap-1">
      <a href="/categories/electronics" class="flex flex-col items-center">
        <img src="/assets/electronics1.jpg" alt="Electronics" class="w-20 h-20 rounded-2xl object-cover">
        <span class="mt-2 text-sm font-semibold">Electronics</span>
      </a>
      <a href="/categories/kids" class="flex flex-col items-center">
        <img src="/assets/kidswear.jpg" alt="Kids" class="w-20 h-20 rounded-xl object-cover">
        <span class="mt-2 text-sm font-semibold">Kids</span>
      </a>
      <a href="/categories/men" class="flex flex-col items-center">
        <img src="/assets/menswear.jpg" alt="Men" class="w-20 h-20 rounded-xl object-cover">
        <span class="mt-2 text-sm font-semibold">Men</span>
      </a>
      <a href="/categories/sports-outdoor" class="flex flex-col items-center">
        <img src="/assets/sports.jpg" alt="Sports & Outdoor" class="w-20 h-20 rounded-xl object-cover">
        <span class="mt-2 text-sm font-semibold">Sports & Outdoor</span>
      </a>
      <a href="/categories/jewelry-accessories" class="flex flex-col items-center">
        <img src="/assets/jewellery.jpg" alt="Jewelry & Accessories" class="w-20 h-20 rounded-xl object-cover">
        <span class="mt-2 text-sm font-semibold text-center">Jewelry & Accessories</span>
      </a>
      <a href="" class="flex flex-col items-center">
        <img src="/assets/homeandliving.jpg" alt="Home & Living" class="w-20 h-20 rounded-xl object-cover">
        <span class="mt-2 text-sm font-semibold">Home & Living</span>
      </a>
    </div>
  </section>
  <section class="p-6 text-center">
    <h2 class="text-2xl font-bold mb-4">Top Selling Products</h2>
    <div class="relative">
      <!-- Left Arrow (Visible only on mobile) -->
      <button 
        @click="prevSlide" 
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 block md:hidden"
      >
        ◀
      </button>

      <div class="overflow-hidden relative">
        <div 
          ref="slider"
          class="flex space-x-4 transition-transform duration-300 ease-in-out"
        >
          <div 
            v-for="product in topSellingProducts" 
            :key="product.id" 
            class="p-4 shadow-lg rounded-lg bg-white min-w-[80%] sm:min-w-[200px] snap-center"
          >
            <img :src="product.image" :alt="product.title" class="w-full h-40 object-cover" />
            <h3 class="mt-2 text-sm font-bold">{{ product.title }}</h3>
            <p class="text-red-500 font-semibold text-lg">${{ product.price }}</p>
            <button class="mt-2 px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <!-- Right Arrow (Visible only on mobile) -->
      <button 
        @click="nextSlide" 
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 block md:hidden"
      >
        ▶
      </button>
    </div>
    <p v-if="!topSellingProducts.length" class="text-gray-500">Loading products...</p>
</section>

    <section class="p-6 md:p-20 lg:p-40 bg-gray-200 text-center">
    <h2 class="text-2xl font-bold">Stay Updated</h2>
    <p class="text-sm md:text-base">Subscribe for exclusive discounts and new arrivals.</p>
    <div class="mt-4 flex flex-col sm:flex-row justify-center items-center gap-2">
      <input 
        type="email" 
        placeholder="Enter your email" 
        class="p-2 rounded border w-full sm:w-auto"
      />
      <button class="px-4 py-2 bg-blue-600 text-white rounded w-full sm:w-auto">Subscribe</button>
    </div>
  </section>
  
      <footer class="bg-white py-10 text-gray-700">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 class="font-bold mb-4">COMPANY INFO</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to ="" class="hover:underline">About us</NuxtLink></li>
              <li><NuxtLink to ="" class="hover:underline">Sustainability</NuxtLink></li>
              <li><NuxtLink to =""class="hover:underline">Fashion Blogger</NuxtLink></li>
              <li><NuxtLink to ="" class="hover:underline">Supply Chain</NuxtLink></li>
              <li><NuxtLink to ="" class="hover:underline">Careers</NuxtLink></li>
              <li><NuxtLink to ="" class="hover:underline">Student Discount</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">HELP & SUPPORT</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to ="" class="hover:underline">Returns</NuxtLink></li>
              <li><NuxtLink to ="" class="hover:underline">Refunds</NuxtLink></li>
              <li><NuxtLink to ="" class="hover:underline">How to Order</NuxtLink></li>
              <li><NuxtLink to =""class="hover:underline">How to Track</NuxtLink></li>
              <li><NuxtLink to ="" class="hover:underline">Size Guide</NuxtLink></li>
            </ul>
          </div>
  
          <div>
            <h3 class="font-bold mb-4">CUSTOMER CARE</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to =""class="hover:underline">Contact Us</NuxtLink></li>
              <li><NuxtLink to =""class="hover:underline">Payment & Tax</NuxtLink></li>
            </ul>
          </div>
          <div>
            <div class="flex space-x-4 mb-4">
              <NuxtLink to ="" class="text-xl"><i class="fab fa-facebook"></i></NuxtLink>
              <NuxtLink to ="" class="text-xl"><i class="fab fa-instagram"></i></NuxtLink>
              <NuxtLink to ="" class="text-xl"><i class="fab fa-twitter"></i></NuxtLink>
              <NuxtLink to ="" class="text-xl"><i class="fab fa-youtube"></i></NuxtLink>
              <NuxtLink to =""class="text-xl"><i class="fab fa-pinterest"></i></NuxtLink>
              <NuxtLink to =""class="text-xl"><i class="fab fa-snapchat"></i></NuxtLink>
              <NuxtLink to ="" class="text-xl"><i class="fab fa-linkedin"></i></NuxtLink>
            </div>
          </div>
        </div>
        <div class="mt-10 text-center">
          <h3 class="font-bold mb-2">WE ACCEPT</h3>
          <div class="flex justify-center space-x-4">
            <img src="/assets/visa.png" alt="Visa" class="h-6">
            <img src="/assets/mastercard.png" alt="Mastercard" class="h-6">
          </div>
        </div>
      </div> 
        <div class="mt-10 text-center text-xs text-gray-500">
          <p>©2009-2025 Online Store All Rights Reserved</p>
          <div class="flex justify-center space-x-4 mt-2">
            <a href="#" class="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  const menuOpen = ref(false);
  const topSellingProducts = ref([]);
  
  const fetchTopSellingProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=5');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      topSellingProducts.value = await response.json();
    } catch (error) {
      console.error('Error fetching top selling products:', error);
    }
  };
  
  onMounted(fetchTopSellingProducts);
  const slider = ref(null);
  const currentIndex = ref(0);

const nextSlide = () => {
  if (currentIndex.value < topSellingProducts.value.length - 1) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
  </script>
  
  <style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  </style>
  