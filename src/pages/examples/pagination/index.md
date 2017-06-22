---
title: Pagination
description: Provides a set of controls to navigate through paged data.
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

Then initialize AlloyUI and load the Pagination module.

```javascript
YUI().use(
  'aui-pagination',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Multiple Paginations can be rendered using the same HTML markup. We'll create one.

```xml
<div class="myPagination"></div>
```

Now let's initialize a new instance of Pagination, using the `containers` and `total` options.

```javascript
YUI().use(
  'aui-pagination',
  function(Y) {
    new Y.Pagination(
      {
        containers: '.myPagination',
        total: 10
      }
    ).render();
  }
);
```

In order for the Pagination to function, you must specify what you want the pagination to do on the `changeRequest` event. This `changeRequest` event fires when a user clicks on a page link. Here we will select the page link using the Pagination's `changeRequest` event.

```javascript
YUI().use(
  'aui-pagination',
  function(Y) {
    new Y.Pagination(
      {
        containers: '.myPagination',
        on: {
          changeRequest: function(event) {
            this.setState(event.state);
          }
        },
        total: 10
      }
    ).render();
  }
);
```

</article>


<article id="3">

## Configuring {$page.title}

There are many configuration options that can be passed into the Pagination, such as `maxPageLinks`, which sets the total amount of links displayed at a time, `rowsPerPageOptions`, which can be used to change the amount of pages displayed at once, and `circular`, which allows continuous page navigation.

```javascript
YUI().use(
  'aui-pagination',
  function(Y) {
    new Y.Pagination(
      {
        circular: true,
        containers: '.myPagination',
        maxPageLinks: 5,
        on: {
          changeRequest: function(event) {
            this.setState(event.state);
          }
        },
        rowsPerPageOptions: [1, 3, 5, 7],
        total: 10
      }
    ).render();
  }
);
```

You can also change what is displayed in the various links of the Pagination.

```javascript
YUI().use(
  'aui-pagination',
  function(Y) {
    new Y.Pagination(
      {
        containers: '.myPagination',
        firstPageLinkLabel: 'First Page',
        nextPageLinkLabel: '>>',
        on: {
          changeRequest: function(event) {
            this.setState(event.state);
          }
        },
        total: 10
      }
    ).render();
  }
);
```

So far we have shown how to initialize and configure the Pagination, but it still isn't interacting with any page content! Pagination can be utilized to paginate through content from markup or dynamic content.

These actions can take place within `changeRequest`, utilizing `event.state.page`, `event.state.rowsPerPage`, etc. Check out the examples for how these changes can be executed.

Here is a very basic example of how a pagination may be used to change the content of a page.

```javascript
YUI().use(
  'aui-pagination',
  function(Y) {
    //grabbing a node to be used for content
    var content = Y.one('.content');

    new Y.Pagination(
      {
        containers: '.myPagination',
        on: {
          changeRequest: function(event) {
            var newState = event.state;

            this.setState(newState);

            //setting the content of the node to the current page number
            content.html(event.state.page);
          }
        },
        total: 4
      }
    ).render();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-pagination.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="jslarge" class="pagination pagination-large"></div>
<div id="jssmall" class="pagination pagination-small"></div>
<div id="jsmini" class="pagination pagination-mini"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-pagination',
    function(Y) {
      new Y.Pagination(
        {
          after: {
            changeRequest: function(event) {
              console.log(
                'page:', event.state.page,
                'getOffsetPageNumber:', this.getOffsetPageNumber()
              );
            }
          },
          boundingBox: '#jslarge',
          offset: 999,
          page: 1,
          strings: {
            next: '»',
            prev: '«'
          },
          total: 5
        }
      ).render();
      new Y.Pagination(
        {
          boundingBox: '#jssmall',
          total: 15
        }
      ).render();
      new Y.Pagination(
        {
          boundingBox: '#jsmini',
          total: 15
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="jslarge" class="pagination pagination-large"></div>
<div id="jssmall" class="pagination pagination-small"></div>
<div id="jsmini" class="pagination pagination-mini"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-pagination',
  function(Y) {
    new Y.Pagination(
      {
        after: {
          changeRequest: function(event) {
            console.log(
              'page:', event.state.page,
              'getOffsetPageNumber:', this.getOffsetPageNumber()
            );
          }
        },
        boundingBox: '#jslarge',
        offset: 999,
        page: 1,
        strings: {
          next: '»',
          prev: '«'
        },
        total: 5
      }
    ).render();

    new Y.Pagination(
      {
        boundingBox: '#jssmall',
        total: 15
      }
    ).render();

    new Y.Pagination(
      {
        boundingBox: '#jsmini',
        total: 15
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example

<div class="content">
  <div>
    <h4>Page 1</h4>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </div>
  <div>
    <h4>Page 2</h4>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
  <div>
    <h4>Page 3</h4>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>

<div id="pagination">
  <ul class="pagination pagination-content">
    <li><a href="#">Prev</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">Next</a></li>
  </ul>
</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-pagination',
    function(Y) {
      var pages = Y.all('.content div');
      new Y.Pagination(
        {
          boundingBox: '#pagination',
          circular: false,
          contentBox: '#pagination .pagination-content',
          on: {
            changeRequest: function(event) {
              var instance = this,
                  state = event.state,
                  lastState = event.lastState;

              if (lastState) {
                  pages.item(lastState.page - 1).setStyle('display', 'none');
              }
              pages.item(state.page - 1).setStyle('display', 'block');
            }
          },
          page: 1
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div class="content">
  <div>
    <h3>Page 1</h3>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </div>
  <div>
    <h3>Page 2</h3>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
  <div>
    <h3>Page 3</h3>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>

<div id="pagination">
  <ul class="pagination pagination-content">
    <li><a href="#">Prev</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">Next</a></li>
  </ul>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-pagination',
  function(Y) {
    var pages = Y.all('.content div');

    new Y.Pagination(
      {
        boundingBox: '#pagination',
        circular: false,
        contentBox: '#pagination .pagination-content',
        on: {
          changeRequest: function(event) {
            var instance = this,
                state = event.state,
                lastState = event.lastState;

            if (lastState) {
                pages.item(lastState.page - 1).setStyle('display', 'none');
            }

            pages.item(state.page - 1).setStyle('display', 'block');
          }
        },
        page: 1
      }
    ).render();
  }
);
```

</article>
