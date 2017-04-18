using System.Web.Mvc;

namespace TreeMenu.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            return View();
        }

        public ActionResult Content()
        {
            return PartialView("_content");
        }
    }
}
