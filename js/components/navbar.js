/* Component: Navbar 
   Contiene la barra de navegación 
   así como los link de acceso a otras paginas */

// import STORAGE from "../utils/storage.js";

export default Vue.component("navbar", {
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
    goInicio(){
      this.$router.push("/")
    },
    goHogar() {
      this.$router.push("/hogar");
    },
    goAlimentacion() {
      this.$router.push("/alimentacion");
    },
    goModa() {
      this.$router.push("/moda");
    },
    goBlog(){
      this.$router.push("/blog")
    },
    goBack() {
      this.$router.push("/");
    },
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
    <nav class="navbar navbar-expand-lg degradado shadow-lg sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand  text-white fw-bolder fs-3" href="../../index.html">ECO-INDUSTRY</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg_secondary">
            <li class="nav-item">
            <button type="button" @click="goInicio" class="btn btn-link px-3 me-2 text-decoration-none">Inicio</button>
            </li>
            <li class="nav-item">
            <button type="button" @click="goHogar" class="btn btn-link px-3 me-2 text-decoration-none">Hogar</button>
            </li>
            <li class="nav-item">
              <button type="button" @click="goAlimentacion" class="btn btn-link px-3 me-2 text-decoration-none">Alimentacion</button>
            </li>
            <li class="nav-item">
            <button type="button" @click="goModa" class="btn btn-link px-3 me-2 text-decoration-none">Moda</button>
            </li>
            <li class="nav-item">
            <button type="button" @click="goBlog" class="btn btn-link px-3 me-2 text-decoration-none">Blog</button>
            </li>
          </ul>

          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn bg_secondary me-4 text-white" type="submit"><i class="bi bi-search"></i></button>

            <div class="d-flex me-2">
            <button id="btn_cart" class="btn bg_secondary">
              <a href="cart.html" class="bi bi-cart-fill text-white">
              
              </a>
            </button>
            </div>

            <div class="d-flex me-2">
              <button id="btn_cart" class="btn bg_secondary" style="width:10vh;">
                <a href="log_in.html" class="bi bi-person-fill text-white">
                
                </a>
              </button>
              </div>
          </form>
        </div>
      </div>
  </nav>
  </div>
    `,
});
