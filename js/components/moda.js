// import STORAGE from "../utils/storage.js";

export default Vue.component("moda", {
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
                    <h2 class="font_mochiy">MODA</h2>
                </div>
                <div class="row gx-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ">               
                    <div class="col mb-5" >
                        <div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img src="https://tienda.oxfamintermon.org/8123-large_default/bolsa-alg-there-is-no-planet-b.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Bolsa Planet B</p>
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
                    </div>
                    <div class="col mb-5" >
                        <div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img src="https://tienda.oxfamintermon.org/8038-large_default/jersey-organic-rama-carmin-s.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Blusa Orgánica</p>
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
                            <img src="https://tienda.oxfamintermon.org/8011-large_default/camiseta-man-organic-pokoj-abeto-s.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
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
                            <img src="https://tienda.oxfamintermon.org/4729-large_default/camiseta-kid-organic-akira-amarillo-e.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Camisa Niño</p>
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
                            <img src="https://tienda.oxfamintermon.org/8193-large_default/veraluna-socks-basic-marina-io-i8.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Calcetín Algodón Orgánico</p>
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
  