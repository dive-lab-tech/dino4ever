<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
// import FooterComponent from '@/components/FooterComponent.vue';
import preloader from '@/components/PreLoader.vue';



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
  <header class="absolute left-80 max-[767px]:hidden" >
    <div >
      <nav>
        <ul class="flex justify-center items-center text-white uppercase">
          <li>
            <RouterLink class="menu-items transition duration-900" to="/home" @click="changeColor('home')" :class="{ 'active': selectedLink === 'home' || urlPath==='home' }"><img src="@/assets/images/logo-site.webp" class="logo-menu" alt=""></RouterLink>
          </li>
          <li>
            <RouterLink class="menu-items transition duration-900 ml-5" to="/home" @click="changeColor('home')" :class="{ 'active': selectedLink === 'home' || urlPath==='home'   }">Home</RouterLink>
          </li>
          <li>
            <RouterLink class="menu-items transition duration-90 ml-5" to="/faqs" @click="changeColor('faqs')" :class="{ 'active': selectedLink === 'faqs' || urlPath==='faqs'}">Faqs</RouterLink>
          </li>
          <li>
            <RouterLink class="menu-items transition duration-900 ml-5" to="/blog" @click="changeColor('blog')" :class="{ 'active': selectedLink === 'blog' || urlPath==='blog'}">Blog</RouterLink>
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
