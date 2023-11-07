<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';


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
  <header class="absolute left-80">
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
            <RouterLink class="menu-items transition duration-90 ml-5" to="/contact" @click="changeColor('contact')" :class="{ 'active': selectedLink === 'contact' || urlPath==='contact'}">contactos</RouterLink>
          </li>
          <li>
            <RouterLink class="menu-items transition duration-900 ml-5" to="/blog" @click="changeColor('blog')" :class="{ 'active': selectedLink === 'blog' || urlPath==='blog'}">Blog</RouterLink>
          </li>
          <li class="items-social w-2/12" style="opacity: 0;">
            <a href="" class="w-5 h-3 bg-white rounded-full ml-2">
              <font-awesome-icon :icon="['fab', 'facebook-f']"  class="text-black"/>
            </a>
            <a href="" class="w-5 h-3 bg-white rounded-full ml-4">
              <font-awesome-icon :icon="['fab', 'instagram']"  class="text-black"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>

  
  </header>


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
