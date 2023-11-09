<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const isLoading = ref(true);

onMounted(() => {

    gsap.to('.preloader', {
        duration: 1,
        opacity: 0,
        ease: 'power2.inOut',
        delay: 1,
        onComplete: () => {
        isLoading.value = false;
        },
    });

});
</script>


<template>
    <div class="preloader transition duration-300" v-if="isLoading">
      <div class="spinner">
        <img src="@/assets/images/preloader-dr.gif" alt="" class=" ">
      </div>
    </div>
  </template>
  
  <style scoped>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
  
  .spinner {
    width: 200px;
    height: 200px;
    position: relative;
  }
  

  </style>
  
