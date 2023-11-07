<script setup>
import { VueFinalModal } from 'vue-final-modal'
import { onMounted, defineEmits} from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { gsap } from 'gsap'
const modules = [Keyboard, Autoplay, Pagination, Navigation];
defineProps({
    index: Number,
    images: Array
})

const emit = defineEmits(['confirm'])

const closeModal = () => {
    emit('confirm');
}

onMounted(() => {

});


</script>

<template>
    <VueFinalModal class="menu-modal h-full" content-class="menu-modal-content" overlay-transition="vfm-fade"
        content-transition="vfm-fade">
   
    <button class="bg-black w-14 h-14 rounded-full flex justify-center items-center absolute top-7 right-7 z-50" @click="closeModal">
        <font-awesome-icon icon="xmark"  class="text-white text-5xl"/>
    </button>
 
  <div class="flex justify-center items-center h-full">
    <div class="modal-slider-content flex justify-center items-center">
    
<swiper :navigation="true"  :modules="modules" class="mySwiperModal" :loop="true" :initial-slide="index"  :autoplay="{
    delay: 3500,
    disableOnInteraction: false,
  }" >
    <swiper-slide v-for="(imageSlider, indexImage) in images" :key="indexImage">
        <div class=" bg-black">
            <img :src="imageSlider.src" v-if="imageSlider.type=='img'" class="img-slider"/>
            <video :src="imageSlider.src"  autoplay  v-else></video>
        </div>
    </swiper-slide>
  </swiper>


    </div>
  </div>

    </VueFinalModal>
</template>
<style >
.mySwiperModal {
  width: 100%;
  /* height: 450px !important; */
}

.swiper-button-prev{
    color: white;
}
.swiper-button-next{
    color: white;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.mySwiperModal .swiper-slide img {
  display: block;
  width: 100%;
  height: 600px;
  object-fit: cover;
}
.mySwiperModal .swiper-slide video {
  display: block;
  width: 100%;
  height: 600px;
  object-fit: cover;
}


.modal-slider-content{
    width: 90%;
    height: 80%;
}


 .menu-modal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-modal-content {
    display: flex;
    flex-direction: column;
    padding: 0rem;
    /* border-radius: 0.5rem; */
    width: 80%;
  }
  .menu-modal-content > * + * {
    margin: 0.0rem 0;
  }
  .menu-modal-content h1 {
    font-size: 1.375rem;
  }
  
  .menu-modal-content{
    display: flex;
    flex-direction: column;
    padding: 0rem;
    background-color: #000;
    /* border-radius: 0.5rem; */
    width: 100vw;
    height: 100vh;
    z-index: 1000; 
  }

/* Pantallas grandes */
@media (min-width: 1500px) {}

/* PC */
@media (min-width: 1200px) and (max-width: 1499px) {}

/* Pantallas para tablets */
@media only screen and (min-width: 801px) and (max-width: 1199px) {
  
}

/* Pantallas para tablets pequeñas*/
@media only screen and (min-width: 768px) and (max-width: 800px) {
 
}

/* Pantallas mobiles */
@media only screen and (min-width: 381px) and (max-width: 767px) {


}

/*Mobile con pantallas pequeñas*/
@media (max-width: 380px) {



}
</style>
