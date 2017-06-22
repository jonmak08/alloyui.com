---
title: Video
description: Creates an interactive HTML5 video player with fallback Flash video player.
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

Then initialize AlloyUI and load the Video module.

```javascript
YUI().use(
  'aui-video',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element:

```xml
<div id="myVideo"></div>
```

Now create a new instance of the Video component by setting `contentBox` to our HTML element's selector. Then, we'll pass the `url` parameter our video file's url. Finally, let's render it!

```javascript
YUI().use(
  'aui-video',
  function(Y) {
    new Y.Video(
      {
        contentBox: '#myVideo',
        url: 'http://alloyui.com/video/movie.mp4'
      }
    ).render();
  }
);
```

<div class="alert alert-info">
  <strong>Note:</strong> you could also use <code>boundingBox</code>, instead of <code>contentBox</code>, to initialize.<br>
  <a href="https://github.com/liferay/alloy-ui/wiki/FAQs">Read more about the differences between them</a>.
</div>

</article>

<article id="3">

## Configuring Video

There are some other optional parameters that you can pass to your Video instance.

For example, you can specify the Video's `width` and `height` by passing integer values. These values will become inline width and height pixel values.

```javascript
YUI().use(
  'aui-video',
  function(Y) {
    new Y.Video(
      {
        contentBox: '#myVideo',
        height: 360,
        url: 'http://alloyui.com/video/movie.mp4',
        width: 640
      }
    ).render();
  }
);
```

If you want to load a poster image in the Video player before the user begins playing the video, pass the image url using the `poster` parameter.

```javascript
YUI().use(
  'aui-video',
  function(Y) {
    new Y.Video(
      {
        contentBox: '#myVideo',
        height: 360,
        poster: 'assets/myPosterImg.jpg',
        url: 'http://alloyui.com/video/movie.mp4',
        width: 640
      }
    ).render();
  }
);
```

Video component supports Ogg Theora and Ogg Vorbis formatted media files as well. If you want to use one of the supported Ogg formats, pass the Ogg file url using the `oggUrl` parameter.

```javascript
YUI().use(
  'aui-video',
  function(Y) {
    new Y.Video(
      {
        contentBox: '#myVideo',
        ogvUrl: 'http://alloyui.com/video/movie.ogg'
      }
    ).render();
  }
);
```

<div class="alert alert-info">
  <strong>Note:</strong> Ogg files will only play in browsers that support the Ogg codec format.
</div>

You can even play non-supported formats in other browsers with the fallback Flash video player. For example, you can play .mp4 files in Firefox by using the `swfUrl` parameter to play the Flash video.

```javascript
YUI().use(
  'aui-video',
  function(Y) {
    new Y.Video(
      {
        contentBox: '#myVideo',
        swfUrl: 'http://videos.liferay.com/common/player.swf',
        url: 'http://videos.liferay.com/webinars/2010-08-11.mp4'
      }
    ).render();
  }
);
```

<div class="alert alert-success">
	For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-tooltip.html" target="_blank">API Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="myVideo1"></div>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-video',
  function(Y) {
    new Y.Video(
      {
        boundingBox: '#myVideo1',
        ogvUrl: 'http://alloyui.com/video/movie.ogg',
        url: 'http://alloyui.com/video/movie.mp4'
      }
    ).render();
  }
);
{/literal}
</script>

##### HTML

```xml
<div id="myVideo1"></div>
```

##### JavaScript

```javascript
YUI().use(
  'aui-video',
  function(Y) {
    new Y.Video(
      {
        boundingBox: '#myVideo',
        ogvUrl: 'http://alloyui.com/video/movie.ogg',
        url: 'http://alloyui.com/video/movie.mp4'
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example

<div id="myVideo2"></div>
<br>
<a href="#" class="btn btn-success" id="play-btn">Play</a>
<a href="#" class="btn btn-danger" id="pause-btn">Pause</a>
<a href="#" class="btn btn-info" id="change-video-btn">Change video</a>
<br>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-video',
  function(Y) {
    var video = new Y.Video(
      {
        boundingBox: '#myVideo2',
        fixedAttributes: {
          allowfullscreen: 'true'
        },
        height: 368,
        ogvUrl: 'http://videos.liferay.com/lifecasts/portal/6.0/106.ogv',
        poster: 'http://alloyui.com/video/poster.png',
        swfUrl: 'http://videos.liferay.com/common/player.swf',
        url: 'http://videos.liferay.com/webinars/2010-08-11.mp4',
        width: 640
      }
    ).render();
    Y.one('#play-btn').on(
      'click',
      function(e) {
        e.preventDefault();
        video.play();
      }
    );
    Y.one('#pause-btn').on(
      'click',
      function(e) {
        e.preventDefault();
        video.pause();
      }
    );
    Y.one('#change-video-btn').on(
      'click',
      function(e) {
        e.preventDefault();
        video.pause();
        video.set('ogvUrl', 'http://alloyui.com/video/movie.ogv');
        video.set('url', 'http://alloyui.com/video/movie.mp4');
        video.load();
        video.play();
      }
    );
  }
);
{/literal}
</script>

##### HTML

```xml
<div id="myVideo"></div>
<br>
<a href="#" class="btn btn-success" id="play-btn">Play</a>
<a href="#" class="btn btn-danger" id="pause-btn">Pause</a>
<a href="#" class="btn btn-info" id="change-video-btn">Change video</a>
```

##### JavaScript

```javascript
YUI().use(
  'aui-video',
  function(Y) {
    var video = new Y.Video(
      {
        boundingBox: '#myVideo',
        fixedAttributes: {
          allowfullscreen: 'true'
        },
        height: 368,
        ogvUrl: 'http://videos.liferay.com/lifecasts/portal/6.0/106.ogv',
        poster: 'http://alloyui.com/video/poster.png',
        swfUrl: 'http://videos.liferay.com/common/player.swf',
        url: 'http://videos.liferay.com/webinars/2010-08-11.mp4',
        width: 640
      }
    ).render();

    Y.one('#play-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        video.play();
      }
    );

    Y.one('#pause-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        video.pause();
      }
    );

    Y.one('#change-video-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        video.pause();
        video.set('ogvUrl', 'http://alloyui.com/video/movie.ogv');
        video.set('url', 'http://alloyui.com/video/movie.mp4');
        video.load();
        video.play();
      }
    );
  }
);
```

</article>