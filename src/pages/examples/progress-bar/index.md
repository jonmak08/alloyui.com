---
title: Progress Bar
description: Allow users to view loading progress in real time.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Configuring {$page.title}](#3)
- [Basic Example](#4)
- [Real World Example](#5)
- [Vertical Example](#6)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Progress Bar module.

```javascript
YUI().use(
  'aui-progressbar',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create a HTML element:

```xml
<div id="myProbressBar"></div>
```

Now create a new instance of Progress Bar component, then tell `boundingBox` where it's going to be attached. We'll set the initial `value` of Progress Bar to `70`. Next, let's render it.

```javascript
YUI().use(
  'aui-progressbar',
  function(Y) {
    new Y.ProgressBar(
      {
        boundingBox: '#myProgressBar',
        value: 70,
        width: 700
      }
    ).render();
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your Progress Bar instance.

You can set a `label` which is changed when the `complete` event fires.

```javascript
YUI().use(
  'aui-progressbar',
  function(Y) {
    new Y.ProgressBar(
      {
        boundingBox: '#myProgressBar',
        label: '40%',
        on: {
          complete: function(e) {
            this.set('label', 'Complete!');
          }
        },
        value: 40,
        width: 700
      }
    ).render();
  }
);
```

Also you can define a vertical Progress Bar, to do that just set `orientation` to `vertical`.

```javascript
YUI().use(
  'aui-progressbar',
  function(Y) {
    new Y.ProgressBar(
      {
        boundingBox: '#myProgressBar',
        height: 200,
        label: '60%',
        orientation: 'vertical',
        value: 60,
        width: 30
      }
    ).render();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-progress-bar.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="auiProgressBar"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-progressbar',
    function(Y) {
      new Y.ProgressBar(
        {
          boundingBox: '#auiProgressBar',
          value: 70,
          width: 700
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="auiProgressBar"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-progressbar',
  function(Y) {
    new Y.ProgressBar(
      {
        boundingBox: '#auiProgressBar',
        value: 70,
        width: 700
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="myProgressBar" class="aui-progress-warning"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-progressbar',
    function(Y) {
      new Y.ProgressBar(
        {
          boundingBox: '#myProgressBar',
          label: '40%',
          max: 100,
          min: 0,
          on: {
            complete: function(e) {
              this.set('label', 'Complete!');
            },
            valueChange: function(e) {
              this.set('label', e.newVal + '%');
            }
          },
          value: 40,
          width: 700
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myProgressBar" class="aui-progress-warning"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-progressbar',
  function(Y) {
    new Y.ProgressBar(
      {
        boundingBox: '#myProgressBar',
        label: '40%',
        max: 100,
        min: 0,
        on: {
          complete: function(e) {
            this.set('label', 'Complete!');
          },
          valueChange: function(e) {
            this.set('label', e.newVal + '%');
          }
        },
        value: 40,
        width: 700
      }
    ).render();
  }
);
```

</article>

<article id="6">

## Vertical Example

<div id="verticalProgressBar" class="progress-success"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-progressbar',
    function(Y) {
      new Y.ProgressBar(
        {
          boundingBox: '#verticalProgressBar',
          height: 200,
          label: '60%',
          orientation: 'vertical',
          value: 60,
          width: 30
        }
      ).render();
    }
  );
{/literal}
</script>

##### HTML:
```xml
<div id="verticalProgressBar" class="progress-success"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-progressbar',
  function(Y) {
    new Y.ProgressBar(
      {
        boundingBox: '#verticalProgressBar',
        height: 200,
        label: '60%',
        orientation: 'vertical',
        value: 60,
        width: 30
      }
    ).render();
  }
);
```

</article>
