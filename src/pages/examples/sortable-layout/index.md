---
title: Sortable Layout
description: Enables a layout with draggable/droppable functionality.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Configuring {$page.title}](#3)
- [Basic Example](#4)
- [Real World Example](#5)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Sortable Layout module.

```javascript
YUI().use(
  'aui-sortable-layout',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element with some content nodes:

```xml
<div id="mySortableLayout">
  <div class="contentNode">
    <p>Some content</p>
  </div>
  <div class="contentNode">
    <p>Other content</p>
  </div>
  <div class="contentNode">
    <p>More content</p>
  </div>
</div>
```

Now create a new instance of Sortable Layout component by setting `dropNodes` to our HTML element's selector. Also, set `dragNodes` to the content nodes' class so Sortable Layout can make the nodes draggable.

```javascript
YUI().use(
  'aui-sortable-layout',
  function(Y) {
    new Y.SortableLayout(
      {
        dragNodes: '.contentNode',
        dropNodes: '#mySortableLayout'
      }
    );
  }
);
```

<div class="alert alert-info">
  <strong>Note: </strong>
  you could also use `dropContainer`, instead of `dropNodes`, to initialize the HTML container. DropContainer will initialize the container and all its children as drop targets, whereas DropNodes will only initialize nodes with matching class selector.
</div>

</article>


<article id="3">

## Configuring {$page.title}

There are some other optional parameters that you can pass to your Sortable Layout instance.

For example, you can add a `proxyNode` which will act as a temporary node during `activeDrag` mode and be replaced by your drag node on drag end. To give `proxyNode` visibility, make sure to add CSS styles, such as border, which will apply to the proxy node on drag start.

```javascript
YUI().use(
  'aui-sortable-layout',
  function(Y) {
    new Y.SortableLayout(
      {
        dragNodes: '.contentNode',
        dropNodes: '#mySortableLayout',
        proxyNode: Y.Node.create('<div class="proxyNode"></div>')
      }
    );
  }
);
```

You can set another HTML container to receive dropped Sortable Layout object by setting `dropContainer` to your HTML selector. Sortable Layout can now drag and drop content nodes onto one another and inside the separate DropContainer DIV:

##### HTML:
```xml
<div id="dropContainer"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-sortable-layout',
  function(Y) {
    new Y.SortableLayout(
      {
        dragNodes: '.contentNode',
        dropContainer: '#dropContainer',
        dropNodes: '#mySortableLayout',
        proxyNode: Y.Node.create('<div class="proxyNode"></div>')
      }
    );
  }
);
```

You can even define a Placeholder HTML node which will appear in your drop zone before you drop your activeDrag node. Like we did for proxyNode, pass the `placeholder` property a `Node.create` constructor with your desired HTML placeholder. Just be sure to add CSS styles to the placeholder class so you can see your placeholder nodes!

```javascript
YUI().use(
  'aui-sortable-layout',
  function(Y) {
    new Y.SortableLayout(
      {
        dragNodes: '.contentNode',
        dropContainer: '#dropContainer',
        dropNodes: '#mySortableLayout',
        placeholder: Y.Node.create('<div class="placeholder"></div>'),
        proxyNode: Y.Node.create('<div class="proxyNode"></div>')
      }
    );
  }
);
```

<div class="alert alert-info">
  <strong>Note: </strong>
  by default, AlloyUI inserts a placeholder as a blue border with arrows on each end. The placeholder property will override the default AUI placeholder for a custom placeholder.
</div>

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-sortable-layout.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

Drag and drop files to different locations

<div id="auiSortableLayout">
  <div class="portlet">
    <h4>Portlet 1</h4>
    <p>Lorem Ipsum dummy content</p>
  </div>
  <div class="portlet">
    <h4>Portlet 2</h4>
    <p>Lorem Ipsum dummy content</p>
  </div>
  <div class="portlet">
    <h4>Portlet 3</h4>
    <p>Lorem Ipsum dummy content</p>
  </div>
</div>

<style>
{literal}
  #auiSortableLayout {
    background-color: #F7F7F7;
    border: 1px solid #EEE;
    margin: 10px 4px;
    padding: 10px;
  }
  .portlet {
    background-color: #EAEAEE;
    border: 1px solid #DADADE;
    border-top-color: #F0F0FE;
    cursor: move;
    margin: 5px 0;
    padding: 0 10px;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-sortable-layout',
    function(Y) {
      new Y.SortableLayout(
        {
          dragNodes: '.portlet',
          dropNodes: '#auiSortableLayout'
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="auiSortableLayout">
  <div class="portlet">
    <h4>Portlet 1</h4>
    <p>Lorem Ipsum dummy content</p>
  </div>
  <div class="portlet">
    <h4>Portlet 2</h4>
    <p>Lorem Ipsum dummy content</p>
  </div>
  <div class="portlet">
    <h4>Portlet 3</h4>
    <p>Lorem Ipsum dummy content</p>
  </div>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-sortable-layout',
  function(Y) {
    new Y.SortableLayout(
      {
        dragNodes: '.portlet',
        dropNodes: '#auiSortableLayout'
      }
    );
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="mySortableLayout">
  <div class="column">
    <div class="portlet">
      <h5>Column 1 Portlet 1</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 1 Portlet 2</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 1 Portlet 3</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
  </div>
  <div class="column">
    <div class="portlet">
      <h5>Column 2 Portlet 1</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 2 Portlet 2</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 2 Portlet 3</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
  </div>
  <div class="column">
    <div class="portlet">
      <h5>Column 3 Portlet 1</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 3 Portlet 2</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 3 Portlet 3</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
  </div>
</div>

<div class="clearfix"></div>

<style>
{literal}
  #mySortableLayout * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .column {
    background-color: #F7F7F7;
    border: 1px solid #EEE;
    clear: none;
    float: left;
    margin: 10px 5px;
    padding: 10px;
    width: 31%;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-sortable-layout',
    function(Y) {
      var proxyNode = Y.Node.create('<div class="sortable-layout-proxy"></div>');
      var DDM = Y.DD.DDM;
      var sortableLayout = new Y.SortableLayout(
        {
          dragNodes: '.portlet',
          dropContainer: '#mySortableLayout',
          proxyNode: proxyNode
        }
      );
      //Create new constructor for Portlet adding widget
      var PortletItem = function() {
        PortletItem.superclass.constructor.apply(this, arguments);
      };
      PortletItem.NAME = 'PortletItem';
      PortletItem.ATTRS = {
        dd: {
          value: false
        },
        delegateConfig: {
          value: {
            nodes: '.portlet-item',
            target: false
          }
        },
        itemContainer: {
          value: '.sidebar'
        },
        proxyNode: {
          value: proxyNode
        }
      };
      //Extend widget to clone itself when dragged
      var color = '';
      Y.extend(
        PortletItem,
        Y.SortableLayout,
        {
          _getAppendNode: function() {
            var instance = this;
            instance.appendNode = DDM.activeDrag.get('node').clone();
            color = instance.appendNode.get('id');
            return instance.appendNode;
          }
        }
      );
      var portletList = new PortletItem();
      //Create new node which replaces clone and add drop plugin to new node
      var livePortlet;
      portletList.on(
        'drag:end',
        function(event) {
          var newPortlet = Y.Node.create('<div class="portlet ' + color + '">New Portlet</div>');
          var dropConfig = {
            bubbleTargets: this,
            useShim: false
          };
          if (portletList.appendNode && portletList.appendNode.inDoc()) {
            portletList.appendNode.replace(newPortlet);
            var livePortlet = Y.one('.' + color);
            livePortlet.plug(Y.Plugin.Drop, dropConfig);
            livePortlet.drop.set('groups', ['portal-layout']);
          }
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="mySortableLayout">
  <div class="column">
    <div class="portlet">
      <h5>Column 1 Portlet 1</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 1 Portlet 2</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 1 Portlet 3</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
  </div>
  <div class="column">
    <div class="portlet">
      <h5>Column 2 Portlet 1</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 2 Portlet 2</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 2 Portlet 3</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
  </div>
  <div class="column">
    <div class="portlet">
      <h5>Column 3 Portlet 1</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 3 Portlet 2</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
    <div class="portlet">
      <h5>Column 3 Portlet 3</h5>
      <p>Lorem Ipsum dummy content</p>
    </div>
  </div>
</div>

<div class="clearfix"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-sortable-layout',
  function(Y) {
    var proxyNode = Y.Node.create('<div class="sortable-layout-proxy"></div>');
    var DDM = Y.DD.DDM;

    var sortableLayout = new Y.SortableLayout(
      {
        dragNodes: '.portlet',
        dropContainer: '#mySortableLayout',
        proxyNode: proxyNode
      }
    );

    //Create new constructor for Portlet adding widget
    var PortletItem = function() {
      PortletItem.superclass.constructor.apply(this, arguments);
    };

    PortletItem.NAME = 'PortletItem';
    PortletItem.ATTRS = {
      dd: {
        value: false
      },
      delegateConfig: {
        value: {
          nodes: '.portlet-item',
          target: false
        }
      },
      itemContainer: {
        value: '.sidebar'
      },
      proxyNode: {
        value: proxyNode
      }
    };

    //Extend widget to clone itself when dragged
    var color = '';
    Y.extend(
      PortletItem,
      Y.SortableLayout,
      {
        _getAppendNode: function() {
          var instance = this;
          instance.appendNode = DDM.activeDrag.get('node').clone();
          color = instance.appendNode.get('id');

          return instance.appendNode;
        }
      }
    );

    var portletList = new PortletItem();

    //Create new node which replaces clone and add drop plugin to new node
    var livePortlet;
    portletList.on(
      'drag:end',
      function(event) {
        var newPortlet = Y.Node.create('<div class="portlet ' + color + '">New Portlet</div>');
        var dropConfig = {
          bubbleTargets: this,
          useShim: false
        };

        if (portletList.appendNode && portletList.appendNode.inDoc()) {
          portletList.appendNode.replace(newPortlet);
          var livePortlet = Y.one('.' + color);
          livePortlet.plug(Y.Plugin.Drop, dropConfig);
          livePortlet.drop.set('groups', ['portal-layout']);
        }
      }
    );
  }
);
```

</article>
