---
title: Scrollspy
description: Allows updating of navigation targets based on scroll position.
layout: "examples"
weight: 100
---

###### {$page.description}

- [Getting Started](#1)
- [Using {$page.title}](#2)
- [Configuring {$page.title}](#3)
- [Basic Example](#4)

<article id="1">

## Getting Started

First load the seed and CSS files, if you haven't yet.

```xml
<script src="http://cdn.alloyui.com/3.0.1/aui/aui-min.js"></script>
<link href="http://cdn.alloyui.com/3.0.1/aui-css/css/bootstrap.min.css" rel="stylesheet"></link>
```

Then initialize AlloyUI and load the Scrollspy module.

```javascript
YUI().use(
  'aui-scrollspy',
  function(Y) {
    // code goes here
  }
);
```

</article>

<article id="2">

## Using {$page.title}

Start by adding the markup that you would like to spy:

```xml
<div id="navbar" class="navbar navbar-default">
  <ul class="nav navbar-nav">
    <li><a href="#first">First</a></li>
    <li><a href="#second">Second</a></li>
    <li><a href="#third">Third</a></li>
  </ul>
</div>

<div id="scrollNode" style="overflow-y: scroll; height: 300px">
  <h4 id="first">First</h4>
  <p>Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo.</p>

  <h4 id="second">Second</h4>
  <p>Pri ea diam persius dissentias, simul assentior ut sed. An illum hendrerit ius, pri aeterno nominati delicata at. Usu fugit facer et, nec in vivendo appellantur interpretaris. Petentium euripidis te vim, ex minimum appareat eam. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo.</p>

  <h4 id="third">Third</h4>
  <p>Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo.</p>
</div>
```

Next, create an instance of scrollspy and target the appropriate elements. Navigation elements in the `target` will change as the user scrolls the `scrollNode`:

```javascript
YUI().use(
  'aui-scrollspy',
  function(Y) {
    new Y.Scrollspy(
      {
        scrollNode: '#scrollNode',
        target: '#navbar'
      }
    );
  }
);
```

</article>

<article id="3">

## Configuring {$page.title}

You can also adjust the pixel `offset` when calculating the scroll position:

```javascript
YUI().use(
  'aui-scrollspy',
  function(Y) {
    new Y.Scrollspy(
      {
        offset: 50,
        scrollNode: '#scrollNode',
        target: '#target'
      }
    );
  }
);
```

<div class="alert alert-success">
For more information about configuration, check out our <a href="http://alloyui.com/api/modules/aui-scrollspy.html" target="_blank"> Api Docs</a>.
</div>

</article>

<article id="4">

## Basic Example

<div id="myNavbar" class="navbar navbar-default">
  <ul class="nav navbar-nav">
    <li><a href="#first">First</a></li>
    <li><a href="#second">Second</a></li>
    <li><a href="#third">Third</a></li>
  </ul>
</div>

<div id="myScrollNode" style="overflow-y: scroll; height: 300px">
  <h4 id="first">First</h4>
  <p>Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo.</p>

  <h4 id="second">Second</h4>
  <p>Pri ea diam persius dissentias, simul assentior ut sed. An illum hendrerit ius, pri aeterno nominati delicata at. Usu fugit facer et, nec in vivendo appellantur interpretaris. Petentium euripidis te vim, ex minimum appareat eam. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo.</p>

  <h4 id="third">Third</h4>
  <p>Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Pri ea diam persius dissentias, simul assentior ut sed. An illum hendrerit ius, pri aeterno nominati delicata at. Usu fugit facer et, nec in vivendo appellantur interpretaris. Petentium euripidis te vim, ex minimum appareat eam. Etiam nulla eruditi eu quo, facer postulant an mea.</p>
</div>

<script type="text/javascript">
{literal}
  YUI().use(
    'aui-scrollspy',
    function(Y) {
      new Y.Scrollspy(
        {
          scrollNode: '#myScrollNode',
          target: '#myNavbar'
        }
      );
    }
  );
{/literal}
</script>
<br>

##### HTML:
```xml
<div id="myNavbar" class="navbar navbar-default">
  <ul class="nav navbar-nav">
    <li><a href="#first">First</a></li>
    <li><a href="#second">Second</a></li>
    <li><a href="#third">Third</a></li>
  </ul>
</div>

<div id="myScrollNode" style="overflow-y: scroll; height: 300px">
  <h4 id="first">First</h4>
  <p>Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo.</p>

  <h4 id="second">Second</h4>
  <p>Pri ea diam persius dissentias, simul assentior ut sed. An illum hendrerit ius, pri aeterno nominati delicata at. Usu fugit facer et, nec in vivendo appellantur interpretaris. Petentium euripidis te vim, ex minimum appareat eam. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo.</p>

  <h4 id="third">Third</h4>
  <p>Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Etiam nulla eruditi eu quo, facer postulant an mea. Eos at legimus deseruisse adipiscing. Amet iriure torquatos ex mei. Sumo purto propriae nam ne, eam ferri diceret deseruisse ea, cum ubique constituam suscipiantur an. Alii brute legendos ut pri, epicuri voluptaria contentiones an eos. Pri ut feugiat ornatus consequuntur, ubique euismod patrioque id duo. Pri ea diam persius dissentias, simul assentior ut sed. An illum hendrerit ius, pri aeterno nominati delicata at. Usu fugit facer et, nec in vivendo appellantur interpretaris. Petentium euripidis te vim, ex minimum appareat eam. Etiam nulla eruditi eu quo, facer postulant an mea.</p>
</div>
```

##### JavaScript:
```javascript
YUI().use(
  'aui-scrollspy',
  function(Y) {
    new Y.Scrollspy(
      {
        scrollNode: '#myScrollNode',
        target: '#myNavbar'
      }
    );
  }
);
```

</article>
