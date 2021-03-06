﻿using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;

namespace TreeMenu.Models
{
    [DataContract]
    public class TreeNode
    {
        [DataMember]
        public int ID { get; set; }

        [DataMember]
        public string Name { get; set; }

        [DataMember]
        public string Route { get; set; }

        [DataMember]
        public IEnumerable<TreeNode> Nodes { get; set; }

        public int? PrimaryNodeID { get; set; }

        public override string ToString() => $"ID: {ID} | Name: {Name} | HasChildren: {Nodes.Any()} Route: {Route} | PrimaryNodeID: {PrimaryNodeID} ";
    }
}