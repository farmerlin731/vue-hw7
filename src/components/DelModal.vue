<template>
  <div
    id="delProductModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <span v-if="tmpProd?.title">
          <strong class="text-danger">{{ tmpProd?.title }}</strong>
          商品</span>
          <span v-else>
          此訂單</span>(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('del-item')">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>


<script>
import modalMixin from "@/mixins/modalMixin.js";

export default {
  data() {
    return {
      modalDom: "",
    };
  },
  props: ["tmpProd"],
  mixins: [modalMixin],

  methods: {

  },
  mounted() {},
};
</script>
