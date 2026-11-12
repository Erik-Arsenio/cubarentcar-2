<template>
  <header class="w-full bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-xs text-slate-600 dark:text-slate-300 gap-2">
      
      <!-- Teléfonos con Dropdowns (WhatsApp / Llamar) -->
      <div class="flex items-center gap-4">
        <!-- España -->
        <div class="relative">
          <button @click="toggleMenuEs" class="flex items-center gap-1.5 hover:text-emerald-500 font-medium transition-colors" type="button">
            <img alt="Español" src="/src/assets/images/flag_placeholder.png" class="flag flag-es" style="width: 18px;">
            <span>+34 644 68 18 14</span>
            <i class="pi pi-chevron-down text-[8px]"></i>
          </button>
          
          <div v-show="showMenuEs" class="absolute left-0 mt-1.5 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 py-1 z-50">
            <a href="https://wa.me/34644681814" target="_blank" class="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200">
              <i class="pi pi-whatsapp text-emerald-500"></i>
              <span>WhatsApp</span>
            </a>
            <a href="tel:+34644681814" class="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200">
              <i class="pi pi-phone text-sky-500"></i>
              <span>Llamar</span>
            </a>
          </div>
        </div>

        <!-- USA -->
        <div class="relative">
          <button @click="toggleMenuUs" class="flex items-center gap-1.5 hover:text-emerald-500 font-medium transition-colors" type="button">
            <span class="w-4 h-3 relative overflow-hidden rounded-xs shadow-xs bg-blue-900 flex flex-col justify-between">
              <span class="bg-blue-900 h-1/2 w-1/2 absolute top-0 left-0 z-10"></span>
              <img alt="Inglés" src="/src/assets/images/flag_placeholder.png" class="flag flag-us" style="width: 18px;">
            </span>
            <span>+1 305-459-3115</span>
            <i class="pi pi-chevron-down text-[8px]"></i>
          </button>
          
          <div v-show="showMenuUs" class="absolute left-0 mt-1.5 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 py-1 z-50">
            <a href="https://wa.me/13054593115" target="_blank" class="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200">
              <i class="pi pi-whatsapp text-emerald-500"></i>
              <span>WhatsApp</span>
            </a>
            <a href="tel:+13054593115" class="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200">
              <i class="pi pi-phone text-sky-500"></i>
              <span>Llamar</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Configuración de Idioma, Moneda e Interruptor de Tema -->
      <div class="flex items-center gap-4">
        <select v-model="selectedCurrency" @change="$emit('update:currency', selectedCurrency)" class="bg-transparent border-none outline-none cursor-pointer font-bold">
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
        </select>

        <select v-model="selectedLanguage" @change="$emit('update:language', selectedLanguage)" class="bg-transparent border-none outline-none cursor-pointer font-bold">
          <option value="ES">ES</option>
          <option value="EN">EN</option>
        </select>

        <!-- Toggle de Tema Claro/Oscuro -->
        <!-- <button @click="toggleTheme" class="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
          <i v-if="isDark" class="pi pi-sun text-amber-400"></i>
          <i v-else class="pi pi-moon text-slate-700"></i>
        </button> -->
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { usePrimeVue } from 'primevue/config';

defineProps(['currency', 'language']);
const emit = defineEmits(['update:currency', 'update:language']);

const $primevue = usePrimeVue();
const selectedCurrency = ref('USD');
const selectedLanguage = ref('ES');
const showMenuEs = ref(false);
const showMenuUs = ref(false);
const isDark = ref(false);

const toggleMenuEs = (e) => { e.stopPropagation(); showMenuEs.value = !showMenuEs.value; if (showMenuEs.value) showMenuUs.value = false; };
const toggleMenuUs = (e) => { e.stopPropagation(); showMenuUs.value = !showMenuUs.value; if (showMenuUs.value) showMenuEs.value = false; };
const closeMenus = () => { showMenuEs.value = false; showMenuUs.value = false; };

const toggleTheme = () => {
  isDark.value = !isDark.value;
  applyTheme(isDark.value);
};

watch(isDark, (newValue) => {
  const html = document.documentElement;
  if (newValue) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  // Cambia el tema de PrimeVue Aura
  $primevue.changeTheme?.(`aura-light-green`, `aura-dark-green`, 'theme-link', () => {});
});

const applyTheme = (dark) => { isDark.value = dark; };

onMounted(() => {
  window.addEventListener('click', closeMenus);
  
  // Cargar tema guardado, si no hay: comenzar en LIGHT mode
  const savedTheme = localStorage.getItem('theme');
  let shouldBeDark = false;
  
  if (savedTheme === 'dark') {
    shouldBeDark = true;
  } else if (savedTheme === 'light') {
    shouldBeDark = false;
  } else {
    // Por defecto: light mode
    shouldBeDark = false;
    localStorage.setItem('theme', 'light');
  }
  
  applyTheme(shouldBeDark);
});

onUnmounted(() => { 
  window.removeEventListener('click', closeMenus); 
});
</script>

<style scoped>

</style>