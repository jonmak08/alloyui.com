---
title: Audio
description: Creates an interactive audio player in HTML5 with fallback for old browsers.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Basic Example](#3)
- [Real World Example](#4)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Audio module.

```javascript
YUI().use(
  'aui-audio',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element.

```xml
<div id="myAudio"></div>
```

Set `boundingBox` to the newly created element, set `url` to your chosen audio file, and render it!

```javascript
YUI().use(
  'aui-audio',
  function(Y) {
    new Y.Audio(
      {
        boundingBox: '#myAudio',
        url: 'http://alloyui.com/audio/zelda.mp3'
      }
    ).render();
  }
);
```

Some browsers have some problems with HTML5 audio codecs and simply don't execute certain audio extensions. Firefox, for example, only executes OGG files. That's why we recommend to specify the `oggUrl` parameter too.

```javascript
YUI().use(
  'aui-audio',
  function(Y) {
    new Y.Audio(
      {
        boundingBox: '#myAudio',
        url: 'http://alloyui.com/audio/zelda.mp3',
        oggUrl: 'http://alloyui.com/audio/zelda.ogg'
      }
    ).render();
  }
);
```

<div class="alert alert-success">
	For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-audio.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="3">

## Basic Example

<div id="auiAudio"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-audio',
    function(Y) {
      new Y.Audio(
        {
          boundingBox: '#auiAudio',
          url: 'http://alloyui.com/audio/zelda.mp3',
          oggUrl: 'http://alloyui.com/audio/zelda.ogg'
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="auiAudio"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-audio',
  function(Y) {
    new Y.Audio(
      {
        boundingBox: '#auiAudio',
        url: 'http://alloyui.com/audio/zelda.mp3',
        oggUrl: 'http://alloyui.com/audio/zelda.ogg'
      }
    ).render();
  }
);
```

</article>

<article id="4">

## Real World Example

<div id="myAudio"></div>
<br>
<a href="#" class="btn btn-success" id="play-btn">Play</a>
<a href="#" class="btn btn-danger" id="pause-btn">Pause</a>
<a href="#" class="btn btn-info" id="change-audio-btn">Change Audio</a>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-audio',
    function(Y) {
      var audio = new Y.Audio(
        {
          boundingBox: '#myAudio',
          url: 'http://alloyui.com/audio/zelda.mp3',
          oggUrl: 'http://alloyui.com/audio/zelda.ogg'
        }
      ).render();
      Y.one('#play-btn').on(
        'click',
        function(e) {
          e.preventDefault();
          audio.play();
        }
      );
      Y.one('#pause-btn').on(
        'click',
        function(e) {
          e.preventDefault();
          audio.pause();
        }
      );
      Y.one('#change-audio-btn').on(
        'click',
        function(e) {
          e.preventDefault();
          audio.pause();
          audio.set('url', 'http://alloyui.com/audio/bc.mp3');
          audio.set('oggUrl', 'http://alloyui.com/audio/bc.ogg');
          audio.load();
          audio.play();
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
<div id="myAudio"></div>
<br>
<a href="#" class="btn btn-success" id="play-btn">Play</a>
<a href="#" class="btn btn-danger" id="pause-btn">Pause</a>
<a href="#" class="btn btn-info" id="change-audio-btn">Change Audio</a>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-audio',
  function(Y) {
    var audio = new Y.Audio(
      {
        boundingBox: '#myAudio',
        url: 'http://alloyui.com/audio/zelda.mp3',
        oggUrl: 'http://alloyui.com/audio/zelda.ogg'
      }
    ).render();

    Y.one('#play-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        audio.play();
      }
    );

    Y.one('#pause-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        audio.pause();
      }
    );

    Y.one('#change-audio-btn').on(
      'click',
      function(e) {
        e.preventDefault();

        audio.pause();
        audio.set('url', 'http://alloyui.com/audio/bc.mp3');
        audio.set('oggUrl', 'http://alloyui.com/audio/bc.ogg');
        audio.load();
        audio.play();
      }
    );
  }
);
```

</article>
