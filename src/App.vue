<template>
  <div>
    <Header></Header>
    <router-view class="w-full -mt-20"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
