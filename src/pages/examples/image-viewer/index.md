---
title: Image Viewer
description: Allows users to view and navigate through a collection of images.
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

Then initialize AlloyUI and load the Image Viewer module.

```javascript
YUI().use(
  'aui-image-viewer',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Image Viewer uses images that are linked in the HTML:

```xml
<div id="myGallery">
  <!-- Image being displayed with Image Viewer -->
  <a href="image-1.jpg">
    <!-- Thumbnail of image to be displayed -->
    <img src="image-1-thumbnail.jpg" />
  </a>
  <a href="image-2.jpg">
    <img src="image-2-thumbnail.jpg" />
  </a>
  <a href="image-3.jpg">
    <img src="image-3-thumbnail.jpg" />
  </a>
</div>
```

Create a new instance of Image Viewer referecing the linked images in the HTML, and render it!

```javascript
YUI().use(
  'aui-image-viewer',
  function(Y) {
    new Y.ImageViewer(
      {
        links: '#myGallery a'
      }
    ).render();
  }
);
```

</article>


<article id="3">

## Configuring {$page.title}

Parameters can be passed into your instance of Image Viewer to change attributes such as image captions, image positioning, and when images within the viewer are loaded.

```javascript
YUI().use(
  'aui-image-viewer',
  function(Y) {
    new Y.ImageViewer(
      {
        caption: 'Liferay Champion Soccer',
        //captionFromTitle uses the DOM title attibute as image caption
        captionFromTitle: true,
        centered: true,
        imageAnim: {
         duration: 1,
         easing: 'easeIn'
        },
        intervalTime: 2,
        links: '#myGallery a',
        playing: true,
        preloadAllImages: true,
        preloadNeighborImages: true,
        showInfo: true,
        showPlayer: true,
        zIndex: 1
      }
    ).render();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-image-viewer.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<style>
{literal}
.docs .guide-content img {
  display: initial;
  width: initial;
}
.picture {
  border: 5px solid #222;
  margin: 10px;
}
.yui3-widget-mask {
  background-color: black;
  zoom: 1;
  -ms-filter: "alpha(opacity=70)";
  filter: alpha(opacity=70);
  opacity: .7;
}
{/literal}
</style>

<div id="auiGallery">
  <a href="/files/image-viewer/1-large.jpg" title="Resting on the rocks.">
    <img class="picture" src="/files/image-viewer/1.jpg" />
  </a>
  <a href="/files/image-viewer/2-large.jpg" title="Grand finale teams">
    <img class="picture" src="/files/image-viewer/2.jpg" />
  </a>
  <a href="/files/image-viewer/3-large.jpg" title="Looking at the landscape">
    <img class="picture" src="/files/image-viewer/3.jpg" />
  </a>
  <a href="/files/image-viewer/4-large.jpg" title="The real champion winners, Brazilian team!">
    <img class="picture" src="/files/image-viewer/4.jpg" />
  </a>
</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-image-viewer',
    function(Y) {
      new Y.ImageViewer(
        {
          links: '#auiGallery a',
          zIndex: 1
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="auiGallery">
  <a href="http://alloyui.com/image-viewer/img/1-large.jpg" title="Resting on the rocks.">
    <img class="picture" src="http://alloyui.com/image-viewer/img/1.jpg" />
  </a>
  <a href="http://alloyui.com/image-viewer/img/2-large.jpg" title="Grand finale teams">
    <img class="picture" src="http://alloyui.com/image-viewer/img/2.jpg" />
  </a>
  <a href="http://alloyui.com/image-viewer/img/3-large.jpg" title="Looking at the landscape">
    <img class="picture" src="http://alloyui.com/image-viewer/img/3.jpg" />
  </a>
  <a href="http://alloyui.com/image-viewer/img/4-large.jpg" title="The real champion winners, Brazilian team!">
    <img class="picture" src="http://alloyui.com/image-viewer/img/4.jpg" />
  </a>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-image-viewer',
  function(Y) {
    new Y.ImageViewer(
      {
        links: '#auiGallery a',
        zIndex: 1
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="myGallery">
  <a href="/files/image-viewer/1-large.jpg" title="Resting on the rocks.">
    <img class="picture" src="/files/image-viewer/1.jpg" />
  </a>
  <a href="/files/image-viewer/2-large.jpg" title="Grand finale teams">
    <img class="picture" src="/files/image-viewer/2.jpg" />
  </a>
  <a href="/files/image-viewer/3-large.jpg" title="Looking at the landscape">
    <img class="picture" src="/files/image-viewer/3.jpg" />
  </a>
  <a href="/files/image-viewer/4-large.jpg" title="The real champion winners, Brazilian team!">
    <img class="picture" src="/files/image-viewer/4.jpg" />
  </a>
</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-image-viewer',
    function(Y) {
      new Y.ImageViewer(
        {
          caption: 'Liferay Champion Soccer',
          captionFromTitle: true,
          centered: true,
          imageAnim: {
           duration: 1,
           easing: 'easeIn'
          },
          intervalTime: 2,
          links: '#myGallery a',
          playing: true,
          preloadAllImages: true,
          preloadNeighborImages: true,
          showInfo: true,
          showPlayer: true,
          zIndex: 1
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myGallery">
  <a href="http://alloyui.com/image-viewer/img/1-large.jpg" title="Resting on the rocks.">
    <img class="picture" src="http://alloyui.com/image-viewer/img/1.jpg" />
  </a>
  <a href="http://alloyui.com/image-viewer/img/2-large.jpg" title="Grand finale teams">
    <img class="picture" src="http://alloyui.com/image-viewer/img/2.jpg" />
  </a>
  <a href="http://alloyui.com/image-viewer/img/3-large.jpg" title="Looking at the landscape">
    <img class="picture" src="http://alloyui.com/image-viewer/img/3.jpg" />
  </a>
  <a href="http://alloyui.com/image-viewer/img/4-large.jpg" title="The real champion winners, Brazilian team!">
    <img class="picture" src="http://alloyui.com/image-viewer/img/4.jpg" />
  </a>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-image-viewer',
  function(Y) {
    new Y.ImageViewer(
      {
        caption: 'Liferay Champion Soccer',
        captionFromTitle: true,
        centered: true,
        imageAnim: {
         duration: 1,
         easing: 'easeIn'
        },
        intervalTime: 2,
        links: '#myGallery a',
        playing: true,
        preloadAllImages: true,
        preloadNeighborImages: true,
        showInfo: true,
        showPlayer: true,
        zIndex: 1
      }
    ).render();
  }
);
```

</article>
