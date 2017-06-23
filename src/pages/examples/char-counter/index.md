---
title: Char Counter
description: Provides a character counter that limits the amount of text in a field.
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

Then initialize AlloyUI and load the Char Counter module.

```javascript
YUI().use(
  'aui-char-counter',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an input and an element to be used as the counter.

```xml
<input type="text" id="input"/>
<span id="counter"></span> character(s) remaining
```

Now let's create a new instance of Char Counter using these two elements and setting the maximum length to 10.

```javascript
YUI().use(
  'aui-char-counter',
  function(Y) {
    new Y.CharCounter(
      {
        counter: '#counter',
        input: '#input',
        maxLength: 10
      }
    );
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

When the maximum length is reached, we can create a function, such as an alert informing the user that the maximum length was reached.

```javascript
YUI().use(
  'aui-char-counter',
  function(Y) {
    new Y.CharCounter(
      {
        counter: '#counter',
        input: '#input',
        maxLength: 10,
        on: {
          maxLength: function(event) {
            alert('The max length has been reached');
          }
        }
      }
    );
  }
);
```

<div class="alert alert-success">
  For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-char-counter.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<form class="form-inline">
    <input id="myInput" class="form-control" type="text">
    <label class="control-label">
        <span id="auiCounter"></span> character(s) remaining
    </label>
</form>

<style>
{literal}
  #myInput {
    margin: 0 5px 0 0;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-char-counter',
    function(Y) {
      new Y.CharCounter(
        {
          counter: '#auiCounter',
          input: '#myInput',
          maxLength: 10
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<form class="form-inline">
    <input id="myInput" class="form-control" type="text">
    <label class="control-label">
        <span id="auiCounter"></span> character(s) remaining
    </label>
</form>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-char-counter',
  function(Y) {
    new Y.CharCounter(
      {
        counter: '#auiCounter',
        input: '#myInput',
        maxLength: 10
      }
    );
  }
);
```

</article>

<article id="5">

## Real World Example

<style>
{literal}
.twitter-box {
  position: relative;
  width: 530px;
  height: 211px;
  background: url(/files/char-counter/twitter-box.png);
}
#myCounter {
  position: absolute;
  bottom: 15px;
  right: 95px;
  text-align: center;
  color: #999;
}
#myTextarea {
  position: absolute;
  top: 60px;
  left: 20px;
  width: 490px;
  height: 75px;
}
{/literal}
</style>

<div class="twitter-box">
  <textarea id="myTextarea" class="form-control"></textarea>
  <p id="myCounter"></p>
</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-char-counter',
    function(Y) {
      new Y.CharCounter(
        {
          counter: '#myCounter',
          input: '#myTextarea',
          maxLength: 140,
          on: {
            maxLength: function(event) {
              alert('The max length limit was reached');
            }
          }
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<textarea id="myTextarea" class="form-control"></textarea>
<p id="myCounter"></p>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-char-counter',
  function(Y) {
    new Y.CharCounter(
      {
        counter: '#myCounter',
        input: '#myTextarea',
        maxLength: 140,
        on: {
          maxLength: function(event) {
            alert('The max length limit was reached');
          }
        }
      }
    );
  }
);
```

</article>
