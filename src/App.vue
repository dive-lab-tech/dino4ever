<script setup>
import {  RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';
import Lenis from '@studio-freight/lenis'
import preloader from '@/components/PreLoader.vue';
import ModalMenu from '@/components/ModalMenu.vue'
import { useModal } from 'vue-final-modal'
import HomeView from '@/views/HomeView.vue';

const isMobile = ref(false);
const scrollMobileY = ref(false);


const { open: openModal, close: closeModal } = useModal({
    component: ModalMenu,
    props: {
    },
    attrs: {
      onConfirm() {
        closeModal()
      }
    }
  });


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const selectedLink = ref(null);
const urlPath = ref(null);




const changeColor = (link) => {
  selectedLink.value = link;
};

onMounted(() => {
  selectedLink.value = window.location.pathname.substring(1);

  windowResize();
  window.addEventListener('resize', windowResize);
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});





//Detectar el tamaño de la pantalla
const windowResize = () => {

  if(window.innerWidth < 768){
    isMobile.value = true;
  }else{
    isMobile.value = false;
  }
};

// Detectar el scrollY de 100px

const handleScroll = () => {
  scrollMobileY.value = window.scrollY > 100*2;
  console.log(scrollY.value)
};





</script>

<template>


<header class="" v-if="isMobile==true">
  <div class="w-full transition duration-400" :class="scrollMobileY==true?' bg-black  border-b border-gray-800 fixed':'absolute'"  style="  z-index: 100;">
    <div class="h-full flex justify-between py-2 px-3 ">
      <div>
        <span class="sr-only">Home</span>
         <a href="/#home" > <img src="@/assets/images/logo-site.webp" class=" logo-dino-mobile" alt=""></a>
      </div>
      <div class=" flex items-center">
        <button 
              class="rounded  text-gray-600 transition hover:text-gray-600/75" @click="openModal()"
            >
            <font-awesome-icon :icon="['fas', 'bars']" class="text-4xl mr-2 text-white"/>
            </button>
      </div>
    </div>
  </div>
</header>
  <header class="absolute  max-[767px]:hidden font-montserrat w-full" else>
    <div >
      <nav class="flex justify-between px-20">
        <a class="menu-items transition duration-900" href="/#home" @click="changeColor('home')" :class="{ 'active': selectedLink === 'home' || urlPath==='home' }"><img src="@/assets/images/logo-site.webp" class="logo-menu" alt=""></a>
        <ul class="flex justify-center items-center text-white uppercase">
          <li>
            <a class="transition duration-900 ml-5 bg-secondary text-black px-2 py-1 rounded-lg" href="/#home" >COMPRAR ENTRADAS</a>
          </li>
          <li>
            <a class="menu-items transition duration-900 ml-5" href="/#home" @click="changeColor('home')" :class="{ 'active': selectedLink === 'home' || urlPath===''   }">Inicio</a>
          </li>
          <li>
            <a class="menu-items transition duration-90 ml-5" href="/#faqs" @click="changeColor('faqs')" :class="{ 'active': selectedLink === 'faqs' || urlPath==='faqs'}">Preguntas frecuentes</a>
          </li>

        </ul>
      </nav>
    </div>
  </header>



  <preloader />
  <HomeView />


</template>

<style scoped>
header{
  top: 1rem;

}
.logo-menu{
  width: 75%;
  height: auto;
}
.menu-items{
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
}
.logo-dino-mobile{
  width: 50%;
  height: auto;
}

li{
  align-items: center;
  padding: 0 1rem;
  font-size: 1.2rem;
}


.active{
  color: #FFC107;
}


</style>
