<template>
  <div
    class="flex flex-col px-4 md:px-20 mt-10 min-h-screen text-gray-800 pb-20">
    <div v-if="loading" class="flex justify-center items-center py-20">
      <p class="text-xl text-gray-500">Memuat artikel...</p>
    </div>

    <div v-else-if="!article" class="flex flex-col items-center py-20">
      <p class="text-2xl font-bold mb-4">Artikel tidak ditemukan.</p>
      <router-link
        to="/artikel-berita"
        class="text-primary-green hover:underline">
        Kembali ke Daftar Artikel
      </router-link>
    </div>

    <div v-else class="flex flex-col w-full max-w-5xl mx-auto">
      <!-- Back Button -->
      <router-link
        to="/artikel-berita"
        class="inline-flex items-center text-sm text-gray-500 hover:text-primary-green mb-6 w-fit transition-colors">
        <span class="mr-1">←</span> Kembali ke Artikel & Berita
      </router-link>

      <!-- Article Header -->
      <div class="flex flex-col gap-4 mb-8">
        <h1 class="text-3xl md:text-5xl font-bold leading-tight">
          {{ article.judul }}
        </h1>
        <div class="flex flex-col items-start gap-2 text-sm text-gray-500">
          <div class="flex flex-wrap items-center justify-between w-full gap-4">
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1">
                <font-awesome-icon
                  :icon="['far', 'clock']"
                  class="text-gray-400" />
                {{ moment(article.createdAt).format("DD MMMM YYYY") }}
              </span>
              <span class="flex items-center gap-1">
                <font-awesome-icon
                  :icon="['fas', 'pencil']"
                  class="text-gray-400" />
                {{ article.name }}
              </span>
            </div>
            <button
              @click="shareArticle"
              class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-primary-green hover:text-primary-green transition-colors shrink-0">
              <font-awesome-icon :icon="['fas', 'share-nodes']" />
              <span class="hidden sm:inline">Bagikan</span>
            </button>
          </div>
          <span v-if="parsedTags.length > 0" class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="tag in parsedTags"
              :key="tag"
              class="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">
              {{ tag }}
            </span>
          </span>
        </div>
      </div>

      <!-- Hero Image -->
      <div
        class="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-10 shadow-lg">
        <img
          :src="article.gambar"
          class="w-full h-full object-cover"
          :alt="article.judul" />
      </div>

      <!-- Article Content -->
      <!-- Added prose classes for better formatting if tailwind typography plugin is available, otherwise basic styling -->
      <div
        class="prose max-w-none text-lg leading-relaxed text-gray-700 article-content"
        v-html="article.konten"></div>

      <!-- Divider -->
      <hr class="my-16 border-gray-200" />

      <!-- Recommendations Section -->
      <div class="flex flex-col gap-6">
        <h2
          class="text-2xl md:text-3xl font-bold border-l-4 border-primary-green pl-4">
          Artikel Terbaru
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <router-link
            v-for="item in latestArticles"
            :key="item.id"
            :to="`/artikel/${item.slug}`"
            class="hover:shadow-xl rounded-lg transition-all duration-300 cursor-pointer outline outline-1 outline-gray-200 hover:outline hover:outline-1 hover:outline-primary-green p-2 flex flex-col h-full bg-white relative">
            <div class="w-full h-48 overflow-hidden rounded-lg mb-4 shrink-0">
              <img
                :src="item.gambar"
                class="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" />
            </div>

            <div class="flex flex-col flex-grow relative z-20">
              <h3
                class="text-lg font-bold line-clamp-2 leading-tight mb-2"
                :title="item.judul">
                {{ item.judul }}
              </h3>

              <div
                class="flex justify-between items-center text-xs text-gray-500 mb-3 mt-auto">
                <span class="font-medium line-clamp-1 max-w-[60%]">{{
                  formatTagsDisplay(item.tags)
                }}</span>
                <span class="shrink-0">{{
                  moment(item.createdAt).format("DD MMM YYYY")
                }}</span>
              </div>

              <p
                class="text-sm text-gray-600 line-clamp-3 mb-4"
                v-html="
                  item.konten ? item.konten.substring(0, 120) + '...' : ''
                "></p>

              <div class="mt-auto pointer-events-none">
                <Button
                  class="text-xs rounded-lg w-full"
                  text="Baca Selengkapnya" />
              </div>
            </div>
          </router-link>
        </div>

        <div
          v-if="latestArticles.length === 0"
          class="text-gray-500 italic mt-2">
          Belum ada artikel terbaru lainnya.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import "moment/locale/id"; // Ensure Indonesian locale if available
import Button from "@/components/inspira-ui/InteractiveHoverButton.vue";
import { useHead } from "@unhead/vue";
import { reactive } from "vue";

export default {
  name: "ArtikelDetail",
  components: {
    Button,
  },
  setup() {
    moment.locale("id"); // Set locale to Indonesian globally for this component

    // Create a reactive object for SEO metadata to be updated later
    const seoMeta = reactive({
      title: "Memuat artikel...",
      meta: [],
    });

    // useHead must be called synchronously in setup
    useHead(seoMeta);

    return {
      moment,
      seoMeta,
    };
  },
  data() {
    return {
      allArticles: [],
      loading: true,
    };
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    article() {
      if (!this.allArticles.length) return null;
      return this.allArticles.find((a) => a.slug === this.slug);
    },
    parsedTags() {
      if (!this.article) return [];
      return this.parseTags(this.article.tags);
    },
    latestArticles() {
      if (!this.allArticles.length) return [];

      // Filter out the current article
      const others = this.allArticles.filter((a) => a.slug !== this.slug);

      // Sort by newest first
      const sorted = others.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });

      // Return top 3
      return sorted.slice(0, 3);
    },
  },
  watch: {
    // Re-fetch or re-scroll to top when route changes (clicking a recommendation)
    "$route.params.slug"() {
      this.scrollToTop();
    },
    article: {
      immediate: true,
      handler(newArticle) {
        if (newArticle) {
          // Extract plain text from HTML for description
          const plainTextDesc = newArticle.konten
            ? newArticle.konten.replace(/<[^>]*>?/gm, "").substring(0, 160) +
              "..."
            : "Baca artikel lengkap di RS PKU Muhammadiyah Sleman.";

          this.seoMeta.title = newArticle.judul;
          this.seoMeta.meta = [
            { name: "description", content: plainTextDesc },
            { property: "og:title", content: newArticle.judul },
            { property: "og:description", content: plainTextDesc },
            { property: "og:image", content: newArticle.gambar },
            { property: "og:type", content: "article" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: newArticle.judul },
            { name: "twitter:description", content: plainTextDesc },
            { name: "twitter:image", content: newArticle.gambar },
          ];
        }
      },
    },
  },
  methods: {
    async shareArticle() {
      if (!this.article) return;
      
      const shareData = {
        title: this.article.judul,
        text: "Baca artikel menarik ini: " + this.article.judul,
        url: window.location.href,
      };
      
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(window.location.href);
          alert("Tautan berhasil disalin ke papan klip!");
        }
      } catch (err) {
        console.error("Error sharing:", err);
      }
    },
    parseTags(tagsData) {
      if (!tagsData) return [];
      if (Array.isArray(tagsData)) return tagsData.filter((t) => t);
      if (typeof tagsData === "string") {
        try {
          const parsed = JSON.parse(tagsData);
          if (Array.isArray(parsed))
            return parsed.map((t) => String(t).trim()).filter((t) => t);
        } catch (e) {
          // Fallback to comma separation
        }
        return tagsData
          .split(",")
          .map((t) => t.trim())
          .filter((t) => t);
      }
      return [];
    },
    formatTagsDisplay(tagsData) {
      return this.parseTags(tagsData).join(", ");
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    async fetchArticles() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://apiweb.pkusleman.com/api/artikel",
        );

        // Format image URLs
        this.allArticles = response.data.map((data) => ({
          ...data,
          gambar: `https://apiweb.pkusleman.com${data.gambar}`,
        }));
      } catch (err) {
        console.error("Error fetching artikel:", err);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchArticles();
    this.scrollToTop();
  },
};
</script>

<style scoped>
/* Scoped styles for the v-html injected article content to ensure it renders nicely */
:deep(.article-content) {
  font-family: inherit;
}
:deep(.article-content p) {
  margin-bottom: 1.5em;
  color: #374151; /* gray-700 */
}
:deep(.article-content p:last-child) {
  margin-bottom: 0;
}
:deep(.article-content h1),
:deep(.article-content h2),
:deep(.article-content h3),
:deep(.article-content h4) {
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1em;
  color: #1f2937; /* gray-900 */
}
:deep(.article-content h2) {
  font-size: 1.5rem;
}
:deep(.article-content h3) {
  font-size: 1.25rem;
}
:deep(.article-content ul),
:deep(.article-content ol) {
  margin-bottom: 1.5em;
  padding-left: 1.5em;
}
:deep(.article-content ul) {
  list-style-type: disc;
}
:deep(.article-content ol) {
  list-style-type: decimal;
}
:deep(.article-content li) {
  margin-bottom: 0.5em;
}
:deep(.article-content img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  margin: 2em auto;
}
:deep(.article-content a) {
  color: #059669; /* Match primary-green roughly */
  text-decoration: underline;
}
</style>
