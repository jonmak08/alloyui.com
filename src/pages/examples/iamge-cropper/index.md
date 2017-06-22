---
title: Image Cropper
description: Provides a draggable/resizable cropper widget to crop image sizes.
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

Then initialize AlloyUI and load the Image Cropper module.

```javascript
YUI().use(
  'aui-image-cropper',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an HTML element with the desired crop image nested inside:

```xml
<div id="myImageCropper">
  <img id="myImage" src="http://alloyui.com/image-cropper/img/crop-image.jpg" />
</div>
```

Now create a new instance of Image Cropper component by setting `srcNode` to our image element. Finally, let's render it!

```javascript
YUI().use(
  'aui-image-cropper',
  function(Y) {
    new Y.ImageCropper(
      {
        srcNode: "#myImage"
      }
    ).render();
  }
);
```

</article>


<article id="3">

## Configuring {$page.title}

There are some other optional parameters that you can pass to your Image Cropper instance.

For example, you can turn of Cropper resizing by setting `resizable` to `false`. Also, you can prevent Image Cropper from moving by setting `movable` to `false`. And if you need to maintain a constant aspect ratio for Image Cropper, set `preserveRatio` to `true`.

```javascript
YUI().use(
  'aui-image-cropper',
  function(Y) {
    new Y.ImageCropper(
      {
        movable: false,
        preserveRatio: true,
        resizable: false,
        srcNode: "#myImage"
      }
    ).render();
  }
);
```

Setting `cropWidth` and `cropHeight` to integers will set the pixel width and height for the Image Cropper. Likewise, passing integers to `minWidth` and `minHeight` will set the minimum pixel width and height for the Image Cropper.

```javascript
YUI().use(
  'aui-image-cropper',
  function(Y) {
    new Y.ImageCropper(
      {
        cropHeight: 100,
        cropWidth: 100,
        minHeight: 50,
        minWidth: 50,
        srcNode: "#myImage"
      }
    ).render();
  }
);
```

Image Cropper's `region` property returns you the current crop region. To see crop region values update while you adjust Image Cropper, create an HTML element where you can store your region values, for example `#myCropSize`. Now bind the event handler after to `imageCropper` to execute on the `crop` event. The event handler will set the HTML of `#myCropSize` with the updated crop region's width and height.

```javascript
YUI().use(
  'aui-image-cropper',
  function(Y) {
    var imageCropper = new Y.ImageCropper(
      {
        srcNode: "#myImage"
      }
    ).render();

    var cropSize = Y.one('#myCropSize');

    imageCropper.after(
      'crop',
      function(event) {
        var cropRegion = imageCropper.get('region');
        cropSize.html('Width: ' + cropRegion.width + ' Height: ' + cropRegion.height);
      }
    );
  }
);
```

If you want to output your cropped image to another node, you can also use Image Cropper `region` to restyle the cropped image. Using an event handler that is triggered by the `click` event and bound to the `cropImgButton` button, we can use the `setStyles` method to apply the crop region values. This will update our `croppedImage` node to the current Image Cropper region each time we click `cropImgButton`. Finally, let's show the cropped image with the `show` method.

<div class="alert alert-info">
  <strong>Note: </strong>
  be sure to add the classes `cropped-image` and `aui-helper-hidden` to your `#myCroppedImage` element so that Image Cropper handles the image crop properly.
</div>

```javascript
YUI().use(
  'aui-image-cropper',
  function(Y) {
    var imageCropper = new Y.ImageCropper(
      {
        srcNode: "#myImage"
      }
    ).render();

    var image = Y.one('#myImage');
    var cropImgButton = Y.one('#myCropButton');
    var croppedImage = Y.one('#myCroppedImage');

    cropImgButton.on(
      'click',
      function(event) {
        var cropRegion = imageCropper.get('region');
        croppedImage.setStyles(
          {
            'backgroundPosition': (-cropRegion.x) + 'px ' + (-cropRegion.y) + 'px',
            height: cropRegion.height,
            width: cropRegion.width
          }
        );
      }
    );

    croppedImage.show();
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-image-cropper.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<img id="myImage" src="https://github.com/liferay/alloyui.com/blob/master/src/files/image-cropper/img/crop-image.jpg?raw=true" />

<style>
{literal}
  .image-cropper-overlay {
  	z-index: 1;
  }
  .image-cropper .image-cropper-crop {
  	z-index: 2;
  }
  .column {
  	width: 100%;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-image-cropper',
    function(Y) {
      new Y.ImageCropper(
        {
          cropHeight: 200,
          cropWidth: 200,
          srcNode: '#myImage',
          x: 50,
          y: 50
        }
      ).render();
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<img id="myImage" src="http://alloyui.com/image-cropper/img/crop-image.jpg" />
```

##### JavaScript:
```javascript
YUI().use(
  'aui-image-cropper',
  function(Y) {
    new Y.ImageCropper(
      {
        cropHeight: 200,
        cropWidth: 200,
        srcNode: '#myImage',
        x: 50,
        y: 50
      }
    ).render();
  }
);
```

</article>

<article id="5">

## Real World Example

<button id="cropLink" class="btn btn-primary">Crop Image to x: 45, y: 5, width: 390, height: 125</button>

<div class="layout image-cropper">
  <div class="column w50">
    <div class="column-content">
      <img id="image" src="https://github.com/liferay/alloyui.com/blob/master/src/files/image-cropper/img/crop-image.jpg?raw=true" />
    </div>
  </div>
  <div id="cropped-view" class="column w50">
    <div class="column-content cropped-output">
      <div class="cropped-image helper-hidden" id="croppedImage"></div>
      <div class="status helper-hidden" id="status"></div>
    </div>
  </div>
</div>

<style>
{literal}
  .image-cropper {
  	height: auto;
  	width: 100%;
  }
  .aui-column {
  	float: none;
  	width: 100%;
  }
  #status table {
  	padding-left: 3em;
  }
  #status tr > td:first-child {
  	font-weight: bold;
  	text-align: right;
  }
  #image {
  	width: 500px;
  }
  #cropped-view {
    left: 40px;
  }
  .aui-image-cropper-overlay {
  	z-index: 1;
  }
  .aui-image-cropper .aui-image-cropper-crop {
  	z-index: 2;
  }
  .cropped-image {
  	background: url(https://github.com/liferay/alloyui.com/blob/master/src/files/image-cropper/img/crop-image.jpg?raw=true) no-repeat;
  	display: inline-block;
  	border: 10px solid #111;
  	margin: 20px 0;
  	position: relative;
  	right: 40px;
  }
  .cropped-output {
  	text-align: center;
  }
  #cropped-view {
  	float: none;
  	position: relative;
  	right: 200px;
  }
  .status {
  	position: absolute;
  	background-color: #FFF;
  	border: 1px solid #999;
  	top: 0;
  	right: 0;
  	padding: 5px;
  }
  .x, .y, .width, .height {
  	position: absolute;
  	background: #fff;
  	border: 1px solid #ccc;
  	padding: 3px;
  	border-radius: 4px;
  	white-space: nowrap;
  }
  .x {
  	bottom: 100%;
  	right: 100%;
  }
  .y {
  	right: 100%;
  	top: 100%;
  }
  .width {
  	bottom: 100%;
  	left: 100%;
  }
  .height {
  	top: 100%;
  	left: 100%;
  }
{/literal}
</style>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-image-cropper',
    function(Y) {
      var imageCropper = new Y.ImageCropper(
        {
          srcNode: '#image',
          x: 100,
          y: 100
        }
      ).render();
      var statusTPL = '<strong class="x">x: {x}</strong><strong class="y">y: {y}</strong><strong class="height">height: {height}</strong><strong class="width">width: {width}</strong>';
      var updateImage = function() {
        var cropRegion = imageCropper.get('region');
        croppedImage.setStyles(
          {
            'backgroundPosition': (-cropRegion.x) + 'px ' + (-cropRegion.y) + 'px',
            height: cropRegion.height,
            width: cropRegion.width
          }
        );
        croppedImage.html(Y.Lang.sub(statusTPL, cropRegion));
      };
      imageCropper.after(
        'crop',
        function(event) {
          updateImage();
        }
      );
      var croppedImage = Y.one('#croppedImage');
      var croppedStatus = Y.one('#croppedStatus');
      croppedImage.show();
      updateImage();
      Y.one('#cropLink').on(
        'click',
        function (event) {
          imageCropper.setAttrs(
            {
              cropHeight: 125,
              cropWidth: 390,
              x: 45,
              y: 5
            }
          );
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<button id="cropLink" class="btn btn-primary">Crop Image to x: 45, y: 5, width: 390, height: 125</button>

<div class="layout image-cropper">
  <div class="column w50">
    <div class="column-content">
      <img id="image" src="http://alloyui.com/image-cropper/img/crop-image.jpg" />
    </div>
  </div>
  <div id="cropped-view" class="column w50">
    <div class="column-content cropped-output">
      <div class="cropped-image helper-hidden" id="croppedImage"></div>
      <div class="status helper-hidden" id="status"></div>
    </div>
  </div>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-image-cropper',
  function(Y) {
    var imageCropper = new Y.ImageCropper(
      {
        srcNode: '#image',
        x: 100,
        y: 100
      }
    ).render();

    var statusTPL = '<strong class="x">x: {x}</strong><strong class="y">y: {y}</strong><strong class="height">height: {height}</strong><strong class="width">width: {width}</strong>';

    var updateImage = function() {
      var cropRegion = imageCropper.get('region');

      croppedImage.setStyles(
        {
          'backgroundPosition': (-cropRegion.x) + 'px ' + (-cropRegion.y) + 'px',
          height: cropRegion.height,
          width: cropRegion.width
        }
      );

      croppedImage.html(Y.Lang.sub(statusTPL, cropRegion));
    };

    imageCropper.after(
      'crop',
      function(event) {
        updateImage();
      }
    );

    var croppedImage = Y.one('#croppedImage');

    var croppedStatus = Y.one('#croppedStatus');

    croppedImage.show();

    updateImage();

    Y.one('#cropLink').on(
      'click',
      function (event) {
        imageCropper.setAttrs(
          {
            cropHeight: 125,
            cropWidth: 390,
            x: 45,
            y: 5
          }
        );
      }
    );
  }
);
```

</article>
