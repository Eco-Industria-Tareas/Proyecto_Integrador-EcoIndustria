/* Component: Navbar 
   Contiene la barra de navegación 
   así como los link de acceso a otras paginas */

// import STORAGE from "../utils/storage.js";

export default Vue.component("navbar", {
  props: [""],
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
    goLogin(){
      this.$router.push("/login_page")
    },
    goConoce(){
      this.$router.push("/conocenos")
    },
    goBack() {
      this.$router.push("/");
    },
    goShop() {
      this.$router.push("/shop");
    },
    goCart() {
      this.$router.push("/cart");
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

  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg degradado shadow-lg sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand  text-white fw-bolder fs-3" href="../../index.html">ECO-INDUSTRY</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button type="button" @click="goInicio" class=" btn btn-link px-3 me-2 text-decoration-none text-white">Inicio</button>
              </li>
 
              <li class="nav-item dropdown">
                <button type="button" class="dropdown-toggle btn btn-link px-3 me-2 text-decoration-none text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">            
                  Categorías
                </button>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button class="dropdown-item" @click="goHogar"><i class="bi bi-house-door-fill me-2"></i>Hogar</button></li>
                  <li><button class="dropdown-item" @click="goAlimentacion"><i class="fa fa-utensils me-2"></i>Alimentación</button></li>
                  <li><button class="dropdown-item"  @click="goModa" ><i class="fa fa-socks me-2"></i>Moda</button></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><button class="dropdown-item" @click="goConoce"><i class="bi bi-box-arrow-in-up me-2"></i>Publicar</button></li>
                </ul>
              </li>
            </ul>

          </div>

          <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg_secondary">
            <li class="nav-item">
            <button type="button" @click="goInicio" class="btn btn-link px-3 me-2 text-decoration-none text-white">Inicio</button>
            </li>
            <li class="nav-item">
            <button type="button" @click="goHogar" class="btn btn-link px-3 me-2 text-decoration-none text-white">Hogar</button>
            </li>
            <li class="nav-item">
              <button type="button" @click="goAlimentacion" class="btn btn-link px-3 me-2 text-decoration-none text-white">Alimentación</button>
            </li>
            <li class="nav-item">
            <button type="button" @click="goModa" class="btn btn-link px-3 me-2 text-decoration-none text-white">Moda</button>
            </li>
            <li class="nav-item">
            <button type="button" @click="goConoce" class="btn btn-link px-3 me-2 text-decoration-none text-white">Contáctanos</button>
            </li>
          </ul> -->

          <form class="d-flex">
            <input class="form-control me-2" type="text" placeholder="Buscar..." aria-label="search" >
            <button class="btn bg_secondary me-4 text-white" type="submit"><i class="bi bi-search"></i></button>

            <div class="d-flex me-2">
            <button id="btn_cart" class="btn bg_secondary" @click="goCart">
              <i  class="bi bi-cart-fill text-white"></i>
            </button>
            </div>
            <div class="d-flex me-2">
            <button id="btn_cart" class="btn bg_secondary" @click="goLogin">
              <i  class="bi bi-person-fill text-white"></i>
            </button>
            </div>
          </form>
        </div>
      </div>
  </nav>
  </div>
    `,
});
