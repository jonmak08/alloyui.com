---
title: Tree View
description: Allows users to view file/folder structure in expandable tree view.
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

Then initialize AlloyUI and load the Tree View module.

```javascript
YUI().use(
  'aui-tree-view',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element:

```xml
<div id="myTreeView"></div>
```

Now create a new instance of Tree View component, then initialize a variable `children` which will store an array of the child files and folders to be supplied to Tree View. Then use the `new TreeView` constructor, passing our HTML element for `boundingBox` and our children variable for `children`. Finally, let's render it!

```javascript
YUI().use(
  'aui-tree-view',
  function(Y) {
    var children = [
      {
        children: [
          {
            label: 'File X'
          },
          {
            label: 'File Y'
          },
          {
            label: 'File Z'
          }
        ],
        expanded: true,
        label: 'Root'
      }
    ];

    new Y.TreeView(
      {
        boundingBox: '#myTreeView',
        children: children
      }
    ).render();
  }
);
```

<div class="alert alert-info">
  <strong>Note:</strong> you could also use <code>contentBox</code>, instead of <code>boundingBox</code>, to be initialized.<br>
  <a href="https://github.com/liferay/alloy-ui/wiki/FAQs">Read more about the differences between them</a>.
</div>

</article>

<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your Tree View instance.

For example, you can use an external file to populate the Tree View `children` using the `io` type. We'll pass `io` a sample content file called content.html, which contains an array of child objects just like our previous `children` variable. In your HTML file, be sure to wrap both option key and value in quotes! (IE: `'label': 'File1'`)

```javascript
YUI().use(
  'aui-tree-view',
  function(Y) {
    var children = [
      {
        cache: true,
        id: 'root',
        io: 'assets/content.html',
        label: 'ROOT',
        type: 'io'
      }
    ];

    new Y.TreeView(
      {
        boundingBox: '#myTreeView',
        children: children
      }
    ).render();
  }
);
```

Also, you can use the `createNode` method to create a new child node for your Tree View. This method can be used in a separate function, such as an onClick event. First, we'll select the ROOT node we added earlier in our `children` var. Then, we'll use createNode to create a new file, and pass it the options `radio` for type and `radioButton` for id. Lastly, we'll append `radioButton` to ROOT using `appendChild` method.

```javascript
YUI().use(
  'aui-tree-view',
  function(Y) {
    var children = [
      {
        cache: true,
        id: 'root',
        io: 'assets/content.html',
        label: 'ROOT',
        type: 'io'
      }
    ];

    var treeView = new Y.TreeView(
      {
        boundingBox: '#myTreeView',
        children: children
      }
    ).render();

    var ROOT = treeView.getNodeById('root');

    var radioButton = ROOT.createNode(
      {
        id: 'radioButton',
        label: 'Radio Button',
        type: 'radio'
      }
    );

    ROOT.appendChild(radioButton);
  }
);
```

<div class="alert alert-success">
	For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-tooltip.html" target="_blank">API Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="myBasicTreeView"></div>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-tree-view',
  function(Y) {
    var children = [
      {
        children: [
          {
            label: 'File X'
          },
          {
            label: 'File Y'
          },
          {
            label: 'File Z'
          }
        ],
        expanded: true,
        label: 'Root'
      }
    ];
    new Y.TreeView(
      {
        boundingBox: '#myBasicTreeView',
        children: children
      }
    ).render();
  }
);
{/literal}
</script>

##### HTML
```xml
<div id="myTreeView"></div>
```

##### JavaScript

```javascript
YUI().use(
  'aui-tree-view',
  function(Y) {
    // Create an array object for the tree root and child nodes
    var children = [
      {
        children: [
          {
            label: 'File X'
          },
          {
            label: 'File Y'
          },
          {
            label: 'File Z'
          }
        ],
        expanded: true,
        label: 'Root'
      }
    ];

    // Create a TreeView Component
    new Y.TreeView(
      {
        boundingBox: '#myTreeView',
        children: children
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="myTreeView"></div>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-tree-view',
  function(Y) {
    new Y.TreeViewDD(
      {
        boundingBox: '#myTreeView',
        children: [
          {
            children: [
              {label: 'Watermelon', leaf: true, type: 'check'},
              {label: 'Apricot', leaf: true, type: 'check'},
              {label: 'Pineapple', leaf: true, type: 'check'},
              {label: 'Kiwi', leaf: true, type: 'check'},
              {label: 'Orange', leaf: true, type: 'check'},
              {label: 'Pomegranate', leaf: true, type: 'check'}
            ],
            expanded: true,
            label: 'Checkboxes'
          },
          {
            children: [
              {label: 'Watermelon', leaf: true, type: 'radio'},
              {label: 'Apricot', leaf: true, type: 'radio'},
              {label: 'Pineapple', leaf: true, type: 'radio'},
              {label: 'Kiwi', leaf: true, type: 'radio'},
              {label: 'Orange', leaf: true, type: 'radio'},
              {label: 'Pomegranate', leaf: true, type: 'radio'}
            ],
            expanded: true,
            label: 'Radio'
          },
          {
            children: [
              {label: 'Watermelon', leaf: true, type: 'task'},
              {label: 'Apricot', leaf: true, type: 'task'},
              {label: 'Pineapple', leaf: true,  type: 'task'},
              {label: 'Kiwi', leaf: true, type: 'task'},
              {label: 'Orange', leaf: true, type: 'task'},
              {label: 'Pomegranate', leaf: true,  type: 'task'}
            ],
            expanded: true,
            label: 'Task',
            type: 'task'
          }
        ]
      }
    ).render();
  }
);
{/literal}
</script>

##### HTML

```xml
<div id="myTreeView"></div>
```

### JavaScript

```javascript
YUI().use(
  'aui-tree-view',
  function(Y) {
    new Y.TreeViewDD(
      {
        boundingBox: '#myTreeView',
        children: [
          {
            children: [
              {label: 'Watermelon', leaf: true, type: 'check'},
              {label: 'Apricot', leaf: true, type: 'check'},
              {label: 'Pineapple', leaf: true, type: 'check'},
              {label: 'Kiwi', leaf: true, type: 'check'},
              {label: 'Orange', leaf: true, type: 'check'},
              {label: 'Pomegranate', leaf: true, type: 'check'}
            ],
            expanded: true,
            label: 'Checkboxes'
          },
          {
            children: [
              {label: 'Watermelon', leaf: true, type: 'radio'},
              {label: 'Apricot', leaf: true, type: 'radio'},
              {label: 'Pineapple', leaf: true, type: 'radio'},
              {label: 'Kiwi', leaf: true, type: 'radio'},
              {label: 'Orange', leaf: true, type: 'radio'},
              {label: 'Pomegranate', leaf: true, type: 'radio'}
            ],
            expanded: true,
            label: 'Radio'
          },
          {
            children: [
              {label: 'Watermelon', leaf: true, type: 'task'},
              {label: 'Apricot', leaf: true, type: 'task'},
              {label: 'Pineapple', leaf: true,  type: 'task'},
              {label: 'Kiwi', leaf: true, type: 'task'},
              {label: 'Orange', leaf: true, type: 'task'},
              {label: 'Pomegranate', leaf: true,  type: 'task'}
            ],
            expanded: true,
            label: 'Task',
            type: 'task'
          }
        ]
      }
    ).render();
  }
);
```

</article>