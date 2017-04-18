using System.Web.Optimization;

namespace TreeMenu
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-ui-router.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Scripts/app/app.module.js",
                        "~/Scripts/app/app.config.js",
                        "~/Scripts/app/menu/app.menu.module.js",
                        "~/Scripts/app/menu/app.menu.service.js",
                        "~/Scripts/app/menu/app.menu.controller.js",
                        "~/Scripts/app/menu/app.menu.directive.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css",
                      "~/Content/tree.css",
                      "~/Content/font-awesome.css"));
        }
    }
}
