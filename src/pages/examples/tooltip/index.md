---
title: Tooltip
description: Gives users contextual information or content.
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

Then initialize AlloyUI and load the Tooltip module.

```javascript
YUI().use(
  'aui-tooltip',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element and write some content on `title` attribute:

```xml
<button id="myTooltip" title="One fine body…">Mouseover to show a tooltip</button>
```

Now create a new instance of the Tooltip component and set the HTML element to `trigger`. Finally, let's render it!

```javascript
YUI().ready(
  'aui-tooltip',
  function(Y) {
    new Y.Tooltip(
      {
        trigger: '#myTooltip'
      }
    ).render();
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your Tooltip instance.

For example, you can set Tooltip's `position` using `top`, `right`, `bottom` or `left` values.
```javascript
YUI().ready(
  'aui-tooltip',
  function(Y) {
    new Y.Tooltip(
      {
        trigger: '#myTooltip',
        position: 'right'
      }
    ).render();
  }
);
```

There's a "bonus" style for large content called `.tooltip-help`.

```javascript
YUI().ready(
  'aui-tooltip',
  function(Y) {
    new Y.Tooltip(
      {
        trigger: '#myTooltip',
        cssClass: 'tooltip-help',
        opacity: 1
      }
    ).render();
  }
);
```

When you need to define many elements, we recommend using `TooltipDelegate` for better performance results.

```javascript
YUI().ready(
  'aui-tooltip',
  function(Y) {
    new Y.TooltipDelegate(
      {
        trigger: '#myTooltip'
      }
    );
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
.tooltip-help {
    z-index: 1 !important;
}
{/literal}
</style>

<button id="myTooltip" title="One fine body…" class="btn btn-large btn-primary">Mouseover to show a top tooltip</button>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.Tooltip(
      {
        trigger: '#myTooltip',
        position: 'right'
      }
    ).render();
  }
);
{/literal}
</script>

##### HTML

```xml
<button id="myTooltip" title="One fine body…" class="btn btn-large btn-primary">Mouseover to show a top tooltip</button>
```

##### JavaScript

```javascript
YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.Tooltip(
      {
        trigger: '#myTooltip',
        position: 'right'
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example

<style>
{literal}
#myTooltipDelegate {
  width: 100px;
}

#myTooltipDelegate li {
  cursor: pointer;
}
{/literal}
</style>

<ul id="myTooltipDelegate">
	<li title="is fine">Apricot</li>
	<li title="is great">Pineapple</li>
	<li title="is green">Kiwi</li>
	<li title="is my favorite">Orange</li>
	<li title="is good">Pomegranate</li>
	<li title="is sour">Lime</li>
	<li title="is tasty">Watermelon</li>
</ul>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.TooltipDelegate(
      {
        trigger: '#myTooltipDelegate li',
        position: 'right'
      }
    );
  }
);
{/literal}
</script>

##### HTML

```xml
<ul id="myTooltipDelegate">
	<li title="is fine">Apricot</li>
	<li title="is great">Pineapple</li>
	<li title="is green">Kiwi</li>
	<li title="is my favorite">Orange</li>
	<li title="is good">Pomegranate</li>
	<li title="is sour">Lime</li>
	<li title="is tasty">Watermelon</li>
</ul>
```

##### JavaScript

```javascript
YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.TooltipDelegate(
      {
        trigger: '#myTooltipDelegate li',
        position: 'right'
      }
    );
  }
);
```

</article>
