---
title: Toolbar
description: A collection of buttons that offer the ability of managed user interaction states.
layout: "examples"
weight: 100
---
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>

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

Then initialize AlloyUI and load the Toolbar module.

```javascript
YUI().use(
  'aui-toolbar',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element to house the Toolbar:

```xml
<div id="myToolbar"></div>
```

The most basic of tables require a container and an array of buttons. Pass both into your Toolbar after `boundingBox` and `children`, and don't forget to render it!

```javascript
YUI().use(
  'aui-toolbar',
  function(Y) {
    new Y.Toolbar(
      {
        boundingBox: '#myToolbar',
        children: [
          [
            {
              icon: 'icon-camera'
            },
            {
              icon: 'icon-print'
            }
          ]
        ]
      }
    ).render();
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

Also you can define a type to some group of buttons, it can be `radio` or `checkbox`.

```javascript
YUI().use(
  'aui-toolbar',
  function(Y) {
    new Y.Toolbar(
      {
        boundingBox: '#myToolbar',
        children: [
          [
            'radio',
            {
              label: '1'
            },
            {
              label: '2'
            },
            {
              label: '3'
            }
          ],
          [
            'checkbox',
            {
              icon: 'icon-bold'
            },
            {
              icon: 'icon-italic'
            },
            {
              icon: 'icon-font'
            }
          ]
        ]
      }
    ).render();
  }
);
```

<div class="alert alert-success">
	For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-tooltip.html" target="_blank">API Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="myToolbar" class="toolbar">
  <button class="btn btn-default"><span class="glyphicon glyphicon-print"></span></button>
  <div id="checkgroup2" class="btn-group btn-group-checkbox">
    <button class="btn btn-default"><span class="glyphicon glyphicon-bold"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-italic"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-font"></span></button>
  </div>
  <div id="radiogroup2" class="btn-group btn-group-radio">
    <button class="btn btn-default"><span class="glyphicon glyphicon-align-left"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-align-center"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-align-right"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-align-justify"></span></button>
  </div>
</div>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-toolbar',
  function(Y) {
    new Y.Toolbar(
      {
        boundingBox: '#myToolbar'
      }
    ).render();
  }
);
{/literal}
</script>

##### HTML
```xml
<div id="myToolbar" class="toolbar">
  <button class="btn btn-default"><span class="glyphicon glyphicon-print"></span></button>
  <div id="checkgroup2" class="btn-group btn-group-checkbox">
    <button class="btn btn-default"><span class="glyphicon glyphicon-bold"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-italic"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-font"></span></button>
  </div>
  <div id="radiogroup2" class="btn-group btn-group-radio">
    <button class="btn btn-default"><span class="glyphicon glyphicon-align-left"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-align-center"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-align-right"></span></button>
    <button class="btn btn-default"><span class="glyphicon glyphicon-align-justify"></span></button>
  </div>
</div>
```

##### JavaScript

```javascript
YUI().use(
  'aui-toolbar',
  function(Y) {
    new Y.Toolbar(
      {
        boundingBox: '#myToolbar'
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="myRealWorldToolbar"></div>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-toolbar',
  function(Y) {
    new Y.Toolbar(
      {
        boundingBox: '#myRealWorldToolbar',
        children: [
          [
            {
              icon: 'glyphicon glyphicon-camera'
            },
            {
              icon: 'glyphicon glyphicon-print'
            }
          ],
          [
            'radio',
            {
              label: '1'
            },
            {
              label: '2'
            },
            {
              label: '3'
            }
          ],
          [
            'checkbox',
            {
              icon: 'glyphicon glyphicon-bold'
            },
            {
              icon: 'glyphicon glyphicon-italic'
            },
            {
              icon: 'glyphicon glyphicon-font'
            }
          ],
          [
            'radio',
            {
              icon: 'glyphicon glyphicon-align-left'
            },
            {
              icon: 'glyphicon glyphicon-align-center'
            },
            {
              icon: 'glyphicon glyphicon-align-right'
            },
            {
              icon: 'glyphicon glyphicon-align-justify'
            }
          ]
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
  'aui-toolbar',
  function(Y) {
    new Y.Toolbar(
      {
        boundingBox: '#myToolbar',
        children: [
          [
            {
              icon: 'glyphicon glyphicon-camera'
            },
            {
              icon: 'glyphicon glyphicon-print'
            }
          ],
          [
            'radio',
            {
              label: '1'
            },
            {
              label: '2'
            },
            {
              label: '3'
            }
          ],
          [
            'checkbox',
            {
              icon: 'glyphicon glyphicon-bold'
            },
            {
              icon: 'glyphicon glyphicon-italic'
            },
            {
              icon: 'glyphicon glyphicon-font'
            }
          ],
          [
            'radio',
            {
              icon: 'glyphicon glyphicon-align-left'
            },
            {
              icon: 'glyphicon glyphicon-align-center'
            },
            {
              icon: 'glyphicon glyphicon-align-right'
            },
            {
              icon: 'glyphicon glyphicon-align-justify'
            }
          ]
        ]
      }
    ).render();
  }
);
```

</article>