---
title: Tabview
description: Allows user to swap content between different sections.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title} (from markup)](#2)
- [Using {$page.title} (from script)](#3)
- [Configuring {$page.title}](#4)
- [Basic Example](#5)
- [Mix Example](#6)
- [Pills Example](#7)
- [Stacked Example](#8)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Tabview module.

```javascript
YUI().use(
  'aui-tabview',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title} (from markup)

There are two ways to create a Tabview, from markup or script. Here's how to do it from markup.

```xml
<div id="myTab">

  <ul class="nav nav-tabs">
    <li><a href="#tab-1">Tab #1</a></li>
    <li class="active"><a href="#tab-2">Tab #2</a></li>
    <li><a href="#tab-3">Tab #3</a></li>
  </ul>

  <div class="tab-content">
    <div id="tab-1" class="tab-pane">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>
    </div>
    <div id="tab-2">
      <p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>
    </div>
    <div id="tab-3" class="tab-pane">
      <p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>
    </div>
  </div>

</div>
```

Create a new instance of Tabview referencing the `srcNode`, and render it!

```javascript
YUI().use(
  'aui-tabview',
  function(Y) {
    new Y.TabView(
      {
        srcNode: '#myTab'
      }
    ).render();
  }
);
```

</article>

<article id="3">

## Using {$page.title} (from script)

Or you can just create a container:

```xml
<div id="myTab"></div>
```

And then create a new instance of TabView using `children` parameter to populate it.

```javascript
YUI().use(
  'aui-tabview',
  function(Y) {
    new Y.TabView(
      {
        children: [
          {
              content: '<br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>',
              label: 'Tab #1'
          },
          {
              content: '<br><p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>',
              label: 'Tab #2'
          },
          {
              content: '<br><p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>',
              label: 'Tab #3'
          }
       ],
       srcNode: '#myTab'
      }
    ).render();
  }
);
```

</article>

<article id="4">

## Configuring {$page.title}

Parameters can be passed into your instance of Tabview, for example you can set a pill format.

```javascript
YUI().use(
  'aui-tabview',
  function(Y) {
    new Y.TabView(
      {
       srcNode: '#myTab',
       type: 'pills'
      }
    ).render();
  }
);
```

Further configuration includes setting a stacked TabView format.

```javascript
YUI().use(
  'aui-tabview',
  function(Y) {
    new Y.TabView(
      {
       srcNode: '#myTab',
       stacked: true
      }
    ).render();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-tabview.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="5">

## Basic Example

Here you can see some tabs generated from markup.

<div id="auiTab">

  <ul class="nav nav-tabs">
    <li><a href="#tab-1">Tab #1</a></li>
    <li class="active"><a href="#tab-2">Tab #2</a></li>
    <li><a href="#tab-3">Tab #3</a></li>
  </ul>

  <div class="tab-content">
    <div id="tab-1" class="tab-pane">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>
    </div>
    <div id="tab-2">
      <p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>
    </div>
    <div id="tab-3" class="tab-pane">
      <p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>
    </div>
  </div>

</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-tabview',
    function(Y) {
      new Y.TabView(
        {
          srcNode: '#auiTab'
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="auiTab">

  <ul class="nav nav-tabs">
    <li><a href="#tab-1">Tab #1</a></li>
    <li class="active"><a href="#tab-2">Tab #2</a></li>
    <li><a href="#tab-3">Tab #3</a></li>
  </ul>

  <div class="tab-content">
    <div id="tab-1" class="tab-pane">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>
    </div>
    <div id="tab-2">
      <p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>
    </div>
    <div id="tab-3" class="tab-pane">
      <p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>
    </div>
  </div>

</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-tabview',
  function(Y) {
    new Y.TabView(
      {
        srcNode: '#auiTab'
      }
    ).render();
  }
);
```

</article>

<article id="6">

## Mix Example

Here you can see some stacked/pills tabs.

<div id="mixTab"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-tabview',
    function(Y) {
      new Y.TabView(
        {
          children: [
            {
                content: '<br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>',
                label: 'Tab #1'
            },
            {
                content: '<br><p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>',
                label: 'Tab #2'
            },
            {
                content: '<br><p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>',
                label: 'Tab #3'
            }
         ],
         srcNode: '#mixTab',
         stacked: true,
         type: 'pills'
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="mixTab"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-tabview',
  function(Y) {
    new Y.TabView(
      {
        children: [
          {
              content: '<br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>',
              label: 'Tab #1'
          },
          {
              content: '<br><p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>',
              label: 'Tab #2'
          },
          {
              content: '<br><p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>',
              label: 'Tab #3'
          }
       ],
       srcNode: '#mixTab',
       stacked: true,
       type: 'pills'
      }
    ).render();
  }
);
```

</article>

<article id="7">

## Pills Example

Here you can see some pills tabs.

<div id="pillsTab"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-tabview',
    function(Y) {
      new Y.TabView(
        {
          children: [
            {
                content: '<br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>',
                label: 'Tab #1'
            },
            {
                content: '<br><p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>',
                label: 'Tab #2'
            },
            {
                content: '<br><p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>',
                label: 'Tab #3'
            }
         ],
         srcNode: '#pillsTab',
         type: 'pills'
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="pillsTab"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-tabview',
  function(Y) {
    new Y.TabView(
      {
        children: [
          {
              content: '<br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>',
              label: 'Tab #1'
          },
          {
              content: '<br><p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>',
              label: 'Tab #2'
          },
          {
              content: '<br><p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>',
              label: 'Tab #3'
          }
       ],
       srcNode: '#pillsTab',
       type: 'pills'
      }
    ).render();
  }
);
```

</article>

<article id="8">

## Stacked Example

Here you can see some staked tabs.

<div id="stackedTab"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-tabview',
    function(Y) {
      new Y.TabView(
        {
          children: [
            {
                content: '<br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>',
                label: 'Tab #1'
            },
            {
                content: '<br><p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>',
                label: 'Tab #2'
            },
            {
                content: '<br><p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>',
                label: 'Tab #3'
            }
         ],
         srcNode: '#stackedTab',
         stacked: true
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="stackedTab"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-tabview',
  function(Y) {
    new Y.TabView(
      {
        children: [
          {
              content: '<br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta aspernatur beatae fuga neque cupiditate laudantium itaque pariatur deleniti tenetur modi voluptatem animi sunt eligendi nisi corporis expedita quaerat facilis.</p>',
              label: 'Tab #1'
          },
          {
              content: '<br><p>Doloremque beatae rem voluptate nulla perspiciatis atque laudantium nihil impedit molestiae fuga veritatis quibusdam nam maiores aliquid. Deserunt dolorum quas temporibus enim ex nihil nemo perspiciatis. Nisi deserunt rem id pariatur in nostrum?</p>',
              label: 'Tab #2'
          },
          {
              content: '<br><p>Aliquid ipsum asperiores alias temporibus autem impedit soluta ut id iure explicabo veritatis consectetur debitis eaque recusandae odit quas nobis maxime saepe. Incidunt amet obcaecati. Ducimus soluta unde repellat laboriosam fuga modi rem itaque!</p>',
              label: 'Tab #3'
          }
       ],
       srcNode: '#stackedTab',
       stacked: true
      }
    ).render();
  }
);
```

</article>
