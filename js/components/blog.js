/* Component: Navbar 
   Contiene la barra de navegación 
   así como los link de acceso a otras paginas */

// import STORAGE from "../utils/storage.js";

export default Vue.component("blog", {
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
        
<section>
<div class="mt-4 text_secondary text-center">
    <h2 class="font_mochiy">BLOG</h2>
  </div>
        <div class="d-flex justify-content-around flex-column">
            
            <div class="border d-flex p-2 bg_tertiary rounded " style="margin: 1% 6%;">
                <div class="p-2" style="width: 60%;">
                    <h3 class="fw-bolder">¿CÓMO PONER EN PRACTICAR EL RECICLAJE?</h3>
                    <p class="texto-justificado me-2">El reciclaje es el proceso mediante el cual los desechos se convierten en nuevos productos o en recursos materiales con el que fabricar otros productos. De esta forma, los residuos se someten a un proceso de transformación eco-ambiental para poder ser aprovechados en algún proceso de fabricación, reduciendo el consumo de materias primas y ayudando a eliminar residuos.</p>
                    <p class="texto-justificado me-2">Es importante diferenciar entre reciclar y reutilizar, siendo esto último el aprovechamiento de un determinado objeto para otro uso, sin necesidad de someterlo a un proceso físico-químico de transformación. Por ejemplo, utilizar una botella como florero o hacer una cartera con un viejo pantalón vaquero. Mientras que el reciclaje implica la transformación de los residuos, mediante procesos que convierten esos desechos en un producto o material nuevo.</p>
                </div>
                
                <iframe width="40%" src="https://www.youtube.com/embed/eDFECiSBgd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="border d-flex p-2 bg_tertiary rounded " style="margin: 1% 6%;">
                <iframe width="40%" src="https://www.youtube.com/embed/LRunMJ8TVEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="p-2" style="width: 60%;">
                    <h3 class="fw-bolder ms-2">MODA SOSTENIBLE</h3>
                    <p class="texto-justificado ms-2">La moda sostenible consiste en fabricar ropa y accesorios a partir de materiales provenientes de la naturaleza e incluso de los desechos, siempre y cuando puedan ser reciclados como, por ejemplo, las botellas plásticas o el papel. Estos materiales que muchos consideran basura son aprovechados al máximo en las industrias textiles para fabricar nuevos elementos que permiten confeccionar prendas.</p>
                    <p class="texto-justificado ms-2">Además, es una industria beneficiosa para nuestra salud. Las prendas ecológicas, o “ecoprendas”, son fabricadas con materiales naturales como algodón orgánico, bambú, algas, tencel (fibra celulósica), ortigas, piel de pescado (usada para zapatos y bolsos) y tintes naturales que dan color a los tejidos. Todos estos materiales son libres de tóxicos y químicos peligrosos, lo que evita alergias e irritaciones en la piel.</p>
                </div>
            </div>


            <div class="border d-flex p-2 bg_tertiary rounded " style="margin: 1% 6%;">
                <div class="p-2" style="width: 60%;">
                    <h3 class="fw-bolder">¿CÓMO HACER MI PROPIA COMPOSTA?</h3>
                    <p class="texto-justificado me-2">La composta es un abono orgánico que se forma por la degradación microbiana de materiales acomodados en capas y sometidos a un proceso de descomposición.</p>
                    <p class="texto-justificado me-2">Los microorganismos que llevan a cabo la descomposición o mineralización de los materiales ocurren de manera natural en el ambiente; el método para producir este tipo de abono es económico y fácil de implementar.
                        Por acción de los microorganismos se da origen a un material (materia orgánica) de gran utilidad para los suelos agrícolas ya que mejora la estructura y la fertilidad de estos.</p>
                </div>
                
                <iframe width="40%" src="https://www.youtube.com/embed/jkDWaeNAOCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="border d-flex p-2 bg_tertiary rounded " style="margin: 1% 6%;">
                <iframe width="40%" src="https://www.youtube.com/embed/pbqMOJLo3IM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div class="p-2" style="width: 60%;">
                    <h3 class="fw-bolder ms-2">¿QUÉ SON LAS TIENDAS DE AGRANEL?</h3>
                    <p class="texto-justificado ms-2">La venta a granel es una forma de comercialización que consiste en vender un producto sin empaquetar ni envasar. De ese modo, el cliente selecciona la cantidad que desea adquirir.  </p>
                    <p class="texto-justificado ms-2">Es decir, vender a granel significa ofrecer una mercancía suelta. Esto puede darse para distintos tipos de verduras, frutas, granos u otros.
                        Esta modalidad de comercialización, además, puede encontrarse en distintos tipos de establecimiento como mercados, supermercados o bodegas.</p>
                </div>
            </div>

            
        </div>
    </section>
    </div>
      `,
  });
  


