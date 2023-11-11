<script setup>
import { VueFinalModal } from 'vue-final-modal'
import { onMounted, defineEmits } from 'vue'
import gsap from 'gsap';


const emit = defineEmits(['confirm'])

const closeModal = () => {
    emit('confirm');
}

onMounted(() => {
 const itemsMenu = document.querySelectorAll('.item-menu');
    gsap.to(itemsMenu, {
        duration: 1,
        opacity: 1,
        ease: 'power2.inOut',
      
    })
});


</script>

<template>
    <VueFinalModal class="menu-modal-mobile h-full" content-class="menu-modal-mobile-content" overlay-transition="vfm-fade"
        content-transition="vfm-fade">
        <button type="button" @click="closeModal()" class="w-fit absolute right-8 top-4">
            <font-awesome-icon icon="xmark" class="text-white text-5xl" />
        </button>

        <div class=" w-full h-full bg-menu-mobile bg-opacity-20 font-montserrat">
            <div class="h-full w-full  flex items-center bg-black bg-opacity-80">
                <div class=" w-full ">
                    <ul class="w-full flex flex-col justify-center">
                        
                        <li class="text-center mb-5">
                            <a href="/#home" @click="closeModal()" class="items-menu-mobile item-menu text-white px-4 py-1  rounded-lg text-2xl " style="opacity: 0;">Inicio</a>
                        </li>
                        <li class="text-center mb-5">
                           <a href="/#faqs" @click="closeModal()" class="items-menu-mobile item-menu text-white px-4 py-1  rounded-lg text-2xl " style="opacity: 0;">Preguntas frecuentes</a>
                        </li>
                        <li class=" w-full flex justify-center">
                            <a class="transition  duration-900  bg-secondary text-black px-2 py-1 rounded-lg  item-menu"
                                href="/#home" style="opacity: 0;">COMPRAR ENTRADAS</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </VueFinalModal>
</template>
<style >
.bg-menu-mobile {
    background-image: url('@/assets/images/bg-2.webp');
}


.modal-slider-content {
    width: 90%;
    height: 80%;
}


.menu-modal-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-modal-mobile-content {
    display: flex;
    flex-direction: column;
    padding: 0rem;
    /* border-radius: 0.5rem; */
    width: 80%;
}

.menu-modal-mobile-content>*+* {
    margin: 0.0rem 0;
}

.menu-modal-mobile-content h1 {
    font-size: 1.375rem;
}

.menu-modal-mobile-content {
    display: flex;
    flex-direction: column;
    padding: 0rem;
    background-color: #000;
    /* border-radius: 0.5rem; */
    width: 100vw;
    height: 100vh;
    z-index: 1000;
}

.items-menu-mobile {
    text-shadow: 0px 0px 17px rgba(0, 255, 255, 1);
}




/* Pantallas grandes */
@media (min-width: 1500px) {}

/* PC */
@media (min-width: 1200px) and (max-width: 1499px) {}

/* Pantallas para tablets */
@media only screen and (min-width: 801px) and (max-width: 1199px) {}

/* Pantallas para tablets pequeñas*/
@media only screen and (min-width: 768px) and (max-width: 800px) {}

/* Pantallas mobiles */
@media only screen and (min-width: 381px) and (max-width: 767px) {}

/*Mobile con pantallas pequeñas*/
@media (max-width: 380px) {}
</style>