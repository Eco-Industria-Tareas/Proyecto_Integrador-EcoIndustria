import CLIENT from "../api/client.js";
import STORAGE from "../utils/storage.js";

export default Vue.component("login-page", {
  data: function () {
    return {
      mail: "",
      passw: "",
    };
  },
  methods: {
    goRegister(){
      this.$router.push("/register")
    },
    DoLogin: async function () {
      let vm = this;
      try {
        //Enviamos la petición Via POST
        const response = await CLIENT.post("autenticar", {
          mail: vm.mail,
          passw: vm.passw,

        });
        // Almacenamos el token si el inicio de sesión es correcto
        STORAGE.set("token", response.token);
        // Redirigimos al usuario al home
        vm.$router.push("/");
      } catch (e) {
        //En caso haya un error en el inicio de sesión
        // Notificamos por consola el incidente
        console.warn(e);
        alert("Error al iniciar sesión");
      }
    },
  },
  created: function () {
    // Verifica si el usuario esta loggeado a través del token
    // const is_logged = !(STORAGE.get("token") == null);
    // if (is_logged) {
    //   this.$router.push("inicio.js");
    // }
  },
  template: `
  
    <div class="container ">
        <div class="row">
            <div class="col-md-6 offset-md-3 ">
                <div class="signup-form image_back mb-5">
                    <form name="Login in " action="send.php" method="post" class="d-flex flex-column img-thumbnail mt-5 shadow-lg">
                        <div class="d-flex justify-content-center font_mochiy h3 mt-4 ">
                            <h1>Iniciar Sesión</h1>
                        </div>
                        <div  class="d-flex flex-column mt-3 p-3">
                            <label for="">Correo Electrónico</label>
                            <input  class="form-control form-label readonly"  v-model="mail"  type="text" placeholder="name@example.com"required/>
                            <label for="" class="mt-2">Contraseña</label>
                            <input  class="form-control form-label readonly " type="password" v-model="passw" placeholder="********"required/>
                        </div>

                        <div class="col-md-12 d-flex justify-content-center">
                            <button class="btn bg_fourth font_mochiy " @click="DoLogin" style="width: 90%; height: 6vh;">
                             <a href="#" class="text-dark text-decoration-none">Iniciar Sesión</a> 
                           </button>
                         </div>

                        <div class="mt-3  d-flex justify-content-center">
                          <label for="">¿No tienes cuenta? </label> 
                          <a  @click.prevent="goRegister" class="text_secondary mb-3 fw-bolder">¡Click aquí!</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `,
});
