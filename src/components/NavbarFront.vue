<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-light bg-light"
    style="background-color: #e3f2fd"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        9453 - 酒肆吾觴訂酒網
      </router-link>

      <!-- <router-link class="navbar-brand" to="/"
        ><img
          src="@/assets/foxconn-logo-90x31.png"
          alt=""
          width="120"
          height="40"
          style="object-fit: cover"
          class="d-inline-block align-text-top"
      /></router-link> -->

      <button
        class="navbar-toggler ms-auto"
        ref="toggleBtn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link cancel" to="/"
              >首頁</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link cancel" to="/products"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link cancel" to="/about"
              >聯絡我們</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-brand {
  position: absolute;
  left: 50px;
}

@media (max-width: 992px) {
  .navbar-brand {
    position: relative;
    left: 0px;
  }
}

.nav-item {
  margin-left: 30px;
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      tmpdata: "hahaha",
    };
  },
  methods: {
    test() {
      console.log(this.$refs.toggleBtn);
      this.$refs.toggleBtn.click();
    },
  },
  mounted() {
    // mobile nav-bar fix
    const cancelBtnList = document.querySelectorAll(".cancel");
    console.log(cancelBtnList);
    cancelBtnList.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (window.innerWidth < 1000) {
          this.$refs.toggleBtn.click();
        }
      });
    });
  },
};
</script>