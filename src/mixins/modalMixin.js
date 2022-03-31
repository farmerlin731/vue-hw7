import Modal from "bootstrap/js/dist/modal";


export default {
    methods: {
        openModal() {
            this.modalDom.show();
        },
        hideModal() {
            this.modalDom.hide();
        },
    },

    mounted() {
        this.modalDom = new Modal(this.$refs.modal);
    },
};