<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import accordionComponent from '@/components/AccordionComponent.vue';
import { itemsFaqs } from '@/utils/data';
import {setTitle} from '@/utils';
import SplitType from 'split-type'
import { onMounted, ref } from 'vue';


setTitle('Preguntas Frecuentes');

onMounted (()=>{

  // const split = new SplitType ('.title-faqs', {
  //   types: 'char, word, lines',
  //   charClass: 'charTitleFaqs',
  //   wordClass: 'wordTitleFaqs',
  //   lineClass: 'lineTitleFaqs',
  // })

});


</script>
<template class="">
    <div class=" bg-faqs overflow-hidden w-full max[767px]:px-2 h-screen">
        <div class=" w-full h-full bg-black bg-opacity-40 px-2">
          <div class="flex justify-center">
            <div class="pt-20 w-5/12 max-[767px]:w-full">
            <div class="my-14 flex justify-center ">
                <h1 class=" text-primary text-4xl mb-4 text-center uppercase title-faqs bg-primaryLight px-1 py-1 rounded-md font-montserrat-bold" style=" font-weight: 800;">Preguntas frecuentes</h1>
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