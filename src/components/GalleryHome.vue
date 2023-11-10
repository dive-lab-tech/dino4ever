<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import videoSource from '@/assets/images/video.mp4';
import { useModal, ModalsContainer } from 'vue-final-modal'
import ModalGallery from '@/Components/ModalGallery.vue'
const indexImageView = ref(0);


import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const images = [
  { id: 0, type: 'img', src: 'https://static.wixstatic.com/media/20aed8_e4804607d44140aa9214c771bae7560b~mv2.jpg/v1/fit/w_1528,h_860,q_90/20aed8_e4804607d44140aa9214c771bae7560b~mv2.jpg' },
  { id: 1, type: 'img', src: 'https://static.wixstatic.com/media/20aed8_5a54e0096425414cb8322b0ba4692c30~mv2.jpg/v1/fit/w_1528,h_860,q_90/20aed8_5a54e0096425414cb8322b0ba4692c30~mv2.jpg' },
  { id: 2, type: 'img', src: 'https://static.wixstatic.com/media/20aed8_ebc9fcde604549ce816015aa6086e0ac~mv2.jpg/v1/fit/w_1528,h_860,q_90/20aed8_ebc9fcde604549ce816015aa6086e0ac~mv2.jpg' },
  { id: 3, type: 'img', src: 'https://static.wixstatic.com/media/20aed8_75bf5ff1dcf84080990960fd7513fdf1~mv2.jpg/v1/fit/w_1528,h_860,q_90/20aed8_75bf5ff1dcf84080990960fd7513fdf1~mv2.jpg' },
  { id: 4, type: 'img', src: 'https://static.wixstatic.com/media/20aed8_9bb4ed454c2b408c81e2d3efb4cbb8be~mv2.jpg/v1/fit/w_1528,h_860,q_90/20aed8_9bb4ed454c2b408c81e2d3efb4cbb8be~mv2.jpg' },
  { id: 5, type: 'img', src: 'https://static.wixstatic.com/media/20aed8_32ef35aaaf5744d29e526dd48aa91147~mv2.jpg/v1/fit/w_1528,h_860,q_90/20aed8_32ef35aaaf5744d29e526dd48aa91147~mv2.jpg' },
  { id: 6, type: 'img', src: 'https://static.wixstatic.com/media/20aed8_6f9ff04544e944f7a88bacf635dd3b12~mv2.jpg/v1/fit/w_1528,h_860,q_90/20aed8_6f9ff04544e944f7a88bacf635dd3b12~mv2.jpg' },
  { id: 7, type: 'img', src: 'https://static.wixstatic.com/media/20aed8_bc539ca2e14941c39f474c7c8946153c~mv2.jpg/v1/fit/w_861,h_594,q_90/20aed8_bc539ca2e14941c39f474c7c8946153c~mv2.webp' },
  { id: 8, type: 'video', src: videoSource, poster: 'https://static.wixstatic.com/media/20aed8_bc539ca2e14941c39f474c7c8946153c~mv2.jpg/v1/fit/w_861,h_594,q_90/20aed8_bc539ca2e14941c39f474c7c8946153c~mv2.webp' },


];

const thumbs = images;

const modules = [FreeMode, Navigation, Autoplay, Thumbs];


onMounted(() => {

});


const openModalWithIndex = (index) => {
  indexImageView.value = index;

  const { open: openModal, close: closeModal } = useModal({
    component: ModalGallery,
    props: {
    },
    attrs: {
      index: indexImageView.value,
      images: images,
      onConfirm() {
        closeModal()
      }
    }
  });

  openModal();

};
</script>

<template>
  <div class="w-full h-auto">
    <swiper v-bind:style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
      class="mySwiperGallery2" :autoplay="{
        delay: 3500,
        disableOnInteraction: true,
      }">
      <swiper-slide v-for="(image, index) in images" :key="image.id">
        <img :src="image.src" v-if="image.type == 'img'" @click="openModalWithIndex(index)" class=" cursor-pointer" />
        <video :src="image.src" @click="openModalWithIndex(index)" v-else></video>
      </swiper-slide>
    </swiper>
    <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="5" :freeMode="true" :watchSlidesProgress="true"
      :modules="modules" class="mySwiperGallery">
      <swiper-slide v-for="thumb in thumbs" :key="thumb.id">
        <img :src="thumb.src" v-if="thumb.type == 'img'" />
        <img :src="thumb.poster" v-else />
      </swiper-slide>
    </swiper>
  </div>
  <ModalsContainer />
</template>
  

  

<style>
.swiper {
  width: 100%;
  height: 100%;
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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.mySwiperGallery {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiperGallery2 {
  height: 400px;
  width: 100%;
}

.mySwiperGallery {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiperGallery .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiperGallery .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
@media only screen and (min-width: 381px) and (max-width: 767px) {}

/*Mobile con pantallas pequeñas*/
@media (max-width: 380px) {}
</style>
  