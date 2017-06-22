---
title: Color Picker
description: Create a dynamic color picker that allows users to select a specific color in many ways including a popover menu, inline values or a palette.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Configuring {$page.title}](#3)
- [Basic Example](#4)
- [HSV Palette Example](#5)
- [Popover Example](#6)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Color Picker submodule you want. There are several options available, including `aui-color-palette`, `aui-color-picker-popover`, `aui-hsv-palette`, `aui-hsva-palette`, and `aui-hsva-palette-modal`. Let's start with the popover version here.

```javascript
YUI().use(
  'aui-color-picker-popover',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Create an element to trigger a Color Picker Popover.

```xml
<label>Color trigger</label>
<input class="myColorPickerPopover" type="text">
```

Now, create a new instance of the Color Picker Popover component, define your `trigger`, and render it.

```javascript
YUI().use(
  'aui-color-picker-popover',
  function(Y) {
    new Y.ColorPickerPopover(
      {
        trigger: '.myColorPickerPopover'
      }
    ).render();
  }
);
```

</article>


<article id="3">

## Configuring {$page.title}

There are some other options that you can pass to your Color Picker isntance, such as the other submodules. These submodules are created a bit differently.

To use the `aui-color-palette`, create an HTML element to house the Color Picker.

```xml
<div id="myColorPalette"></div>
```

Load the correct submodule (`aui-color-palette` in this case), create a new instance of the Color Palette, and render it. This will give you a default palette with 10 options.

```javascript
YUI().use(
  'aui-color-palette',
  function(Y) {
    new Y.ColorPalette().render('#myColorPalette');
  }
);
```

In a Color Palette, you are also able to specify the exact colors to display using the `items` parameter. For example, this Color Palette will display two options: black and white.

```javascript
YUI().use(
  'aui-color-palette',
  function(Y) {
    new Y.ColorPalette({
      items: [ "#000000", "#FFFFFF" ]
    }).render('#myColorPalette');
  }
);
```

It is also possible to load the base of the Color Picker instead of the specific submodule.

```javascript
YUI().use(
  'aui-color-picker-base',
  function(Y) {
    new Y.ColorPalette({
      items: [ "#000000", "#FFFFFF" ]
    }).render('#myColorPalette');
  }
);
```

To use the HSV or HSVA Palette, create an HTML element to house the Color Picker.

##### HSV Palette:
```xml
<div id="myHsvPalette"></div>
```

##### HSVA Palette:
```xml
<div id="myHsvaPalette"></div>
```

Load the base submodule (the specific one would also work), create a new instance of the HSV or HSVA Palette, and render it.

##### HSV Palette:
```javascript
YUI().use(
  'aui-color-picker-base',
  function(Y) {
    new Y.HSVPalette().render('#myHsvPalette');
  }
);
```

##### HSVA Palette:
```javascript
YUI().use(
  'aui-color-picker-base',
  function(Y) {
    new Y.HSVPalette().render('#myHsvaPalette');
  }
);
```

For both of these, there are two additional options possible, `controls` and `selected`. `controls` can be used to hide or show a set of text boxes to specify the color in Hex, RGB, or HSVA values; by default they are shown. `selected` is used to set the default color that is selected when the Color Picker is first created. These can be set as follows.

##### HSV Palette:
```javascript
YUI().use(
  'aui-color-picker-base',
  function(Y) {
    new Y.HSVPalette({
      controls: false,
      selected: '00FF00'
    }).render('#myHsvPalette');
  }
);
```

##### HSVA Palette:
```javascript
YUI().use(
  'aui-color-picker-base',
  function(Y) {
    new Y.HSVAPalette({
      controls: false,
      selected: '0000FF00'
    }).render('#myHsvaPalette');
  }
);
```

Implementing a HSVA Palette Modal is a very similar process. First, create an HTML element for the Color Picker.

```xml
<div id="myHsvaPaletteModal"></div>
```

Then, create a new instance of the HSVA Palette Modal and render it.

```javascript
YUI().use(
  'aui-color-picker-base',
  function(Y) {
    new Y.HSVAPaletteModal().render('#myHsvaPaletteModal');
  }
);
```

By default, the HSVA Palette Modal is really an HSV Palette, because there is no alpha channel (which sets transparency). However, it is possible to activate the alpha channel by using the `hsv` attribute.

```javascript
YUI().use(
  'aui-color-picker-base',
  function(Y) {
    new Y.HSVAPaletteModal({
      hsv: {
        alpha: true
      }
    }).render('#myHsvaPaletteModal');
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-color-picker.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="myColorPalette"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-color-palette',
    function(Y) {
      new Y.ColorPalette().render('#myColorPalette');
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myColorPalette"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-color-palette',
  function(Y) {
    new Y.ColorPalette().render('#myColorPalette');
  }
);
```

</article>

<article id="5">

## HSV Palette Example

<div id="myHsvPalette" style="padding-left: 10px;"></div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-color-picker-base',
    function(Y) {
      new Y.HSVPalette().render('#myHsvPalette');
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myHsvPalette" style="padding-left: 10px;"></div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-color-picker-base',
  function(Y) {
    new Y.HSVPalette().render('#myHsvPalette');
  }
);
```

</article>

<article id="5">

## Popover Example

<input id="myColorPickerPopover" class="form-control" type="text" value="Click to select a color">

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-color-picker-popover',
    function(Y) {
      var colorPicker = new Y.ColorPickerPopover(
        {
          trigger: '#myColorPickerPopover',
          zIndex: 2
        }
      ).render();
      colorPicker.on('select',
        function(event) {
          event.trigger.setStyle('backgroundColor', event.color);
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<input id="myColorPickerPopover" class="form-control" type="text" value="Click to select a color">
```

##### JavaScript:
```javascript
YUI().use(
  'aui-color-picker-popover',
  function(Y) {
    var colorPicker = new Y.ColorPickerPopover(
      {
        trigger: '#myColorPickerPopover',
        zIndex: 2
      }
    ).render();

    colorPicker.on('select',
      function(event) {
        event.trigger.setStyle('backgroundColor', event.color);
      }
    );
  }
);
```

</article>
