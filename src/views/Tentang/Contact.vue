<template>
  <div class="flex flex-col px-4 md:px-20">
    <div class="flex flex-col mt-10 mb-10 md:mb-0 w-max mx-auto gap-2">
      <p class="text-4xl text-gray-800">Hubungi Kami</p>
      <div class="h-[3px] bg-primary-green"></div>
    </div>
    <div class="flex gap-6 items-center">
      <a
        v-for="item in socials"
        :key="item.index"
        class="flex items-center justify-center size-max rounded-full bg-white"
        :href="item.location"
        target="_blank">
        <font-awesome-icon
          :icon="item.icons"
          class="text-primary-green text-2xl" />
      </a>
    </div>
    <div class="overflow-auto">
      <table class="w-full mt-6">
        <thead class="bg-primary-green text-white h-10 text-nowrap">
          <tr>
            <th class="px-2">No</th>
            <th class="px-2">Bagian</th>
            <th class="px-2">Nomor Telepon</th>
            <th class="px-2">Hari Kerja</th>
            <th class="px-2">Jam Kerja</th>
            <th class="px-2">Nomor Whatsapp (Hanya Chat)</th>
            <th class="px-2">Hari Kerja</th>
            <th class="px-2">Jam Kerja</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in contact"
            :key="item.index"
            class="text-center h-10 hover:bg-black/10"
            :class="trClass(item.id)">
            <td>{{ item.id }}</td>
            <td>{{ item.bagian }}</td>
            <td>{{ item.telp }}</td>
            <td>{{ item.hari_telp }}</td>
            <td>{{ item.jam_telp }}</td>
            <td>{{ item.whatsapp }}</td>
            <td>{{ item.hari_whatsapp }}</td>
            <td>{{ item.jam_whatsapp }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="my-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7546418901143!2d110.35331296803461!3d-7.709456359341933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f342feb9d01%3A0xb643aead9e9abb54!2sRS%20PKU%20Muhammadiyah%20Sleman!5e0!3m2!1sid!2sid!4v1744709327465!5m2!1sid!2sid"
        width="100%"
        height="450"
        style="border: 0; border-radius: 25px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contact: [],
      socials: [
        { icons: ["fab", "whatsapp"], location: "https://wa.me/6281333315119" },
        {
          icons: ["fab", "instagram"],
          location: "https://instagram.com/rspkusleman",
        },
        {
          icons: ["far", "envelope"],
          location: "mailto:rspkusleman@gmail.com",
        },
        {
          icons: ["fas", "location-dot"],
          location: "https://maps.app.goo.gl/XNno7v5Uud271Cna6",
        },
        {
          icons: ["fab", "youtube"],
          location: "https://www.youtube.com/@PKUSleman",
        },
      ],
    };
  },
  methods: {
    async getContact() {
      try {
        const cont = await axios.get("https://apiweb.pkusleman.com/api/kontak");
        this.contact = cont.data;
      } catch (err) {
        console.log(err);
      }
    },
    trClass(id) {
      if (id / 2 === 1) {
        return "bg-gray-100";
      }
    },
  },
  mounted() {
    this.getContact();
  },
};
</script>

<style lang="scss" scoped></style>
