<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import accordionComponent from '@/components/accordionComponent.vue';
import { itemsFaqs } from '@/utils/data';
import {setTitle} from '@/utils';

setTitle('Preguntas Frecuentes');

</script>
<template>
    <div class=" bg-faqs ">
        <div class=" w-full h-full bg-black bg-opacity-40 py-20">
          <div class="flex justify-center">
            <div class="pt-20 w-5/12">
            <div class="sm:mb-14">
                <h1 class=" font-bold text-5xl mb-4 text-center uppercase text-secondary">Preguntas frecuentes</h1>
            </div>
            <!-- <ul class="list-ask font-montserrat">
                <li v-for="item in itemsFaqs" :key="item.id" class="text-white items-ask mb-5">
                    <h4 class="text-primary font-semibold text-xl">{{item.ask}}</h4>
                    <p v-html="item.answer"></p>
                </li>
            </ul> -->
            <accordionComponent  :itemsFaqs="itemsFaqs"/>
        </div>
          </div>
        </div>
    </div>
    <footer>
  <FooterComponent />
</footer>
</template>

<style scoped>

.bg-faqs {
    background: url('@/assets/images/bg-2.webp');
    background-attachment: fixed;
    background-size: cover;
}

</style>