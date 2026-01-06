<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <NuxtLink to="/signup" class="font-medium text-black hover:text-gray-800 underline">
              create a new account
            </NuxtLink>
          </p>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Password">
            </div>
          </div>
  
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  const { login } = useAuth();
  const router = useRouter();
  
  const email = ref('');
  const password = ref('');
  
  const handleLogin = () => {
    login(email.value, password.value);
    router.back(); // Go back to where they came from (e.g. product page)
  };
  </script>
  
