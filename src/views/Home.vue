<template>
  <div class="home-page">
    <div class="cover">
      <h1>9453 - 酒肆吾觴訂酒網</h1>
      <br />

      <router-link to="/products">
        <button type="button" class="btn btn-warning">
          <b
            ><i class="bi bi-book-half" style="color: green"></i>
            想喝酒請點我
            <i class="bi bi-book-half" style="color: green"></i>
          </b></button
      ></router-link>
    </div>

    <h2 class="mt-5">網站簡介</h2>
    <h4 class="mt-3">～您最豐富最貼心的選酒平台～</h4>
    <h4 class="mt-3">～您最豐富最貼心的選酒平台～</h4>
    <h4 class="mt-3">～您最豐富最貼心的選酒平台～</h4>
    <h4 class="mt-3">（很重要所以說三次）</h4>
  </div>
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

.cover {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)
      center/100% fixed;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cover h1 {
  color: whitesmoke;
  line-height: 1.5;
}
.cover button {
  margin-top: 50px;
  transition: 0.3s all ease;
}

.cover button:hover {
  transform: scale(1.2);
}
</style>



<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>