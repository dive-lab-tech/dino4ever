<script setup>
import {RouterLink} from 'vue-router'


</script>
<template>
 <div class="absolute left-20 bg-black">
  
   <ul class="flex text-white">
        <li>
        <RouterLink to="/"><img src="@/assets/images/logo-site.webp" alt=""></RouterLink>
        </li>
        <li>
        <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
        <RouterLink to="/contact">Contact</RouterLink>
        </li>
        <li>
        <RouterLink to="/blog">blog</RouterLink>
        </li>
   </ul>
 </div>
</template>

<style scoped>


</style>