---
title: Affix
description: Enables the creation of fixed navigation bars.
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

First load the seed and CSS files, if you have not yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Affix module.

```javascript
YUI().use(
  'aui-affix',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create a list of elements that contain the links for the navigation bar.

```xml
<div id="myAffix">
  <ul>
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</div>
```

Now create a new instance of Affix component and specify the newly created menu as the target.

```javascript
YUI().use(
  'aui-affix',
  function(Y) {
    new Y.Affix(
      {
        target: '#myAffix'
      }
    );
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

Two other parameters need to be specified: `offsetTop` and `offsetBottom`. `offsetTop` is the number of pixels from the top when the target will become fixed, and `offsetBottom` is the same property for the bottom. For now, we will just set them to zero.

```javascript
YUI().use(
  'aui-affix',
  function(Y) {
    new Y.Affix(
      {
        target: '#myAffix',
        offsetTop: 0,
        offsetBottom: 0
      }
    );
  }
);
```

Try out different offset values in your Affix instance to finetune the behavior.

<div class="alert alert-success">
	For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-affix.html" target="_blank">Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="myAffix" class="navbar navbar-default">
  <ul class="nav navbar-nav">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</div>

<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur labore dicta quas ab nesciunt dolorum non ipsum facilis cum, nam qui autem ducimus cupiditate quibusdam sunt excepturi accusantium doloribus, libero esse quam. Quidem harum dolorum vero nulla, eius, officiis saepe voluptate similique corporis vel id perferendis? Dicta deserunt, voluptatum repellendus voluptates, aut, asperiores fugiat laudantium dolorem consectetur sunt mollitia. Veritatis quisquam placeat harum, perferendis soluta eius nihil veniam totam sint. Suscipit, voluptates, possimus! Accusamus modi eaque, eius nisi saepe iusto repellat qui ipsam molestiae sunt impedit reiciendis velit nostrum sint odio omnis repellendus culpa voluptatum quam eveniet numquam quod placeat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur labore dicta quas ab nesciunt dolorum non ipsum facilis cum, nam qui autem ducimus cupiditate quibusdam sunt excepturi accusantium doloribus, libero esse quam. Quidem harum dolorum vero nulla, eius, officiis saepe voluptate similique corporis vel id perferendis? Dicta deserunt, voluptatum repellendus voluptates, aut, asperiores fugiat laudantium dolorem consectetur sunt mollitia. Veritatis quisquam placeat harum, perferendis soluta eius nihil veniam totam sint. Suscipit, voluptates, possimus! Accusamus modi eaque, eius nisi saepe iusto repellat qui ipsam molestiae sunt impedit reiciendis velit nostrum sint odio omnis repellendus culpa voluptatum quam eveniet numquam quod placeat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur labore dicta quas ab nesciunt dolorum non ipsum facilis cum, nam qui autem ducimus cupiditate quibusdam sunt excepturi accusantium doloribus, libero esse quam. Quidem harum dolorum vero nulla, eius, officiis saepe voluptate similique corporis vel id perferendis? Dicta deserunt, voluptatum repellendus voluptates, aut, asperiores fugiat laudantium dolorem consectetur sunt mollitia. Veritatis quisquam placeat harum, perferendis soluta eius nihil veniam totam sint. Suscipit, voluptates, possimus! Accusamus modi eaque, eius nisi saepe iusto repellat qui ipsam molestiae sunt impedit reiciendis velit nostrum sint odio omnis repellendus culpa voluptatum quam eveniet numquam quod placeat.</p>
</div>

<style>
{literal}
  .navbar.affix {
    top: 60px;
    width: 675px;
    z-index: 200;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
YUI().use(
	'aui-affix',
	function(Y) {
		var boxTop = Y.one('#myAffix').getY();
		new Y.Affix(
			{
				target: '#myAffix',
				offsetTop: boxTop
			}
		);
	}
);
{/literal}
</script>

<br>

##### HTML:

```xml
<style>
.navbar.affix {
  top: 60px;
  width: 675px;
  z-index: 200;
}
</style>

<div id="myAffix" class="navbar navbar-default">
  <ul class="nav navbar-nav">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</div>

<article>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur labore dicta quas ab nesciunt dolorum non ipsum facilis cum, nam qui autem ducimus cupiditate quibusdam sunt excepturi accusantium doloribus, libero esse quam. Quidem harum dolorum vero nulla, eius, officiis saepe voluptate similique corporis vel id perferendis? Dicta deserunt, voluptatum repellendus voluptates, aut, asperiores fugiat laudantium dolorem consectetur sunt mollitia. Veritatis quisquam placeat harum, perferendis soluta eius nihil veniam totam sint. Suscipit, voluptates, possimus! Accusamus modi eaque, eius nisi saepe iusto repellat qui ipsam molestiae sunt impedit reiciendis velit nostrum sint odio omnis repellendus culpa voluptatum quam eveniet numquam quod placeat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur labore dicta quas ab nesciunt dolorum non ipsum facilis cum, nam qui autem ducimus cupiditate quibusdam sunt excepturi accusantium doloribus, libero esse quam. Quidem harum dolorum vero nulla, eius, officiis saepe voluptate similique corporis vel id perferendis? Dicta deserunt, voluptatum repellendus voluptates, aut, asperiores fugiat laudantium dolorem consectetur sunt mollitia. Veritatis quisquam placeat harum, perferendis soluta eius nihil veniam totam sint. Suscipit, voluptates, possimus! Accusamus modi eaque, eius nisi saepe iusto repellat qui ipsam molestiae sunt impedit reiciendis velit nostrum sint odio omnis repellendus culpa voluptatum quam eveniet numquam quod placeat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur labore dicta quas ab nesciunt dolorum non ipsum facilis cum, nam qui autem ducimus cupiditate quibusdam sunt excepturi accusantium doloribus, libero esse quam. Quidem harum dolorum vero nulla, eius, officiis saepe voluptate similique corporis vel id perferendis? Dicta deserunt, voluptatum repellendus voluptates, aut, asperiores fugiat laudantium dolorem consectetur sunt mollitia. Veritatis quisquam placeat harum, perferendis soluta eius nihil veniam totam sint. Suscipit, voluptates, possimus! Accusamus modi eaque, eius nisi saepe iusto repellat qui ipsam molestiae sunt impedit reiciendis velit nostrum sint odio omnis repellendus culpa voluptatum quam eveniet numquam quod placeat.</p>
</article>
```

##### JavaScript:

```javascript
YUI().use(
  'aui-affix',
  function(Y) {
    new Y.Affix(
      {
        target: '#myAffix',
        offsetTop: 250
      }
    );
  }
);
```

</article>
