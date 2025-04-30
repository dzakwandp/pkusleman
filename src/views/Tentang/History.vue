<template>
  <div class="flex flex-col px-4 md:px-20 mb-20">
    <div class="md:h-[60vh] mt-20">
      <ImageSlider :images="images" autoplay class="rounded-xl" />
    </div>
    <div class="flex flex-col mt-10 text-center w-max mx-auto gap-2">
      <p class="text-4xl text-gray-800">Sejarah</p>
      <p class="text-sm text-gray-800">Berdirinya RS PKU Muhammadiyah Sleman</p>
      <div class="h-[3px] bg-primary-green"></div>
    </div>
    <Timeline v-if="loaded" :items="timeline">
      <template
        v-for="(item, index) in timeline"
        :key="item.id + 'template'"
        #[item.id]>
        <p
          className="text-gray-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 ml-16 md:ml-0">
          {{ item.text }}
        </p>
      </template>
    </Timeline>
  </div>
</template>

<script>
import ImageSlider from "@/components/inspira-ui/ImageSlider.vue";
import Timeline from "@/components/inspira-ui/Timeline.vue";
import image1 from "@/assets/images/history/1.jpg";
import image2 from "@/assets/images/history/2.jpg";
import image3 from "@/assets/images/history/3.jpg";
import image4 from "@/assets/images/history/3.jpg";
import axios from "axios";
export default {
  components: {
    ImageSlider,
    Timeline,
  },
  data() {
    return {
      images: [image1, image2, image3, image4],
      timeline: [],
      loaded: false,
    };
  },
  methods: {
    async getHistory() {
      try {
        const hist = await axios.get(
          "https://apiweb.pkusleman.com/api/sejarah"
        );
        this.timeline = hist.data;
        this.loaded = true;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getHistory();
  },
};
</script>

<style lang="scss" scoped></style>
