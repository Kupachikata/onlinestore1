<template>
    <div class="py-12 px-4">
      <h2 class="text-3xl font-bold text-center">Products</h2>
      <div class="flex flex-col md:flex-row gap-4 mt-6 justify-center">
        <select v-model="selectedCategory" @change="filterProducts" class="border p-2 rounded">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
        
        <input type="text" v-model="searchQuery" @input="filterProducts" placeholder="Search products..." class="border p-2 rounded" />
        
        <input type="number" v-model="minPrice" @input="filterProducts" placeholder="Min Price" class="border p-2 rounded" />
        <input type="number" v-model="maxPrice" @input="filterProducts" placeholder="Max Price" class="border p-2 rounded" />
      </div>
      
      <div v-if="loading" class="text-center mt-4">Loading...</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div v-for="product in filteredProducts" :key="product.id" class="border p-4 rounded-lg shadow-md">
          <img :src="product.image" class="h-40 mx-auto" alt="Product Image" />
          <h3 class="mt-4 font-bold">{{ product.title }}</h3>
          <p class="text-gray-600">${{ product.price }}</p>
          <NuxtLink :to="`/products/${product.id}`" class="mt-4 block bg-blue-600 text-white py-2 rounded text-center">View Details</NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const products = ref([]);
  const filteredProducts = ref([]);
  const categories = ref([]);
  const loading = ref(true);
  const selectedCategory = ref("");
  const searchQuery = ref("");
  const minPrice = ref(null);
  const maxPrice = ref(null);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      products.value = await response.json();
      filteredProducts.value = products.value;
    } catch (error) {
      console.error("Failed to load products", error);
    } finally {
      loading.value = false;
    }
  };
  
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      categories.value = await response.json();
    } catch (error) {
      console.error("Failed to load categories", error);
    }
  };
  
  const filterProducts = () => {
    filteredProducts.value = products.value.filter(product => {
      return (
        (!selectedCategory.value || product.category === selectedCategory.value) &&
        (!searchQuery.value || product.title.toLowerCase().includes(searchQuery.value.toLowerCase())) &&
        (!minPrice.value || product.price >= minPrice.value) &&
        (!maxPrice.value || product.price <= maxPrice.value)
      );
    });
  };
  
  onMounted(async () => {
    await fetchProducts();
    await fetchCategories();
  });
  </script>
  