/* Se importan todas las Paginas & componentes del proyecto */
import LoginPage from "./pages/login_page.js";
import RegisterPage from "./pages/register_page.js";
import alimentacion from "./components/alimentacion.js";
import Navbar from "./components/navbar.js";
import inicio from "./pages/inicio.js";
import Footer from "./components/footer.js";
// import Blog from  "./"


// Definimos las rutas del proyecto
var routes = [
  { path: "/", component: inicio },
  { path: "/register", component: RegisterPage },
  { path: "/login_page", component: LoginPage},
  { path: "/alimentacion", component: alimentacion}
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
  components: { Navbar },
  components: { Footer },
  router: router,
});
