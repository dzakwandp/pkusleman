<template>
  <div class="flex flex-col items-center min-h-screen">
    <img :src="image" class="h-[75vh] mx-auto" />
    <HoverButton
      text="Back to Home"
      class="text-sm w-44 text-gray-800 rounded-lg"
      @click="this.$router.push('/')" />
  </div>
</template>

<script>
import image from "@/assets/images/404.png";
import HoverButton from "@/components/inspira-ui/InteractiveHoverButton.vue";
export default {
  components: {
    HoverButton,
  },
  data() {
    return {
      image: image,
    };
  },
};
</script>

<style lang="scss" scoped></style>
