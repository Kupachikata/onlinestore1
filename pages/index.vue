<template>
  <div>
    <!-- Hero Section with Background Slider -->
    <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <!-- Background Images -->
      <div class="absolute inset-0 w-full h-full">
        <div v-for="(image, index) in heroImages" :key="index"
             class="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
             :style="{ backgroundImage: `url(${image})`, opacity: currentHeroIndex === index ? 1 : 0 }">
        </div>
        <div class="absolute inset-0 bg-black/40"></div> <!-- Overlay -->
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-fade-in-up">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          Elevate Your Style
        </h1>
        <p class="text-lg md:text-xl mb-8 font-light text-gray-100">
          Discover the latest trends in fashion and lifestyle at unbeatable prices.
        </p>
        <NuxtLink to="/products/" class="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl">
          Shop Collection
        </NuxtLink>
      </div>

      <!-- Slider Dots -->
      <div class="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        <button v-for="(_, index) in heroImages" :key="index" 
                @click="currentHeroIndex = index"
                class="w-3 h-3 rounded-full transition-all duration-300"
                :class="currentHeroIndex === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'">
        </button>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-2xl md:text-3xl font-bold mb-10 text-center uppercase tracking-wide">Shop by Category</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <NuxtLink v-for="cat in categoriesList" :key="cat.name" :to="cat.path" class="group flex flex-col items-center">
            <div class="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4 border-2 border-transparent group-hover:border-black transition-all bg-white p-1">
              <div class="w-full h-full rounded-full overflow-hidden">
                <img :src="cat.image" :alt="cat.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
            </div>
            <span class="text-sm font-medium group-hover:text-blue-600 transition-colors uppercase tracking-wider">{{ cat.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Top Selling Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-end mb-10">
          <h2 class="text-2xl md:text-3xl font-bold uppercase tracking-wide">Trending Now</h2>
          <NuxtLink to="/products/" class="text-sm font-medium border-b border-black pb-1 hover:text-gray-600 transition-colors">View All</NuxtLink>
        </div>

        <div class="relative group">
          <div v-if="!topSellingProducts.length" class="text-center py-10 text-gray-400">Loading products...</div>
          
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
             <div v-for="product in topSellingProducts" :key="product.id" 
                  class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group/card">
               <div class="relative pt-[100%] bg-white overflow-hidden p-4">
                  <img :src="product.image" :alt="product.title" class="absolute inset-0 w-full h-full object-contain p-4 group-hover/card:scale-105 transition-transform duration-500">
               </div>
               <div class="p-4 flex flex-col flex-1">
                 <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-2 min-h-[40px]">{{ product.title }}</h3>
                 <div class="flex justify-between items-center mt-auto">
                   <p class="text-lg font-bold text-gray-900">${{ product.price }}</p>
                   <button @click="handleAddToCart(product)" 
                           class="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors active:scale-95">
                     <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                   </button>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-20 bg-gray-900 text-white relative overflow-hidden">
      <!-- Decor element -->
      <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-3xl font-bold mb-4">Unlock Exclusive Deals</h2>
        <p class="text-gray-400 mb-8 max-w-xl mx-auto">Join our newsletter to receive the latest updates, style tips, and exclusive offers newly available.</p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            class="px-6 py-3 rounded-full w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button class="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const { addToCart: addToCartAction } = useCart();
const topSellingProducts = ref([]);

// Hero Logic
const currentHeroIndex = ref(0);
const heroImages = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop'
];

let sliderInterval;

const startSlider = () => {
  sliderInterval = setInterval(() => {
    currentHeroIndex.value = (currentHeroIndex.value + 1) % heroImages.length;
  }, 5000); // Change every 5 seconds
};

onMounted(() => {
  fetchTopSellingProducts();
  startSlider();
  const { initCart } = useCart();
  initCart();
});

onUnmounted(() => {
  clearInterval(sliderInterval);
});

// Category Data (Matched with /pages/categories/index.vue)
const categoriesList = [
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/electronics' },
  { name: 'Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb05220c?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/jewelry-accessories' },
  { name: 'Men', image: 'https://images.unsplash.com/photo-1617137346081-afc2447d7475?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/men' },
  { name: 'Women', image: 'https://images.unsplash.com/photo-1618244972963-dbee124158e0?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/women' },
  { name: 'Kids', image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/kids' },
  { name: 'Sports', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/sports-outdoor' },
  { name: 'Home', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
  { name: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
  { name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
  { name: 'Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
  { name: 'Watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
];

const fetchTopSellingProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=10'); // Fetch more for the grid
    if (!response.ok) throw new Error('Failed to fetch');
    topSellingProducts.value = await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const handleAddToCart = (product) => {
  addToCartAction(product);
  // Remove simple alert, maybe rely on a toast system if I built one, or just silent add for now/use cart count update
};
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}
</style>