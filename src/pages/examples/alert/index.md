---
title: Alert
description: Creates a highly visible message to alert the user.
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

Then initialize AlloyUI and load the Alert module.

```javascript
YUI().use(
  'aui-alert',
  function(Y) {
  // clode goes here
  }
)
```

</article>

<article id="2">

## Using {$page.title}

Simple alerts can be creating by appending the `alert` class to the appropriate element. There are other classes like `alert-warning` or `alert-info` that can help better display your message according to its context.

```xml
<div class="alert">This is an alert.</div>
<div class="alert-info">Here is some information</div>
<div class="alert-danger">Oh no, watch out!</div>
```

You can also create alerts with JavaScript. Start by adding the containing ```div``` to the page:

```xml
<div id="myAlert"></div>
```

Now we create a new `Alert` instance and set its source node to the appropriate selector. We can then set our desired message and render it for display:

```javascript
YUI().use(
  'aui-alert',
  function(Y) {
    new Y.Alert(
      {
        boundingBox: '#myAlert',
        bodyContent: 'This is an alert',
        closeable: true,
        cssClass: 'alert-info',
        render: true
      }
    );
  }
);
```

</article>

<article id="3">

## Configuring Alert

There are many options that can help you achieve the desired behavior for your alert. These include things like animated, permanent, and dismissible alerts:

```javascript
YUI().use(
  'aui-alert',
  function(Y) {
    new Y.Alert(
    {
        animated: true,
        boundingBox: '#fancyAlert',
        bodyContent: 'This is animated alert alert',
        closeable: true,
        cssClass: 'alert-warning',
        destroyOnHide: false,
        duration: 2
      }
    );
  }
);
```

<div class="alert alert-success">
	For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-alert.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="myAlert" class="alert alert-danger">
    I’m sorry, but the princess is in another castle!
</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-alert',
    function(Y) {
      new Y.Alert(
        {
          closeable: true,
          render: true,
          srcNode: '#myAlert'
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myAlert" class="alert alert-danger">
    I’m sorry, but the princess is in another castle!
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-alert',
  function(Y) {
    new Y.Alert(
      {
        closeable: true,
        render: true,
        srcNode: '#myAlert'
      }
    );
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="myAlert"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-alert',
    function(Y) {
      new Y.Alert(
        {
          animated: true,
          bodyContent: 'Thank You Mario! But Our Princess Is In That Castle!',
          boundingBox: '#myAlert',
          closeable: true,
          cssClass: 'alert-warning',
          destroyOnHide: false,
          duration: 1,
          render: true
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myAlert"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-alert',
  function(Y) {
    new Y.Alert(
      {
        animated: true,
        bodyContent: 'Thank You Mario! But Our Princess Is In That Castle!',
        boundingBox: '#myAlert',
        closeable: true,
        cssClass: 'alert-warning',
        destroyOnHide: false,
        duration: 1,
        render: true
      }
    );
  }
);
```

</article>
