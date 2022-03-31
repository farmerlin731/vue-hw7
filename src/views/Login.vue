<template>
  <Loading :active="loadingStatus"></Loading>
<ToastMessage></ToastMessage>
  <div class="login-block">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="col-8">
          <form id="form" class="form-signin">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="username"
                placeholder="name@example.com"
                v-model="user.username"
                required
                autofocus
              />
              <label for="username">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="user.password"
                required
              />
              <label for="password">Password</label>
            </div>
            <button
              class="btn btn-lg btn-primary w-100 mt-3"
              type="button"
              v-on:click="signIn"
            >
              登入
            </button>
          </form>
        </div>
      </div>
      <p class="mt-5 mb-3 text-muted">&copy;後台登入頁面_farmer</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-block {
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>


<script>
import ToastMessage from '@/components/ToastMessage.vue';
export default {
  data() {
    return {
      loadingStatus: false,
      user: {
        username: "",
        password: "",
      },
    };
  },
  components:{
    ToastMessage,
  },
  methods: {
    testFunc() {
      this.$pushToastMessage('danger', 'hihi');
    },
    signIn() {
      this.loadingStatus = true;
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http
        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data;
          document.cookie = `hexFarmerToken=${token};expires=${new Date(
            expired
          )};`;
          this.loadingStatus = false;
          this.$router.push("/admin");
          this.$pushToastMessage(response,'登入123');
        })
        .catch((error) => {
          console.dir(error);
          this.loadingStatus = false;
          this.$pushToastMessage(error.response,'登入');
        });
    },
  },
  mounted() {
  },
};
</script>