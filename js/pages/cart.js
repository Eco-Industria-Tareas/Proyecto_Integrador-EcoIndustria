
export default Vue.component("cart", {
  data: function () {
    return {
      mail: "",
      password: "",
    };
  },
  methods: {
    goInicio(){
        this.$router.push("/")
      },
    goRegister(){
      this.$router.push("/register")
    },
    goHogar() {
        this.$router.push("/hogar");
      },
    goShop() {
        this.$router.push("/shop");
      },
  
  },
  created: function () {

  },
  template: `
  
  <section  class="container ">
        <div class="my-5 text_primary text-center">
            <h2 class="font_mochiy">CARRITO DE COMPRAS <i class="bi bi-cart-fill"></i></h2>
        </div>

        <div class=" m-2 border p-2 row gx-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 ">
            
            <div class=" my-2 d-flex justify-content-start align-items-center">
                <div>
                    <img src="https://defcrpc6rdpo8.cloudfront.net/bilbao/up/2011/03/20110306172809016728_20101007110109015431-eco-me-home-kit.jpg" alt="" style="max-width: 150px;" class="card-img-top img-fluid img-thumbnail">
                </div>
                <div class="d-flex flex-column align-items-start mx-2">
                    <strong>Nombre del Producto</strong>
                    <p>Q50.00</p>
                </div>
            </div>

            <div class=" d-flex justify-content-center align-items-center">

                <div class="input-group d-flex justify-content-start" >
                    <span class="input-group-text" >Cantidad</span>
                    <input id="number" type="number" value="1" max="10" min="1" style=" width: 5em" class="border text-center">
                </div>

                <div class=" mx-3 px-3 d-flex flex-column justify-content-center align-items-center">
                    <strong>Total</strong>
                    <p>Q200</p>
                </div>

                <div class="mx-3">
                    <button type="button" class="btn btn-danger text-white">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>

            </div>

        </div>
        <div class=" m-2 border p-2 row gx-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 ">
            
            <div class=" my-2 d-flex justify-content-start align-items-center">
                <div>
                    <img src="https://defcrpc6rdpo8.cloudfront.net/bilbao/up/2011/03/20110306172809016728_20101007110109015431-eco-me-home-kit.jpg" alt="" style="max-width: 150px;" class="card-img-top img-fluid img-thumbnail">
                </div>
                <div class="d-flex flex-column align-items-start mx-2">
                    <strong>Nombre del Producto</strong>
                    <p>Q50.00</p>
                </div>
            </div>

            <div class=" d-flex justify-content-center align-items-center">

                <div class="input-group d-flex justify-content-start" >
                    <span class="input-group-text" >Cantidad</span>
                    <input id="number" type="number" value="1" max="10" min="1" style=" width: 5em" class="border text-center">
                </div>

                <div class=" mx-3 px-3 d-flex flex-column justify-content-center align-items-center">
                    <strong>Total</strong>
                    <p>Q200</p>
                </div>

                <div class="mx-3">
                    <button type="button" class="btn btn-danger text-white">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>

            </div>

        </div>
        <div class=" m-2 border p-2 row gx-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 ">
            
            <div class=" my-2 d-flex justify-content-start align-items-center">
                <div>
                    <img src="https://defcrpc6rdpo8.cloudfront.net/bilbao/up/2011/03/20110306172809016728_20101007110109015431-eco-me-home-kit.jpg" alt="" style="max-width: 150px;" class="card-img-top img-fluid img-thumbnail">
                </div>
                <div class="d-flex flex-column align-items-start mx-2">
                    <strong>Nombre del Producto</strong>
                    <p>Q50.00</p>
                </div>
            </div>

            <div class=" d-flex justify-content-center align-items-center">

                <div class="input-group d-flex justify-content-start" >
                    <span class="input-group-text" >Cantidad</span>
                    <input id="number" type="number" value="1" max="10" min="1" style=" width: 5em" class="border text-center">
                </div>

                <div class=" mx-3 px-3 d-flex flex-column justify-content-center align-items-center">
                    <strong>Total</strong>
                    <p>Q200</p>
                </div>

                <div class="mx-3">
                    <button type="button" class="btn btn-danger text-white">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>

            </div>

        </div>

        <div class="col-md-12 d-flex justify-content-center my-2">
            <button @click="goHogar" class="mx-1 btn btn-warning font_mochiy  text-white " style="width: 90%; height: 6vh;">
              Agregar
            </button>

            <button @click="goShop" class="mx-1 btn btn-success font_mochiy text-white " style="width: 90%; height: 6vh;">
                Comprar
            </button>

            <button @click="goInicio" class="mx-1 btn btn-danger font_mochiy text-white " style="width: 90%; height: 6vh;">
                Cancelar
              </button>
          </div>

    </section>
    `,
});