# Angular-TreeMenu
This is Angular JS Tree Menu.  What is a Tree Menu you ask?  Well, in essence it is navigation menu which is expressed as a tree view.  In this case the navigation is extended even further by adding a linked secondary tree view to the navigation ending up with something as shown in figure 1.

![Screenshot](https://github.com/NelisVanSchalkwyk/Angular-TreeMenu/blob/master/Screenshot.png)
_Figure 1_

## How does it work?
Data for the menu is provided by XML files.  Web API is used to read the XML and build a strongly typed TreeNode object.  AngularJS is used to retrieve the data from the Web API end points and then display the tree menu via an AngularJS directive. UI-Router is used to set the content of the main view depending on the selected primary or secondary menu item. The current implementation for displaying the content is very simplistic, but you can extend it for a real world scenario.  

Note that the secondary menu is currently loaded on demand with data beign fetched from Web API when the primary menu item is clicked. For small menu structures this is obviously not necessary and I would suggest that you fetch the complete secondary menu structure beforehand and then filter it client side. For large menu structures the load on demand approach will be more beneficial.

### The data
In this specific project the menu data is provided by 2 XML files which are located in the App_Data folder *(see TreeMenu/TreeMenu/App_Data)*. The 2 files are:
* PrimaryMenu.xml - this file defines the structure of the primary menu tree
* SecondaryMenu.xml - this file defines the structure of the secondary menu tree and also indicates which item in the primary menu it is linked to.

### Example: PrimaryMenu.xml
```
<menuItems>
  <menuItem id="1" name="Menu Item 1" route="">
    <menuItem id="3" name="Menu Item 3" route="">
      <menuItem id="4" name="Menu Item 4" route=""/>
    </menuItem>
  </menuItem>
  <menuItem id="2" name="Menu Item 2" route=""/>
</menuItems>
```

### Example: SecondaryMenu.xml
```
<menuItems>
  <menuItem id="1" name="Sub Menu Item 1" route="" primaryMenuId="1">
    <menuItem id="3" name="Sub Menu Item 3" route="">
      <menuItem id="4" name="Sub Menu Item 4" route=""/>
    </menuItem>
  </menuItem>
  <menuItem id="2" name="Sub Menu Item 2" route="" primaryMenuId="2"/>
</menuItems>
```
Note that the *primaryMenuId* attribute in the SecondaryMenu.xml file maps to the *id* attribute within the PrimaryMenu.xml to indicate how it is linked to the primary menu.

### Tree View Directive
The tree view is contructed by the menuTree AngularJS directive *(see TreeMenu/TreeMenu/scripts/app/menu/app.menu.directive.js)*.  This directive expects its data as a tree structure e.g.
```
[{
  "id":1,
  "name":"Menu Item 1",
  "nodes":[{
    "id":3,
    "name":"Menu Item 3",
    "nodes":[{
      "id":4,
      "name":"Menu Item 4",
      "nodes":[]
    }]}
   ]}, {
   "id":2,
   "name":"Menu Item 2",
   "nodes":[]
  }]
```
The directive uses a template *(see TreeMenu/TreeMenu/scripts/app/menu/menuTemplate.html)* to render the tree and styling can be changed via the css *(see TreeMenu/TreeMenu/content/tree.css)*.

The directive can be used as follows:
```
<menu-tree data-nodes="[your data]" data-selected-node-changed="[your eventhandler]"></menu-tree>
```

### Running the solution
You can run this solution by cloning or downloading this repository and then opening the TreeMenu.sln file *(see TreeMenu/TreeMenu.sln)* using Visual Studio. The solution includes sample XML data files and will run if you press F5 in Visual Studio.

## References
* [ASP.NET MVC](https://www.asp.net/mvc)
* [ASP.NET Web API 2](https://www.asp.net/web-api)
* [AngularJS v1.6.4](https://angularjs.org/)
* [UI-Router](https://github.com/angular-ui/ui-router)
* [Font Awesome](http://fontawesome.io/)

## License
Copyright (c) 2017 Nelis van Schalkwyk  
Licensed under the MIT license.
