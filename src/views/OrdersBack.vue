<template>
  <div class="container" style="margin-top: 150px">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in orders" :key="key">
          <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
            <td>{{ createDate(item) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="`paidSwitch${item.id}`"
                  v-model="item.is_paid"
                  @change="updatePaid(item)"
                />
                <label class="form-check-label" :for="`paidSwitch${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="openModal(item)"
                >
                  檢視
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  @click="openDelOrderModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <OrderModal
      :tmpOrder="tmpOrder"
      ref="orderModal"
      @update="updatePaid"
    ></OrderModal>
    <DelModal ref="delModal" :item="tmpOrder" @del-item="delOrder"></DelModal>
    <Pagination :pages="pages" @emit-pages="getOrders"></Pagination>
  </div>
</template>




<script>
import emitter from "@/methods/mitt";
import DelModal from "@/components/DelModal.vue";
import OrderModal from "@/components/OrderModal.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  data() {
    return {
      orders: {},
      pages: {},
      tmpOrder: {},
    };
  },
  components: {
    Pagination,
    OrderModal,
    DelModal,
  },

  computed: {
    createDate: function () {
      return (item) => {
        let tmpTime = new Date(item.create_at * 1000).toISOString().split("T");
        return tmpTime[0];
      };
    },
  },

  methods: {
    getOrders(page = 1) {
      emitter.emit("loading");
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http
        .get(url)
        .then((response) => {
          this.orders = response.data.orders;
          this.pages = response.data.pagination;
          emitter.emit("un-loading");
          this.$pushToastMessage(
            response,
            `擷取訂單列表第 ${this.pages?.current_page} 頁`
          );
        })
        .catch((err) => {
          emitter.emit("un-loading");
          this.$pushToastMessage(err.response, "擷取訂單列表");
        });
    },
    openModal(item) {
      this.tmpOrder = { ...item };
      console.log(this.tmpOrder);
      const orderComponent = this.$refs.orderModal;
      orderComponent.openModal();
    },

    updatePaid(item) {
      emitter.emit("loading");
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http
        .put(api, { data: paid })
        .then((response) => {
          const orderComponent = this.$refs.orderModal;
          orderComponent.hideModal();
          this.getOrders(this.pages?.current_page);
          this.$pushToastMessage(response, "更新付款狀態");
        })
        .catch((error) => {
          emitter.emit("un-loading");
          this.$pushToastMessage(error.response, "更新付款狀態");
        });
    },

    openDelOrderModal(item) {
      this.tmpOrder = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },

    delOrder() {
      emitter.emit("loading");
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tmpOrder.id}`;
      this.$http
        .delete(url)
        .then((res) => {
          const delComponent = this.$refs.delModal;
          delComponent.hideModal();
          this.$pushToastMessage(res, "刪除");
          this.getOrders(this.pages?.current_page);
        })
        .catch((error) => {
          emitter.emit("un-loading");
          this.$pushToastMessage(error.response, "刪除");
        });
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>
