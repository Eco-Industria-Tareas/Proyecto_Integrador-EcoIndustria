
export default Vue.component("inicio", {
    data: function () {
      return {
        products: [],
        token: localStorage.getItem("token"),
        query: '',
        category: {},
      };
    },
    methods: {
      goModa() {
        this.$router.push("/moda");
      },
      goHogar() {
        this.$router.push("/hogar");
      },
      goAlimentacion() {
        this.$router.push("/alimentacion");
      },
      goProduct(){
        this.$router.push("/product-view")
      },
      async setCategory(category) {
        let vm = this;
        vm.current_category = category;
        await vm.getProducts();
      },
      async getProducts() {
        let vm = this;
  
        let url = "/listar_productos";
        url += "?search=" + vm.search;
        if (vm.current_category.name != "Todos") {
          url += "&category=" + vm.current_category.pk;
        }
        //Enviamos la petición Via GET
        const response = await CLIENT.get(url);
        // Almacenamos el token si el inicio de sesión es correcto
        vm.products = response.sort((a, b) => {
          return b.discount_price - a.discount_price;
        });
        // Redirigimos al usuario al home
      },
      async getCategories() {
        let vm = this;
  
        //Enviamos la petición Via GET
        const response = await CLIENT.get(
          "/productos"
        );
        // Cargamos las categorias 
        vm.categories = response;
         // Añadimos la categoria "Todos" con una pk = 0
        vm.categories.unshift({ pk: 0, name: "Todos" });
        // Definimos el primer item de la lista de categorias-> ("Todos") 
        vm.current_category = vm.categories[0]; // {pk:0, name:"Todos"}
   
      },
      async onSearchKeyup(event) {
        // Sincronizamos el valor ingresado por teclado
        // con la propiedad search 
        this.search = event.target.value;
        // Actualizamos la lista de productos
        await this.getProducts();
      },
      // newProduct(){
      //   STORAGE.remove("product");
      //   this.$router.push("products/edit")
      // }
    },
    created: async function () {
      var self = this;
      fetch('https://api-eco-industria.herokuapp.com/productos',{
        method: 'GET',
        headers : {
          "Content-Type": "application/json",
          "Authorization": "Token " + this.token
        }
      })
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        self.products = data.data;
        self.isLoading=false;
      })
      .catch(function(error) {
        console.log("Error: " + error)
      })
      
    },
    template: `
    <div>
      <!-- CAROUSEL -->
      <div id="carouselExampleIndicators" class="carousel slide"  data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active b_secondary">
            <img src="https://actoressostenibles.com/wp-content/uploads/2019/08/banner-banco-pichincha.png" class="d-block w-100" style="height: 70vh;" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dpcgnjy8h/image/upload/v1645761906/carrousel/imagen04_ect4xf.png" class="d-block w-100" style="height: 70vh;" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://mfiles.iica.int/CTL/GESECAA/bannerok.jpg" class="d-block w-100" style="height: 70vh;" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <!-- CONTENT (CUERPO) -->
      <section class="m-2">

        <whatsapp></whatsapp>

        
        <!--Recomendaciones-->
        <section class="mt-4 py-3 bg_tertiary rounded-3">
          <div class="container mt-10 ">
            <div class="d-flex justify-content-center mb-2">
              <h2 class="text_secondary fw-bold">DESCUBRE LO QUE TENEMOS PARA TI</h2> 
            </div>

            <div class="d-flex justify-content-around row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              <div class="col mb-8">
                <div class="shadow-lg">
                  <img class="img-thumbnail bg_fourth"src="https://t1.ev.ltmcdn.com/es/articles/5/3/0/las_mejores_tiendas_online_de_ropa_ecologica_35_orig.jpg" alt="..." />
                </div>
              </div>

              <div class="col mb-8">
                <div class="shadow-lg">
                  <img class="img-thumbnail bg_fourth" src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/alimentos_ecologicos_1_0.jpg" alt="..." />
                </div>
              </div>

              <div class="col mb-8">
                <div class="shadow-lg">
                  <img class="img-thumbnail bg_fourth" src="https://puntosustentable.com/wp-content/uploads/2020/10/Destacada-OK.jpg" alt="..." />
                </div>
              </div>

              <div class="col mb-8">
                <div class="shadow-lg">
                  <img class="img-thumbnail bg_fourth" src="https://plataformazeo.com/wp-content/uploads/2020/05/COsmetica-natural-portada.jpeg" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </section>
  

        <!-- Banner -->
        <div class="img-thumbnail mt-3">
          <a @click="goModa">
            <img src="https://tienda.oxfamintermon.org/modules/pspagebuilder/views/img/Banner%20b2c%20rebajas%20enero-min.png" class="rounded-3" style="width: 100%;" alt="">
          </a>
        </div>


        <!--Productos destacados-->
        <section class="mt-4 py-3 bg_tertiary rounded-3">
          <div class="container mt-10 ">
            <div class="d-flex justify-content-center mb-2">
              <h2 class="text_secondary fw-bold">NUESTROS PRODUCTOS DESTACADOS</h2> 
            </div>

            <div class="d-flex justify-content-around row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">

              <div class="h-100  py-2"  v-for="product in products" :key="product.id">
                <div class= "bg-dark col mb-5" >
                
                  <div class="card h-100 p-2 shadow-lg d-flex align-items-center ">
                    <img  v-bind:src="product.photo_1" class="card-img-top img-fluid img-thumbnail" alt="...">
                    <div class="card-body">
                      <h4 class="card-text fw-bolder text-center">{{ product.name }}</h4>
                      <p class="card-text text-center">{{ product.description }}</p>
                      <div class="d-flex justify-content-center text-warning small">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </div>
                    <span id="precio" class="mb-2">Q {{product.price}}</span>
                    <div class="col-md-12 d-flex justify-content-center mb-2">
                      <button @click="goProduct" class="btn-dark bg_primary fw-bolder  rounded ">
                        Ver Producto
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button type="button" @click="goHogar" class="btn btn-warning ">
                    VER MÁS
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </section>


      <!-- APARTADO OBJETIVOS EMPRESA -->
      <div class=" mt-5 d-flex flex-column align-items-center">
        <div class="text_primary text-center">
          <h1>¿POR QUÉ COMPRAR EN ECO-INDUSTRY?</h1>
        </div>

        <div class="mt-3 d-flex justify-content-evenly align-items-center   row-cols-xl-3">

          <div class="d-flex flex-column align-items-center text_secondary text-center px-3">
            <div class="fs-1">
              <i class="fas fa-seedling"></i>
            </div>
            <p class="text_primary fw-bolder">PRODUCTOS 100% ECOLÓGICOS</p>
          </div>

          <div class="d-flex flex-column align-items-center text_secondary text-center ">
            <div class="fs-1">
              <i class="fas fa-lock"></i>
            </div>
            <p class="text_primary fw-bolder">COMPRAS SEGURAS</p>
          </div>

          <div class="d-flex flex-column align-items-center text_secondary text-center px-3 ">
            <div class="fs-1">
              <i class="fas fa-globe"></i>
            </div>
            <p class="text_primary fw-bolder">APOYAMOS A PRODUCTORES LOCALES</p>
          </div>

        </div>
      </div>
    </div>
      `,
  });
  