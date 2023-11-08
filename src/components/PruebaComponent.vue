<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";





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


onMounted(() => {
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

});


</script>

<template>
    <div class="justify-center text-white h-full font-montserrat">
        <div class="flex items-center">
            <div class="w-full items-center">
                <!-- <div class=" max-w-2xl max-auto" v-for="(itemAccordion, index) in dataFaqs.itemsFaqs" :key="index" :class="index!=0?' mt-1':''">
                  
                    <div :class=" index !=0 ?'':' '">
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

                <div class=" bg-white item-accordion bg-opacity-80" style="opacity: 1;">
                    <div class="accordion-header flex justify-between items-center accordion-item-0 bg-white "
                        @click="showItemAccordion(0)">
                        <span class="font-kanit font-semibold text-2xl transition duration-500 " :class="activeItem==0 ?' text-black':'text-black'">
                            1. ¿Cuando es el evento?
                        </span>
                        <font-awesome-icon :icon="activeItem === 0 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'
                                " class="btn-icon  text-2xl transition duration-500 text-primary" />
                    </div>
                    <div class="accordion-body    border-t">
                        <div class="py-5 px-3 flex">
                            <div class="p-4 pt-3 w-8/12">
                            <p class=" text-gray-900 flex ">
                            <span> <font-awesome-icon :icon="['fas', 'calendar-days'] " class=" mr-2" /></span> Del 30 de junio al 16 de Julio del 2023. lorem
                            </p>
                        </div>
                        <div class="flex justify-center items-center w-4/12">
                            <a href="" class="bg-secondary text-black py-2 px-3 rounded-lg uppercase text-sm font-semibold">Comprar tickets</a>
                        </div>
                        </div>
                    </div>
                </div>

 
                



            </div>
        </div>
    </div>
</template>

<style scoped>
/* .accordion-header{
    border-radius:  0.5rem 0.5rem 0 0;
}

.accordion-header.active{
    border-radius:  0.5rem 0.5rem 0 0;
} */

.item-accordion{
    transform: translateX(8rem);
}

</style>
