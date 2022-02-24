/* Component: Navbar 
   Contiene la barra de navegación 
   así como los link de acceso a otras paginas */

// import STORAGE from "../utils/storage.js";

export default Vue.component("alimentacion", {
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
                    <h2 class="font_mochiy">ALIMENTACIÓN</h2>
                </div>
                <div class="row gx-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ">               
                    <div class="col mb-5" >
                        <div class="card h-100 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                            <img src="https://tienda.oxfamintermon.org/140-large_default/te-earl-grey-organico-bolsitas-tierramadre.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Té Negro Orgánico</p>
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
                            <img src="https://tienda.oxfamintermon.org/315-large_default/cafe-oxfam-intermon-molido-biologico.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Café Molido Biológico</p>
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
                            <img src="https://tienda.oxfamintermon.org/172-large_default/panela-grano-fino-bio-oaag.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Panela Grano</p>
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
                            <img src="https://tienda.oxfamintermon.org/4162-large_default/quinoa-real-biologica-oaa-g.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Quinoa Real Biológica</p>
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
                            <img src="https://tienda.oxfamintermon.org/85-large_default/leche-de-coco-bio-eaaml.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Leche de Coco</p>
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
                            <img src="https://tienda.oxfamintermon.org/1317-large_default/salsa-al-pesto-con-albahaca-do.jpg" class="card-img-top img-fluid img-thumbnail" alt="...">
                            <div class="card-body">
                                <p class="card-text fw-bolder text-center">Salsa al Pesto</p>
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
  