---
title: Timepicker
description: Create a dynamic timepicker that allows users to select the time with a popover.
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

Then initialize AlloyUI and load the Timepicker module.

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

Create an element to trigger a Timepicker:

```xml
<input class="input-large" type="text" placeholder="hh:mm" value="12:00 AM">
```

Now create a new instance of Timepicker component and define your `trigger`.

```javascript
YUI().use(
  'aui-timepicker',
  function(Y) {
    new Y.TimePicker(
      {
        trigger: 'button'
      }
    );
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your Timepicker instance.

For example, you can set a specific `mask` for the date using a pattern called `strftime`. If you are familiar to PHP you probably played with it.

```javascript
YUI().use(
  'aui-timepicker',
  function(Y) {
    new Y.TimePicker(
      {
        trigger: 'input',
        mask: 'Dinner at %H:%M',
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

<input class="form-control" id="basic" type="text" placeholder="hh:mm" value="12:00 AM">

<script type="text/javascript">
{literal}
YUI().use(
  'aui-timepicker',
  function(Y) {
    new Y.TimePicker(
      {
        trigger: '#basic',
        popover: {
          zIndex: 1
        },
        on: {
          selectionChange: function(event) {
            console.log(event.newSelection)
          }
        }
      }
    );
  }
);
{/literal}
</script>

##### HTML

```xml
<input class="form-control" id="input" type="text" placeholder="hh:mm" value="12:00 AM">
```

##### JavaScript

```javascript
YUI().use(
  'aui-timepicker',
  function(Y) {
    new Y.TimePicker(
      {
        trigger: '#input',
        popover: {
          zIndex: 1
        },
        on: {
          selectionChange: function(event) {
            console.log(event.newSelection)
          }
        }
      }
    );
  }
);
```

</article>

<article id="5">

## Real World Example

<input class="form-control" id="real-world" type="text" placeholder="Dinner at hh:mm">

<script type="text/javascript">
{literal}
YUI().use(
  'aui-timepicker',
  function(Y) {
    new Y.TimePicker(
      {
        trigger: '#real-world',
        mask: 'Dinner at %H:%M',
        popover: {
          zIndex: 1
        },
        on: {
          selectionChange: function(event) {
            console.log(event.newSelection)
          }
        }
      }
    );
  }
);
{/literal}
</script>

##### HTML

```xml
<input class="form-control" type="text" placeholder="Dinner at hh:mm">
```

##### JavaScript

```javascript
YUI().use(
  'aui-timepicker',
  function(Y) {
    new Y.TimePicker(
      {
        trigger: 'input',
        mask: 'Dinner at %H:%M',
        popover: {
          zIndex: 1
        },
        on: {
          selectionChange: function(event) {
            console.log(event.newSelection)
          }
        }
      }
    );
  }
);
```

</article>