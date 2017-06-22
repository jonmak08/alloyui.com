---
title: Sortable List
description: Gives the user the ability to interact with a list element.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Configuring {$page.title}](#3)
- [Basic Example](#4)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Sortable List module.

```javascript
YUI().use(
  'aui-sortable-list',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML list (ordered or unordered):

```xml
<ol id="myList">
  <li>Preheat oven to 350&deg;</li>
  <li>Mix ingredients
    <ol>
      <li>Blend butter, sugar, eggs, and vanilla</li>
      <li>Add flour and baking powder</li>
    </ol>
  </li>
  <li>Shape into 2&quot; spheres and place on cookie sheet</li>
  <li>Bake
    <ol>
      <li>Check every few minutes</li>
      <li>Should take around 10-12 minutes</li>
      <li>Remove when golden brown</li>
    </ol>
  </li>
</ol>
```

Now create an instance of the Sortable List component, specify `nodes` for the Sortable List to apply to, and add this `dropCondition`:

```javascript
YUI().use(
  'aui-sortable-list',
  function(Y) {
    new Y.SortableList(
      {
        dropCondition: function(event) {
          return true;
        },
        dropOn: 'myList',
        nodes: '#myList li'
      }
    );
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

There are quite a few more options you can pass to your Sortable List instance to customize it as you'd like.

For example, you can set a `placeholder` that will indicate as you drag your element where it will be dropped (you can style this element using CSS):

```javascript
YUI().use(
  'aui-sortable-list',
  function(Y) {
    var placeholder = Y.Node.create('<li class="placeholder"></li>');

    new Y.SortableList(
      {
        dropCondition: function(event) {
          return true;
        },
        nodes: '#myList li',
        placeholder: placeholder
      }
    );
  }
);
```

You can also specify a certain type of list that the Sortable List instance will limit itself to:

```javascript
YUI().use(
  'aui-sortable-list',
  function(Y) {
    new Y.SortableList(
      {
        dropCondition: function(event) {
          return true;
        },
        dropOn: 'myList',
        nodes: '#myList li'
      }
    );
  }
);
```

From there, you can further specify the drop container, add drop conditions, add a helper `div` in addition to the placeholder, and more!

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-sortable-list.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<p>The list elements below are not in order. Order them using simple drag and drop!</p>

<ol id="myList">
  <li>Shape into 2&quot; spheres and place on cookie sheet</li>
  <li>Add flour and baking powder</li>
  <li>Mix ingredients
    <ol>
      <li>Blend butter, sugar, eggs, and vanilla</li>
      <li>Bake
        <ol>
          <li>Check every few minutes</li>
        </ol>
      </li>
      <li>Should take around 10-12 minutes</li>
    </ol>
  </li>
  <li>Remove when golden brown</li>
  <li>Preheat oven to 350&deg;</li>
  <li>Enjoy!</li>
</ol>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-sortable-list',
    function(Y) {
      var placeholder = Y.Node.create('<li class="placeholder"></li>');
      new Y.SortableList(
        {
          dropCondition: function(event) {
            return true;
          },
          dropOn: 'myList',
          nodes: '#myList li',
          placeholder: placeholder
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<ol id="myList">
  <li>Shape into 2&quot; spheres and place on cookie sheet</li>
  <li>Add flour and baking powder</li>
  <li>Mix ingredients
    <ol>
      <li>Blend butter, sugar, eggs, and vanilla</li>
      <li>Bake
        <ol>
          <li>Check every few minutes</li>
        </ol>
      </li>
      <li>Should take around 10-12 minutes</li>
    </ol>
  </li>
  <li>Remove when golden brown</li>
  <li>Preheat oven to 350&deg;</li>
  <li>Enjoy!</li>
</ol>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-sortable-list',
  function(Y) {
    var placeholder = Y.Node.create('<li class="placeholder"></li>');

    new Y.SortableList(
      {
        dropCondition: function(event) {
          return true;
        },
        dropOn: 'myList',
        nodes: '#myList li',
        placeholder: placeholder
      }
    );
  }
);
```

</article>
