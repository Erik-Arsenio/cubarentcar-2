<template>
  <nav class="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-50 backdrop-blur-md border-b border-slate-100 dark:border-slate-600">
    <div class="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
      <!-- Logo -->
      <span class="text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
        <!-- CubaRentCar<span class="text-slate-800 dark:text-white font-medium">Online</span> -->
        <a href="https://cubarentacaronline.com/" class="">
            <img src="/src/assets/logo.svg" alt="Logo" class="h-8 mr-3" />
        </a>
        <!-- <img src="/src/assets/logo.svg" alt="Logo" class="h-8 mr-3" /> -->
      </span>

      <!-- Enlaces Escritorio -->
      <div class="hidden lg:flex items-center gap-6">
        <a href="#" class="text-sm font-semibold text-yellow-300">Inicio</a>
        <div class="relative group">
          <button class="px-4 py-2 text-sm font-semibold text-slate-950 hover:text-yellow-300">
            Categorías 
            <i class="pi pi-chevron-down text-[8px]"></i>
          </button>
          <div class="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white shadow-lg border opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 divide-y divide-slate-200  text-slate-950 dark:text-slate-950">
            <a href="#" class="block px-4 py-3 border-b border-slate-500 hover:bg-slate-100">Todas</a>
            <a href="#" class="block px-4 py-3 hover:bg-slate-100">Económico</a>
            <a href="#" class="block px-4 py-3 hover:bg-slate-100">Medio</a>
            <a href="#" class="block px-4 py-3 hover:bg-slate-100">Medio Alto</a>
            <a href="#" class="block px-4 py-3 hover:bg-slate-100">Van Jeep</a>
          </div>
        </div>
        <!-- <a href="#categorias" class="text-sm font-semibold text-slate-950 dark:text-slate-950 hover:text-yellow-300">Categorías</a> -->
        <a href="#" class="text-sm font-semibold text-slate-950 dark:text-slate-950 hover:text-yellow-300">Contactar</a>
        <a href="#quienes-somos" class="text-sm font-semibold text-slate-950 dark:text-slate-950 hover:text-yellow-300">¿Quienes somos?</a>
        <a href="#" class="text-sm font-semibold text-slate-950 dark:text-slate-950 hover:text-yellow-300">Verificar Renta</a>
        <div class="relative group">
          <button class="px-4 py-2 text-sm font-semibold text-slate-950 hover:text-slate-900">
            Mi Cuenta
            <i class="pi pi-chevron-down text-[8px]"></i>
          </button>
          <div class="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white shadow-lg border opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 divide-y divide-slate-200  text-slate-950 dark:text-slate-950">
            <a href="#" class="block px-4 py-3 hover:bg-slate-100">Acceder</a>
            <a href="#" class="block px-4 py-3 hover:bg-slate-100">Registrarse</a>

          </div>
        </div>
        <!-- <button class="px-4 py-2 bg-yellow-300 text-white rounded-lg text-xs font-bold hover:bg-yellow-300 transition-colors">Mi Cuenta</button> -->
      </div>

      <!-- Hamburger Móvil -->
      <button @click="isOpen = true" class="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300">
        <i class="pi pi-bars text-9xl" style="font-size: 2.5rem"></i>
      </button>
    </div>

    <!-- Menú Desplegable Lateral (Drawer) -->
    <div v-show="isOpen" class="fixed inset-0 z-50 lg:hidden">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-xs" @click="isOpen = false"></div>
      <div class="absolute inset-y-0 right-0 w-64 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300">
        <div>
          <div class="flex justify-between items-center mb-8">
            <span class="font-bold text-emerald-600">Menú</span>
            <button @click="isOpen = false" class="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><i class="pi pi-times"></i></button>
          </div>
          <div class="flex flex-col gap-5 text-sm font-bold">
            <a href="#" @click="isOpen = false" class="text-yellow-300">Inicio</a>
            <div class="relative group">
              <button class="px-4 py-2 text-slate-700 hover:text-slate-900">
                Categorías
              </button>
              <div class="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white shadow-lg border opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 divide-y divide-slate-200  text-slate-950 dark:text-slate-950">
                <a href="#" class="block px-4 py-3 border-b border-slate-500 hover:bg-slate-100">Todas</a>
                <a href="#" class="block px-4 py-3 hover:bg-slate-100">Económico</a>
                <a href="#" class="block px-4 py-3 hover:bg-slate-100">Medio</a>
                <a href="#" class="block px-4 py-3 hover:bg-slate-100">Medio Alto</a>
                <a href="#" class="block px-4 py-3 hover:bg-slate-100">Van Jeep</a>
              </div>
            </div>
            <!-- <a href="#categorias" @hover="isOpen = false" class="text-slate-700 dark:text-slate-200">Categorías</a> -->
            <a href="#" @click="isOpen = false" class="text-slate-700 dark:text-slate-200">Contactar</a>
            <a href="#quienes-somos" @click="isOpen = false" class="text-slate-700 dark:text-slate-200">¿Quienes somos?</a>
            <a href="#" @click="isOpen = false" class="text-slate-700 dark:text-slate-200">Verificar Renta</a>
          </div>
        </div>
        <div class="relative group">
          <button class="px-4 py-2 font-semibold text-slate-950 hover:text-slate-900">
            Mi Cuenta
          <i class="pi pi-chevron-down text-[8px]"></i>
          </button>
          <div class="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white shadow-lg border opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 divide-y divide-slate-200  text-slate-950 dark:text-slate-950">
            <a href="#" class="block px-4 py-3 hover:bg-slate-100">Acceder</a>
            <a href="#" class="block px-4 py-3 hover:bg-slate-100">Registrarse</a>
          </div>
        </div>
        <!-- <button class="w-full py-3 bg-emerald-600 text-white rounded-lg font-bold text-sm">Mi Cuenta</button> -->
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>