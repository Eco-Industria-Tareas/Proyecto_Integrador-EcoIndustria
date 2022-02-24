/* Se importan todas las Paginas & componentes del proyecto */
import LoginPage from "./pages/login_page.js";
import RegisterPage from "./pages/register_page.js";
import alimentacion from "./components/alimentacion.js";
import hogar from "./components/hogar.js";
import moda from "./components/moda.js";
import blog from "./components/blog.js";
import Navbar from "./components/navbar.js";
import inicio from "./pages/inicio.js";
import ProductView from "./pages/product_view.js";
import piepagina from "./components/footer.js";
import conocenos from "./pages/conocenos.js";
import Shop from "./pages/shop.js";
// import Blog from  "./"


// Definimos las rutas del proyecto
var routes = [
  { path: "/", component: inicio },
  { path: "/register", component: RegisterPage },
  { path: "/login_page", component: LoginPage},
  { path: "/product-view", component: ProductView},
  { path: "/shop", component: Shop},
  { path: "/alimentacion", component: alimentacion},
  { path: "/hogar", component: hogar},
  { path: "/moda", component: moda},
  { path: "/blog", component: blog},
  { path: "/conocenos", component: conocenos},
];
/* Creamos el router del proyecto y
 cargamos las rutas disponibles */

var router = new VueRouter({
  routes: routes,
  mode: "hash", // añadirá un "#" a la URL para permitir refrescar la pagina
  base: "/",
});

/* Se carga el app dentro <div id="app"> con Vue*/

var app = new Vue({
  el: "#app",
  components: { Navbar , piepagina},

  router: router,
});
