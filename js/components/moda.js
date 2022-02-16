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
  
    <div>
            <div class="my-3 ms-5 tc-primary ">
            <p><a class="text-decoration-none text-dark" href="../../index.html">Inicio /</a> 
            <a class="text-dark" href="moda.html">Moda</a></p>
        </div>

        <div class="my-5 text_primary text-center">
            <h1 class="font_mochiy">MODA</h1>
        </div>

        <div class="d-flex d-block">
            <div class="w-25">
            <div class="ms-3 bg_secondary text-white rounded-1 text-center">
                <h3>CATEGORÍAS</h3>
            </div>
            <div class="h5 ms-3 bg_fourth rounded-1 text-center p-1">
                <a href="" class="text-decoration-none text-dark">Ropa Mujer</a>
            </div>
            <div class="h5 ms-3 bg_tertiary rounded-1 text-center p-1">
                <a href="" class="text-decoration-none text-dark">Ropa Hombre</a>
            </div>
            <div class="h5 ms-3 bg_fourth rounded-1 text-center p-1">
                <a href="" class="text-decoration-none text-dark">Ropa Infantil</a>
            </div>
            <div class="h5 ms-3 bg_tertiary rounded-1 text-center p-1">
                <a href="" class="text-decoration-none text-dark">Cosmética Natural</a>
            </div>
            <div class="h5 ms-3 bg_fourth rounded-1 text-center p-1">
                <a href="" class="text-decoration-none text-dark">Varios</a>
            </div>
            </div>

            <div class="w-75 mx-3 d-flex flex-wrap">
            <div>
                <div class="card mx-5 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                <img
                    src="https://tienda.oxfamintermon.org/8123-large_default/bolsa-alg-there-is-no-planet-b.jpg"
                    class="card-img-top img-fluid img-thumbnail"
                    alt="..."
                    style="width: 300px"
                />
                <div class="card-body">
                    <p class="card-text fw-bolder">Bolsa Planet B</p>
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
                    <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
                        <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
                    </button>
                    </div>
                </div>
            </div>
                
            <div>
                <div class="card mx-4 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                <img
                    src="https://tienda.oxfamintermon.org/8108-large_default/pulsera-bambu-modelo-tagua-detalle-azul.jpg"
                    class="card-img-top img-fluid img-thumbnail"
                    alt="..."
                    style="width: 300px"
                />
                <div class="card-body">
                    <p class="card-text fw-bolder">Pulsera Bambú</p>
                    <div class="d-flex justify-content-center text-warning small">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <span class="px-3 text-dark">5</span>
                    </div>
                </div>
                    <span id="precio" class="mb-2">$50.00</span>
                    <div class="col-md-12 d-flex justify-content-center mb-2">
                    <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
                        <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
                    </button>
                    </div>
                </div>
            </div>
        
            <div>
                <div class="card mx-5 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                <img
                    src="https://tienda.oxfamintermon.org/8038-large_default/jersey-organic-rama-carmin-s.jpg"
                    class="card-img-top img-fluid img-thumbnail"
                    alt="..."
                    style="width: 300px"
                />
                <div class="card-body">
                    <p class="card-text fw-bolder">Blusa Orgánica</p>
                    <div class="d-flex justify-content-center text-warning small">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <span class="px-3 text-dark">5</span>
                    </div>
                </div>
                    <span id="precio" class="mb-2">$50.00</span>
                    <div class="col-md-12 d-flex justify-content-center mb-2">
                    <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
                        <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
                    </button>
                    </div>
                </div>
            </div>
                
            <div>
                <div class="card mx-4 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                <img
                    src="https://tienda.oxfamintermon.org/8011-large_default/camiseta-man-organic-pokoj-abeto-s.jpg"
                    class="card-img-top img-fluid img-thumbnail"
                    alt="..."
                    style="width: 300px"
                />
                <div class="card-body">
                    <p class="card-text fw-bolder">Camiseta Orgánica</p>
                    <div class="d-flex justify-content-center text-warning small">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <span class="px-3 text-dark">4</span>
                    </div>
                </div>
                    <span id="precio" class="mb-2">$50.00</span>
                    <div class="col-md-12 d-flex justify-content-center mb-2">
                    <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
                        <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
                    </button>
                    </div>
                </div>
            </div>
        
            <div>
                <div class="card mx-5 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                <img
                    src="https://tienda.oxfamintermon.org/4729-large_default/camiseta-kid-organic-akira-amarillo-e.jpg"
                    class="card-img-top img-fluid img-thumbnail"
                    alt="..."
                    style="width: 300px"
                />
                <div class="card-body">
                    <p class="card-text fw-bolder">Camisa Niño</p>
                    <div class="d-flex justify-content-center text-warning small">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <span class="px-3 text-dark">2</span>
                    </div>
                </div>
                <span id="precio" class="mb-2">$50.00</span>
                <div class="col-md-12 d-flex justify-content-center mb-2">
                    <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
                    <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
                    </button>
                </div>
                </div>
            </div>
                
            <div>
                <div class="card mx-4 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
                <img
                    src="https://tienda.oxfamintermon.org/8193-large_default/veraluna-socks-basic-marina-io-i8.jpg"
                    class="card-img-top img-fluid img-thumbnail"
                    alt="..."
                    style="width: 300px"
                />
                <div class="card-body">
                    <p class="card-text fw-bolder">Calcetín Algodón Orgánico</p>
                    <div class="d-flex justify-content-center text-warning small">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <span class="px-3 text-dark">5</span>
                    </div>
                </div>
                    <span id="precio" class="mb-2">$50.00</span>
                    <div class="col-md-12 d-flex justify-content-center mb-2">
                    <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
                        <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
                    </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
      `,
  });
  