<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <!-- Col 1: Brand -->
            <div class="space-y-4">
                <div class="flex items-center">
                    <a href="https://cubarentacaronline.com/" class="">
                        <img src="/src/assets/logo.svg" alt="Logo" class="h-8 mr-3" />
                    </a>
                    <!-- <i class="fas fa-car-side text-3xl text-primary mr-2"></i>
                    <span class="font-bold text-2xl tracking-tight text-white">
                        CubaRent<span class="text-primary">Car</span>
                    </span> -->
                </div>
                <p class="text-sm text-slate-400">
                    La mejor opción para rentar un auto en Cuba. Vehículos modernos, seguros y al mejor precio para tus vacaciones.
                </p>
            </div>

            <!-- Col 2: Links Rápidos -->
            <div>
                <h4 class="text-white text-lg font-bold mb-6">Soporte</h4>
                <ul class="space-y-3 text-sm">
                    <li><a href="#" class="hover:text-primary transition-colors flex items-center"><i class="pi pi-angle-right mr-2 text-primary"></i> Block</a></li>
                    <li><a href="#" class="hover:text-primary transition-colors flex items-center"><i class="pi pi-angle-right mr-2 text-primary"></i> Cancelaciones</a></li>
                    <li><a href="#" class="hover:text-primary transition-colors flex items-center"><i class="pi pi-angle-right mr-2 text-primary"></i> Preguntas Frecuentes</a></li>
                    <!-- <li><a href="#" class="hover:text-primary transition-colors flex items-center"><i class="fas fa-angle-right mr-2 text-primary"></i> Contactar</a></li> -->
                </ul>
            </div>
            
            <!-- Col 3: Legales -->
            <div>
                <h4 class="text-white text-lg font-bold mb-6">Información Legal</h4>
                <ul class="space-y-3 text-sm">
                    <li><a href="#" class="hover:text-primary transition-colors flex items-center"><i class="pi pi-angle-right mr-2 text-primary"></i> Términos y Condiciones</a></li>
                    <li><a href="#" class="hover:text-primary transition-colors flex items-center"><i class="pi pi-angle-right mr-2 text-primary"></i> Política de Privacidad</a></li>
                    <li><a href="#" class="hover:text-primary transition-colors flex items-center"><i class="pi pi-angle-right mr-2 text-primary"></i> Quiénes Somos</a></li>
                    <!-- <li><a href="#" class="hover:text-primary transition-colors flex items-center"><i class="pi pi-angle-right mr-2 text-primary"></i> Política de Cookies</a></li> -->
                    <!-- <li><a href="#" class="hover:text-primary transition-colors flex items-center"><i class="pi pi-angle-right mr-2 text-primary"></i> Seguros y Coberturas</a></li> -->
                </ul>
            </div>

            <!-- Col 4: Contacto -->
            <div class="">
                <h4 class="text-white text-lg font-bold mb-6">Síganos</h4>
                <div class="flex space-x-4 pt-2">
                    <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><i class="pi pi-facebook"></i></a>
                    <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><i class="pi pi-instagram"></i></a>
                    <!-- <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><i class="pi pi-twitter"></i></a> -->
                </div>
            </div>

        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12 border-t border-slate-800 pt-8 mt-8">
            <!-- Col 4: Contacto -->
            <!-- <div> -->
                <div>
                    <ul class="space-y-4 text-sm">
                        <li class="flex items-start mb-0">
                            <i class="pi pi-map-marker mt-1 mr-3 text-primary"></i>
                            <span>448 E, 9th st, Hialeah 33010, Florida, EE.UU</span>
                        </li>
                        <li class="flex items-start mb-0">
                            <a href="tel:+13056308432" class="flex items-start gap-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-400">
                                <img
                                    alt="España"
                                    src="/src/assets/images/flag_placeholder.png"
                                    class="flag flag-us mr-2"
                                    style="width: 18px"
                                />
                                <i class="pi pi-phone mr-1 text-primary"></i>
                                <span>+1 305-630-8432</span>
                            </a>
                        </li>
                        <li class="flex items-start mb-5">
                            <i class="pi pi-clock mt-1 mr-3 text-primary"></i>
                            <span>Lun - Vie / 10:00 - 18:00</span>
                        </li>
                    </ul>
                    
                </div>
                <div>
                    <ul class="space-y-4 text-sm">
                        <li class="flex items-start mb-0">
                            <i class="pi pi-map-marker mt-1 mr-3 text-primary"></i>
                            <span>Calle Mallorca 410, entresuelo 8, Barcelona, España</span>
                        </li>
                        <li class="flex items-start mb-0">
                            <a href="tel:+34644535442" class="flex items-start gap-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-400">
                                <!-- src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" -->
                                <img
                                    alt="España"
                                    src="/src/assets/images/flag_placeholder.png"
                                    class="flag flag-es mr-2"
                                    style="width: 18px"
                                />
                                <i class="pi pi-phone mr-1 text-primary"></i>
                                <span>+34 644 53 54 42</span>
                            </a>    
                        </li>   
                        <li class="flex items-start">
                            <i class="pi pi-clock mt-1 mr-3 text-primary"></i>
                            <span>Lun - Vie / 10:00 - 18:00</span>
                        </li>
                    </ul>

                </div>
            <!-- </div> -->
        </div>

        <!-- Copyright -->
        <div class="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {{ new Date().getFullYear() }} 
                <a href="https://cubarentacaronline.com/" class=" text-yellow-300 hover:text-white transition-colors">CubaRentaCarOnline</a>,  Todos los derechos reservados.</p>
            <!-- <div class="flex items-center space-x-4 mt-4 md:mt-0">
                <i class="fab fa-cc-visa text-2xl hover:text-white transition-colors cursor-pointer"></i>
                <i class="fab fa-cc-mastercard text-2xl hover:text-white transition-colors cursor-pointer"></i>
                <i class="fab fa-cc-paypal text-2xl hover:text-white transition-colors cursor-pointer"></i>
            </div> -->
        </div>
    </div>
</template>

<script setup>

</script>