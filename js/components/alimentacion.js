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

  <div class="my-5 text_primary text-center">
    <h1 class="font_mochiy">ALIMENTACIÓN</h1>
  </div>

  <div class="d-flex d-block">
    <div class="w-25">
      <div class="ms-3 bg_secondary text-white rounded-1 text-center">
        <h3>CATEGORÍAS</h3>
      </div>
      <div class="h5 ms-3 bg_fourth rounded-1 text-center p-1">
        <a href="" class="text-decoration-none text-dark">Tés e Infusiones</a>
      </div>
      <div class="h5 ms-3 bg_tertiary rounded-1 text-center p-1">
        <a href="" class="text-decoration-none text-dark">Café</a>
      </div>
      <div class="h5 ms-3 bg_fourth rounded-1 text-center p-1">
        <a href="" class="text-decoration-none text-dark">Verduras</a>
      </div>
      <div class="h5 ms-3 bg_tertiary rounded-1 text-center p-1">
        <a href="" class="text-decoration-none text-dark">Dulces</a>
      </div>
      <div class="h5 ms-3 bg_fourth rounded-1 text-center p-1">
        <a href="" class="text-decoration-none text-dark">Salados</a>
      </div>
    </div>

    <div class="w-75 mx-3 d-flex flex-wrap">
      <div>
        <div class="card mx-5 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
          <img
            src="https://tienda.oxfamintermon.org/140-large_default/te-earl-grey-organico-bolsitas-tierramadre.jpg"
            class="card-img-top img-fluid img-thumbnail"
            alt="..."
            style="width: 300px"
          />
          <div class="card-body">
            <p class="card-text fw-bolder">Té Negro Orgánico</p>
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
        <div class="card mx-4 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
          <img
            src="https://tienda.oxfamintermon.org/315-large_default/cafe-oxfam-intermon-molido-biologico.jpg"
            class="card-img-top img-fluid img-thumbnail"
            alt="..."
            style="width: 300px"
          />
          <div class="card-body">
            <p class="card-text fw-bolder">Café Molido Biológico</p>
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
            src="https://tienda.oxfamintermon.org/172-large_default/panela-grano-fino-bio-oaag.jpg"
            class="card-img-top img-fluid img-thumbnail"
            alt="..."
            style="width: 300px"
          />
          <div class="card-body">
            <p class="card-text fw-bolder">Panela Grano</p>
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
        <div class="card mx-4 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
          <img
            src="https://tienda.oxfamintermon.org/4162-large_default/quinoa-real-biologica-oaa-g.jpg"
            class="card-img-top img-fluid img-thumbnail"
            alt="..."
            style="width: 300px"
          />
          <div class="card-body">
            <p class="card-text fw-bolder">Quinoa Real Biológica</p>
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
            src="https://tienda.oxfamintermon.org/85-large_default/leche-de-coco-bio-eaaml.jpg"
            class="card-img-top img-fluid img-thumbnail"
            alt="..."
            style="width: 300px"
          />
          <div class="card-body">
            <p class="card-text fw-bolder">Leche de Coco</p>
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
        <div class="card mx-4 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
          <img
            src="https://tienda.oxfamintermon.org/1317-large_default/salsa-al-pesto-con-albahaca-do.jpg"
            class="card-img-top img-fluid img-thumbnail"
            alt="..."
            style="width: 300px"
          />
          <div class="card-body">
            <p class="card-text fw-bolder">Salsa al Pesto</p>
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
    </div>
  </div>
    </div>
      `,
  });
  