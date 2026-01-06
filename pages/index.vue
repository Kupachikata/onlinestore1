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
          <li><NuxtLink to="/navpages/" class="hover:text-black transition-colors">Home</NuxtLink></li>
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
          <li><NuxtLink to="/navpages/" class="block py-2 px-4 hover:bg-gray-50 rounded" @click="menuOpen = false">Home</NuxtLink></li>
          <li><NuxtLink to="/products/" class="block py-2 px-4 hover:bg-gray-50 rounded" @click="menuOpen = false">Shop</NuxtLink></li>
          <li><NuxtLink to="/categories/" class="block py-2 px-4 hover:bg-gray-50 rounded" @click="menuOpen = false">Categories</NuxtLink></li>
          <li><NuxtLink to="/navpages/contactus" class="block py-2 px-4 hover:bg-gray-50 rounded" @click="menuOpen = false">Contact Us</NuxtLink></li>
        </ul>
      </transition>
    </nav>

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
          <NuxtLink v-for="cat in categoriesList" :key="cat.name" :to="cat.link" class="group flex flex-col items-center">
            <div class="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4 border-2 border-transparent group-hover:border-black transition-all">
              <img :src="cat.image" :alt="cat.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
            <span class="text-sm font-medium group-hover:text-blue-600 transition-colors">{{ cat.name }}</span>
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
import { ref, onMounted, onUnmounted } from 'vue';

const { addToCart: addToCartAction, cart } = useCart();
const menuOpen = ref(false);
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

// Category Data (Static for now to match UI)
const categoriesList = [
  { name: 'Electronics', image: '/assets/electronics1.jpg', link: '/categories/electronics' },
  { name: 'Kids', image: '/assets/kidswear.jpg', link: '/categories/kids' },
  { name: 'Men', image: '/assets/menswear.jpg', link: '/categories/men' },
  { name: 'Sports', image: '/assets/sports.jpg', link: '/categories/sports-outdoor' },
  { name: 'Jewelry', image: '/assets/jewellery.jpg', link: '/categories/jewelry-accessories' },
  { name: 'Home', image: '/assets/homeandliving.jpg', link: '/categories/' },
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
  alert(`${product.title} added to cart!`); // Simple feedback
};
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