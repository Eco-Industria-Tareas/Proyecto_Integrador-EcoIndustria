// import STORAGE from "../utils/storage.js";

export default Vue.component("hogar", {
    props: [],
    data: function () {
      return {
        // username: "",
        // password: "",
        // isLogged: false,
        // current_path: false,
      };
    },
    computed: {
      // isRoot() {
      //   return this.current_path == '/products' || this.current_path == '/'
      // },
    },
    methods: {
      goProduct(){
        this.$router.push("/product-view")
      },
      // goLogin() {
      //   this.$router.push("/");
      // },
      // goBack() {
      //   this.$router.push("/");
      // },
      // goRegister() {
      //   // Redirige al usuario al listado de productos
      //   this.$router.push("register");
      // },
      // logout() {
      //   // Eliminamos el token de sesión
      //   STORAGE.remove("token");
      //   this.$router.push("/");
      // },
    },
    mounted() {},
    created: function () {
      // Validamos el cambio en el Local Storage
      // setInterval(() => {
      //   this.isLogged = !(STORAGE.get("token") == null);
      //   this.current_path = this.$router.history.current.path
      // }, 1000);
    },
    template: `
            <section>
            <div class="container mt-2">
                <div class="my-5 text_primary text-center">
                    <h2 class="font_mochiy">HOGAR</h2>
                </div>
                <div class="row gx-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ">               
                    <div class="col mb-5" >
                        <div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img src="https://tienda.oxfamintermon.org/8406-large_default/ecoagenda-neutre-diaria-eaee.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Eco Agenda 2022</p>
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
                    </div>
                    <div class="col mb-5" >
                        <div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img src="https://tienda.oxfamintermon.org/8114-large_default/bowl-coco-lacado-menta.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Bowl Coco Lacado</p>
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
                    </div>
                    <div class="col mb-5" >
                        <div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img src="https://tienda.oxfamintermon.org/8111-large_default/cesta-bandeja-algod-n-multicolor-diu.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Cesta Bandeja Multicolor</p>
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
                    </div>
                    <div class="col mb-5" >
                        <div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img src="https://tienda.oxfamintermon.org/8112-large_default/bolsita-peq-regalo-motivos-blancos-jute.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Bolsita Regalo Reutilizable</p>
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
                    </div>
                    <div class="col mb-5" >
                        <div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img src="https://tienda.oxfamintermon.org/7684-large_default/funda-cojin-estampado-beige-heyagonal.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Funda Cojín</p>
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
                    </div>
                    <div class="col mb-5" >
                        <div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img src="https://tienda.oxfamintermon.org/3280-large_default/detergente-eco-lavadora-ea-dosis.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Eco Detergente</p>
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
                    </div>                   
                </div>               
            </div>
        </section>



      `,
  });
  