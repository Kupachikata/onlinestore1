<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4 font-sans">
      <div class="max-w-lg w-full bg-white p-10 rounded-xl shadow-lg text-center">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
        <p class="text-gray-600 mb-8">Thank you for your purchase. Your order has been placed successfully and will be on its way shortly.</p>
        
        <div class="bg-gray-50 p-4 rounded-lg text-left mb-8">
            <h3 class="font-bold mb-2">Order Details</h3>
            <p class="text-sm text-gray-500">Order ID: #{{ Math.floor(Math.random() * 1000000) }}</p>
            <p class="text-sm text-gray-500 mt-1">Total Amount: ${{ total }}</p>
        </div>
  
        <NuxtLink to="/" @click="clearCart" class="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
          Continue Shopping
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  const { getCartTotal, clearCart } = useCart();
  const total = ref(getCartTotal());
  </script>
  
