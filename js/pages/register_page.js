import CLIENT from "../api/client.js";

export default Vue.component("register-page", {
  data: function () {
    return {
      // username: "",
      // email: "",
      // password: "",
      // is_staff: false,
    };
  },
  methods: {
    // async createUser() {
    //   let vm = this;
    //   try {
    //     await CLIENT.post("/authentication/sign-up/", {
    //       "username": vm.username,
    //       "email":vm.email,
    //       "password":vm.password,
    //       "is_staff" : vm.is_staff,
    //     });
    //     alert("Usuario creado correctamente");
    //     vm.$router.push("/");
    //   } catch (e) {
        
    //     alert("Upps hubo un error: " + e.message)
    //     console.info(e);
    //   }
    // },
    // goLogin() {
    //   this.$router.push("/");
    // },
  },
  created: function () {},
  template: `
      <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div  class="signup-form image_back">
          <form action="" class="mt-5 border p-4 bg-light shadow-lg">
            <h4 class="d-flex justify-content-center mb-5 cl_fourth font_mochiy h3">REGÍSTRATE</h4>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label>Primer Nombre</label>
                <input type="text" name="fname" class="form-control" placeholder="Primer Nombre">
              </div>

              <div class="mb-3 col-md-6">
                <label>Apellido</label>
                <input type="text" name="Lname" class="form-control" placeholder="Apellido">
              </div>

              <div class="mb-3 col-md-12">
                <label>Email</label>
                <input type="text" name="password" class="form-control" placeholder="Email">
              </div>

              <div class="mb-3 col-md-12">
                <label>Número de teléfono</label>
                <input type="text" name="password" class="form-control" placeholder="Número de teléfono">
              </div>

              <div class="mb-3 col-md-12">
                <label>Contraseña</label>
                <input type="password" name="password" class="form-control" placeholder="Introduce tu nueva contraseña">
              </div>
              <div class="mb-3 col-md-12">
                <label>Confirma tu Contraseña</label>
                <input type="password" name="confirmpassword" class="form-control" placeholder="Confirma tu contraseña">
              </div>

              <div class="form-check d-flex justify-content-center">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label cl_fourth" for="flexCheckChecked">
                  Aceptar terminos y Condiciones.
                </label>
              </div>
              <br><br>
              <div class="col-md-12 d-flex justify-content-center">
                <button class="btn bg_fourth font_mochiy " style="width: 90%; height: 6vh;">
                  <a href="log_in.html" class="text-dark text-decoration-none">Regístrarse</a>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
      `,
});
