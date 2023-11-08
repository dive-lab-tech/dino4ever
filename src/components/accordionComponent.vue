<script setup>
import { ref, onBeforeMount } from "vue";
import gsap from "gsap";


const dataFaqs = defineProps({
    itemsFaqs: {
        type: Array,
        required: true,
    },
});

const activeItem = ref(null);

const showItemAccordion = (index) => {
    activeItem.value = index;
    const accordionHeader = document.querySelectorAll(".accordion-item-" + index);
    accordionHeader.forEach((accordionHeader) => {
        if (accordionHeader.classList.contains("active")) {
            accordionHeader.classList.remove("active");
            const accordionBody = accordionHeader.nextElementSibling;
            accordionBody.style.maxHeight = 0;
            activeItem.value = null;
        } else {
            const allAccordionHeaders =
                document.querySelectorAll(".accordion-header");
            allAccordionHeaders.forEach((header) => {
                if (header.classList.contains("active")) {
                    header.classList.remove("active");
                    const body = header.nextElementSibling;
                    body.style.maxHeight = 0;
                }
            });
            accordionHeader.classList.add("active");
            const accordionBody = accordionHeader.nextElementSibling;
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }
    });
};

</script>

<template>
    <div class="justify-center text-white h-full">
        <div class="flex items-center">
            <div class="w-full items-center">
                <!-- <div class=" max-w-2xl max-auto" v-for="(itemAccordion, index) in dataFaqs.itemsFaqs" :key="index" :class="index!=0?' mt-1':''">
                  
                    <div :class=" index !=0 ?'border-t border-black3':' '">
                        <div class=" accordion-header  flex justify-between items-center" :class="'accordion-item-'+index" @click="showItemAccordion(index)">
                            <span class=" font-kanit font-semibold text-2xl transition duration-500" :class="index==activeItem ?' text-primary':'text-white'">
                                {{ index+1+". "+itemAccordion.ask  }}
                            </span>
                            <div class=" rounded-full w-7 h-7 flex justify-center items-center" :class="index==activeItem ? ' bg-red-400' :' bg-primary'"><font-awesome-icon
                                        :icon="index==activeItem ?'fa-solid fa-minus':'fa-solid fa-plus'"
                                        class="btn-icon text-secondary text-lg transition duration-500 text-black" /></div>
                        </div>
                        <div class="accordion-body"  >
                            <div class="p-4 pt-3">
                                <p class="text-white" v-html=" itemAccordion.answer">
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-0"
                        @click="showItemAccordion(0)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            1. ¿Cuando es el evento?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 0 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                Del 30 de junio al 16 de Julio del 2023.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-1"
                        @click="showItemAccordion(1)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            2. ¿Cuál es el horario?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 1 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                Lunes a domingo de 10 hrs a 19 horas.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-2"
                        @click="showItemAccordion(2)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            3. ¿Dónde es?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 2 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                Centro Cultural Estación Mapocho
                            </p>
                        </div>
                    </div>
                </div>
                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-3"
                        @click="showItemAccordion(3)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            4. ¿Dónde compro las entradas?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 3 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                Puedes comprar tus entradas en <a href="" class="">Ticketplus</a> o en boleterías los días
                                del evento. Pero te recomendamos comprar tus entradas con anterioridad para asegurar tu
                                acceso.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-4"
                        @click="showItemAccordion(4)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            5. ¿De qué se trata el evento?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 4 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                Es una exhibición interactiva, donde los visitantes durante el recorrido podrán ver por
                                primera vez convivir a dinosaurios a escala real en ambientaciones nunca antes vista y
                                juegos de luces maravillosos, junto a áreas de realidad virtual, y zonas de juegos.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-5"
                        @click="showItemAccordion(5)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            6. ¿Incluye la experiencia Oculus?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 5 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                No, esta zona de realidad virtual se debe pagar aparte y tiene un costo de $3.500 pesos.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-6"
                        @click="showItemAccordion(6)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            7. ¿Puedo cambiar los tickets?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 6 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                Los tickets son solo válidos para la jornada correspondiente, semana o fin de semana.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-7"
                        @click="showItemAccordion(7)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            8. ¿Desde qué edad los niños pagan entrada?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 7 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                Desde los 3 años los niños pagan entradas.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-8"
                        @click="showItemAccordion(8)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            9. ¿Cómo puedo acceder a convenios de empresas o colegio?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 8 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                Escríbenos a <a href="">convenios@trussup.cl</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-9"
                        @click="showItemAccordion(9)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            10. ¿Cómo sé si mi empresa se encuentra en convenio?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 9 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                Para saber si tu empresa se encuentra en convenio, comunícate con el encargado de
                                recursos humanos o el departamento de beneficios de tu empresa. También puedes
                                escribirnos a <a href="">convenios@trussup.cl</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-black3">
                    <div class="accordion-header flex justify-between items-center accordion-item-10"
                        @click="showItemAccordion(10)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 text-white">
                            11. ¿Hay estacionamientos en el evento?
                        </span>
                        <div class="rounded-full w-7 h-7 flex justify-center items-center bg-primary">
                            <font-awesome-icon :icon="activeItem === 10 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon text-secondary text-lg transition duration-500 text-black" />
                        </div>
                    </div>
                    <div class="accordion-body">
                        <div class="p-4 pt-3">
                            <p class="text-white">
                                El Centro Cultural Estación Mapocho cuenta con un estacionamiento (pagado), pero
                                recomendamos ir en metro.
                            </p>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    </div>
</template>

<style scoped>
.container-image {
    width: 30rem;
    height: 30rem;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    margin: 0 auto;
    background-repeat: no-repeat;
}

.container-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
    background-repeat: no-repeat;
}</style>
