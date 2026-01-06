<template>
  <div class="container mx-auto px-6 py-12 font-sans">
    <button @click="goBack" class="mb-6 flex items-center text-gray-600 hover:text-black transition-colors">
      <span class="mr-2">←</span> Back to Shop
    </button>

    <div v-if="loading" class="text-center py-20 text-gray-500">Loading details...</div>
    <div v-else-if="error" class="text-center py-20 text-red-500">Failed to load product.</div>
    
    <div v-else class="flex flex-col md:flex-row gap-12 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <!-- Image -->
      <div class="w-full md:w-1/2 flex justify-center bg-gray-50 rounded-xl p-8">
        <img :src="product.image" :alt="product.title" class="max-h-[500px] object-contain mix-blend-multiply" />
      </div>

      <!-- Details -->
      <div class="w-full md:w-1/2 flex flex-col">
        <span class="text-sm text-gray-500 uppercase tracking-widest mb-2">{{ product.category }}</span>
        <h1 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">{{ product.title }}</h1>
        <p class="text-gray-600 mb-8 leading-relaxed">{{ product.description }}</p>
        
        <div class="flex items-center justify-between mb-8 border-t border-b border-gray-100 py-6">
          <span class="text-3xl font-bold text-gray-900">${{ product.price }}</span>
          <!-- Rating placeholder -->
          <div class="flex text-yellow-500">
            ★★★★☆ <span class="text-gray-400 text-sm ml-2">(120 reviews)</span>
          </div>
        </div>

        <button @click="addToCart" class="w-full md:w-auto bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-transform active:scale-95 shadow-lg">
          Add to Cart
        </button>

        <div class="mt-8 text-xs text-gray-400 flex gap-4">
          <span class="flex items-center"><span class="mr-1">✓</span> Free Shipping</span>
          <span class="flex items-center"><span class="mr-1">✓</span> Secure Checkout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter(); // Fix: explicitly get router instance
const { data: product, pending: loading, error } = useFetch(`https://fakestoreapi.com/products/${route.params.id}`);
const { addToCart: addToCartAction } = useCart();

const goBack = () => router.push("/products/");

const addToCart = () => {
  if (product.value) {
    addToCartAction(product.value);
    alert("Added to Cart!");
  }
};
</script>