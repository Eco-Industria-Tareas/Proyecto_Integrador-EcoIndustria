export default Vue.component("inicio", {
    data: function () {
      return {
        
      };
    },
    methods: {
      goModa() {
        this.$router.push("/moda");
      },
      goHogar() {
        this.$router.push("/hogar");
      },
      async setCategory(category) {
        let vm = this;
        vm.current_category = category;
        await vm.getProducts();
      },
      async getProducts() {
        let vm = this;
  
        let url = "/products/products/";
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
          "/products/categories/"
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
      newProduct(){
        STORAGE.remove("product");
        this.$router.push("products/edit")
      }
    },
    created: async function () {
      let vm = this;
      try {
        // Cargar la lista de categorias
        await vm.getCategories();
        // Cargar la lista de productos
        await vm.getProducts();
        // Desactivar el Loader
        vm.loading = false;
      } catch (e) {
        //En caso haya un error en las busquedas
        //Se notifica por consola el incidente
        console.warn(e);
      }
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
          <img src="https://www.isglobal.org/documents/10179/6939518/sdg+13+grande+es/cba42d02-4e25-4cc3-b045-a4f1a9f0ed40?t=1539694658000" class="d-block w-100" style="height: 70vh;" alt="...">
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

  <!--Recomendaciones-->
    <section class="mt-4 py-3 bg_tertiary rounded-3">
      <div class="container mt-10 ">
        <div class="d-flex justify-content-center mb-2">
          <h2 class="text_secondary fw-bold">DESCUBRE LO QUE TENEMOS PARA TI</h2> 
        </div>

        <div
          class="d-flex justify-content-around row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <div class="col mb-8">
            <div class="shadow-lg">
              <img class="img-thumbnail bg_fourth"
                src="https://t1.ev.ltmcdn.com/es/articles/5/3/0/las_mejores_tiendas_online_de_ropa_ecologica_35_orig.jpg"
                alt="..." />
            </div>
          </div>

          <div class="col mb-8">
            <div class="shadow-lg">
              <img class="img-thumbnail bg_fourth"
                src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/alimentos_ecologicos_1_0.jpg"
                alt="..." />
            </div>
          </div>

          <div class="col mb-8">
            <div class="shadow-lg">
              <img class="img-thumbnail bg_fourth"
                src="https://puntosustentable.com/wp-content/uploads/2020/10/Destacada-OK.jpg"
                alt="..." />
            </div>
          </div>

          <div class="col mb-8">
            <div class="shadow-lg">
              <img class="img-thumbnail bg_fourth"
                src="https://plataformazeo.com/wp-content/uploads/2020/05/COsmetica-natural-portada.jpeg"
                alt="..." />
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

        <div
          class="d-flex justify-content-around row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <div class="col mb-8">
            <div class="card shadow-lg rounded-3">
              <img class="img-thumbnail"
                src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cdd3787b2187a1f0f54/alimentos-ecologicos-vs.jpg"
                alt="..." />
              <div class="card-body text-center">
                <h5 >
                  Canasta de Verduras
                </h5>
                <div class="d-flex justify-content-center text-warning small">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <span class="px-3 text-dark">4</span>
                </div>
                <span id="precio">$50.00</span>
              </div>
            </div>
          </div>
          <div class="col mb-8">
            <div class="card shadow-lg rounded-3">
              <img class="img-thumbnail"
                src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cdd3787b2187a1f0f54/alimentos-ecologicos-vs.jpg"
                alt="..."
                 />
              <div class="card-body text-center">
                <h5>
                  Canasta de Verduras
                </h5>
                <div class="d-flex justify-content-center text-warning small">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <span class="px-3 text-dark">4</span>
                </div>
                <span id="precio">$50.00</span>
              </div>
            </div>
          </div>
          <div class="col mb-8">
            <div class="card shadow-lg rounded-3">
              <img class="img-thumbnail"
                src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cdd3787b2187a1f0f54/alimentos-ecologicos-vs.jpg"
                alt="..." />
              <div class="card-body text-center">
                <h5>
                  Canasta de Verduras
                </h5>
                <div class="d-flex justify-content-center text-warning small">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  <span class="px-3 text-dark">4</span>
                </div>
                <span id="precio">$50.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" d-flex justify-content-center mt-4">
        <button type="button" @click="goHogar" name="ver_mas" class="bg_fourth texto rounded-2 px-3">
          <!-- <a href="pages/shop/alimentacion.html" class="text-decoration-none text-dark fw-bolder">VER MÁS</a> -->
          VER MÁS
        </button>
      </div>
    </section>
  </section>


    <!-- APARTADO OBJETIVOS EMPRESA -->
    <div class="mt-5 d-flex flex-column align-items-center">
      <div class="text_primary">
        <h1>¿POR QUÉ COMPRAR EN ECO-INDUSTRY?</h1>
      </div>
      <div>
        <div class="mt-3 d-flex justify-content-evenly align-items-center">
          <div class="tipo d-flex flex-column align-items-center text_secondary me-5">
            <div class="fs-1">
              <i class="fas fa-seedling"></i>
            </div>
            <p class="text_primary fw-bolder">PRODUCTOS 100% ECOLÓGICOS</p>
          </div>
          <div class="tipo d-flex flex-column align-items-center ms-5 me-5 text_secondary">
            <div class="fs-1">
              <i class="fas fa-lock"></i>
            </div>
            <p class="text_primary fw-bolder">COMPRAS SEGURAS</p>
          </div>
          <div class="tipo d-flex flex-column align-items-center text_secondary ms-5">
            <div class="fs-1">
              <i class="fas fa-globe"></i>
            </div>
            <p class="text_primary fw-bolder">APOYAMOS A PREDUCTORES LOCALES</p>
          </div>
          </div>
        </div>
      </div>
    </div>
      `,
  });
  