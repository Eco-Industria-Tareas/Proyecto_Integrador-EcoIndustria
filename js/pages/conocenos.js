/* Component: Navbar 
   Contiene la barra de navegación 
   así como los link de acceso a otras paginas */

   import STORAGE from "../utils/storage.js";

export default Vue.component("conocenos", {
  data: function () {
    return {
      first_name: "",
      last_name: "",
      phone_number: "",
      mail: "",
      opinion: "",
      has_error: false
    };
  },
  methods: {
    regresar: function () {
      this.$router.go(-1)
    },
    goLogin() {
      this.$router.push("/");
    },
    Proveedor: function () {
      var self = this
      fetch('https://api-eco-industria.herokuapp.com/add_proveedor',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name:this.first_name,
          last_name: this.last_name,
          phone_number: this.phone_number,
          mail: this.mail,
          opinion: this.opinion
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
     template: `
     <div class="container">
     <whatsapp></whatsapp>
        <div class="mt-5 text_primary text-center image_back">
            <h4 class="font_mochiy">¿Quieres publicar tus productos?</h4>
            <p class="text-secondary">Por favor llena el siguiente formulario para que nuestro equipo se comunique contigo! </p>
        </div>

        <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div  class="signup-form image_back">

              <form class="form  border p-4 bg-light shadow-lg">
                <h5 class="d-flex justify-content-center mb-3 cl_fourth font_mochiy text-success">Formulario de contacto</h5>
                <div class="row">

                  <div class="form-group mb-3 col-md-6">
                    <label>Nombres</label>
                    <input type="text" name="fname" class="form-control" v-model="first_name" placeholder="Nombre">
                  </div>
    
                  <div class="form-group mb-3 col-md-6">
                    <label>Apellidos</label>
                    <input type="text" name="Lname" class="form-control" v-model="last_name" placeholder="Apellido">
                  </div>
    
                  <div class="form-group mb-3 col-md-12">
                    <label>Número de teléfono</label>
                    <input type="text" name="tel" class="form-control" v-model="phone_number" placeholder="12345678">
                  </div>

                  <div class="form-group mb-3 col-md-12">
                    <label>Correo electrónico</label>
                    <input type="text" name="password" class="form-control" v-model="mail" placeholder="usuario@mail.com">
                  </div>
    
                  <div class="form-group mb-3 col-md-12">
                    <label>¿Porqué quieres asociarte con nosotros?</label>
                    <textarea rows="3" cols="50" class="form-control" v-model="opinion" placeholder="Escribe tu comentario"></textarea>                  
                  </div>
  
                  <div class=" text-muted d-flex justify-content-center fs-s">
                <p class="">Al hacer clic en "Enviar", aceptas nuestras 
                  <a class="color-primary" >Condiciones</a>, la <a class="color-primary">Política de datos</a> y la <a class="color-primary">Política de cookies</a>. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>
              </div>
                  <br><br>
                  <div class="col-md-12 d-flex justify-content-center">
                    <button class="btn bg_fourth font_mochiy "  @click="Proveedor" type="button" style="width: 90%; height: 6vh;">
                      <a href="#" class="text-dark text-decoration-none">Enviar</a>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

     </div>


     `,
    });
    