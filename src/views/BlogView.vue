<script setup>
import{ onMounted } from 'vue';
import {setTitle} from '@/utils';
import FooterComponent from '@/components/FooterComponent.vue';

setTitle('Blog | Dinosaurios Recargados');


</script>

<template>
  <div class=" bg-black h-screen w-screen">
    <div class="flex justify-center items-center h-full w-full">
      <h1 class="text-white">This is an Blog page</h1>
    </div>
  
  </div>
  <footer>
  <FooterComponent />
</footer>
</template>

<style>

</style>
