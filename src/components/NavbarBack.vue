<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin"> 後台管理頁面 </router-link>

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
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link cancel" to="/admin/products"
              >產品列表</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link cancel" to="/admin/orders"
              >訂單列表</router-link
            >
          </li>
        </ul>

        <button type="button" class="btn btn-warning ms-auto" @click="$emit('logout')">
          <b
            ><i class="bi bi-book-half" style="color: green"></i>
            Logout
            <i class="bi bi-book-half" style="color: green"></i>
          </b>
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar-brand {
  left: 50px;
}

@media (max-width: 992px) {
  .navbar-brand {
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
    // this.test();
    console.log(window.innerWidth);
    // console.log(this.tmpdata);
    // 自己寫這段真爽...雖然有點醜 XD

    const cancelBtnList = document.querySelectorAll(".cancel");
    console.log(cancelBtnList);
    cancelBtnList.forEach((btn) => {
      btn.addEventListener("click", () => {
        // console.log("pushItem!!!");
        if (window.innerWidth < 1000) {
          this.$refs.toggleBtn.click();
        }
      });
    });
  },
};
</script>