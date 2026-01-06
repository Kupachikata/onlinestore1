<template>
  <div class="min-h-screen bg-gray-50 py-12 font-sans">
    <div class="container mx-auto px-6">
      <h1 class="text-3xl font-bold text-center mb-12 uppercase tracking-wide">All Categories</h1>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <NuxtLink v-for="cat in categories" :key="cat.name" :to="cat.path" class="group flex flex-col items-center cursor-pointer">
          <div class="w-36 h-36 rounded-full overflow-hidden shadow-md bg-white p-1 border-2 border-transparent group-hover:border-black transition-all">
            <div class="w-full h-full rounded-full overflow-hidden">
               <img :src="cat.image" :alt="cat.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
          </div>
          <span class="mt-4 text-sm font-semibold text-gray-800 group-hover:text-black uppercase tracking-wider text-center px-2">{{ cat.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Using images from original file + unspash specific ones for new categories
const categories = [
  { name: 'Electronics', image: '/assets/electronics1.jpg', path: '/categories/electronics' },
  { name: 'Jewelry', image: '/assets/jewellery.jpg', path: '/categories/jewelry-accessories' },
  { name: 'Men', image: '/assets/menswear.jpg', path: '/categories/men' },
  { name: 'Women', image: 'https://images.unsplash.com/photo-1618244972963-dbee124158e0?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/women' },
  { name: 'Kids', image: '/assets/kidswear.jpg', path: '/categories/kids' },
  { name: 'Sports', image: '/assets/sports.jpg', path: '/categories/sports-outdoor' },
  { name: 'Home', image: '/assets/homeandliving.jpg', path: '/categories/' },
  { name: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
  { name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
  { name: 'Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
  { name: 'Watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&q=80&w=300&h=300', path: '/categories/' },
];
</script>