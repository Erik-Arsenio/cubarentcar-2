<script setup>
import { ref } from 'vue';
import Topbar from './components/layout/Topbar.vue';
import Header from './components/layout/Header.vue';
import Footer  from './components/layout/Footer.vue';
import BookingForm from './components/booking/BookingForm.vue';

const currency = ref('USD');
const language = ref('ES');

const vehicles = [
  { name: 'Kia Picanto', price: 55, transmission: 'Manual', ac: true, passengers: 5 },
  { name: 'Peugeot 301', price: 70, transmission: 'Manual', ac: true, passengers: 5 },
  { name: 'Geely Emgrand', price: 95, transmission: 'Automática', ac: true, passengers: 5 },
  { name: 'Hyundai Santa Fe', price: 130, transmission: 'Automática', ac: true, passengers: 7 }
];
</script>

<template>
<div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col">
    <Topbar v-model:currency="currency" v-model:language="language" />
    <Header />

    <!-- Hero -->
    <section class="relative bg-slate-50 text-black py-16 px-4 text-center">
      <div class="relative z-10 max-w-6xl mx-auto space-y-4">
        <h1 class="text-3xl sm:text-5xl font-bold uppercase">Vuelo + Auto al mejor precio</h1>
        <p class="text-black text-sm sm:text-base max-w-2xl mx-auto">Reserva ahora y paga tu viaje a plazos.</p>
        <BookingForm />
      </div>
    </section>

    <!-- Flota Destacada -->
    <section id="categorias" class="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-16 py-16 flex-1 hidden">
      <h2 class="text-2xl font-black text-center mb-8">Nuestra Flota de Autos</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(vehicle, idx) in vehicles" :key="idx" class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-shadow">
          <div class="h-48 bg-linear-to-b from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
            <div class="text-center">
              <i class="pi pi-car text-slate-500 text-5xl block mb-2"></i>
              <p class="text-xs text-slate-600 font-semibold">{{ vehicle.name }}</p>
            </div>
          </div>
          <div class="p-4 space-y-3">
            <h3 class="font-bold text-lg">{{ vehicle.name }}</h3>
            <p class="text-xs text-slate-500">{{ vehicle.transmission }}, Aire Acondicionado, {{ vehicle.passengers }} Pasajeros.</p>
            <div class="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-800">
              <span class="font-black text-emerald-500 text-lg">${{ vehicle.price }} / día</span>
              <button class="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors">Reservar</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tu Aliado de Confianza -->
    <section id="quienes-somos" class="bg-linear-to-r from-slate-900 to-slate-800 text-white py-16 px-4 sm:px-8 lg:px-16 hidden">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-3xl font-black mb-4">Tu Aliado de Confianza para Recorrer Cuba</h2>
            <p class="text-slate-300 mb-6">Somos una plataforma segura que te facilita el alquiler de hoteles en Cuba. Con más de 10 años de experiencia, garantizamos confirmación inmediata y soporte 24/7.</p>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <i class="pi pi-check-circle text-emerald-500 text-lg flex shrink-0 mt-0.5"></i>
                <div>
                  <p class="font-bold">Confirmación Inmediata</p>
                  <p class="text-sm text-slate-400">Reserva confirmada al instante con garantía</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="pi pi-check-circle text-emerald-500 text-lg flex shrink-0 mt-0.5"></i>
                <div>
                  <p class="font-bold">Asistencia 24/7</p>
                  <p class="text-sm text-slate-400">Soporte en español durante tu viaje</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <i class="pi pi-check-circle text-emerald-500 text-lg flex shrink-0 mt-0.5"></i>
                <div>
                  <p class="font-bold">Mejores Precios</p>
                  <p class="text-sm text-slate-400">Las tarifas más competitivas del mercado</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="bg-emerald-600/20 rounded-2xl p-8 border border-emerald-500/30">
              <div class="text-center space-y-4">
                <i class="pi pi-shield text-emerald-400 text-6xl block"></i>
                <h3 class="text-2xl font-bold">Seguridad Garantizada</h3>
                <p class="text-slate-300 text-sm">Todas nuestras transacciones están protegidas con encriptación de nivel bancario</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 px-4 sm:px-8 lg:px-16">
      <Footer />
      <div class="max-w-7xl mx-auto text-center space-y-2 text-xs hidden">
        <p class="font-bold text-white text-sm">CubaRentCarOnline</p>
        <p>&copy; 2026. Todos los derechos reservados. Soporte: +34 644 53 54 42 / +1 305-630-8432</p>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
