---
title: Toggler
description: Allows users to toggle content on and off.
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

Then initialize AlloyUI and load the Toggler module.

```javascript
YUI().use(
  'aui-toggler',
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
<div id="myToggler">
  <button class="header toggler-header-collapsed">Read More</button>
  <p class="content toggler-content-collapsed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
</div>
```

<div class="alert alert-info">
  <strong>Note:</strong> the <code>aui-toggler</code> classes are optional, and tell AUI to place the content in <code>collapsed</code> state on load.<br>
</div>

Now create a new instance of Toggler component, then pass it the `container` where it's going to be attached and `header` and `content` where we placed our header and content html. Finally, let's render it!

```javascript
YUI().use(
  'aui-toggler',
  function(Y) {
    new Y.Toggler(
      {
        container: '#myToggler',
        content: '.content',
        header: '.header'
      }
    ).render();
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your Toggler instance.

For example, if you set `animated` to `true` and pass an object to `transition` which specifies `duration` and `easing`, Toggler will use animated transitions between states.

```javascript
YUI().use(
  'aui-toggler',
  function(Y) {
    new Y.Toggler(
      {
        animated: true,
        container: '#myToggler',
        content: '.content',
        header: '.header',
        transition: {
          duration: .5,
          easing: 'cubic-bezier'
        }
      }
    ).render();
  }
);
```

You can use the javascript constructor `TogglerDelegate` to assign toggler functionality for all toggler content elements within the container. You can even set `closeAllOnExpand` to `true` to only allow one content box open at a time. Don't forget to add multiple content and header boxes to your html container!

##### HTML

```xml
<div id="myToggler">
  <button class="header toggler-header-collapsed">Read More</button>
  <p class="content toggler-content-collapsed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
  <button class="header toggler-header-collapsed">Read More</button>
  <p class="content toggler-content-collapsed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
  <button class="header toggler-header-collapsed">Read More</button>
  <p class="content toggler-content-collapsed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
</div>
```

##### JavaScript

```javascript
YUI().use(
  'aui-toggler',
  function(Y) {
    new Y.TogglerDelegate(
      {
        animated: true,
        closeAllOnExpand: true,
        container: '#myToggler',
        content: '.content',
        header: '.header',
        transition: {
          duration: .5,
          easing: 'cubic-bezier'
        }
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

<style>
{literal}
.header {
  padding: 0 48px;
}
#myToggler {
	display: block;
	margin: 15px 5px;
}
#myToggler p {
	padding: 5px 0;
}
@media (min-width 960px) {
  .header {
    padding: 0 48px;
  }
}
{/literal}
</style>

<div id="myToggler">
  <button class="header btn btn-primary toggler-header-collapsed">Read More</button>
  <p class="content toggler-content-collapsed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
</div>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-toggler',
  function(Y) {
    new Y.Toggler(
      {
        container: '#myToggler',
        content: '.content',
        expanded: false,
        header: '.header'
      }
    );
  }
);
{/literal}
</script>

##### HTML

```xml
<div id="myToggler">
  <button class="header btn btn-primary toggler-header-collapsed">Read More</button>
  <p class="content toggler-content-collapsed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
</div>
```

##### JavaScript

```javascript
YUI().use(
  'aui-toggler',
  function(Y) {
    new Y.Toggler(
      {
        container: '#myToggler',
        content: '.content',
        expanded: false,
        header: '.header'
      }
    );
  }
);
```

</article>

<article id="5">

## Real World Example

<style>
{literal}
#realWorldToggler {
	display: block;
	margin: 20px 5px;
  cursor: pointer;
}
#realWorldToggler .header {
	font-size: 24px;
	margin: 0;
	padding: 5px 0;
	width: 75%;
}
#realWorldToggler .header span {
	font-size: 100%;
  color: #08c;
}
#realWorldToggler .header:hover, #realWorldToggler .aui-toggler-header-expanded {
	background-color: #ddd;
}
#realWorldToggler .header:before {
	color: #A5A5A5;
	float: left;
}
#realWorldToggler .toggler-header-collapsed:before {
	content: "+";
}
#realWorldToggler .toggler-header-expanded:before {
	content: "-";
	font-size: 120%;
	margin: 0 2.5px;
}
#realWorldToggler .content {
	background-color: #eee;
	font-size: 120%;
	font-style: italic;
	margin: 0;
	padding: 5px 2.5%;
	width: 70%;
}
{/literal}
</style>

<div id="realWorldToggler">
  <h4 class="header toggler-header-collapsed"><span>Expanded</span> Option</h4>
  <p class="content toggler-content-collapsed">This option has been set to <span>false</span> so that content starts as toggled off on page load.</p>
  <h4 class="header toggler-header-collapsed"><span>Animated</span> Option</h4>
  <p class="content toggler-content-collapsed">This option has been set to <span>true</span> so that toggle transitions will animate.</p>
  <h4 class="header toggler-header-collapsed"><span>Transition</span> Option</h4>
  <p class="content toggler-content-collapsed">This option controls duration of transition, easing type, as well as callback functions.</p>
  <h4 class="header toggler-header-collapsed"><span>closeAllOnExpand</span> Option</h4>
  <p class="content toggler-content-collapsed">This option has been set to <span>true</span> so that all other toggle switches will be set to off when one switch is toggled on.</p>
</div>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-toggler',
  function(Y) {
    new Y.TogglerDelegate(
      {
        animated: true,
        closeAllOnExpand: true,
        container: '#realWorldToggler',
        content: '.content',
        expanded: false,
        header: '.header',
        transition: {
          duration: 0.2,
          easing: 'cubic-bezier(0, 0.1, 0, 1)'
        }
      }
    );
  }
);
{/literal}
</script>

##### HTML

```xml
<div id="myToggler">
  <h4 class="header toggler-header-collapsed"><span>Expanded</span> Option</h4>
  <p class="content toggler-content-collapsed">This option has been set to <span>false</span> so that content starts as toggled off on page load.</p>
  <h4 class="header toggler-header-collapsed"><span>Animated</span> Option</h4>
  <p class="content toggler-content-collapsed">This option has been set to <span>true</span> so that toggle transitions will animate.</p>
  <h4 class="header toggler-header-collapsed"><span>Transition</span> Option</h4>
  <p class="content toggler-content-collapsed">This option controls duration of transition, easing type, as well as callback functions.</p>
  <h4 class="header toggler-header-collapsed"><span>closeAllOnExpand</span> Option</h4>
  <p class="content toggler-content-collapsed">This option has been set to <span>true</span> so that all other toggle switches will be set to off when one switch is toggled on.</p>
</div>
```

##### JavaScript

```javascript
YUI().use(
  'aui-toggler',
  function(Y) {
    new Y.TogglerDelegate(
      {
        animated: true,
        closeAllOnExpand: true,
        container: '#myToggler',
        content: '.content',
        expanded: false,
        header: '.header',
        transition: {
          duration: 0.2,
          easing: 'cubic-bezier(0, 0.1, 0, 1)'
        }
      }
    );
  }
);
```

</article>