/* Se importan todas las Paginas & componentes del proyecto */
import LoginPage from "./pages/login_page.js";
import RegisterPage from "./pages/register_page"
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

// Definimos las rutas del proyecto
var routes = [
  { path: "/", component: LoginPage },
  { path: "/register", component: RegisterPage },
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
  router: router,
});
