<template>
  <div
    id="productModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-5">
                <h5>主要圖片</h5>
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">圖片網址：</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="prodData.imageUrl"
                  />
                  <img :src="prodData.imageUrl" class="img-fluid" alt="" />
                </div>
              </div>

              <div v-if="prodData.imagesUrl?.length != 0" class="mb-2">
                <h5>附加圖片</h5>
                <div
                  class="mb-5"
                  v-for="(url, key) in prodData.imagesUrl"
                  :key="key"
                >
                  <label for="imageUrl" class="form-label"
                    >附圖 {{ key + 1 }} - 圖片網址：</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="prodData.imagesUrl[key]"
                  />
                  <img
                    :src="prodData.imagesUrl[key]"
                    class="img-fluid"
                    style="margin: 5px 0px"
                    alt=""
                  />
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="delPicture(key)"
                  >
                    刪除此張附圖
                  </button>
                </div>
              </div>

              <div>
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="addPicture"
                >
                  新增附圖
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="prodData.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="prodData.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="prodData.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="prodData.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="prodData.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="prodData.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="prodData.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="prodData.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateProd">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>


<script>
// import Modal from "bootstrap/js/dist/modal";
import modalMixin from "@/mixins/modalMixin.js";
import emitter from "@/methods/mitt";

export default {
  data() {
    return {
      modalDom: "",
      prodData: {},
    };
  },
  emits: ["update"],
  props: ["tmpProd", "isNew"],
  mixins: [modalMixin],
  watch: {
    tmpProd() {
      this.prodData = this.tmpProd;
    },
  },
  methods: {
    updateProd() {
      emitter.emit("loading");

      let method, tmpUrl, msg;
      if (this.isNew) {
        method = "post";
        tmpUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
        msg = "新增資料";
      } else {
        method = "put";
        tmpUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.prodData.id}`;
        msg = "更新資料";
      }

      this.$http[method](tmpUrl, { data: this.prodData })
        .then((res) => {
          this.hideModal();
          this.$emit("update", "current");
          this.$pushToastMessage(res, `${msg}`);
        })
        .catch((err) => {
          console.dir(err);
          emitter.emit("un-loading");
          this.$pushToastMessage(err.response, `${msg}`);
        });
    },
    addPicture() {
      this.prodData.imagesUrl.push("");
    },
    delPicture(index) {
      this.prodData.imagesUrl.splice(index, 1);
    },
    // openModal() {
    //   this.modalDom.show();
    // },
    // hideModal() {
    //   this.modalDom.hide();
    // },
  },
  mounted() {
    // console.log(`in mounted session!!`);
    // this.modalDom = new Modal(this.$refs.modal);
  },
};
</script>