<template>
  <Loading :active="loadingStatus"></Loading>
  <ToastMessage></ToastMessage>
  <Navbar @logout="logout"></Navbar>
  <router-view v-slot="{ Component }">
    <transition
      name="fade-transform"
      mode="out-in"
      enter-from-class="fade-transform-enter"
    >
      <component :is="Component"> </component>
    </transition>
  </router-view>
  <!-- <router-view></router-view> -->
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
import Navbar from "@/components/NavbarBack.vue";
import ToastMessage from "@/components/ToastMessage.vue";
import emitter from "@/methods/mitt";
export default {
  data() {
    return {
      loadingStatus: false,
    };
  },
  components: {
    Navbar,
    ToastMessage,
  },
  methods: {
    checkToken() {
      // check login token
      this.loadingStatus = true;
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexFarmerToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common["Authorization"] = token;
      const api = `${process.env.VUE_APP_API}/api/user/check`;
      this.$http
        .post(api)
        .then((response) => {
          this.loadingStatus = false;
          this.$pushToastMessage(response, "登入");
        })
        .catch((err) => {
          this.loadingStatus = false;
          alert("帳號驗證失敗，請重新登入。");
          this.$router.push("/login");
          console.dir(err);
        });
    },

    logout() {
      this.loadingStatus = true;
      const api = `${process.env.VUE_APP_API}/logout`;
      this.$http
        .post(api)
        .then((response) => {
          if (response.data.success) {
            this.loadingStatus = false;
            alert("成功登出！");
            this.$router.push("/");
          }
        })
        .catch((error) => {
          this.loadingStatus = false;
          this.$pushToastMessage(error.response, "登出");
        });
    },
  },
  mounted() {
    this.checkToken();
    emitter.on("loading", () => {
      this.loadingStatus = true;
    }),
      emitter.on("un-loading", () => {
        this.loadingStatus = false;
      });
  },
};
</script>