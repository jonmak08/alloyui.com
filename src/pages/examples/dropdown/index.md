---
title: Dropdown
description: Enables the creation of dropdown menus.
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

Then initialize AlloyUI and load the Dropdown module.

```javascript
YUI().use(
  'aui-dropdown',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element to hold the Dropdown module. The outer `ul` element represents the entire navigation bar and the `#myDropdown` item is where our submenu will be created.

```xml
<ul>
  <li id="myDropdown">
    <a id="myTrigger" href="#">Dropdown</a>
  </li>
</ul>
```

Now create a new instance of Dropdown component by setting the `boundingBox` to the `li` element we just created. Also, we should set `trigger` to the link inside the `li` element so that the menu will expand when a user clicks on the link. Then, let's render it!

```javascript
YUI().use(
  'aui-dropdown',
  function(Y) {
    new Y.Dropdown(
      {
        boundingBox: '#myDropdown',
        trigger: '#myTrigger'
      }
    ).render();
  }
);
```

</article>


<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your Dropdown instance: `hideOnEsc` and `hideOnClickOutSide`. Both of these attributes control how the Dropdown items are hidden. By default, the items are hidden if the user clicks outside of the Dropdown menu or presses the `esc` key. These functions can be disabled by setting the appropriate attribute to false.

```javascript
YUI().use(
  'aui-dropdown',
  function(Y) {
    new Y.Dropdown(
      {
        boundingBox: '#myDropdown',
        trigger: '#myTrigger',
        hideOnClickOutSide: false,
        hideOnEsc: false
      }
    ).render();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-dropdown.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="auiDropdown" class="dropdown">
  <button id="auiTrigger" class="btn btn-default dropdown-toggle" type="button">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a tabindex="-1" href="#">Action</a></li>
  </ul>
</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-dropdown',
    function(Y) {
      new Y.Dropdown(
        {
          boundingBox: '#auiDropdown',
          trigger: '#auiTrigger'
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="auiDropdown" class="dropdown">
  <button id="auiTrigger" class="btn btn-default dropdown-toggle" type="button">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a tabindex="-1" href="#">Action</a></li>
  </ul>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-dropdown',
  function(Y) {
    new Y.Dropdown(
      {
        boundingBox: '#auiDropdown',
        trigger: '#auiTrigger'
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-collapse">
      <ul class="nav navbar-nav">
        <li id="myDropdown" class="dropdown">
          <a id="myTrigger" href="#" class="dropdown-toggle">Dropdown <b class="caret"></b></a>
          <ul class="dropdown-menu" style="padding: 8px">
            I only close on escape
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-dropdown',
    function(Y) {
      new Y.Dropdown(
        {
          boundingBox: '#myDropdown',
          trigger: '#myTrigger',
          hideOnClickOutSide: false,
          hideOnEsc: true,
          open: true
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-collapse">
      <ul class="nav navbar-nav">
        <li id="myDropdown" class="dropdown">
          <a id="myTrigger" href="#" class="dropdown-toggle">Dropdown <b class="caret"></b></a>
          <ul class="dropdown-menu" style="padding: 8px">
            I only close on escape
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-dropdown',
  function(Y) {
    new Y.Dropdown(
      {
        boundingBox: '#myDropdown',
        trigger: '#myTrigger',
        hideOnClickOutSide: false,
        hideOnEsc: true,
        open: true
      }
    ).render();
  }
);
```

</article>
