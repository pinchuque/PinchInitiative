using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace PinchInitiative.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ContactUs()
        {
            return View("ContactUs");
        }

        public ActionResult AboutUs()
        {
            return View("AboutUs");
        }
        public ActionResult Technologies()
        {
            return View("Technologies");
        }
        public ActionResult Services()
        {
            return View("Services");
        }
    }
}