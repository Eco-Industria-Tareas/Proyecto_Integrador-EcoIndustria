export default Vue.component("card_shop", {
    props: [],
    data: function () {
      return {
      };
    },
    computed: {
    },
    methods: {
      goProduct(){
        this.$router.push("/product-view")
      },
      // },
    },
    mounted() {},
    created: function () {
    },
    template: `
<div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img src="https://tienda.oxfamintermon.org/8108-large_default/pulsera-bambu-modelo-tagua-detalle-azul.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Pulsera de Bambú</p>
                                  <div class="d-flex justify-content-center text-warning small">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <span class="px-3 text-dark">3</span>
                                  </div>
                            </div>
                            <span id="precio" class="mb-2">$50.00</span>
                            <div class="col-md-12 d-flex justify-content-center mb-2">
                                <button @click="goProduct" class="btn-dark bg_primary fw-bolder  rounded ">
                                    Ver Producto
                                </button>
                            </div>
                        </div>
      `,
  });
  