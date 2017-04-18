using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Description;
using System.Xml.Linq;
using TreeMenu.Extensions;
using TreeMenu.Models;

namespace TreeMenu.Controllers.api
{
    [RoutePrefix("api/menu")]
    public class MenuController : ApiController
    {
        // GET api/menu/primary
        [HttpGet]
        [Route("primary")]
        [ResponseType(typeof(IEnumerable<TreeNode>))]
        public IEnumerable<TreeNode> GetPrimaryMenu()
        {
            var doc = XElement.Load(HostingEnvironment.MapPath("~/app_data/primarymenu.xml"));
            var tree = BuildTree(doc.Elements("menuItem"));
            return tree;
        }

        // GET api/menu/secondary
        [HttpGet]
        [Route("secondary")]
        [ResponseType(typeof(IEnumerable<TreeNode>))]
        public IEnumerable<TreeNode> GetsecondaryMenu()
        {
            return new List<TreeNode>();
        }

        static IEnumerable<TreeNode> BuildTree(IEnumerable<XElement> treeNodes)
        {
            return treeNodes.Select(n => new TreeNode {
                Name = n.Attribute("name").Value,
                Route = n.Attribute("route").Value,
                Nodes = BuildTree(n.Elements("menuItem"))
            });
        }

    }
}