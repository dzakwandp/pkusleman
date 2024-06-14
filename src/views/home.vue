<template>
  <div class="flex flex-col w-full">
    <img :src="mainImage" class="brightness-75" />
  </div>
</template>

<script>
import mainImage from "@/assets/images/main_image.jpg";
export default {
  data() {
    return {
      mainImage: mainImage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
