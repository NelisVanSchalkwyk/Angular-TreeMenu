using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Description;
using System.Xml.Linq;
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
        [Route("secondary/{id:int?}")]
        [ResponseType(typeof(IEnumerable<TreeNode>))]
        public IEnumerable<TreeNode> GetsecondaryMenu(int id = 0)
        {
            var doc = XElement.Load(HostingEnvironment.MapPath("~/app_data/secondarymenu.xml"));
            var tree = BuildTree(doc.Elements("menuItem"));
            return tree.Where(t => t.PrimaryNodeID == id);
        }

        /// <summary>
        /// Builds a tree structure
        /// </summary>
        /// <param name="treeNodes">A list of <see cref="XElement"/> objects.</param>
        /// <returns>A list of <see cref="TreeNode"/> objects.</returns>
        static IEnumerable<TreeNode> BuildTree(IEnumerable<XElement> treeNodes)
        {
            return treeNodes.Select(n => new TreeNode
            {
                ID = (int)n.Attribute("id"),
                Name = n.Attribute("name").Value,
                Route = n.Attribute("route").Value,
                PrimaryNodeID = Convert.ToInt32(n.Attribute("primaryMenuId")?.Value ?? "0"),
                Nodes = BuildTree(n.Elements("menuItem"))
            });
        }

    }
}