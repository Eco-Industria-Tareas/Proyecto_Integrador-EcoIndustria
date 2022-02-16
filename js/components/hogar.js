// import STORAGE from "../utils/storage.js";

export default Vue.component("hogar", {
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
    <div class="my-3 ms-5 tc-primary ">
    <p><a class="text-decoration-none text-dark" href="../../index.html">Inicio /</a> 
      <a class="text-dark" href="hogar.html">Hogar</a></p>
  </div>

  <div class="my-5 text_primary text-center">
    <h2 class="font_mochiy">HOGAR</h2>
  </div>

  <div class="d-flex d-block">
    <div class="w-25">
      <div class="ms-3 bg_secondary text-white rounded-1 text-center">
        <h3>CATEGORÍAS</h3>
      </div>
      <div class="h5 ms-3 bg_fourth rounded-1 text-center p-1">
        <a href="" class="text-decoration-none text-dark">Textiles</a>
      </div>
      <div class="h5 ms-3 bg_tertiary rounded-1 text-center p-1">
        <a href="" class="text-decoration-none text-dark">Limpieza</a>
      </div>
      <div class="h5 ms-3 bg_fourth rounded-1 text-center p-1">
        <a href="" class="text-decoration-none text-dark">Objetos Hogar </a>
      </div>
      <div class="h5 ms-3 bg_tertiary rounded-1 text-center p-1">
        <a href="" class="text-decoration-none text-dark">Mascotas</a>
      </div>
      <div class="h5 ms-3 bg_fourth rounded-1 text-center p-1">
        <a href="" class="text-decoration-none text-dark">Jardín</a>
      </div>
    </div>

<!-- DIV DE LAS CARDS-->

  <div class="w-75 mx-3 d-flex flex-wrap">
  <div>
    <div class="card mx-5 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
      <img
        src="https://tienda.oxfamintermon.org/8406-large_default/ecoagenda-neutre-diaria-eaee.jpg"
        class="card-img-top img-fluid img-thumbnail"
        alt="..."
        style="width: 300px"
      />
      <div class="card-body">
        <p class="card-text fw-bolder">Eco Agenda 2022</p>
          <div class="d-flex justify-content-center text-warning small">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <span class="px-3 text-dark">3</span>
          </div>
      </div>
        <span id="precio" class="mb-2">$50.00</span>
        <div class="col-md-12 d-flex justify-content-center mb-2">
          <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
            <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
          </button>
        </div>
    </div>
  </div>
    
  <div>
    <div class="card mx-4 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
      <img
        src="https://tienda.oxfamintermon.org/8114-large_default/bowl-coco-lacado-menta.jpg"
        class="card-img-top img-fluid img-thumbnail"
        alt="..."
        style="width: 300px"
      />
      <div class="card-body">
        <p class="card-text fw-bolder">Bowl Coco Lacado</p>
          <div class="d-flex justify-content-center text-warning small">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <span class="px-3 text-dark">5</span>
          </div>
      </div>
        <span id="precio" class="mb-2">$50.00</span>
        <div class="col-md-12 d-flex justify-content-center mb-2">
          <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
            <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
          </button>
      </div>
    </div>
  </div>

  <div>
    <div class="card mx-5 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
      <img
        src="https://tienda.oxfamintermon.org/8111-large_default/cesta-bandeja-algod-n-multicolor-diu.jpg"
        class="card-img-top img-fluid img-thumbnail"
        alt="..."
        style="width: 300px"
      />
      <div class="card-body">
        <p class="card-text fw-bolder">Cesta Bandeja Multicolor</p>
          <div class="d-flex justify-content-center text-warning small">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <span class="px-3 text-dark">5</span>
          </div>
      </div>
        <span id="precio" class="mb-2">$50.00</span>
        <div class="col-md-12 d-flex justify-content-center mb-2">
          <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
            <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
          </button>
        </div>
    </div>
  </div>
    
  <div>
    <div class="card mx-4 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
      <img
        src="https://tienda.oxfamintermon.org/8112-large_default/bolsita-peq-regalo-motivos-blancos-jute.jpg"
        class="card-img-top img-fluid img-thumbnail"
        alt="..."
        style="width: 300px"
      />
      <div class="card-body">
        <p class="card-text fw-bolder">Bolsita Regalo Reutilizable</p>
          <div class="d-flex justify-content-center text-warning small">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            <span class="px-3 text-dark">4</span>
          </div>
      </div>
        <span id="precio" class="mb-2">$50.00</span>
        <div class="col-md-12 d-flex justify-content-center mb-2">
          <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
            <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
          </button>
        </div>
    </div>
  </div>

  <div>
    <div class="card mx-5 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
      <img
        src="https://tienda.oxfamintermon.org/7684-large_default/funda-cojin-estampado-beige-heyagonal.jpg"
        class="card-img-top img-fluid img-thumbnail"
        alt="..."
        style="width: 300px"
      />
      <div class="card-body">
        <p class="card-text fw-bolder">Funda Cojín</p>
          <div class="d-flex justify-content-center text-warning small">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <span class="px-3 text-dark">2</span>
          </div>
      </div>
      <span id="precio" class="mb-2">$50.00</span>
      <div class="col-md-12 d-flex justify-content-center mb-2">
        <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
          <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
        </button>
      </div>
    </div>
  </div>
    
  <div>
    <div class="card mx-4 mb-3 p-2 shadow-lg d-flex align-items-center bg_tertiary">
      <img
        src="https://tienda.oxfamintermon.org/3280-large_default/detergente-eco-lavadora-ea-dosis.jpg"
        class="card-img-top img-fluid img-thumbnail"
        alt="..."
        style="width: 300px"
      />
      <div class="card-body">
        <p class="card-text fw-bolder">Eco Detergente</p>
          <div class="d-flex justify-content-center text-warning small">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            
            <span class="px-3 text-dark">5</span>
          </div>
      </div>
      <span id="precio" class="mb-2">$50.00</span>
      <div class="col-md-12 d-flex justify-content-center mb-2">
        <button class="btn-dark bg_primary fw-bolder rounded" style="width: 60%; height: 5vh;">
          <a href="vista_producto.html" class="text-decoration-none text-white">Ver Producto</a> 
        </button>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
      `,
  });
  