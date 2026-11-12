<template>
  <!-- <div class="w-full max-w-4xl mx-auto bg-linear-to-b from-slate-300 via-slate-300 to-slate-300 dark:bg-slate-300 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden"> bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100 dark:border-slate-700 transition-colors duration-300 -->
  <div class="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100 dark:border-slate-700 transition-colors duration-300">
    
    <!-- Pestañas de Navegación del Motor -->
    <div class="flex border-b border-slate-700">
      <button @click="activeTab = 'cars'" :class="['flex-1 py-4 text-center text-xl font-bold uppercase flex items-center justify-center gap-2 border-b-2 transition-all', activeTab === 'cars' ? 'border-yellow-500 text-yellow-400 bg-gray-500/10' : 'border-transparent text-slate-400 hover:text-slate-300']">
        <i class="pi pi-car"></i> Renta de Autos
      </button>
      <button @click="activeTab = 'hotels'" :class="['flex-1 py-4 text-center text-xl font-bold uppercase flex items-center justify-center gap-2 border-b-2 transition-all', activeTab === 'hotels' ? 'border-yellow-500 text-yellow-400 bg-gray-500/10' : 'border-transparent text-slate-400 hover:text-slate-300']">
        <i class="pi pi-building"></i> Hoteles en Cuba
      </button>
    </div>

    <div class="p-6 sm:p-8 text-slate-200">
      
      <!-- 🚗 Formulario de Autos -->
      <form v-if="activeTab === 'cars'" @submit.prevent="search" class="space-y-5">
        <div class="flex flex-col gap-2">
          <label class="text-xl font-bold uppercase tracking-wider text-black px-3 py-1 rounded-full w-fit">Categorías</label>
          <select v-model="carForm.category" class="w-full h-12 px-4 border border-slate-600 dark:border-slate-700 rounded-xl text-sm text-black focus:border-emerald-500 focus:outline-none transition-colors cursor-pointer">
            <option value="" disabled selected>Seleccione una categoría</option>
            <option v-for="cat in categories" :key="cat.code" :value="cat.code">{{ cat.name }}</option>
          </select>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <!-- Recogida -->
          <div class="p-5 bg-glinear-to-br from-emerald-600/20 to-emerald-700/10 rounded-xl space-y-4 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
            <h4 class="text-xl font-bold text-gray-700 uppercase flex items-center gap-2">
              <img src="/src/assets/plane-arrival.svg" alt="Logo" class="fill-yellow-300 stroke-yellow-300 h-5 mr-3" />
              <!-- <i class="pi pi-map-marker text-lg"></i>  -->
              Detalles de Recogida
            </h4>
            <div class="flex flex-col gap-2">
              <label class="text-[16px] text-slate-400 font-bold">Lugar</label>
              <select v-model="carForm.pickupLocation" class="w-full h-10 px-3 border border-slate-600 dark:border-slate-700 rounded-lg text-xs text-black focus:border-emerald-500 focus:outline-none transition-colors  cursor-pointer">
                <option value="" disabled selected>Aeropuerto José Martí - Terminal 3 - Habana (HAV)</option>
                <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-[16px] text-slate-400 font-bold block mb-1">Fecha</label>
                <input type="date" v-model="carForm.pickupDate" class="w-full h-10 px-3 border border-slate-600 dark:border-slate-700 dark:bg-slate-800/50 rounded-lg text-xs bg-slate-700/30 text-white focus:border-emerald-500 focus:outline-none transition-colors  cursor-pointer" />
              </div>
              <div>
                <label class="text-[16px] text-slate-400 font-bold block mb-1">Hora</label>
                <input type="time" v-model="carForm.pickupTime" class="w-full h-10 px-3 border border-slate-600 dark:border-slate-700 dark:bg-slate-800/50 rounded-lg text-xs bg-slate-700/30 text-white focus:border-emerald-500 focus:outline-none transition-colors  cursor-pointer" />
              </div>
            </div>
          </div>

          <!-- Entrega -->
          <div class="p-5 rounded-xl space-y-4 border border-emerald-500/30">
            <h4 class="text-xl font-bold text-gray-700 uppercase flex items-center gap-2">
              <img src="/src/assets/plane-departure.svg" alt="Logo" class="fill-yellow-300 stroke-yellow-300 h-5 mr-3" />
              <!-- <i class="pi pi-flag text-lg"></i>  -->
              Detalles de Entrega
            </h4>
            <div class="flex flex-col gap-2">
              <label class="text-[16px] text-slate-400 font-bold">Lugar</label>
              <select v-model="carForm.returnLocation" class="w-full h-10 px-3 border border-slate-600 dark:border-slate-700 rounded-lg text-xs text-black focus:border-emerald-500 focus:outline-none transition-colors  cursor-pointer">
                <option value="" disabled selected>Aeropuerto José Martí - Terminal 3 - Habana (HAV)</option>
                <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
              </select>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-[16px] text-slate-400 font-bold block mb-1">Fecha</label>
                <input type="date" v-model="carForm.returnDate" class="w-full h-10 px-3 border border-slate-600 dark:border-slate-700 dark:bg-slate-800/50 rounded-lg text-xs bg-slate-700/30 text-white focus:border-emerald-500 focus:outline-none transition-colors  cursor-pointer" />
              </div>
              <div>
                <label class="text-[16px] text-slate-400 font-bold block mb-1">Hora</label>
                <input type="time" v-model="carForm.returnTime" class="w-full h-10 px-3 border border-slate-600 dark:border-slate-700 dark:bg-slate-800/50 rounded-lg text-xs bg-slate-700/30 text-white focus:border-emerald-500 focus:outline-none transition-colors  cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <button type="submit" class="w-40 h-14 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-xl text-sm uppercase tracking-wide shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105 cursor-pointer">
          <i class="pi pi-search mr-2"></i> Buscar
        </button>
      </form>

      <!-- 🏢 Formulario de Hoteles -->
      <form v-else @submit.prevent="search" class="space-y-5">
        <div class="flex flex-col gap-2">
          <label class="text-xl font-bold uppercase tracking-wider text-black px-3 py-1 rounded-full w-fit">Destino en Cuba</label>
          <select v-model="hotelForm.destination" class="w-full h-12 px-4 border border-slate-600 dark:border-slate-700 rounded-xl text-sm text-black focus:border-emerald-500 focus:outline-none transition-colors">
            <option v-for="dest in destinations" :key="dest" :value="dest">{{ dest }}</option>
          </select>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="text-[16px] text-slate-400 font-bold block mb-2">Check-in</label>
            <input type="date" v-model="hotelForm.checkIn" class="w-full h-12 px-4 border border-slate-600 dark:border-slate-700 dark:bg-slate-800/50 rounded-xl text-sm bg-slate-700/30 text-white focus:border-emerald-500 focus:outline-none transition-colors" />
          </div>
          <div>
            <label class="text-[16px] text-slate-400 font-bold block mb-2">Check-out</label>
            <input type="date" v-model="hotelForm.checkOut" class="w-full h-12 px-4 border border-slate-600 dark:border-slate-700 dark:bg-slate-800/50 rounded-xl text-sm bg-slate-700/30 text-white focus:border-emerald-500 focus:outline-none transition-colors" />
          </div>
          <div>
            <label class="text-[16px] text-slate-400 font-bold block mb-2">Huéspedes</label>
            <input type="text" v-model="hotelForm.guests" placeholder="2 Adultos" class="w-full h-12 px-4 border border-slate-600 dark:border-slate-700 dark:bg-slate-800/50 rounded-xl text-sm bg-slate-700/30 text-white focus:border-emerald-500 focus:outline-none transition-colors" />
          </div>
        </div>

          <button type="submit" class="w-40 h-14 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-xl text-sm uppercase tracking-wide shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105 cursor-pointer">
          <i class="pi pi-search mr-2"></i> Buscar
        </button>
        <!-- <button type="submit" class="w-full h-14 bg-linear-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-bold rounded-xl text-sm uppercase tracking-wide shadow-lg transition-all transform hover:scale-105">
          <i class="pi pi-search mr-2"></i> Buscar
        </button> -->
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const activeTab = ref('cars');
const locations = ['Aeropuerto José Martí - Terminal 3 - Habana (HAV)',
'Aeropuerto José Martí - Terminal 2 - Habana (HAV)', 
'Aeropuerto Varadero (VRA)', 'Varadero Centro', 'La Habana Vedado'];
const destinations = ['La Habana', 'Varadero', 'Cayo Santa María', 'Cayo Coco'];
const categories = [
  { name: 'Todas', code: 'all' },
  { name: 'Económico', code: 'eco' },
  { name: 'Medio', code: 'medio' },
  { name: 'Medio Alto', code: 'medio-alto' },
  { name: 'Van Jeep', code: 'van-jeep' }
];

const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const today = new Date();
const returnDateObj = new Date();
returnDateObj.setDate(today.getDate() + 3);

const carForm = ref({
  category: '',
  pickupLocation: '',
  pickupDate: getFormattedDate(today),
  pickupTime: '12:00',
  returnLocation: '',
  returnDate: getFormattedDate(returnDateObj),
  returnTime: '12:00'
});
const hotelForm = ref({ destination: '', checkIn: '', checkOut: '', guests: '' });

// Observador para actualizar la fecha de devolución automáticamente
watch(() => carForm.value.pickupDate, (newPickupDate) => {
  if (newPickupDate) {
    // El valor del input es un string 'YYYY-MM-DD'.
    // Lo convertimos a un objeto Date. El constructor de Date maneja este formato,
    // pero para evitar problemas de zona horaria, es más seguro construirlo así:
    const parts = newPickupDate.split('-').map(Number);
    const pickupDateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    pickupDateObj.setDate(pickupDateObj.getDate() + 3);
    carForm.value.returnDate = getFormattedDate(pickupDateObj);
  }
});

const search = () => {
  alert('Iniciando búsqueda de disponibilidad...');
};
</script>

<style scoped>

 
</style>
