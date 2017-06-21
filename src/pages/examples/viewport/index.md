---
title: Viewport
description: Provides a cross-browser method of adapting web design to display size.
layout: "examples"
weight: 100
---

<style>
.view-lt320 .myViewport, .view-320 .myViewport {lb}
    width: 54px;
    height: 105px;
    background: url(http://www.alloyui.com/viewport/img/phone_portrait.png) no-repeat;
{rb}
.view-480 .myViewport {lb}
    width: 102px;
    height: 52px;
    background: url(http://www.alloyui.com/viewport/img/phone_landscape.png) no-repeat;
{rb}
.view-720 .myViewport {lb}
    width: 114px;
    height: 145px;
    background: url(http://www.alloyui.com/viewport/img/tablet_portrait.png) no-repeat;
{rb}
.view-960 .myViewport {lb}
    width: 207px;
    height: 167px;
    background: url(http://www.alloyui.com/viewport/img/desktop.png) no-repeat;
{rb}
.myViewport {lb}
    margin-top: 60px;
    -webkit-transition: 0.5s ease-in;
    -moz-transition: 0.5s ease-in;
    -o-transition: 0.5s ease-in;
    -ms-transition: 0.5s ease-in;
    transition: 0.5s ease-in;
{rb}
.myViewport:after {lb}
    background: #333;
    border-radius: 3px;
    color: #fff;
    font-size: 1.5em;
    margin-top: -50px;
    position: absolute;
    padding: 10px;
    text-shadow: -1px -1px #000;
{rb}
.view-lt320 .myViewport:after, .view-320 .myViewport:after {lb}
    content: 'Smart Phone (320px)';
{rb}
.view-480 .myViewport:after {lb}
    content: 'Smart Phone Landscape (480px)';
{rb}
.view-720 .myViewport:after {lb}
    content: 'Tablet (720px)';
{rb}
.view-960 .myViewport:after {lb}
    content: 'Desktop (>= 960px)';
{rb}
.view-lt320 .myViewport, .view-320 .myViewport {lb}
    background: url(http://www.alloyui.com/viewport/img/phone_portrait.png) no-repeat;
    height: 105px;
    width: 54px;
{rb}
.view-480 .myViewport {lb}
    background: url(http://www.alloyui.com/viewport/img/phone_landscape.png) no-repeat;
    height: 52px;
    width: 102px;
{rb}
.view-720 .myViewport {lb}
    background: url(http://www.alloyui.com/viewport/img/tablet_portrait.png) no-repeat;
    height: 145px;
    width: 114px;
{rb}
.view-960 .myViewport {lb}
    background: url(http://www.alloyui.com/viewport/img/desktop.png) no-repeat;
    height: 167px;
    width: 207px;
{rb}
</style>

###### {$page.description}

- [What Does Viewport Do, Exactly?](#1)
- [Getting Started](#2)
- [Using {$page.title}](#3)
- [Basic Example](#4)

<article id="1">

## What Does Viewport Do, Exactly?

Good question! I'm so glad you asked.

Viewport allows you to customize your CSS for the four most commonly used page widths: 960px, 720px, 480px, and 320px (960 for desktops and tablets in landscape mode, 720 for tablets in portrait mode, 480 for smart phones in landscape mode, and 320 for smart phones in portrait mode).

It does this through the addition of custom classes that you can then select in your stylesheets. Much like CSS Media Queries, this allows you to change your page's styling based on the width of the browser, but unlike Media Queries, Viewport is compatible with all browsers (_\*cough\*_ IE) and allows for different target devices to share the same CSS. And when is saving code a bad idea?

Well! Now that it's a bit more clear why you might want to use it, let's look at how you can make it happen.

</article>

<article id="2">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Viewport module.

```javascript
YUI().use(
  'aui-viewport'
);
```

And that's it! That's all the javascript you'll have to write to use the viewport module.

</article>

<article id="3">

## Using {$page.title}

After you've included that one line of javascript, the rest of your interaction with the viewport module will come through CSS, using these custom classes that have been created for you:

```css
.view-960
.view-720
.view-480
.view-320
```

These four classes form the base of the viewport functionality. However, eight more classes are added to make things a bit easier when you need to code for a larger range of browser sizes:

```css
.view-gt960, .view-lt960
.view-gt720, .view-lt720
.view-gt480, .view-lt480
.view-gt320, .view-lt320
```

Once `aui-viewport` is initialized, every time you load the page or resize your browser the appropriate classes will be applied to the `<html>` element of your page, ready for use in your stylesheet.

All that needs to be done from here is to use these classes to apply the necessary changes to your stylesheet. It could include something like this:

```css
.view-gt720 {
  font-size: 16px;
}

.view-lt720 {
  font-size: 14px;
}

.view-lt720 img, .view-lt720 video {
  display: none;
}
```

and so forth.

<div class="alert alert-success">
	For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-tooltip.html" target="_blank">API Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

Resize your browser's width and see what happens :)

<div class="myViewport"></div>

<script type="text/javascript">
{literal}
YUI().use(
  'aui-viewport'
);
{/literal}
</script>

##### HTML

```xml
<div class="myViewport"></div>
```

##### JavaScript

```javascript
YUI().use(
  'aui-viewport'
);
```

#### CSS

```css
.view-lt320 .myViewport,
.view-320 .myViewport {
    width: 54px;
    height: 105px;
    background: url(../img/phone_portrait.png) no-repeat;
}
.view-480 .myViewport {
    width: 102px;
    height: 52px;
    background: url(../img/phone_landscape.png) no-repeat;
}
.view-720 .myViewport {
    width: 114px;
    height: 145px;
    background: url(../img/tablet_portrait.png) no-repeat;
}
.view-960 .myViewport {
    width: 207px;
    height: 167px;
    background: url(../img/desktop.png) no-repeat;
}
```

</article>
