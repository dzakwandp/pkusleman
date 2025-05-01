<template>
  <div class="min-h-screen">
    <img :src="wip" class="md:h-[80vh] mx-auto aspect-square">
  </div>
</template>

<script>
import wip from "@/assets/images/wip.png"
export default {
  data() {
    return {
      wip: wip
    }
  },
};
</script>

<style lang="scss" scoped></style>