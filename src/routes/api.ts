import Route from "../bootstrap/Route";
import HomeController from "../app/Controllers/HomeController";

Route.get('/', HomeController.index)
Route.get('/showHtml', HomeController.showHtml)
Route.get('/sampleVue', HomeController.sampleVue)
export default Route;
