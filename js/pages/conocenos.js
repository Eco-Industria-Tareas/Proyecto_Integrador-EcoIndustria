/* Component: Navbar 
   Contiene la barra de navegación 
   así como los link de acceso a otras paginas */

   import STORAGE from "../utils/storage.js";

   export default Vue.component("conocenos", {
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
        regresar: function () {
            this.$router.go(-1)
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
     <div class="container">
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
                    <label>Nombre</label>
                    <input type="text" name="fname" class="form-control" placeholder="Nombre">
                  </div>
    
                  <div class="form-group mb-3 col-md-6">
                    <label>Apellido</label>
                    <input type="text" name="Lname" class="form-control" placeholder="Apellido">
                  </div>
    
                  <div class="form-group mb-3 col-md-12">
                    <label>Número de teléfono</label>
                    <input type="text" name="password" class="form-control" placeholder="12345678">
                  </div>

                  <div class="form-group mb-3 col-md-12">
                    <label>Correo electrónico</label>
                    <input type="text" name="password" class="form-control" placeholder="usuario@mail.com">
                  </div>
    
                  <div class="form-group mb-3 col-md-12">
                    <label>Contraseña</label>
                    <input type="password" name="password" class="form-control" placeholder="********">
                  </div>

                  <div class="form-group mb-3 col-md-12">
                    <label>¿Porqué quieres publicar tus productos con nosotros?</label>
                    <textarea rows="3" cols="50" class="form-control" placeholder="Escribe tu comentario"></textarea>                  
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
                      <a @click.prevent="regresar" class="text-dark text-decoration-none">Enviar</a>
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
    