---
title: Button
description: Enables the creation of rich buttons different from traditional HTML form buttons.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Configuring {$page.title}](#3)
- [Using ButtonGroup](#4)
- [Basic Example](#5)
- [CSS3 Example](#6)
- [Real World Example](#7)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Button Module.

```javascript
YUI().use(
  'aui-button',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

The easiest way to use a button is just define a `btn` class for it. There's also additional classes that changes the style like `btn-primary`, `btn-info`, and `btn-success`.

```xml
<button class="btn btn-primary">Primary</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
```

The other way is through JavaScript. First define an HTML tag.

```xml
<button id="myButton"></button>
```

Now create a new instance of Button component by seeting `srcNode` to our HTML element's selector. Also, we should include a `label` to populate the button. Finally, let's render it!

```javascript
YUI().use(
  'aui-button',
  function(Y) {
    new Y.Button(
      {
        label: 'Basic',
        srcNode: '#myButton'
      }
    ).render();
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your Button instance.

For example, you can add an icon and set its position using `icon` and `iconAlign` attributes.

```javascript
YUI().use(
  'aui-button',
  function(Y) {
    new Y.Button(
      {
        icon: 'icon-print',
        iconAlign: 'left',
        label: 'Basic',
        srcNode: '#myButton'
      }
    ).render();
  }
);
```

<div class="alert alert-info">
  <strong>Note: </strong>
  you can find the entire icon list on
  <a href="http://liferay.github.io/alloy-bootstrap/base-css.html#icons"> Alloy Bootstrap</a>
  .
</div>

</article>

<article id="4">

## Using ButtonGroup

You can include a ButtonGroup on your website too. First, define a HTML element that contains your buttons.

```xml
<div id="myCheckgroup">
  <input type="button" value="2">
  <input class="active" type="reset" value="3">
  <input class="active" type="submit" value="4">
  <input type="button" value="5">
  <input type="button" value="6">
  <button>7</button>
</div>
```

Now you have to define a `type` for this ButtonGroup, can be `checkbox` or `radio`. Then set `boundingBox` to your HTML parent node.

```javascript
YUI().use(
  'aui-button',
  function(Y) {
    new Y.ButtonGroup(
      {
        boundingBox: '#myCheckgroup',
        type: 'checkbox'
      }
    ).render();
  }
);
```

<div class="alert alert-success">
	For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-button.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="5">

## Basic Example

<button id="myButton"></button>
<button id="myToggleButton"></button>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-button',
    function(Y) {
      new Y.Button(
        {
          icon: 'icon-print',
          iconAlign: 'left',
          label: 'Basic',
          srcNode: '#myButton'
        }
      ).render();
      new Y.ToggleButton(
        {
          label: 'Click to toggle',
          srcNode: '#myToggleButton'
        }
      ).render();
    }
  );
{/literal}
</script>
<br>
<br>

##### HTML:
```xml
<button id="myButton"></button>
<button id="myToggleButton"></button>
```

##### JavaScript:
```js
YUI().use(
  'aui-button',
  function(Y) {
    new Y.Button(
      {
        icon: 'icon-print',
        iconAlign: 'left',
        label: 'Basic',
        srcNode: '#myButton'
      }
    ).render();

    new Y.ToggleButton(
      {
        label: 'Click to toggle',
        srcNode: '#myToggleButton'
      }
    ).render();
  }
);
```

</article>

<article id="6">

## CSS3 Example

<p>
    <a class="btn" href="">Link</a>
    <button class="btn" type="submit">Button</button>
    <input class="btn" type="button" value="Input">
    <input class="btn" type="submit" value="Submit">
</p>
<p>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-link">Link</button>
</p>
<p>
    <button class="btn btn-lg btn-primary" type="button">Large button</button>
    <button class="btn btn-lg" type="button">Large button</button>
</p>
<p>
    <button class="btn btn-primary" type="button">Default button</button>
    <button class="btn" type="button">Default button</button>
</p>
<p>
    <button class="btn btn-sm btn-primary" type="button">Mini button</button>
    <button class="btn btn-sm" type="button">Mini button</button>
</p>
<p>
    <a href="#" class="btn btn-xs btn-primary disabled">Primary link disabled state</a>
    <a href="#" class="btn btn-xs disabled">Link disabled state</a>
</p>
<p>
    <button class="btn btn-lg btn-block btn-primary" type="button">Block level button</button>
    <button class="btn btn-lg btn-block" type="button">Block level button</button>
</p>
<br>

##### HTML:
```xml
<p>
    <a class="btn" href="">Link</a>
    <button class="btn" type="submit">Button</button>
    <input class="btn" type="button" value="Input">
    <input class="btn" type="submit" value="Submit">
</p>
<p>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-link">Link</button>
</p>
<p>
    <button class="btn btn-lg btn-primary" type="button">Large button</button>
    <button class="btn btn-lg" type="button">Large button</button>
</p>
<p>
    <button class="btn btn-primary" type="button">Default button</button>
    <button class="btn" type="button">Default button</button>
</p>
<p>
    <button class="btn btn-sm btn-primary" type="button">Mini button</button>
    <button class="btn btn-sm" type="button">Mini button</button>
</p>
<p>
    <a href="#" class="btn btn-xs btn-primary disabled">Primary link disabled state</a>
    <a href="#" class="btn btn-xs disabled">Link disabled state</a>
</p>
<p>
    <button class="btn btn-lg btn-block btn-primary" type="button">Block level button</button>
    <button class="btn btn-lg btn-block" type="button">Block level button</button>
</p>
```

</article>

<article id="7">

## Real World Example

<p>
  <div id="myCheckgroup">
    <input type="button" value="2">
    <input class="active" type="reset" value="3">
    <input class="active" type="submit" value="4">
    <input type="button" value="5">
    <input type="button" value="6">
    <button>7</button>
  </div>
</p>
<p>
  <div id="myRadiogroup">
    <input type="button" value="2">
    <input type="reset" value="3">
    <input class="active" type="submit" value="4">
    <input type="button" value="5">
    <input type="button" value="6">
    <button>7</button>
  </div>
</p>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-button',
  function(Y) {
    new Y.ButtonGroup(
      {
        boundingBox: '#myCheckgroup',
        type: 'checkbox'
      }
    ).render();
    new Y.ButtonGroup(
      {
        boundingBox: '#myRadiogroup',
        type: 'radio'
      }
    ).render();
  }
);
{/literal}
</script>
<br>

##### HTML:
```xml
<p>
  <div id="myCheckgroup">
    <input type="button" value="2">
    <input class="active" type="reset" value="3">
    <input class="active" type="submit" value="4">
    <input type="button" value="5">
    <input type="button" value="6">
    <button>7</button>
  </div>
</p>
<p>
  <div id="myRadiogroup">
    <input type="button" value="2">
    <input type="reset" value="3">
    <input class="active" type="submit" value="4">
    <input type="button" value="5">
    <input type="button" value="6">
    <button>7</button>
  </div>
</p>
```

##### JavaScript:
```js
YUI().use(
  'aui-button',
  function(Y) {
    new Y.ButtonGroup(
      {
        boundingBox: '#myCheckgroup',
        type: 'checkbox'
      }
    ).render();

    new Y.ButtonGroup(
      {
        boundingBox: '#myRadiogroup',
        type: 'radio'
      }
    ).render();
  }
);
```

</article>
