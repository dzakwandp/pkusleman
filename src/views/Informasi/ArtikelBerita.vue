<template>
  <div class="flex flex-col px-4 md:px-20 mt-10 min-h-screen">
    <p class="text-4xl text-center text-gray-800">Artikel & Berita</p>
    <p class="text-gray-800 text-center">
      Informasi terbaru seputar RS PKU Muhammadiyah Sleman
    </p>

    <!-- Tags Filter UI -->
    <div class="flex items-center justify-between gap-4 mt-8 w-full border-b pb-2">
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar flex-grow pb-1">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="toggleTag(tag)"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0',
            selectedTags.includes(tag) ? 'bg-primary-green text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Sort Button -->
      <button
        @click="sortOrder = sortOrder === 'newest' ? 'oldest' : 'newest'"
        class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 shrink-0 mb-1"
      >
        <span v-if="sortOrder === 'newest'">Terbaru ↓</span>
        <span v-else>Terlama ↑</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4">
      <div
        v-for="item in filteredArtikel"
        :key="item.id"
        class="hover:shadow-xl rounded-lg transition-all duration-300 cursor-pointer outline outline-1 outline-gray-200 hover:outline hover:outline-1 hover:outline-primary-green p-2 flex flex-col">
        <div class="w-full h-48 overflow-hidden rounded-lg">
          <img
            :src="item.gambar"
            class="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300" />
        </div>
        <div class="flex justify-between items-center mt-2">
          <p class="text-lg font-bold line-clamp-2" :title="item.judul">{{ item.judul }}</p>
        </div>
        <div class="flex justify-between items-center mt-1">
          <p class="text-xs text-gray-500 font-medium">
            {{ formatTagsDisplay(item.tags) }}
          </p>
          <p class="text-xs text-gray-500">
            {{ moment(item.createdAt).format("DD MMM YYYY") }}
          </p>
        </div>
        <p class="text-sm mt-2 flex-grow" v-html="item.konten ? item.konten.substring(0, 100) + '...' : ''" />
        <router-link :to="`/artikel/${item.slug}`" class="mt-4">
          <Button
            class="text-xs rounded-lg w-full"
            text="Baca Selengkapnya" />
        </router-link>
      </div>
    </div>
    
    <!-- Empty State -->
    <div v-if="filteredArtikel.length === 0" class="flex justify-center items-center mt-20">
      <p class="text-gray-500 text-lg">Tidak ada artikel yang ditemukan.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Button from "@/components/inspira-ui/InteractiveHoverButton.vue";

export default {
  components: {
    Button,
  },
  setup() {
    return {
      moment,
    };
  },
  data() {
    return {
      artikel: [],
      selectedTags: [],
      sortOrder: 'newest', // default sort order
    };
  },
  computed: {
    allTags() {
      const tagsSet = new Set();
      this.artikel.forEach(item => {
        const tagsArray = this.parseTags(item.tags);
        tagsArray.forEach(t => tagsSet.add(t));
      });
      return Array.from(tagsSet).sort();
    },
    filteredArtikel() {
      let filtered = this.artikel;
      
      if (this.selectedTags.length > 0) {
        filtered = filtered.filter(item => {
          const tagsArray = this.parseTags(item.tags);
          return this.selectedTags.some(tag => tagsArray.includes(tag));
        });
      }

      // Sort logic
      return filtered.sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return this.sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      });
    }
  },
  methods: {
    toggleTag(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    },
    parseTags(tagsData) {
      if (!tagsData) return [];
      if (Array.isArray(tagsData)) return tagsData.filter(t => t);
      if (typeof tagsData === 'string') {
        try {
          const parsed = JSON.parse(tagsData);
          if (Array.isArray(parsed)) return parsed.map(t => String(t).trim()).filter(t => t);
        } catch (e) {
          // Fallback to comma separation
        }
        return tagsData.split(',').map(t => t.trim()).filter(t => t);
      }
      return [];
    },
    formatTagsDisplay(tagsData) {
      return this.parseTags(tagsData).join(', ');
    },
    async getArtikel() {
      try {
        const response = await axios.get(
          "https://apiweb.pkusleman.com/api/artikel",
        );
        this.artikel = response.data.map((data) => ({
          ...data,
          gambar: `https://apiweb.pkusleman.com${data.gambar}`,
        }));
      } catch (err) {
        console.log("Error fetching artikel:", err);
      }
    },
  },
  mounted() {
    this.getArtikel();
  },
};
</script>

<style lang="scss" scoped></style>
