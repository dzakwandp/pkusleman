<template>
  <div class="flex flex-col w-full mt-32 md:mx-10">
    <div class="flex w-3/4 mx-auto">
      <div class="text-[#0A6E45] font-bold text-3xl">
        Informasi Tempat Tidur
      </div>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
    <div class="flex flex-col w-3/4 mx-auto">
      <table class="w-full md:w-1/2">
        <tr class="bg-[#0A6E45] text-white">
          <th>Kelas</th>
          <th>Jumlah</th>
        </tr>
        <tr v-for="items in jadwal" :key="items.index" class="border">
          <td class="pl-4 border-r">{{ items.kelas }}</td>
          <td class="text-center">{{ items.jumlah }}</td>
        </tr>
      </table>
      <div class="text-sm italic mt-4">
        Diupdate pada: {{ updatedAt }}
      </div>
    </div>
    <div class="my-6 bg-[#0A6E45] h-2 w-3/4 mx-auto"></div>
  </div>
</template>

<script>
import moment from "moment/min/moment-with-locales";
export default {
  data() {
    return {
      jadwal: [
        { kelas: "VIP", jumlah: "2" },
        { kelas: "Kelas I", jumlah: "4" },
        { kelas: "Kelas III", jumlah: "72" },
        { kelas: "ICU", jumlah: "6" },
        { kelas: "HCU", jumlah: "1" },
        { kelas: "NICU", jumlah: "1" },
      ],
      updatedAt: moment().locale("id").format("dddd, MMMM Do YYYY, HH:mm:ss"),
    };
  },
};
</script>

<style scoped></style>
