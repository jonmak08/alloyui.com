---
title: Popover
description: Provides a positionable pop up box with toggle capabilities.
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

Then initialize AlloyUI and load the Popover module.

```javascript
YUI().use(
  'aui-popover',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element that the popover will be aligned to.

```xml
<div class="node">Content</div>
```

Create a popover, set it to align with the newly created element, and render it.

```javascript
YUI().use(
  'aui-popover',
  function(Y) {
    var node = Y.one('.node');

    var popover = new Y.Popover(
      {
        align: {
          //node that the popover will be aligned with
          node: node,
          //points that determine the position of the popover in relation to the node
          //[popover, node]
          points: [Y.WidgetPositionAlign.TC, Y.WidgetPositionAlign.BC]
        },
        bodyContent: 'One fine body…',
        headerContent: 'Header content'
      }
    ).render();
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

Popover can be set to both display and hide at different times.

```javascript
YUI().use(
  'aui-popover',
  function(Y) {
    var node = Y.one('.node');

    var popover = new Y.Popover(
      {
        align: {
          node: node,
          points: [Y.WidgetPositionAlign.TC, Y.WidgetPositionAlign.BC]
        },
        bodyContent: 'One fine body…',
        headerContent: 'Header content'
      }
    ).render();

    node.on(
      'click',
      function() {
        popover.set('visible', false);
      }
    );
  }
);
```

In addition to the header and body, footer content can be set. `position` determine where the arrow is positioned on the popover.

```javascript
YUI().use(
  'aui-popover',
  function(Y) {
    var node = Y.one('.node');

    var popover = new Y.Popover(
      {
        align: {
          node: node,
          points: [Y.WidgetPositionAlign.TC, Y.WidgetPositionAlign.BC]
        },
        bodyContent: 'One fine body…',
        footerContent: 'Here is the footer!',
        headerContent: 'Header content',
        position: 'top'
      }
    ).render();
  }
);
```

Plugins can be utilized to provide additional features, such as animation when visibility is toggled.

```javascript
YUI().use(
  'aui-popover',
  'widget-anim',
  function(Y) {
    var node = Y.one('.node');

    var popover = new Y.Popover(
      {
        align: {
          node: node,
          points: [Y.WidgetPositionAlign.TC, Y.WidgetPositionAlign.BC]
        },
        bodyContent: 'One fine body…',
        headerContent: 'Header content',
        plugins: [Y.Plugin.WidgetAnim]
      }
    ).render();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-popover.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<br>

<button id="myPopover" class="btn btn-primary">Click here to toggle the popover</button>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-popover',
    function(Y) {
      var trigger = Y.one('#myPopover');
      var popover = new Y.Popover(
        {
          align: {
            node: trigger,
            points:[Y.WidgetPositionAlign.BC, Y.WidgetPositionAlign.TC]
          },
          bodyContent: 'Body Content',
          headerContent: 'Header content',
          position: 'top'
        }
      ).render();
      trigger.on(
        'click',
        function() {
          popover.set('visible', !popover.get('visible'));
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<button id="myPopover" class="btn btn-primary">Click here to toggle the popover</button>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-popover',
  function(Y) {
    var trigger = Y.one('#myPopover');

    var popover = new Y.Popover(
      {
        align: {
          node: trigger,
          points:[Y.WidgetPositionAlign.BC, Y.WidgetPositionAlign.TC]
        },
        bodyContent: 'Body Content',
        headerContent: 'Header content',
        position: 'top'
      }
    ).render();

    trigger.on(
      'click',
      function() {
        popover.set('visible', !popover.get('visible'));
      }
    );
  }
);
```

</article>

<article id="5">

## Real World Example

<button id="myPopoverAnim" class="btn btn-primary">Popover with animation</button>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-popover',
    'widget-anim',
    function(A) {
      var triggerAnim = A.one('#myPopoverAnim');
      var popoverAnim = new A.Popover(
        {
          align: {
            node: triggerAnim,
            points:[A.WidgetPositionAlign.RC, A.WidgetPositionAlign.LC]
          },
          bodyContent: 'Body Content',
          headerContent: 'Header content',
          plugins: [A.Plugin.WidgetAnim],
          position: 'left'
        }
      ).render();
      triggerAnim.on(
        'click',
        function() {
          popoverAnim.set('visible', !popoverAnim.get('visible'));
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<button id="myPopoverAnim" class="btn btn-primary">Popover with animation</button>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-popover',
  'widget-anim',
  function(A) {
    var triggerAnim = A.one('#myPopoverAnim');

    var popoverAnim = new A.Popover(
      {
        align: {
          node: triggerAnim,
          points:[A.WidgetPositionAlign.RC, A.WidgetPositionAlign.LC]
        },
        bodyContent: 'Body Content',
        headerContent: 'Header content',
        plugins: [A.Plugin.WidgetAnim],
        position: 'left'
      }
    ).render();

    triggerAnim.on(
      'click',
      function() {
        popoverAnim.set('visible', !popoverAnim.get('visible'));
      }
    );
  }
);
```

</article>
