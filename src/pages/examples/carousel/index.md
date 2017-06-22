---
title: Carousel
description: Provides an interactive way of cycling through elements.
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

Then initialize AlloyUI and load the Carousel module.

```javascript
YUI().use(
  'aui-carousel',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create a list of elements that contains the images you want to show:

```xml
<div id="myCarousel">
  <div class="carousel-item" style="background: url(http://alloyui.com/carousel/img/1.jpg);"></div>
  <div class="carousel-item" style="background: url(http://alloyui.com/carousel/img/2.jpg);"></div>
  <div class="carousel-item" style="background: url(http://alloyui.com/carousel/img/3.jpg);"></div>
  <div class="carousel-item" style="background: url(http://alloyui.com/carousel/img/4.jpg);"></div>
</div>
```

Now create a new instance of the Carousel component, then tell to ```contentBox``` where it's going to be attached and define some ```width``` and ```height```. Finally, let's render it!

```javascript
YUI().use(
  'aui-carousel',
  function(Y) {
    new Y.Carousel(
      {
        contentBox: '#myCarousel',
        height: 250,
        width: 700
      }
    ).render();
  }
);
```

<div class="alert alert-info">
  <strong>Note: </strong>
  you could also use <code>boundingBox</code>, not only <code>contentBox</code> to be initialized. Read more about the <a href="https://github.com/liferay/alloy-ui/wiki/FAQs">differences between them</a>.
</div>

</article>

<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your Carousel instance.

For example, you can set the first image that will appear by defining an ```activeIndex``` - any number or ```rand``` (random value) to indicate the image.

```javascript
YUI().use(
  'aui-carousel',
  function(Y) {
    new Y.Carousel(
      {
        activeIndex: 'rand',
        contentBox: '#myCarousel',
        height: 250,
        width: 700
      }
    ).render();
  }
);
```

Also, you can set the amount of time each image is displayed before proceeding to the next by changing the value of ```intervalTime```.

```javascript
YUI().use(
  'aui-carousel',
  function(Y) {
    new Y.Carousel(
      {
        contentBox: '#myCarousel',
        height: 250,
        intervalTime: 2,
        width: 700
      }
    ).render();
  }
);
```

<div class="alert alert-success">
	For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-carousel.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="auiCarousel">
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/1.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/2.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/3.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/4.jpg);"></div>
</div>

<style>
{literal}
  .carousel {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    margin: 20px 0;
  }
  .carousel-item {
    border-radius: 6px;
    width: 700px;
    height: 250px;
    opacity: 0;
  }
  .carousel li {
    margin: 0 !important;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-carousel',
    function(Y) {
      new Y.Carousel(
        {
          contentBox: '#auiCarousel',
          height: 250,
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
<div id="auiCarousel">
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/1.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/2.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/3.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/4.jpg);"></div>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-carousel',
  function(Y) {
    new Y.Carousel(
      {
        contentBox: '#auiCarousel',
        height: 250,
        width: 700
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="myCarousel">
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/1.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/2.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/3.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/4.jpg);"></div>
</div>

<style>
{literal}
  .carousel {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    margin: 20px 0;
  }
  .carousel-item {
    border-radius: 6px;
    width: 700px;
    height: 250px;
    opacity: 0;
  }
  .carousel li {
    margin: 0 !important;
  }
  #customMenu {
    position: relative;
    z-index: 40;
    background: #ccc;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-carousel',
    function(Y) {
      new Y.Carousel(
        {
          activeIndex: 'rand',
          contentBox: '#myCarousel',
          height: 250,
          intervalTime: 2,
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
<div id="myCarousel">
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/1.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/2.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/3.jpg);"></div>
  <div class="image-viewer-base-image" style="background: url(http://alloyui.com/carousel/img/4.jpg);"></div>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-carousel',
  function(Y) {
    new Y.Carousel(
      {
        activeIndex: 'rand',
        contentBox: '#myCarousel',
        height: 250,
        intervalTime: 2,
        width: 700
      }
    ).render();
  }
);
```

</article>
