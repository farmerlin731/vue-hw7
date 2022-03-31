<template>
  <div class="footer">
    <!-- Footer -->
    <footer
      class="text-white text-center"
    >
      <!-- Copyright -->
      <div
        class="text-center p-3"
        style="background-color: rgba(10, 66, 117, 0)"
      >
              © 2022 Copyright: Farmer - 此網站僅供學習使用
      <router-link to="/admin">
        <button type="button" class="btn btn-warning">
          <b
            ><i class="bi bi-book-half" style="color: green"></i>
            管理者後台登入
            <i class="bi bi-book-half" style="color: green"></i>
          </b>
        </button>
        </router-link>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
.footer {
  margin-top: 100px;
  text-align: left;
  background-color: rgba(10, 66, 117, 0.6)
}

.tmp-text {
  color: white;
  text-decoration: none;
}
</style>