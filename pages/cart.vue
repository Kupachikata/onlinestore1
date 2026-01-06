<template>
    <div class="min-h-screen bg-gray-50 py-12 font-sans">
      <div class="container mx-auto px-6">
        <h1 class="text-3xl font-bold mb-10 text-gray-900">Your Shopping Cart</h1>
  
        <div v-if="cart.length === 0" class="text-center py-20 bg-white rounded-lg shadow-sm">
          <p class="text-gray-500 text-lg mb-6">Your cart is empty.</p>
          <NuxtLink to="/products/" class="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">Start Shopping</NuxtLink>
        </div>
  
        <div v-else class="flex flex-col lg:flex-row gap-12">
          <!-- Cart Items -->
          <div class="w-full lg:w-2/3 space-y-6">
            <div v-for="item in cart" :key="item.product.id" class="grid grid-cols-1 md:grid-cols-4 gap-6 items-center bg-white p-6 rounded-lg shadow-sm">
              <!-- Image -->
              <div class="flex justify-center md:justify-start col-span-1">
                <img :src="item.product.image" :alt="item.product.title" class="h-24 w-24 object-contain">
              </div>
  
              <!-- Title & Price -->
              <div class="col-span-2 text-center md:text-left">
                <h3 class="text-lg font-bold text-gray-900 line-clamp-1">{{ item.product.title }}</h3>
                <p class="text-gray-500 text-sm mt-1 mb-2">{{ item.product.category }}</p>
                <p class="text-black font-semibold">${{ item.product.price.toFixed(2) }}</p>
              </div>
  
              <!-- Controls -->
              <div class="col-span-1 flex flex-col items-center md:items-end gap-3">
                <div class="flex items-center border border-gray-300 rounded-full">
                  <button @click="updateQuantity(item.product.id, -1)" class="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-l-full">-</button>
                  <span class="w-8 text-center text-sm font-medium">{{ item.quantity }}</span>
                  <button @click="updateQuantity(item.product.id, 1)" class="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-r-full">+</button>
                </div>
                <!-- Remove -->
                <button @click="removeFromCart(item.product.id)" class="text-red-500 text-xs hover:underline">Remove</button>
              </div>
            </div>
          </div>
  
          <!-- Summary -->
          <div class="w-full lg:w-1/3">
             <div class="bg-white p-8 rounded-lg shadow-sm sticky top-24">
               <h2 class="text-xl font-bold mb-6">Order Summary</h2>
               <div class="flex justify-between mb-4 text-gray-600">
                 <span>Subtotal</span>
                 <span>${{ getCartTotal() }}</span>
               </div>
               <div class="flex justify-between mb-4 text-gray-600">
                 <span>Shipping</span>
                 <span>Free</span>
               </div>
               <div class="border-t border-gray-100 my-4 pt-4 flex justify-between font-bold text-lg text-gray-900">
                 <span>Total</span>
                 <span>${{ getCartTotal() }}</span>
               </div>
               <NuxtLink to="/checkout" class="block w-full text-center bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg mt-6">
                 Proceed to Checkout
               </NuxtLink>
             </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  </script>
  
