<script setup>
import gsap from "gsap";
import { onMounted, ref } from "vue";
import { setTitle } from "@/utils";
import GalleryHome from "@/components/GalleryHome.vue";
import neonText from "@/assets/images/neon-text-home-1.webp";
import neonText2 from "@/assets/images/neon-text-home-2.webp";
import FooterComponent from "@/components/FooterComponent.vue";



let urlNeonText = ref(neonText);

setTitle("Dinosaurios Recargados");

//animación de opacidad y escala en los elementos del banner
onMounted(() => {
  gsap.to(".banner-dino", {
    duration: 1,
    opacity: 1,
    ease: "power2.inOut",
    onStart: () => {
      gsap.to(".container-logo-heroes", {
        duration: 0.4,
        scale: 1,
        ease: "power2.inOut",
        delay: 1.5,
        onComplete: () => {
          gsap.to(".logo-dino-banner", {
            duration: 0.4,
            scale: 1,
            ease: "power2.inOut",
            delay: 0.8,
          });
        },
      });
    },
  });

  // Animación de texto en bucle
  (function animateNeonText() {
    const tl = gsap.timeline({
      onComplete: animateNeonText,
    });

    tl.to(".image-text-neon", {
      duration: 0.4,
      opacity: 1,
      ease: "power2.inOut",
      delay: 2.5,
    })
      .to(".image-text-neon", {
        duration: 0.4,
        opacity: 0,
        ease: "power2.inOut",
        delay: 0.8,
        onComplete: () => {
          urlNeonText.value =
            urlNeonText.value === neonText ? neonText2 : neonText;
        },
      })
      .to(".image-text-neon", {
        duration: 0.4,
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.8,
      });
  })();
});
</script>

<template>
  <div class="font-montserrat"> 
    <div class="h-screen overflow-hidden banner-dino" style="opacity: 0">
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
    </div>
    <div class="h-screen max-[767px]:h-auto max-[767px]:py-10">
      <div class="h-full w-full pt-10 ">
        <div class="w-full flex justify-center items-center h-2/12 max-[767px]:my-10 ">
          <h1 class="text-primaryLight font-extrabold text-4xl max-[767px]:text-center">NUESTRA DINOGALERÍA</h1>
        </div>
        <div class="h-10/12">
          <div class="flex justify-center items-center">
            <div class="w-6/12 max-[767px]:w-11/12 " >
              <GalleryHome />
            </div>
          </div>
        </div>
        <div class="flex justify-center max-[767px]:py-32">
          <div class="w-8/12 flex justify-center max-[767px]:w-full">
            <img src="@/assets/images/eyes-dino-home.jpg" alt="" srcset="" class="w-9/12 max-[767px]:w-full" />
          </div>
        </div>
        <div class="h-screen max-[767px]:h-auto">
          <div class="h-3/12 w-full flex justify-center">
            <img :src="urlNeonText" alt="" srcset="" class="image-text-neon" />
          </div>
          <div class="h-9/12 max-[767px]:w-full max-[767px]:p-2">
            <div class="flex justify-between flex-col w-full h-full">
                <div class="flex justify-center items-center h-full ">
                  <div class="w-6/12 text-white text-center  text-lg min-[1500px]:text-xl max-[767px]:w-full max-[767px]:text-sm">
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
                  <a href="/faqs" class=" bg-primaryLight px-7 py-2 rounded-3xl text-black button-faqs transition duration-500">FAQs</a>
                </div>
              </div>
            </div>
          </div>

       <FooterComponent />

        </div>
      </div>
    </div>

  </div>





</template>
<style scoped>

.button-faqs:hover{
  opacity: 0.8;
  box-shadow: 0px 7px 28px 1px rgba(255,255,255,0.47);
-webkit-box-shadow: 0px 7px 28px 1px rgba(255,255,255,0.47);
-moz-box-shadow: 0px 7px 28px 1px rgba(255,255,255,0.47);
}
.text-intro {
  left: 33rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image-text-intro {
  width: 80%;
  margin-top: -30px;
}

.logo-heroes::after {
  content: "PRESENTA";
  color: #fff;
  display: block;
  width: 100%;
  text-align: center;
}

.bg-home {
  background-image: url("@/assets/images/bg-home.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.logo-dino-banner {
  width: 35%;
  height: auto;
}

.container-logo-dino {
  left: 300px;
}

.container-logo-heroes {
  left: 28rem;
}

 /* Pantallas grandes */
 @media (min-width: 1500px) {
  }
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

    .bg-home {
  background-image: url("@/assets/images/bg-home-mobile.webp");
}
  
  }
  /*Mobile con pantallas pequeñas*/
  @media (max-width: 380px) { 
    .bg-home {
  background-image: url("@/assets/images/bg-home-mobile.webp");
}
  }


  
</style>
