<script setup>
import accordionComponent from '@/components/accordionComponent.vue';
import { setTitle } from '@/utils';
import { onMounted } from 'vue';
import gsap from 'gsap';


setTitle('Preguntas Frecuentes');

onMounted(() => {

  gsap.to(
    '.title-faqs',
    {
      duration: 0.7,
      opacity: 1,
      ease: 'power2.inOut',
      delay: 0.5,
      onComplete: () => {
        const itemsAccordion = document.querySelectorAll(".item-accordion");
        itemsAccordion.forEach((itemAccordion, index) => {
          gsap.to(itemAccordion, {
            duration: 0.5,
            opacity: 1,
            transform: "translateX(0)",
            delay: 0.1 * index,
            ease: "power2.inOut",
          })
        });
      }
    },
  )


});












</script>
<template class="">
  <div class=" bg-faqs  w-full max[767px]:px-2   " id="faqs">
    <div class=" w-full h-full bg-black bg-opacity-40 px-2">
      <div class="flex justify-center">
        <div class="pt-10 w-5/12 max-[1199px]:w-7/12 max-[767px]:w-full">
          <div class="my-10 flex justify-center ">
            <h1
              class=" text-primary text-4xl mb-4 text-center uppercase title-faqs bg-primaryLight px-1 py-1 rounded-md font-montserrat-bold max-[767px]:text-2xl"
              style=" font-weight: 800; opacity: 0;">Preguntas frecuentes</h1>
          </div>

          <!-- <ul class="list-ask font-montserrat">
                <li v-for="item in itemsFaqs" :key="item.id" class="text-white items-ask mb-5">
                    <h4 class="text-primary font-semibold text-xl">{{item.ask}}</h4>
                    <p v-html="item.answer"></p>
                </li>
            </ul> -->
          <accordionComponent />
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.bg-faqs {
  background: url('@/assets/images/bg-2.webp');
  background-attachment: fixed;
  background-size: cover;

}
</style>