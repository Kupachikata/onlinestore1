<template>
    <div class="min-h-screen bg-white py-12 font-sans">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl font-bold text-center mb-12 uppercase tracking-wide">Contact Us</h1>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Info -->
          <div class="bg-gray-50 p-8 rounded-xl">
            <h2 class="text-2xl font-bold mb-6">Get In Touch</h2>
            <p class="text-gray-600 mb-8">We'd love to hear from you. Whether you have a question about our products, shipping, or returns, our team is here to help.</p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                 <div class="bg-black text-white p-3 rounded-full mr-4">
                   <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 </div>
                 <div>
                   <h3 class="font-bold text-lg">Address</h3>
                   <p class="text-gray-500">123 Fashion Ave, Suite 400<br>New York, NY 10018</p>
                 </div>
              </div>
  
              <div class="flex items-start">
                <div class="bg-black text-white p-3 rounded-full mr-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg">Phone</h3>
                  <p class="text-gray-500">+1 (555) 123-4567</p>
                  <p class="text-gray-500 text-sm">Mon-Fri, 9am - 6pm EST</p>
                </div>
             </div>
  
             <div class="flex items-start">
                <div class="bg-black text-white p-3 rounded-full mr-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg">Email</h3>
                  <p class="text-gray-500">support@onlinestore.com</p>
                </div>
             </div>
            </div>
          </div>
  
          <!-- Form -->
          <div>
            <form class="space-y-6 bg-white border border-gray-100 p-8 rounded-xl shadow-lg">
              <div>
                <label class="block text-sm font-bold mb-2">Name</label>
                <input type="text" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your Name">
              </div>
              <div>
                <label class="block text-sm font-bold mb-2">Email</label>
                <input type="email" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your Email">
              </div>
              <div>
                <label class="block text-sm font-bold mb-2">Message</label>
                <textarea rows="4" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" placeholder="How can we help?"></textarea>
              </div>
              <button class="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  