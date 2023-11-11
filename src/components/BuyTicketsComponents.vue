<script setup>


</script>
<template>
        <div class="w-full text-white ">
      <div class=" w-full ">
        <div class="flex bg-black bg-opacity-23  px-10 py-10 max-[1199px]:flex-col max-[767px]:px-5">
          <div class="w-1/2 flex items-center animate-center max-[1199px]:w-full" >
            <div class="h-auto">
              <h1 class="font-montserrat-bold text-6xl uppercase title-ticket max-[767px]:text-4xl">Compra</h1>
              <h2 class="font-montserrat-bold text-6xl uppercase title-ticket max-[767px]:text-4xl">tus <span class="ml-1">entradas</span></h2>
              <h4 class="font-montserrat px-3 py-2 max-[767px]:px-1">
                Del 1 de diciembre al 16 de junio del 2024.
              </h4>
            </div>
          </div>

          <div class="w-1/2 h-auto flex justify-center items-center max-[1199px]:w-full max-[767px]:mt-10">
            <div class=" card-detail  flex flex-col justify-center items-center">
              <h3 class=" font-montserrat-bold mb-2 text-2xl text-center uppercase max-[767px]:text-sm"
              style="text-shadow: rgb(0 255 255) 1px 0px 15px;">No te quedes sin tus entradas</h3>
              <a href="" class="text-3xl bg-secondary text-black rounded-lg py-2 px-3 btn-shop-ticket transition duration-500 ">COMPRAR ENTRADAS</a>
            </div>
          </div>
        </div>
        <div class="flex justify-end w-full max-[767px]:justify-center" >
       
          
        </div>
      </div>
    </div>
</template>
<style scoped>
.card-detail {
  width: 100%;
  height: 300px;
}
.btn-shop-ticket:hover{
  box-shadow: 0px 0px 15px 10px rgba(255, 255, 255, 0.35); 
  text-shadow: 0px 0px 17px rgb(255, 255, 255);
  
}


 /* Pantallas grandes */
 @media (min-width: 1500px) {
}
/* PC */
@media (min-width: 1200px) and (max-width: 1499px) {}
/* Pantallas para tablets */
@media only screen and (min-width: 801px) and (max-width: 1199px) {
  .card-detail {
    width: 100%;
    height: auto;
    padding-top: 12px;
    padding-bottom: 12px;
  }
}

/* Pantallas para tablets pequeñas*/
@media only screen and (min-width: 768px) and (max-width: 800px) {
  .card-detail {
    width: 100%;
    height: auto;
    padding-top: 12px;
    padding-bottom: 12px;
  }
 
  


}

/* Pantallas mobiles */
@media only screen and (min-width: 381px) and (max-width: 767px) {
  .card-detail {
    width: 100%;
    height: auto;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .btn-shop-ticket{
    padding: 0.25rem 0.75rem;
    font-size: 1.2rem;
  }

}
/*Mobile con pantallas pequeñas*/
@media (max-width: 380px) { 
  .card-detail {
    width: 100%;
    height: auto;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .btn-shop-ticket{
    padding: 0.25rem 0.75rem;
    font-size: 1.2rem;
  }

}


</style>