export default Vue.component("shop", {
    data: function () {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      goRegister(){
        this.$router.push("/shop")
      },
      // DoLogin: async function () {
      //   let vm = this;
      //   try {
      //     //Enviamos la petición Via POST
      //     const response = await CLIENT.post("/authentication/login/", {
      //       username: vm.username,
      //       password: vm.password,
      //     });
      //     // Almacenamos el token si el inicio de sesión es correcto
      //     STORAGE.set("token", response.token);
      //     // Redirigimos al usuario al home
      //     vm.$router.push("products");
      //   } catch (e) {
      //     //En caso haya un error en el inicio de sesión
      //     // Notificamos por consola el incidente
      //     console.warn(e);
      //     alert("Error al iniciar sesión");
      //   }
      // },
      // goRegister() {
      //   // Redirige al usuario al listado de productos
      //   this.$router.push("register");
      // },
    },
    created: function () {
      // Verifica si el usuario esta loggeado a través del token
      // const is_logged = !(STORAGE.get("token") == null);
      // if (is_logged) {
      //   this.$router.push("inicio.js");
      // }
    },
    template: `
    
    <section class="container">
      <div class="row y">
        <div class=" col-md-6 offset-md-3">              
            <form name="Login in " action="" method="post" class=" d-flex flex-column img-thumbnail my-5 shadow-lg">
              <div class=" d-flex justify-content-center font_mochiy mt-4 text_primary">
                <h1>PAGO</h1>
              </div>
                      
              <div  class="d-flex flex-column mt-3 p-3">
                <label for="">No. de Orden</label>
                  <p  class="form-control form-label readonly "> 001 </p>
                <label for="" class="mt-2">Tipo de pago</label>

                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                    <label class="btn btn-outline-warning text-dark" for="btnradio1">Tarjeta</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                    <label class="btn btn-outline-warning text-dark" for="btnradio2">Efectivo</label>
                    
                  </div>
 
                <label for="" class="mt-2">Fecha</label>
                  <input  class="form-control form-label readonly " type="date"required/>

                <label for="" class="mt-2">Total de la compra en Q:</label>
                  <p  class="form-control form-label readonly ">
                    200
                  </p> 
              </div>

              <div class="col-md-12 d-flex justify-content-center my-2">
                <button class="btn btn-success font_mochiy  text-white " style="width: 90%; height: 6vh;">
                  Comprar
                </button>
              </div>

              <div class="col-md-12 d-flex justify-content-center my-2">
                <button class="btn btn-danger font_mochiy text-white " style="width: 90%; height: 6vh;">
                  Cancelar
                </button>
              </div>

            </form>
        </div>
      </div>
    </section>
      `,
  });