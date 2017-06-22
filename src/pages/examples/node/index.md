---
title: Node
description: Allows for interaction with the DOM through a set of utility methods.
layout: "examples"
weight: 100
---

###### {$page.description}

- [What Does Node Do, Exactly?](#1)
- [Getting Started](#2)
- [Using {$page.title}](#3)
- [Basic Example](#4)
- [Real World Example](#5)
- [Full Example](#6)

<article id="1">

## What Does Node Do, Exactly?

Node supplies a set of methods that assists in DOM manipulation. Simple DOM interaction is possible without the node component, with `Y.one`, `Y.all`, and such commands being supplied in the YUI base code.

However, more complicated actions which would be quite difficult with that code alone (e.g., finding ancestors and siblings, changing attributes, or modifying content) are made much simpler with the node component.

</article>

<article id="2">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Node module.

```javascript
YUI().use(
  'aui-node',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="3">

## Using {$page.title}

Let's make a `<div>` element so we have something to work with:

```xml
<div class="box"></div>
```

Now we can do all sorts of things with this box, using the utility methods that the node component provides.

We can find all of the ancestors of our box, or all the ancestors that are `div` elements.

```javascript
YUI().use(
  'aui-node',
  function(Y) {
    var ancestors = Y.one('.box').ancestors();
    // or
    var divAncestors = Y.one('.box').ancestors('div');
  }
);
```

We can add content to our box:

```javascript
YUI().use(
  'aui-node',
  function(Y) {
    Y.one('.box').html('<p>I just love boxes! Do you?</p>');
  }
);
```

And then add more content:

```javascript
YUI().use(
  'aui-node',
  function(Y) {
    Y.one('.box p').placeAfter('<p>Especially when they are filled to the brim!</p>');
  }
);
```

Or, we could empty it of all content:

```javascript
YUI().use(
  'aui-node',
  function(Y) {
    Y.one('.box').empty();
  }
);
```

Node allows you to interact with the DOM in all sorts of ways that would usually be quite difficult. You can get the margin or padding on a certain element, change an element's ID, center an element in an ancestor container, get or set an attribute of an element, or many other useful things.

For a full list of the utilities that the node component supplies, check out the `source code`! Most methods explain what they do right there in the code for you.


<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-node.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

Click the `div` below to change its background color.

<div id="toggleColor">Click me!</div>

<style>
{literal}
  #toggleColor {
    width: 400px;
    height: 50px;
    margin: 15px 0;
    border: 1px solid #000;
    border-radius: 3px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 1px;
    padding-top: 10px;
    text-align: center;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
// Create an AUI instance and load the 'aui-node' module
  YUI().use(
    'aui-node',
    function(Y) {
      // Select the node(s) using a css selector string
      var node = Y.one('#toggleColor');
      // Change the background color on a `click` event
      node.on(
        'click',
        function() {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          node.setStyle('background', '#' + randomColor);
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="toggleColor">Click me!</div>
```

##### JavaScript:
```javascript
// Create an AUI instance and load the 'aui-node' module
YUI().use(
  'aui-node',
  function(Y) {
    // Select the node(s) using a css selector string
    var node = Y.one('#toggleColor');

    // Change the background color on a `click` event
    node.on(
      'click',
      function() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        node.setStyle('background', '#' + randomColor);
      }
    );
  }
);
```

</article>

<article id="5">

## Real World Example

The form below can add as many "job" fields as you need - check out how it does it!

<form id="jobForm">

  <h4>Your Information: </h4>

  <label for="firstname">First name: </label><input type="text" id="firstname"><br>
  <label for="lastname">Last name: </label><input type="text" id="lastname"><br>
  <input type="radio" name="gender" value="Male"> Male<br>
  <input type="radio" name="gender" value="Female"> Female<br>

  <br>

  <div class="job" id="job1">
    <h5>Last job: </h5>
    <label for="position1">Position: </label><input type="text" id="position1"><br>
    <label for="employer1">Employer: </label><input type="text" id="employer1"><br>
    <label for="dateRange">Dates of Employment: </label><input type="text" id="dateRange"><br>
  </div>

  <input type="submit" value="Send" class="btn">
  <input id="reset" type="reset" class="btn">
  <input id="addJob" type="button" value="Add another job" class="btn">

</form>

<style>
{literal}
  label {
    line-height: 1.4em;
    margin: 0;
  }
  button, input[type=button], input[type=submit], input[type=reset] {
    margin: 15px 6px 6px;
    padding: 5px 8px;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
// Create an AUI instance and load the 'aui-node' module
  YUI().use(
    'aui-node',
    function(Y) {
      var lastJobNumber = 1;
      var newJobNumber = 2;
      var job = '<div class="job added">' +
        '<h5>Previous job: </h5>' +
        '<label for="position2">Position: </label>' +
        '<input type="text" id="position2"><br>' +
        '<label for="employer2">Employer: </label>' +
        '<input type="text" id="employer2"><br>' +
        '<label for="dateRange">Dates of Employment: </label>' +
        '<input type="text" id="dateRange"><br>' +
      '</div>';
      Y.one('#addJob').on(
        'click',
        function() {
          // Create a new Job node and give it an appropriate ID
          var newJob = Y.Node.create(job);
          newJob.attr('id', 'job' + newJobNumber);

          // Place the node in its spot in the DOM and populate it
          var lastJob = '#job' + lastJobNumber;
          Y.one(lastJob).placeAfter(newJob);

          // Increment the values in case another job is added
          lastJobNumber++;
          newJobNumber++;
        }
      );
      Y.one('#reset').on(
        'click',
        function() {
          // Reset the original number of fields when "Reset" is pressed
          Y.all('#jobForm .added').remove(true);

          lastJobNumber = 1;
          newJobNumber = 2;
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<form id="jobForm">

  <h4>Your Information: </h4>

  <label for="firstname">First name: </label><input type="text" id="firstname"><br>
  <label for="lastname">Last name: </label><input type="text" id="lastname"><br>
  <input type="radio" name="gender" value="Male"> Male<br>
  <input type="radio" name="gender" value="Female"> Female<br>

  <br>

  <div class="job" id="job1">
    <h5>Last job: </h5>
    <label for="position1">Position: </label><input type="text" id="position1"><br>
    <label for="employer1">Employer: </label><input type="text" id="employer1"><br>
    <label for="dateRange">Dates of Employment: </label><input type="text" id="dateRange"><br>
  </div>

  <input type="submit" value="Send" class="btn">
  <input id="reset" type="reset" class="btn">
  <input id="addJob" type="button" value="Add another job" class="btn">

</form>
```

##### JavaScript:
```javascript
// Create an AUI instance and load the 'aui-node' module
YUI().use(
  'aui-node',
  function(Y) {
    var lastJobNumber = 1;
    var newJobNumber = 2;
    var job = '<div class="job added">' +
      '<h5>Previous job: </h5>' +
      '<label for="position2">Position: </label>' +
      '<input type="text" id="position2"><br>' +
      '<label for="employer2">Employer: </label>' +
      '<input type="text" id="employer2"><br>' +
      '<label for="dateRange">Dates of Employment: </label>' +
      '<input type="text" id="dateRange"><br>' +
    '</div>';

    Y.one('#addJob').on(
      'click',
      function() {
        // Create a new Job node and give it an appropriate ID
        var newJob = Y.Node.create(job);
        newJob.attr('id', 'job' + newJobNumber);

        // Place the node in its spot in the DOM and populate it
        var lastJob = '#job' + lastJobNumber;
        Y.one(lastJob).placeAfter(newJob);

        // Increment the values in case another job is added
        lastJobNumber++;
        newJobNumber++;
      }
    );

    Y.one('#reset').on(
      'click',
      function() {
        // Reset the original number of fields when "Reset" is pressed
        Y.all('#jobForm .added').remove(true);

        lastJobNumber = 1;
        newJobNumber = 2;
      }
    );
  }
);
```

</article>

<article id="6">

## Full Example

Click the `buttons` below to see some node methods in action.

<div id="demo">
  <div id="contentHolder">
    <div class="mini">
      <p>The quick brown fox jumps over the lazy dog.</p>
    </div>
  </div>
</div>

<button class="btn btn-primary" id="populate">Create and Append</button>
<button class="btn btn-primary" id="empty">Empty</button>
<button class="btn btn-primary" id="toggle">Toggle</button>
<button class="btn btn-primary" id="select">Switch Selectability</button>

<style>
{literal}
  #demo {
    border: 1px solid #777;
    height: 200px;
    margin-left: 5px;
    overflow: auto;
    padding: 5px;
    width: 400px;
  }
  #contentHolder {
    width: 216px;
  }
  .mini {
    border: 1px solid #777;
    height: 60px;
    margin: 2px;
    padding: 5px;
    width: 200px;
  }
  p {
    font-size: 18px;
  }
  button {
    margin: 6px;
    padding: 5px 8px;
  }
  pre {
    clear: both;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
  // Create an AUI instance and load the 'aui-node' module
  YUI().use(
    'aui-node',
    function(Y) {
      var text = 'The quick brown fox jumps over the lazy dog.';
      var centered = false;
      var selectable = true;
      var demo = Y.one('#demo');
      var holder = Y.one('#contentHolder');
      // Create and Append button makes a new box
      Y.one('#populate').on(
        'click',
        function() {
          Y.Node.create('<div class="mini"><p>'+text+'</p></div>').appendTo(holder);
        }
      );
      // Empty button clears all boxes
      Y.one('#empty').on(
        'click',
        function() {
          holder.empty();
          holder.setStyle('position', 'static');
        }
      );
      // Toggle button hides and displays boxes
      Y.one('#toggle').on(
        'click',
        function() {
          var boxes = Y.all('.mini');
          boxes.toggle();
        }
      );
      // Selectable button turns selectability on and off
      Y.one('#select').on(
        'click',
        function() {
          if (!selectable) {
            holder.selectable();
            selectable = true;
          }
          else {
            holder.unselectable();
            selectable = false;
          }
        }
      );
    }
  );
{/literal}
</script>
<br>
<br>

##### HTML:
```xml
<div id="demo">
  <div id="contentHolder">
    <div class="mini">
      <p>The quick brown fox jumps over the lazy dog.</p>
    </div>
  </div>
</div>

<button class="btn btn-primary" id="populate">Create and Append</button>
<button class="btn btn-primary" id="empty">Empty</button>
<button class="btn btn-primary" id="toggle">Toggle</button>
<button class="btn btn-primary" id="select">Switch Selectability</button>
```

##### JavaScript:
```javascript
// Create an AUI instance and load the 'aui-node' module
YUI().use(
  'aui-node',
  function(Y) {
    var text = 'The quick brown fox jumps over the lazy dog.';
    var centered = false;
    var selectable = true;
    var demo = Y.one('#demo');
    var holder = Y.one('#contentHolder');

    // Create and Append button makes a new box
    Y.one('#populate').on(
      'click',
      function() {
        Y.Node.create('<div class="mini"><p>'+text+'</p></div>').appendTo(holder);
      }
    );

    // Empty button clears all boxes
    Y.one('#empty').on(
      'click',
      function() {
        holder.empty();
        holder.setStyle('position', 'static');
      }
    );

    // Toggle button hides and displays boxes
    Y.one('#toggle').on(
      'click',
      function() {
        var boxes = Y.all('.mini');
        boxes.toggle();
      }
    );

    // Selectable button turns selectability on and off
    Y.one('#select').on(
      'click',
      function() {
        if (!selectable) {
          holder.selectable();
          selectable = true;
        }
        else {
          holder.unselectable();
          selectable = false;
        }
      }
    );
  }
);
```

</article>
