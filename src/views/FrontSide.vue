<template>
  <Navbar></Navbar>

  <router-view v-slot="{ Component }">
    <transition
      name="fade-transform"
      mode="out-in"
      enter-from-class="fade-transform-enter"
    >
      <component :is="Component"> </component>
    </transition>
  </router-view>


  <Footer></Footer>
</template>


<style lang="scss" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.4s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


</style>


<script>
import Navbar from "@/components/NavbarFront.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {},
  mounted() {},
};
</script>