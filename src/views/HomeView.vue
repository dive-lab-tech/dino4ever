<script setup>
import gsap from 'gsap';
import {  onMounted } from 'vue';


onMounted(() => {
  gsap.to('.banner-dino', {duration: 1, opacity: 1, ease: 'power2.inOut', onStart: ()=>{
    gsap.to('.container-logo-heroes', {duration: 0.4, scale: 1, ease: 'power2.inOut', delay: 1.5, onComplete: () => {
    gsap.to('.logo-dino-banner', {duration: 0.4, scale: 1, ease: 'power2.inOut', delay: 0.8});
  }});
  }});
});
</script>

<template>
  <div class=" font-montserrat">
    <div class="h-screen overflow-hidden banner-dino" style="opacity: 0;">
  <div class="bg-home w-full h-full">
    <div class="flex flex-col h-full w-full pt-28  justify-between">
      <div class="relative w-fit container-logo-heroes" style="transform: scale(0);">
       <div class=" flex flex-col justify-center w-9/12">
        <img src="@/assets/images/logo-heroes-home.webp" alt="" >
        <div class="logo-heroes font-semibold text-sm"></div>
       </div>
      </div>
      <div class="w-full">
       <div class="relative container-logo-dino"> <img src="@/assets/images/logo-banner-home.webp" alt="" class=" logo-dino-banner" style="transform:scale(0);"></div>
      </div>
      <div class=" mb-3 pb-4">
        <div class=" flex flex-col justify-center ">
         <div class="text-intro  relative w-fit">
          <img src="@/assets/images/text-intro.png" alt="" srcset="" class="image-text-intro">
         </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>


 </template>
<style scoped>

.text-intro{
  left: 33rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}



.image-text-intro{
  width: 80%;
  margin-top: -30px;
}



.logo-heroes::after{
  content: 'PRESENTA';
  color: #fff;
  display: block;
  width: 100%;
  text-align: center;
  
  
}
.bg-home{
  background-image: url('@/assets/images/bg-home.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.logo-dino-banner{
  width: 35%;
  height: auto;
}

.container-logo-dino{
  left: 300px;
}

.container-logo-heroes{
  left: 28rem;
  
}


</style>
