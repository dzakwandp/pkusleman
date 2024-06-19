<template>
    <div class="flex flex-col w-full">
      <img :src="radiologi" class="brightness-75" />
      <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
      <div class="flex flex-col w-3/4 mx-auto gap-4">
        <div class="text-2xl font-bold text-[#0A6E45]">
          Instalasi Radiologi
        </div>
        <div class="text-xl font-bold text-[#0A6E45]">Dalam Proses Perizinan</div>
      </div>
      <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    </div>
  </template>
  
  <script>
  import radiologi from "@/assets/images/radiologi.jpeg";
  export default {
    data() {
      return {
        radiologi: radiologi,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  