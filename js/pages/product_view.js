export default Vue.component("product-view", {
    props: [],
    data: function () {
      return {
        // username: "",
        // password: "",
      };
    },
    methods: {

 
    },
    created: function () {

    },
    template: `
    
    <section class="bg-light">
            <div class="container  pb-5">
                <div class="row  ">
                    <!-- CARRUSEL DE IMAGEN DE PRODUCTO -->
                    <div class=" col-lg-5 mt-5 ">
                        <div class="card h-100 ">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://tienda.oxfamintermon.org/1313-large_default/cafe-oxfam-molido-natural.jpg" class="d-block" alt="..." style="width: 100%;" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://tienda.oxfamintermon.org/1314-large_default/cafe-oxfam-molido-natural.jpg" class="d-block" alt="..." style="width: 100%;" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://tienda.oxfamintermon.org/1315-large_default/cafe-oxfam-molido-natural.jpg" class="d-block" alt="..." style="width: 100%;" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- DESCRIPCIÓN DEL PRODUCTO -->
                    <div class=" col-lg-7 mt-5">
                        <div class="card h-100">
                            <div class="card-body">
                                <h1 id="title" class="h2">CAFÉ MOLIDO NATURAL </h1>
                                <p id="price" class="h3 py-2">Q100.00</p>
                                <div class="d-flex justify-content-start small text-warning mb-2">
                                    <i class="bi-star-fill"></i>
                                    <i class="bi-star-fill"></i>
                                    <i class="bi-star-fill"></i>
                                    <i class="bi-star-fill"></i>
                                    <i class="bi-star"></i>
                                </div>
                      
                                
                                <h6>DESCRIPCIÓN:</h6>
                                <p class="text-break texto-justificado">Café natural de comercio justo. Café de taza intensa y equilibrada, con sabores limpios y frescos Disfruta de este café natural elaborado a partir de los mejores granos. Este café de variedades arábica y robusta hará las delicias de cualquier fan del café, porque no todos los cafés son iguales con el café natural de comercio justo podrás disfrutar de un sabor fresco. </p>
                                
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <h6>DISPONIBLE:</h6>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="text-muted">
                                            <strong>si</strong>
                                        </p>
                                    </li>
                                </ul>

                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <h6>CREADOR:</h6>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="text-muted">
                                            <strong>Juan Pérez</strong>
                                        </p>
                                    </li>
                                </ul>

                                <div>
                                    <p> Cantidad
                                        <br />
                                        <button type="button" class="btn bg_tertiary  ">+</button>
                                        <span class="badge rounded-pill bg_tertiary ms-1 text-dark"> 1 </span>
                                        <button type="button" class="btn bg_tertiary  ">-</button>
                                    </p>
                                </div>

                                <button class="btn bg_fourth fw-bold my-1" style="width: 90%">
                                    Agregar al Carrito
                                </button>
                                <button class="btn bg_primary fw-bold my-1"style="width: 90%">
                                    Realizar Compra
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          
      `,
  });
  