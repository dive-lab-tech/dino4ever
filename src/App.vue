<script setup>
import {  RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
// import FooterComponent from '@/components/FooterComponent.vue';
import Lenis from '@studio-freight/lenis'
import preloader from '@/components/PreLoader.vue';


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
  
});


</script>

<template>
  <header class="absolute  max-[767px]:hidden font-montserrat w-full" >
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
  <RouterView />


</template>

<style scoped>
header{
  top: 1rem;
  z-index: 100;
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

li{
  align-items: center;
  padding: 0 1rem;
  font-size: 1.2rem;
}


.active{
  color: #FFC107;
}


</style>
