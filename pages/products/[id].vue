<template>
    <div class="p-6">
      <button @click="goBack" class="px-4 py-2 bg-gray-500 text-white rounded">Back to Products</button>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else class="mt-4 border p-4 rounded-lg">
        <img :src="product.image" :alt="product.title" class="h-64 mx-auto" />
        <h1 class="text-xl font-bold mt-2">{{ product.title }}</h1>
        <p class="text-gray-600">{{ product.description }}</p>
        <p class="text-lg font-semibold text-red-500">${{ product.price }}</p>
        <button @click="addToCart" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const route = useRoute();
  const { data: product, pending: loading, error } = useFetch(`https://fakestoreapi.com/products/${route.params.id}`);
  
  const goBack = () => useRouter().push("/products/");
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product.value);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
  };
  </script>
  