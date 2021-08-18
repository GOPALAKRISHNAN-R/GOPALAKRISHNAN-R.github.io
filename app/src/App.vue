<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $("nav").addClass("shadow");
      } else {
        $("nav").removeClass("shadow");
      }
    });
  },
};
</script>

<style scoped>
@import url(./assets/css/style.css);
</style>
