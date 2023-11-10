<script setup>
import gsap from "gsap";
import { onMounted, ref } from "vue";
import { setTitle } from "@/utils";
import GalleryHome from "@/components/GalleryHome.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FaqsView from "@/views/FaqsView.vue";
import Intro2Component from "@/components/Intro2Component.vue";
import BuyTicketsComponents from "@/components/BuyTicketsComponents.vue";





let scrollBottom = ref(false);


setTitle("Dinosaurios Recargados");

//animación de opacidad y escala en los elementos del banner
onMounted(() => {
  const divPadre = document.getElementById('prueba');
  const alturaDivPadre = divPadre.offsetHeight;
  divPadre.style.marginTop = '-' + alturaDivPadre / 2 + 'px';
  console.log(alturaDivPadre);


 

  //Validación de scroll Y
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll > 100) {
      scrollBottom.value = true;
    }
    else {
      scrollBottom.value = false;
    }
  });




});
</script>

<template>
  <div class="font-montserrat">
    <!-- <div class="h-screen overflow-hidden banner-dino" style="opacity: 0">
      <div class="bg-home w-full h-full">
        <div class="flex flex-col h-full w-full pt-28 justify-between">
          <div class="relative w-fit container-logo-heroes" style="transform: scale(0)">
            <div class="flex flex-col justify-center w-9/12">
              <img src="@/assets/images/logo-heroes-home.webp" alt="" />
              <div class="logo-heroes font-semibold text-sm"></div>
            </div>
          </div>
          <div class="w-full">
            <div class="relative container-logo-dino">
              <img src="@/assets/images/logo-banner-home.webp" alt="" class="logo-dino-banner"
                style="transform: scale(0)" />
            </div>
          </div>
          <div class="mb-3 pb-4">
            <div class="flex flex-col justify-center">
              <div class="text-intro relative w-fit">
                <img src="@/assets/images/text-intro.png" alt="" srcset="" class="image-text-intro" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="w-full" id="home">
      <div class=" bg-white banner-dino-fit">
        <img src="@/assets/images/banner-home-sec-1.jpg" alt="" class=" max-[768px]:hidden" style="">
        <img src="@/assets/images/banner-home-sec-mobile-1.jpg" alt="" class="hidden max-[767px]:block">

      </div>
    </div>
    <BuyTicketsComponents />
    <div class="h-screen max-[767px]:h-auto max-[767px]:py-10">
      <div class="h-full w-full pt-10 ">
        <div class="w-full flex justify-center items-center h-2/12 max-[767px]:my-10 ">
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
        <!-- <div class="h-auto max-[767px]:h-auto">
          
          <div class="h-9/12 max-[767px]:w-full max-[767px]:p-2">
            <div class="flex justify-between flex-col w-full h-full">
              <div class="flex justify-center items-center h-full ">
                <div
                  class="w-6/12 text-white text-center  text-lg min-[1500px]:text-xl max-[767px]:w-full max-[767px]:text-sm">
                  <p>
                    ¡Prepárate para vivir una experiencia única e inolvidable en
                    el evento más esperado del año!
                  </p>
                  <p class="mb-3">
                    Con más de 5000 metros
                    cuadrados de exhibición donde podrás interactuar con
                    dinosaurios animatronics de última generación a escala real y
                    descubrir nuevos mundos increíbles de luces y proyecciones.
                  </p>
                  <p class="mb-3">
                    Además, podrás disfrutar de actividades interactivas en todo
                    el recorrido y sumergirte en áreas de realidad virtual
                    innovadora que te llevarán a la época prehistórica como nunca
                    antes lo habías imaginado.
                  </p>
                  <p class="mb-3">
                    Todo esto en una puesta en escena
                    moderna única en Chile. Llega una nueva generación recargada
                    de dinosaurios que te transportarán a un mundo lleno de
                    energía y emoción.
                  </p>
                  <p class="mb-3">
                    ¡No te pierdas esta oportunidad de vivir
                    una aventura emocionante junto a tu familia y amigos en el
                    centro cultural Estación Mapocho!
                  </p>
                </div>
              </div>
              <div class="text-white flex  flex-col justify-center mb-10">
                <div class="text-center">
                  <p class=" text-primaryLight text-2xl font-bold">MÁS RECARGADOS QUE NUNCA</p>
                </div>
                <div class="text-center mt-3">
                  <a href="/faqs"
                    class=" bg-primaryLight px-7 py-2 rounded-3xl text-black button-faqs transition duration-500">FAQs</a>
                </div>
              </div>
            </div>
          </div>
         

        </div> -->
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
