import CLIENT from "../api/client.js";

export default Vue.component("register-page", {
  data: function () {
    return {
      uname: "",
      passw: "",
      mail: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      has_error: false
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/login_page");
    },
    iniciarSecion: function () {
      var self = this
      fetch('https://api-eco-industria.herokuapp.com/add_usuarios',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          uname: this.uname,
          passw: this.passw,
          mail: this.mail,
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
          self.$router.push('/')
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
    <whatsapp></whatsapp>
      <div class="col-md-6 offset-md-3">
        <div  class="signup-form image_back">
          <form action="" class="mt-5 border p-4 bg-light shadow-lg">
            <h4 class="d-flex justify-content-center mb-5 cl_fourth font_mochiy h3">REGÍSTRATE</h4>
            <div class="row">

              <div class="mb-3 col-md-12">
                <label>Nombre de usuario</label>
                <input type="text" name="name" class="form-control" v-model="uname" placeholder="Nombre de usuario">
              </div>

              <div class="mb-3 col-md-6">
                <label>Nombre</label>
                <input type="text" name="fname" class="form-control" v-model="first_name" placeholder="Nombre">
              </div>

              <div class="mb-3 col-md-6">
                <label>Apellido</label>
                <input type="text" name="Lname" class="form-control" v-model="last_name" placeholder="Apellido">
              </div>

              <div class="mb-3 col-md-12">
                <label>Email</label>
                <input type="text" name="password" class="form-control" v-model="mail" placeholder="name@example.com">
              </div>

              <div class="mb-3 col-md-12">
                <label>Número de teléfono</label>
                <input type="text" name="password" class="form-control" v-model="phone_number " placeholder="Número de teléfono">
              </div>

              <div class="mb-3 col-md-12">
                <label>Contraseña</label>
                <input type="password" name="password" class="form-control" v-model="passw" placeholder=" ********">
              </div>
              <div class="mb-3 col-md-12">
                <label>Confirmar contraseña</label>
                <input type="password" name="password" class="form-control" v-model="passw" placeholder=" ********">
              </div>

              <div class=" text-muted d-flex justify-content-center fs-s">
                <p class="">Al hacer clic en "Registrarte", aceptas nuestras 
                  <a class="color-primary" >Condiciones</a>, la <a class="color-primary">Política de datos</a> y la <a class="color-primary">Política de cookies</a>. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>
              </div>
              <br><br>
              <div class="col-md-12 d-flex justify-content-center">
                <button class="btn bg_fourth font_mochiy "  @click="iniciarSecion" type="button" style="width: 90%; height: 6vh;">
                  <a href="#" class="text-dark text-decoration-none">Regístrarse</a>
                </button>
              </div>
              <div class="mt-3  d-flex justify-content-center">
                          <label class="me-2" for="">¿Ya tienes una cuenta?</label> 
                          <a href="#" @click.prevent="goLogin" class="text_secondary mb-3 fw-bolder">Inicia Sesión</a>
                        </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
      `,
});
