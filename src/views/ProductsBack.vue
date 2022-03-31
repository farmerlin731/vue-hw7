<template>
  <div class="container" style="margin-top: 70px">
    <div class="text-end">
      <button class="btn btn-primary" @click="openModal('add')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('del', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Pagination -->
    <Pagination :pages="pages" @emit-pages="getData"></Pagination>
    <ProductModal
      ref="productModal"
      :tmpProd="tmpProd"
      :isNew="isNew"
      @update="getData"
    ></ProductModal>
    <DelModal ref="delModal" :tmpProd="tmpProd" @del-item="delProd"></DelModal>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import emitter from "@/methods/mitt";
import Pagination from "@/components/Pagination.vue";
import ProductModal from "@/components/ProductModal.vue";
import DelModal from "@/components/DelModal.vue";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      // 全部產品列表
      products: [],
      isNew: false,
      pages: {},
      tmpProd: { imagesUrl: [] },
      fakeData: {
        category: "測試分類",
        content: "測試的newwww0209",
        description: "測試的描述",
        id: "-Mtg-jieBP4aNqXVFFOU",
        imageUrl:
          "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        imagesUrl: [
          "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80",
          "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        ],
        is_enabled: 1,
        origin_price: 1000,
        price: 500,
        title: "0220_fake_data_new",
        unit: "單位",
        num: 4,
      },
    };
  },
  components: {
    Pagination,
    ProductModal,
    DelModal,
  },
  methods: {
    getData(page = 1) {
      emitter.emit("loading");
      if (page == "current") page = this.pages?.current_page; // emit of update

      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(api)
        .then((res) => {
          this.products = res.data.products;
          this.pages = res.data.pagination;
          this.$pushToastMessage(
            res,
            `擷取產品列表第 ${this.pages?.current_page} 頁`
          );
          emitter.emit("un-loading");
        })
        .catch((err) => {
          this.$pushToastMessage(err.response, "擷取產品列表");
          emitter.emit("un-loading");
        });
    },

    openModal(type, item) {
      const prodModalComp = this.$refs.productModal;
      const delModalComp = this.$refs.delModal;
      this.tmpProd = item ? { ...item } : { ...this.fakeData };
      // this.tmpProd = item ? { imagesUrl: [], ...item } : { imagesUrl: [] };

      if (type == "add") {
        this.isNew = true;
        prodModalComp.openModal();
      } else if (type == "edit") {
        this.isNew = false;
        prodModalComp.openModal();
      } else if (type == "del") {
        delModalComp.openModal();
      }
    },

    delProd() {
      emitter.emit("loading");
      const delModalComp = this.$refs.delModal;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tmpProd.id}`;
      this.$http
        .delete(api)
        .then((res) => {
          delModalComp.hideModal();
          this.getData(this.pages?.current_page);
          this.$pushToastMessage(res, "刪除");
        })
        .catch((err) => {
          delModalComp.hideModal();
          emitter.emit("un-loading");
          this.$pushToastMessage(err.response, "刪除");
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
