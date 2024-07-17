<template>
  <div>
    <Header></Header>
    <router-view class="w-full -mt-20"></router-view>
    <!-- mobile whatsapp -->
    <div
      class="flex md:hidden w-1/2 items-center justify-end fixed bottom-4 right-4">
      <a
        href="https://wa.me/6281333315119"
        target="_blank"
        class="flex bg-[#0A6E45] text-white text-xs p-2 h-max rounded-md gap-2">
        <font-awesome-icon
          icon="fa-brands fa-whatsapp"
          size="xl"></font-awesome-icon>
        Chat Dengan Kami
      </a>
    </div>
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
