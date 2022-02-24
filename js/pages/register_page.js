import CLIENT from "../api/client.js";

export default Vue.component("register-page", {
  data: function () {
    return {
      username: "",
      password: "",
      mail: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      has_error: false
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/inicio");
    },
    iniciarSecion: function () {
      var self = this
      fetch('https://api-eco-industria.herokuapp.com/add_usuarios',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          username: this.username,
          password: this.password,
          mail: this.mmail,
          first_name:this.first_name,
          last_name: this.last_name,
          phone_number: this.phone_number
        })
      })
      .then(function (response) {
        console.log(response.status)
        if (response.status ==400) {
          self.has_error = true
        }
        return response.json()
      })
      .then(function (data) {
        if (self.has_error == false) {
          self.$router.push('/inicio')
        } else {
          self.error = data.detail
        }
        
      })
      .catch(function (error) {
        console.log("Error: ", error)
      })
    },
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
