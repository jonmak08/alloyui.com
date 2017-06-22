---
title: Modal
description: Provides a resizable, drag and drop window with toolbar functionality.
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

Then initialize AlloyUI and load the Modal module.

```javascript
YUI().use(
  'aui-modal',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element to house the modal window.

```xml
<div id="myModal"></div>
```

Then initialize a new instance of modal, rendering it to your HTML element, passing in some `bodyContent` and `headerContent`.

Set `centered` to `true` to position the modal in the center of your window. Don't forget to render it!

```javascript
YUI().use(
  'aui-modal',
  function(Y) {
    var modal = new Y.Modal(
      {
        bodyContent: 'Modal body',
        centered: true,
        headerContent: 'Modal header',
        render: '#modal'
      }
    ).render();
  }
);
```

</article>


<article id="3">

## Configuring {$page.title}

By default, all instances of modal can be resized and dragged. Both of these features can be disabled by setting `resizable` and `draggable` to `false`.

```javascript
YUI().use(
  'aui-modal',
  function(Y) {
    var modal = new Y.Modal(
      {
        bodyContent: 'Modal body',
        centered: true,
        draggable: false,
        headerContent: 'Modal header',
        render: '#modal',
        resizable: false
      }
    ).render();
  }
);
```

A defined `height` and `width` can be set, and the resizing handles can be repositioned to any side of the modal.

```javascript
YUI().use(
  'aui-modal',
  function(Y) {
    var modal = new Y.Modal(
      {
        bodyContent: 'Modal body',
        centered: true,
        headerContent: 'Modal header',
        height: 200,
        render: '#modal',
        //setting a bottom and right side handle
        resizable: {
          handles: 'b, r'
        },
        width: 300
      }
    ).render();
  }
);
```

A useful functionality of modal, is the seamless inclusion of toolbars, which can be added to the header, body, and even footer of the modal.

```javascript
YUI().use(
  'aui-modal',
  function(Y) {
    var modal = new Y.Modal(
      {
        bodyContent: 'Modal body',
        centered: true,
        headerContent: 'Modal header',
        render: '#modal',
        toolbars: {
          body: [
            {
              label: 'Button'
            }
          ],
          footer: [
            {
              label: 'Close'
            }
          ]
        }
      }
    ).render();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-modal.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<button class="btn btn-primary" id="modalButton">Click me!</button>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-modal',
    function(Y) {
      var modal = new Y.Modal(
        {
          bodyContent: 'Modal body',
          centered: true,
          headerContent: '<h3>Modal header</h3>',
          modal: true,
          render: '#modal-one',
          visible: false,
          width: 450,
        }
      ).render();
      Y.one('#modalButton').on('click', function() {
        modal.show();
      });
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<button id="modalButton" class="btn btn-primary">Click me!</button>

<div class="yui3-skin-sam">
  <div id="modal"></div>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-modal',
  function(Y) {
    var modal = new Y.Modal(
      {
        bodyContent: 'Modal body',
        centered: true,
        headerContent: '<h3>Modal header</h3>',
        modal: true,
        render: '#modal',
        visible: false,
        width: 450,
      }
    ).render();
    Y.one('#modalButton').on(
      'click',
      function() {
        modal.show();
      }
    )
  }
);
```

</article>

<article id="5">

## Real World Example

<button id="showModal" class="btn btn-primary">Show Modal</button>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-modal',
    function(Y) {
      var modal = new Y.Modal(
        {
          bodyContent: 'How many pages do you want to print?',
          centered: true,
          destroyOnHide: false,
          headerContent: '<h3>Print</h3>',
          modal: true,
          render: '#modal-two',
          resizable: {
            handles: 'b, r'
          },
          toolbars: {
            body: [
              {
                icon: 'glyphicon glyphicon-file',
                label: 'Single Page'
              },
              {
                icon: 'glyphicon glyphicon-book',
                label: 'All Pages'
              }
            ]
          },
          visible: false,
          width: 450
        }
      ).render();
      modal.addToolbar(
        [
          {
            label: 'Cancel',
            on: {
              click: function() {
                modal.hide();
              }
            }
          },
          {
            label: 'Okay',
            on: {
              click: function() {
                alert('Just an example, there will be no printing here.');
              }
            }
          }
        ]
      );
      Y.one('#showModal').on('click', function() {
        modal.show();
      });
    }
  );
  {/literal}
  </script>
  <br>

  ##### HTML:
  ```xml
  <button id="showModal" class="btn btn-primary">Show Modal</button>

  <div class="yui3-skin-sam">
      <div id="modal"></div>
  </div>
  ```

  ##### JavaScript:
  ```javascript
  YUI().use(
    'aui-modal',
    function(Y) {
      var modal = new Y.Modal(
        {
          bodyContent: 'How many pages do you want to print?',
          centered: true,
          destroyOnHide: false,
          headerContent: '<h3>Print</h3>',
          modal: true,
          render: '#modal',
          resizable: {
            handles: 'b, r'
          },
          toolbars: {
            body: [
              {
                icon: 'glyphicon glyphicon-file',
                label: 'Single Page'
              },
              {
                icon: 'glyphicon glyphicon-book',
                label: 'All Pages'
              }
            ]
          },
          visible: false,
          width: 450
        }
      ).render();

      modal.addToolbar(
        [
          {
            label: 'Cancel',
            on: {
              click: function() {
                modal.hide();
              }
            }
          },
          {
            label: 'Okay',
            on: {
              click: function() {
                alert('Just an example, there will be no printing here.');
              }
            }
          }
        ]
      );

      Y.one('#showModal').on(
        'click',
        function() {
          modal.show();
        }
      );
    }
  );
```

</article>

<div class="yui3-skin-sam">
  <div id="modal-one"></div>
</div>

<div class="yui3-skin-sam">
    <div id="modal-two"></div>
</div>
