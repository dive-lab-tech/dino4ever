
<script setup>
import { ref, onMounted } from 'vue';
import gsap from "gsap";

const neonText = ref('una experiencia <br>recargada');
const neonTextHtml = ref(neonText.value);


onMounted(() => {
    // Animación de texto en bucle
    (function animateNeonText() {
        const tl = gsap.timeline({
            onComplete: animateNeonText,
        });

        tl.to(".text-neon", {
            duration: 0.4,
            opacity: 1,
            ease: "power2.inOut",
            delay: 2.5,
        })
            .to(".text-neon", {
                duration: 0.4,
                opacity: 0,
                ease: "power2.inOut",
                delay: 0.8,
                onComplete: () => {
                    neonTextHtml.value = neonTextHtml.value === neonText.value ? 'una descarga <br>de Adrenalina' : neonText.value;
                },
            })
            .to(".text-neon", {
                duration: 0.4,
                opacity: 1,
                ease: "power2.inOut",
                delay: 0.8,
            });
    })();
});
</script>

<template>
    <div class="flex  my-20 max-[767px]:flex-col max-[767px]:my-10">
        <div class=" w-7/12  justify-end items-center  max-[767px]:w-full max-[767px]:justify-center max-[767px]:py-10">
            <!-- <img :src="urlNeonText" alt="" srcset="" class="image-text-neon " /> -->
            <p class=" text-primaryLight text-neon text-5xl text-center font-bold uppercase max-[767px]:text-3xl" v-html="neonTextHtml"> </p>
            <div class="flex justify-between flex-col w-full ">
                <div class="flex justify-center items-center  ">
                    <div
                        class="px-20 text-white my-10 text-start  text-lg min-[1500px]:text-xl max-[767px]:w-full max-[767px]:text-sm max-[767px]:px-5">
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

                    </div>
                </div>
                <div class="text-white flex  flex-col justify-center mb-10">
                    <div class="text-center">
                        <p class=" text-primaryLight text-2xl font-bold">MÁS RECARGADOS QUE NUNCA</p>
                    </div>
                    <!-- <div class="text-center mt-3">
                  <a href="/faqs"
                    class=" bg-primaryLight px-7 py-2 rounded-3xl text-black button-faqs transition duration-500">FAQs</a>
                </div> -->
                </div>
            </div>
        </div>
        <div class="w-5/12 flex justify-start items-center max-[767px]:w-full">
            <img src="@/assets/images/eyes-dino-home.jpg" alt="" srcset="" class="   eye-dino" />
        </div>
    </div>
</template>

<style scoped>
.text-neon {
    -webkit-text-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.35);
    text-shadow: 0px 0px 17px rgba(0, 255, 255, 1);
    word-spacing: 0.5rem;
}

.eye-dino {
    width: 100%;
    height: 450px;
}

 /* Pantallas grandes */
 @media (min-width: 1500px) {
}
/* PC */
@media (min-width: 1200px) and (max-width: 1499px) {}
/* Pantallas para tablets */
@media only screen and (min-width: 801px) and (max-width: 1199px) {
    .eye-dino{
        height: 500px;
    }
}

/* Pantallas para tablets pequeñas*/
@media only screen and (min-width: 768px) and (max-width: 800px) {
    .eye-dino{
        height: 500px;
    }
}

/* Pantallas mobiles */
@media only screen and (min-width: 381px) and (max-width: 767px) {
    .eye-dino{
        height: 300px;
    }

}
/*Mobile con pantallas pequeñas*/
@media (max-width: 380px) { 
    .eye-dino{
        height: 300px;
    }
}



</style>