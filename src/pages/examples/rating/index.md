---
title: Rating
description: Allows users to set ratings for content.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Configuring {$page.title}](#3)
- [Rendering from HTML](#4)
- [Basic Example](#5)
- [Real World Example](#6)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Rating module.

```javascript
YUI().use(
  'aui-rating',
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
<div id="myRating"></div>
```

Now create a new instance of Rating component by setting boundingBox to our HTML element's selector. We will leave all other options empty for a stock Rating configuration. Finally, let's render it!

```javascript
YUI().use(
  'aui-rating',
  function(Y) {
    new Y.StarRating(
      {
        boundingBox: '#myRating'
      }
    ).render();
  }
);
```

<div class="alert alert-info">
  <strong>Note: </strong>
  you can also use the constructor new ThumbRating, which is a Rating component that initially contains 2 options: thumbs up or thumbs down. Give it a try!
</div>

</article>

<article id="3">

## Configuring {$page.title}

There are some other optional parameters that you can pass to your Rating instance.

For example, you can pass the `size` option a whole number for how many choices you want Rating to have:

```javascript
YUI().use(
  'aui-rating',
  function(Y) {
    new Y.StarRating(
      {
        boundingBox: '#myRating',
        size: 8
      }
    ).render();
  }
);
```

Setting `showTitle` to `true` displays the string you have set for `title` as a tooltip when user hovers over Rating.

```javascript
YUI().use(
  'aui-rating',
  function(Y) {
    new Y.StarRating(
      {
        boundingBox: '#myRating',
        showTitle: true,
        size: 8,
        title: "A new way to Rate!"
      }
    ).render();
  }
);
```

</article>

<article id="4">

## Rendering from HTML

You can also define Rating choices from HTML `radio` inputs, enabling control over individual `title` for each input! Further, you can set event handlers using `on` or `after` options to run code on Rating events. Each rating event is passed in object `this` for the rating choice with includes data such as `title` and `value`. Add a `div` below rating and we will print a message containing event data.

##### HTML:
```xml
<div id="myRating">
  <input type="radio" title="Horrible" />
  <input type="radio" title="Very bad" />
  <input type="radio" title="Bad" />
  <input type="radio" title="Acceptable" />
  <input type="radio" title="Good" />
  <input type="radio" title="Very good" />
  <input type="radio" title="Perfect" />
</div>

<div id="print"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-rating',
  function(Y) {
    new Y.StarRating(
      {
        after: {
          itemSelect: function(event) {
            var title = this.get('title');

            var stars = this.get('value') + 1;
            stars += ' Stars';

            A.one('#print').set('innerHTML', 'You selected ' + title + ' - ' + stars);
          }
        },
        boundingBox: '#myRating',
        showTitle: true
    }).render();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-rating.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="5">

## Basic Example

<div id="auiRating">
  <p>Select a Rating</p>
</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-rating',
    function(Y) {
      new Y.ThumbRating(
        {
          boundingBox: '#auiRating'
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="auiRating"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-rating',
  function(Y) {
    new Y.ThumbRating(
      {
        boundingBox: '#auiRating'
      }
    ).render();
  }
);
```

</article>

<article id="6">

## Real World Example

<div id="myRating">
  <p>How would you rate Jimmy Stewart's Acting?</p>
  <input type="radio" value="1" title="A Large Pink Rabbit" />
  <input type="radio" value="2" title="Gives me Vertigo" />
  <input type="radio" value="3" title="Headed out the Rear Window" />
  <input type="radio" value="4" title="I wanna live again" />
  <input type="radio" value="5" title="It's like all wars, I guess" />
  <input type="radio" value="6" title="A Lasso Around the Moon" />
  <input type="radio" value="7" title="Merry Christmas Building & Loan" />
</div>

<p id="titleBox"></p>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-rating',
    'node',
    function(Y) {
      var titleBox = Y.one('#titleBox');
      var instance, title, stars;
      var rating = new Y.StarRating(
        {
          boundingBox: '#myRating',
          disabled: false,
          label: "It's OK to be honest:"
        }
      ).render();
      rating.on(
        'click',
        function(event) {
          instance = event.target;
          title = instance.get('title');
          stars = instance.get('value');
          if (!title) {
            titleBox.set('innerHTML', 'You selected <strong>0 stars</strong> - no rating!');
          }
          else {
            titleBox.set('innerHTML', 'You selected <strong>' + stars + ' stars</strong> - "' + title + '"!');
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
<div id="myRating">
  <input type="radio" value="1" title="A Large Pink Rabbit" />
  <input type="radio" value="2" title="Gives me Vertigo" />
  <input type="radio" value="3" title="Headed out the Rear Window" />
  <input type="radio" value="4" title="I wanna live again" />
  <input type="radio" value="5" title="It's like all wars, I guess" />
  <input type="radio" value="6" title="A Lasso Around the Moon" />
  <input type="radio" value="7" title="Merry Christmas Building & Loan" />
</div>

<p id="titleBox"></p>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-rating',
  'node',
  function(Y) {
    var titleBox = Y.one('#titleBox');
    var instance, title, stars;

    var rating = new Y.StarRating(
      {
        boundingBox: '#myRating',
        disabled: false,
        label: "It's OK to be honest:"
      }
    ).render();

    rating.on(
      'click',
      function(event) {
        instance = event.target;
        title = instance.get('title');
        stars = instance.get('value');

        if (!title) {
          titleBox.set('innerHTML', 'You selected <strong>0 stars</strong> - no rating!');
        }
        else {
          titleBox.set('innerHTML', 'You selected <strong>' + stars + ' stars</strong> - "' + title + '"!');
        }
      }
    );
  }
);
```

</article>
