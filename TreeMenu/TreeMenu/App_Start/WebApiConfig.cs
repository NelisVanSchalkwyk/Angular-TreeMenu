using Newtonsoft.Json;
using System.Web.Http;

namespace TreeMenu
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services.
            // Web API routes.
            config.MapHttpAttributeRoutes();

            // Remove the XML formatter.
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            // Ignore null values when serializing to JSON.
            config.Formatters.JsonFormatter.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
