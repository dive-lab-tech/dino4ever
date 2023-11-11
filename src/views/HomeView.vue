<script setup>
import { onMounted } from "vue";
import { setTitle } from "@/utils";
import GalleryHome from "@/components/GalleryHome.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FaqsView from "@/views/FaqsView.vue";
import Intro2Component from "@/components/Intro2Component.vue";
import BuyTicketsComponents from "@/components/BuyTicketsComponents.vue";


setTitle("Dinosaurios Recargados");


onMounted(() => {
 


 





});


</script>

<template>
  <div class="font-montserrat">

    <div class="w-full" id="home">
      <div class=" bg-white banner-dino-fit">
        <img src="@/assets/images/banner-home-sec-1.jpg" alt="" class=" max-[768px]:hidden" style="">
        <img src="@/assets/images/banner-home-sec-mobile-1.jpg" alt="" class="hidden max-[767px]:block">
      </div>
    </div>
    <BuyTicketsComponents />
    <div class=" max-[767px]:h-auto max-[767px]:py-10">
      <div class="h-full w-full pt-10 ">
        <div class="w-full my-20 flex justify-center items-center h-2/12 max-[767px]:my-10 ">
          <h1
            class="text-primaryLight font-extrabold text-4xl max-[767px]:text-center title-gallery font-montserrat-bold">
            NUESTRA DINOGALERÍA</h1>
        </div>
        <div class="h-10/12">
          <div class="flex justify-center items-center">
            <div class="w-6/12 max-[767px]:w-11/12 ">
              <GalleryHome />
            </div>
          </div>
        </div>

        <Intro2Component />

        <FaqsView />
        <FooterComponent />
      </div>
    </div>

  </div>
</template>
<style scoped>



.banner-dino-fit {
  background: linear-gradient(to bottom, transparent 0%, black 100%);
}

.title-gallery {
  text-shadow: rgb(255, 255, 255) 1px 0px 15px;
}





/* Pantallas grandes */
@media (min-width: 1500px) {}

/* PC */
@media (min-width: 1200px) and (max-width: 1499px) {}

/* Pantallas para tablets */
@media only screen and (min-width: 801px) and (max-width: 1199px) {}

/* Pantallas para tablets pequeñas*/
@media only screen and (min-width: 768px) and (max-width: 800px) {}

/* Pantallas mobiles */
@media only screen and (min-width: 381px) and (max-width: 767px) {

  .bg-home {
    background-image: url("@/assets/images/bg-home-mobile.webp");
  }

}

/*Mobile con pantallas pequeñas*/
@media (max-width: 380px) {
 
}</style>
