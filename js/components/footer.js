/* Component: Navbar 
   Contiene la barra de navegación 
   así como los link de acceso a otras paginas */

import STORAGE from "../utils/storage.js";

export default Vue.component("footer", {
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
        <footer class="bg_secondary py-3 mt-5 d-flex flex-column align-items-center">
      <div class="text-white">
          <div class="d-flex">
            <div class="d-flex flex-column align-items-center">
              <a href="https://www.instagram.com" target="_blank" class="fs-1 bi bi-instagram fw-bolder text-white text-decoration-none" aria-hidden="true"></a>
            </div>
            <div class="d-flex flex-column align-items-center ms-5 me-5">
              <a href="https://www.facebook.com" target="_blank" class="fs-1 bi bi-facebook fw-bolder text-white text-decoration-none" aria-hidden="true"></a>
            </div>
            <div class="d-flex flex-column align-items-center me-5">
              <a href="mailto:ra305169@gmail.com?Subject=Atención" target="_blank" class="fs-1 bi bi-envelope fw-bolder text-white text-decoration-none" aria-hidden="true"></a>
            </div>
            <div class="d-flex flex-column align-items-center me-5">
              <a href="" class="fs-1 bi bi-newspaper fw-bolder text-white text-decoration-none" aria-hidden="true"></a>
            </div>
            <div class="d-flex flex-column align-items-center">
              <a href="https://api.whatsapp.com/send?phone=50232306256" target="_blank" class="fs-1 bi bi-whatsapp fw-bolder text-white text-decoration-none" aria-hidden="true" ></a>
            </div>
          </div>
      </div>

      <div class="container text-white">
        <p class="text-center mt-1">Copyright &copy; 2022 by <b>Eco-Industry</b> team.</p>
      </div>
    </footer>
    </div>
    `,
});
