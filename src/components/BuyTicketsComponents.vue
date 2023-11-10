<script setup>


</script>
<template>
        <div class="w-full text-white ">
      <div class=" w-full ">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 bg-black bg-opacity-23  px-10 py-10">
          <div class="lg:col-span-2 flex items-center animate-center" :class="scrollBottom == true ? '' : ''">
            <div class="h-auto">
              <h1 class="font-montserrat-bold text-6xl uppercase title-ticket">Compra</h1>
              <h2 class="font-montserrat-bold text-6xl uppercase title-ticket">tus <span class="ml-1">entradas</span></h2>
              <h4 class="font-montserrat px-3 py-2">
                Del 1 de diciembre al 16 de junio del 2024.
              </h4>
            </div>
          </div>

          <div class="h-auto flex justify-center items-center">
            <div class=" card-detail  flex justify-center items-center">
              <a href="" class="text-2xl bg-secondary text-black rounded-lg py-2 px-3 btn-shop-ticket transition duration-400 ">COMPRAR ENTRADAS</a>
            </div>
          </div>
        </div>
        <div class="flex justify-end w-full" id="prueba">
          <div class=" w-4/12 bg-accent py-2 rounded-l-lg">
            <h3 class=" font-montserrat-bold text-2xl text-center uppercase "
              style="text-shadow: rgb(0 255 255) 1px 0px 15px;">No te quedes sin tus entradas</h3>
          </div>
          
        </div>
      </div>
    </div>
</template>
<style scoped>
.card-detail {
  width: 300px;
  height: 300px;
}
.btn-shop-ticket:hover{
  box-shadow: 0px 0px 15px 10px rgba(255, 255, 255, 0.35); 
  text-shadow: 0px 0px 17px rgb(255, 255, 255);
}
</style>