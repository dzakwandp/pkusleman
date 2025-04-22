<template>
    <div></div>
  </template>
  
  <script>
  export default {
    mounted() {
      const url = this.$route.query.from;
      console.log(url)
      switch (url) {
        case "jadwaldokter":
          window.open("https://daftar.pkusleman.com/jadwal-dokter/", "_blank");
          this.$router.push("/");
          break;
        case "daftaronline":
          window.open("https://daftar.pkusleman.com/", "_blank");
          this.$router.push("/");
          break;
      }
    },
  };
  </script>
  
  <style lang="scss" scoped></style>